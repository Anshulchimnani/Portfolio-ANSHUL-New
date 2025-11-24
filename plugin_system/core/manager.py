"""Plugin manager for loading and managing plugins"""

import importlib
import importlib.util
import inspect
import logging
import os
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Type

from .plugin import Plugin, PluginMetadata


class PluginManager:
    """
    Manages plugin loading, registration, and execution.
    """

    def __init__(self, plugin_dirs: Optional[List[str]] = None):
        """
        Initialize the plugin manager.

        Args:
            plugin_dirs: List of directories to search for plugins
        """
        self.logger = logging.getLogger(__name__)
        self._plugins: Dict[str, Plugin] = {}
        self._plugin_dirs = plugin_dirs or []
        self._metadata_cache: Dict[str, PluginMetadata] = {}

    def add_plugin_directory(self, directory: str) -> None:
        """
        Add a directory to search for plugins.

        Args:
            directory: Path to plugin directory
        """
        if directory not in self._plugin_dirs:
            self._plugin_dirs.append(directory)
            self.logger.info(f"Added plugin directory: {directory}")

    def discover_plugins(self) -> List[str]:
        """
        Discover all plugins in the registered directories.

        Returns:
            List of discovered plugin names
        """
        discovered = []

        for plugin_dir in self._plugin_dirs:
            if not os.path.exists(plugin_dir):
                self.logger.warning(f"Plugin directory does not exist: {plugin_dir}")
                continue

            path = Path(plugin_dir)

            # Look for subdirectories containing plugin.py
            for subdir in path.iterdir():
                if subdir.is_dir() and not subdir.name.startswith('_'):
                    plugin_file = subdir / "plugin.py"
                    if plugin_file.exists():
                        discovered.append(subdir.name)
                        self.logger.info(f"Discovered plugin: {subdir.name}")

        return discovered

    def load_plugin(self, plugin_name: str, plugin_class: Optional[Type[Plugin]] = None) -> bool:
        """
        Load a plugin by name or class.

        Args:
            plugin_name: Name of the plugin
            plugin_class: Optional plugin class to instantiate

        Returns:
            bool: True if loaded successfully
        """
        try:
            if plugin_class is None:
                # Try to import from plugin directories
                plugin_class = self._import_plugin_class(plugin_name)

            if plugin_class is None:
                self.logger.error(f"Could not find plugin class for: {plugin_name}")
                return False

            # Instantiate the plugin
            plugin_instance = plugin_class()

            # Validate it's a Plugin subclass
            if not isinstance(plugin_instance, Plugin):
                self.logger.error(f"{plugin_name} is not a valid Plugin subclass")
                return False

            # Get metadata
            metadata = plugin_instance.get_metadata()

            # Register the plugin
            self._plugins[plugin_name] = plugin_instance
            self._metadata_cache[plugin_name] = metadata

            self.logger.info(f"Loaded plugin: {plugin_name} v{metadata.version}")
            return True

        except Exception as e:
            self.logger.error(f"Failed to load plugin {plugin_name}: {e}")
            return False

    def _import_plugin_class(self, plugin_name: str) -> Optional[Type[Plugin]]:
        """
        Import a plugin class from plugin directories.

        Args:
            plugin_name: Name of the plugin

        Returns:
            Plugin class or None
        """
        for plugin_dir in self._plugin_dirs:
            plugin_path = Path(plugin_dir) / plugin_name / "plugin.py"

            if plugin_path.exists():
                try:
                    # Import the module
                    spec = importlib.util.spec_from_file_location(
                        f"plugins.{plugin_name}",
                        plugin_path
                    )
                    module = importlib.util.module_from_spec(spec)
                    sys.modules[f"plugins.{plugin_name}"] = module
                    spec.loader.exec_module(module)

                    # Find the Plugin subclass
                    for name, obj in inspect.getmembers(module):
                        if (inspect.isclass(obj) and
                            issubclass(obj, Plugin) and
                            obj is not Plugin):
                            return obj

                except Exception as e:
                    self.logger.error(f"Error importing {plugin_name}: {e}")

        return None

    def initialize_plugin(self, plugin_name: str, config: Dict[str, Any] = None) -> bool:
        """
        Initialize a plugin.

        Args:
            plugin_name: Name of the plugin
            config: Optional configuration dictionary

        Returns:
            bool: True if initialized successfully
        """
        if plugin_name not in self._plugins:
            self.logger.error(f"Plugin not loaded: {plugin_name}")
            return False

        plugin = self._plugins[plugin_name]

        try:
            if plugin.initialize(config or {}):
                plugin.enable()
                plugin._initialized = True
                self.logger.info(f"Initialized plugin: {plugin_name}")
                return True
            else:
                self.logger.error(f"Plugin initialization failed: {plugin_name}")
                return False
        except Exception as e:
            self.logger.error(f"Error initializing {plugin_name}: {e}")
            return False

    def execute_plugin(self, plugin_name: str, *args, **kwargs) -> Any:
        """
        Execute a plugin's main functionality.

        Args:
            plugin_name: Name of the plugin
            *args: Positional arguments for the plugin
            **kwargs: Keyword arguments for the plugin

        Returns:
            Plugin execution result
        """
        if plugin_name not in self._plugins:
            raise ValueError(f"Plugin not loaded: {plugin_name}")

        plugin = self._plugins[plugin_name]

        if not plugin.is_enabled:
            raise RuntimeError(f"Plugin is not enabled: {plugin_name}")

        return plugin.execute(*args, **kwargs)

    def unload_plugin(self, plugin_name: str) -> bool:
        """
        Unload a plugin.

        Args:
            plugin_name: Name of the plugin

        Returns:
            bool: True if unloaded successfully
        """
        if plugin_name not in self._plugins:
            return False

        plugin = self._plugins[plugin_name]
        plugin.shutdown()
        del self._plugins[plugin_name]

        if plugin_name in self._metadata_cache:
            del self._metadata_cache[plugin_name]

        self.logger.info(f"Unloaded plugin: {plugin_name}")
        return True

    def get_plugin(self, plugin_name: str) -> Optional[Plugin]:
        """Get a plugin instance by name"""
        return self._plugins.get(plugin_name)

    def get_all_plugins(self) -> Dict[str, Plugin]:
        """Get all loaded plugins"""
        return self._plugins.copy()

    def get_plugin_metadata(self, plugin_name: str) -> Optional[PluginMetadata]:
        """Get metadata for a plugin"""
        return self._metadata_cache.get(plugin_name)

    def list_plugins(self) -> List[str]:
        """List all loaded plugin names"""
        return list(self._plugins.keys())
