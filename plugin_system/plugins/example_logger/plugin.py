"""Logger plugin implementation"""

import logging
from datetime import datetime
from pathlib import Path
from typing import Any, Dict

from plugin_system.core.plugin import Plugin, PluginMetadata


class LoggerPlugin(Plugin):
    """
    Example plugin that logs messages to file and console.
    """

    def __init__(self):
        super().__init__()
        self.log_file = None
        self.logger = None

    def get_metadata(self) -> PluginMetadata:
        return PluginMetadata(
            name="Logger Plugin",
            version="1.0.0",
            author="Plugin System",
            description="Logs messages to file and console with timestamps"
        )

    def initialize(self, config: Dict[str, Any] = None) -> bool:
        """
        Initialize the logger plugin.

        Config options:
            - log_file: Path to log file (default: logs/plugin.log)
            - log_level: Logging level (default: INFO)
        """
        config = config or {}

        try:
            log_file = config.get('log_file', 'logs/plugin.log')
            log_level = config.get('log_level', 'INFO')

            # Create log directory if needed
            log_path = Path(log_file)
            log_path.parent.mkdir(parents=True, exist_ok=True)

            self.log_file = log_file

            # Setup logger
            self.logger = logging.getLogger('LoggerPlugin')
            self.logger.setLevel(getattr(logging, log_level))

            # File handler
            fh = logging.FileHandler(self.log_file)
            fh.setLevel(getattr(logging, log_level))

            # Console handler
            ch = logging.StreamHandler()
            ch.setLevel(getattr(logging, log_level))

            # Formatter
            formatter = logging.Formatter(
                '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
            )
            fh.setFormatter(formatter)
            ch.setFormatter(formatter)

            self.logger.addHandler(fh)
            self.logger.addHandler(ch)

            self.logger.info("Logger Plugin initialized")
            return True

        except Exception as e:
            print(f"Failed to initialize Logger Plugin: {e}")
            return False

    def execute(self, message: str, level: str = "INFO", **kwargs) -> Any:
        """
        Log a message.

        Args:
            message: Message to log
            level: Log level (DEBUG, INFO, WARNING, ERROR, CRITICAL)
            **kwargs: Additional context to log

        Returns:
            dict: Log entry information
        """
        if not self.logger:
            raise RuntimeError("Logger not initialized")

        log_method = getattr(self.logger, level.lower(), self.logger.info)

        if kwargs:
            message = f"{message} | Context: {kwargs}"

        log_method(message)

        return {
            'timestamp': datetime.now().isoformat(),
            'level': level,
            'message': message,
            'logged_to': self.log_file
        }

    def shutdown(self) -> None:
        """Clean up logger resources"""
        if self.logger:
            for handler in self.logger.handlers[:]:
                handler.close()
                self.logger.removeHandler(handler)
        super().shutdown()
