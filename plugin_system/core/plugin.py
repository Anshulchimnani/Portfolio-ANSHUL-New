"""Base plugin class and metadata"""

from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Any, Dict, Optional


@dataclass
class PluginMetadata:
    """Metadata for a plugin"""
    name: str
    version: str
    author: str
    description: str
    dependencies: list[str] = None

    def __post_init__(self):
        if self.dependencies is None:
            self.dependencies = []


class Plugin(ABC):
    """
    Abstract base class for all plugins.

    All plugins must inherit from this class and implement the required methods.
    """

    def __init__(self):
        self._metadata: Optional[PluginMetadata] = None
        self._enabled = False
        self._initialized = False

    @abstractmethod
    def get_metadata(self) -> PluginMetadata:
        """
        Return plugin metadata.

        Returns:
            PluginMetadata: Plugin information
        """
        pass

    @abstractmethod
    def initialize(self, config: Dict[str, Any] = None) -> bool:
        """
        Initialize the plugin.

        Args:
            config: Optional configuration dictionary

        Returns:
            bool: True if initialization successful, False otherwise
        """
        pass

    @abstractmethod
    def execute(self, *args, **kwargs) -> Any:
        """
        Execute the plugin's main functionality.

        Args:
            *args: Positional arguments
            **kwargs: Keyword arguments

        Returns:
            Any: Plugin execution result
        """
        pass

    def shutdown(self) -> None:
        """
        Clean up plugin resources.

        Override this method to perform cleanup when the plugin is disabled.
        """
        self._enabled = False
        self._initialized = False

    def enable(self) -> None:
        """Enable the plugin"""
        self._enabled = True

    def disable(self) -> None:
        """Disable the plugin"""
        self._enabled = False

    @property
    def is_enabled(self) -> bool:
        """Check if plugin is enabled"""
        return self._enabled

    @property
    def is_initialized(self) -> bool:
        """Check if plugin is initialized"""
        return self._initialized

    def validate(self) -> tuple[bool, str]:
        """
        Validate the plugin configuration and state.

        Returns:
            tuple: (is_valid, error_message)
        """
        return True, ""
