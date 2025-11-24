"""Data validator plugin implementation"""

import re
from typing import Any, Dict, List

from plugin_system.core.plugin import Plugin, PluginMetadata


class ValidatorPlugin(Plugin):
    """
    Example plugin that validates data against rules.
    """

    def __init__(self):
        super().__init__()
        self.validation_rules = {}

    def get_metadata(self) -> PluginMetadata:
        return PluginMetadata(
            name="Validator Plugin",
            version="1.0.0",
            author="Plugin System",
            description="Validates data against customizable rules"
        )

    def initialize(self, config: Dict[str, Any] = None) -> bool:
        """
        Initialize the validator plugin.

        Config options:
            - rules: Dictionary of validation rules
        """
        config = config or {}

        self.validation_rules = config.get('rules', {
            'email': r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',
            'phone': r'^\+?1?\d{9,15}$',
            'url': r'^https?://[^\s/$.?#].[^\s]*$',
            'min_length': 3,
            'max_length': 100
        })

        return True

    def execute(self, data: Any, rule_type: str, **kwargs) -> Dict[str, Any]:
        """
        Validate data against a rule.

        Args:
            data: Data to validate
            rule_type: Type of validation rule to apply
            **kwargs: Additional validation parameters

        Returns:
            dict: Validation result with 'valid' and 'message' keys
        """
        if rule_type == 'email':
            return self._validate_email(data)
        elif rule_type == 'phone':
            return self._validate_phone(data)
        elif rule_type == 'url':
            return self._validate_url(data)
        elif rule_type == 'length':
            min_len = kwargs.get('min', self.validation_rules.get('min_length', 0))
            max_len = kwargs.get('max', self.validation_rules.get('max_length', float('inf')))
            return self._validate_length(data, min_len, max_len)
        elif rule_type == 'custom':
            pattern = kwargs.get('pattern')
            return self._validate_custom(data, pattern)
        else:
            return {
                'valid': False,
                'message': f"Unknown validation rule: {rule_type}"
            }

    def _validate_email(self, email: str) -> Dict[str, Any]:
        """Validate email address"""
        pattern = self.validation_rules.get('email')
        if re.match(pattern, str(email)):
            return {'valid': True, 'message': 'Valid email address'}
        return {'valid': False, 'message': 'Invalid email address format'}

    def _validate_phone(self, phone: str) -> Dict[str, Any]:
        """Validate phone number"""
        pattern = self.validation_rules.get('phone')
        if re.match(pattern, str(phone)):
            return {'valid': True, 'message': 'Valid phone number'}
        return {'valid': False, 'message': 'Invalid phone number format'}

    def _validate_url(self, url: str) -> Dict[str, Any]:
        """Validate URL"""
        pattern = self.validation_rules.get('url')
        if re.match(pattern, str(url)):
            return {'valid': True, 'message': 'Valid URL'}
        return {'valid': False, 'message': 'Invalid URL format'}

    def _validate_length(self, data: str, min_len: int, max_len: int) -> Dict[str, Any]:
        """Validate string length"""
        length = len(str(data))
        if min_len <= length <= max_len:
            return {'valid': True, 'message': f'Length {length} is within range'}
        return {
            'valid': False,
            'message': f'Length {length} must be between {min_len} and {max_len}'
        }

    def _validate_custom(self, data: str, pattern: str) -> Dict[str, Any]:
        """Validate against custom regex pattern"""
        if not pattern:
            return {'valid': False, 'message': 'No pattern provided'}

        if re.match(pattern, str(data)):
            return {'valid': True, 'message': 'Matches custom pattern'}
        return {'valid': False, 'message': 'Does not match custom pattern'}

    def add_rule(self, rule_name: str, pattern: str) -> None:
        """Add a custom validation rule"""
        self.validation_rules[rule_name] = pattern
