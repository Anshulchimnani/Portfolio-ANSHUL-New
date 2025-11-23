"""Hook system for plugin event handling"""

from collections import defaultdict
from typing import Any, Callable, Dict, List
import logging


class HookManager:
    """
    Manages hooks that plugins can register to respond to events.
    """

    def __init__(self):
        self.logger = logging.getLogger(__name__)
        self._hooks: Dict[str, List[Callable]] = defaultdict(list)

    def register_hook(self, hook_name: str, callback: Callable) -> None:
        """
        Register a callback for a specific hook.

        Args:
            hook_name: Name of the hook
            callback: Function to call when hook is triggered
        """
        self._hooks[hook_name].append(callback)
        self.logger.debug(f"Registered hook: {hook_name}")

    def unregister_hook(self, hook_name: str, callback: Callable) -> bool:
        """
        Unregister a callback from a hook.

        Args:
            hook_name: Name of the hook
            callback: Function to unregister

        Returns:
            bool: True if callback was found and removed
        """
        if hook_name in self._hooks and callback in self._hooks[hook_name]:
            self._hooks[hook_name].remove(callback)
            self.logger.debug(f"Unregistered hook: {hook_name}")
            return True
        return False

    def trigger_hook(self, hook_name: str, *args, **kwargs) -> List[Any]:
        """
        Trigger all callbacks registered to a hook.

        Args:
            hook_name: Name of the hook to trigger
            *args: Positional arguments to pass to callbacks
            **kwargs: Keyword arguments to pass to callbacks

        Returns:
            List of results from all callbacks
        """
        results = []

        if hook_name in self._hooks:
            self.logger.debug(f"Triggering hook: {hook_name}")
            for callback in self._hooks[hook_name]:
                try:
                    result = callback(*args, **kwargs)
                    results.append(result)
                except Exception as e:
                    self.logger.error(f"Error in hook {hook_name}: {e}")

        return results

    def clear_hooks(self, hook_name: str = None) -> None:
        """
        Clear hooks.

        Args:
            hook_name: Specific hook to clear, or None to clear all
        """
        if hook_name:
            if hook_name in self._hooks:
                del self._hooks[hook_name]
        else:
            self._hooks.clear()

    def list_hooks(self) -> List[str]:
        """List all registered hook names"""
        return list(self._hooks.keys())

    def get_hook_count(self, hook_name: str) -> int:
        """Get number of callbacks registered to a hook"""
        return len(self._hooks.get(hook_name, []))
