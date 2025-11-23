"""
Plugin System - A flexible and extensible plugin architecture
"""

from .core.plugin import Plugin, PluginMetadata
from .core.manager import PluginManager
from .core.hooks import HookManager

__version__ = "1.0.0"
__all__ = ["Plugin", "PluginMetadata", "PluginManager", "HookManager"]
