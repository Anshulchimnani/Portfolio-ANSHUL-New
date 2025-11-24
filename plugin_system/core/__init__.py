"""Core plugin system components"""

from .plugin import Plugin, PluginMetadata
from .manager import PluginManager
from .hooks import HookManager

__all__ = ["Plugin", "PluginMetadata", "PluginManager", "HookManager"]
