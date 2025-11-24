"""Data transformer plugin implementation"""

import json
from typing import Any, Dict, List

from plugin_system.core.plugin import Plugin, PluginMetadata


class TransformerPlugin(Plugin):
    """
    Example plugin that transforms data between formats.
    """

    def __init__(self):
        super().__init__()
        self.transformations = []

    def get_metadata(self) -> PluginMetadata:
        return PluginMetadata(
            name="Transformer Plugin",
            version="1.0.0",
            author="Plugin System",
            description="Transforms and converts data between different formats"
        )

    def initialize(self, config: Dict[str, Any] = None) -> bool:
        """
        Initialize the transformer plugin.

        Config options:
            - transformations: List of transformation pipelines to pre-configure
        """
        config = config or {}
        self.transformations = config.get('transformations', [])
        return True

    def execute(self, data: Any, operation: str, **kwargs) -> Any:
        """
        Transform data according to the specified operation.

        Args:
            data: Data to transform
            operation: Type of transformation
            **kwargs: Additional transformation parameters

        Returns:
            Transformed data
        """
        if operation == 'uppercase':
            return self._to_uppercase(data)
        elif operation == 'lowercase':
            return self._to_lowercase(data)
        elif operation == 'reverse':
            return self._reverse(data)
        elif operation == 'filter':
            return self._filter_data(data, **kwargs)
        elif operation == 'map':
            return self._map_data(data, **kwargs)
        elif operation == 'flatten':
            return self._flatten(data)
        elif operation == 'to_json':
            return self._to_json(data)
        elif operation == 'from_json':
            return self._from_json(data)
        elif operation == 'sort':
            return self._sort_data(data, **kwargs)
        else:
            raise ValueError(f"Unknown operation: {operation}")

    def _to_uppercase(self, data: Any) -> str:
        """Convert to uppercase"""
        return str(data).upper()

    def _to_lowercase(self, data: Any) -> str:
        """Convert to lowercase"""
        return str(data).lower()

    def _reverse(self, data: Any) -> Any:
        """Reverse data (string or list)"""
        if isinstance(data, str):
            return data[::-1]
        elif isinstance(data, list):
            return list(reversed(data))
        else:
            return str(data)[::-1]

    def _filter_data(self, data: List, condition: callable = None, **kwargs) -> List:
        """Filter list based on condition"""
        if not isinstance(data, list):
            return data

        if condition:
            return [item for item in data if condition(item)]

        # Default: filter out None and empty values
        return [item for item in data if item]

    def _map_data(self, data: List, transform: callable = None, **kwargs) -> List:
        """Apply transformation to each item"""
        if not isinstance(data, list):
            return data

        if transform:
            return [transform(item) for item in data]

        return data

    def _flatten(self, data: Any) -> List:
        """Flatten nested lists"""
        if not isinstance(data, list):
            return [data]

        result = []
        for item in data:
            if isinstance(item, list):
                result.extend(self._flatten(item))
            else:
                result.append(item)
        return result

    def _to_json(self, data: Any) -> str:
        """Convert to JSON string"""
        return json.dumps(data, indent=2)

    def _from_json(self, data: str) -> Any:
        """Parse from JSON string"""
        return json.loads(data)

    def _sort_data(self, data: List, reverse: bool = False, key: str = None) -> List:
        """Sort list data"""
        if not isinstance(data, list):
            return data

        if key and all(isinstance(item, dict) for item in data):
            return sorted(data, key=lambda x: x.get(key, 0), reverse=reverse)

        try:
            return sorted(data, reverse=reverse)
        except TypeError:
            # Can't sort mixed types
            return data

    def chain_operations(self, data: Any, operations: List[tuple]) -> Any:
        """
        Chain multiple operations together.

        Args:
            data: Initial data
            operations: List of (operation_name, kwargs) tuples

        Returns:
            Final transformed data
        """
        result = data
        for op_name, op_kwargs in operations:
            result = self.execute(result, op_name, **op_kwargs)
        return result
