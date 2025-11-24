# Plugin System Guide

A flexible and extensible plugin architecture for building modular applications.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Quick Start](#quick-start)
- [Creating Plugins](#creating-plugins)
- [Plugin Manager](#plugin-manager)
- [Hook System](#hook-system)
- [Examples](#examples)
- [API Reference](#api-reference)

## Overview

This plugin system provides a robust framework for creating modular, extensible applications. It features:

- **Dynamic Plugin Loading**: Automatically discover and load plugins from directories
- **Plugin Lifecycle Management**: Initialize, enable, disable, and shutdown plugins
- **Hook System**: Event-driven architecture for plugin communication
- **Metadata Support**: Rich plugin information and dependency tracking
- **Type Safety**: Built with Python type hints for better IDE support

## Architecture

### Core Components

```
plugin_system/
├── core/
│   ├── plugin.py      # Base plugin class and metadata
│   ├── manager.py     # Plugin manager for loading/managing plugins
│   └── hooks.py       # Hook system for events
└── plugins/           # Example plugins
    ├── example_logger/
    ├── example_validator/
    └── example_transformer/
```

### Plugin Lifecycle

1. **Discovery**: Manager scans directories for plugins
2. **Loading**: Plugin class is imported and instantiated
3. **Initialization**: Plugin's `initialize()` method is called with config
4. **Execution**: Plugin's `execute()` method performs functionality
5. **Shutdown**: Plugin's `shutdown()` method cleans up resources

## Quick Start

### Running the Demo

```bash
# Install dependencies
pip install -r requirements.txt

# Run the demo application
python main.py
```

### Basic Usage

```python
from plugin_system import PluginManager

# Create plugin manager
manager = PluginManager(plugin_dirs=['plugin_system/plugins'])

# Discover available plugins
plugins = manager.discover_plugins()
print(f"Found plugins: {plugins}")

# Load a plugin
manager.load_plugin('example_logger')

# Initialize with configuration
manager.initialize_plugin('example_logger', {
    'log_file': 'app.log',
    'log_level': 'INFO'
})

# Execute plugin functionality
result = manager.execute_plugin('example_logger',
                                "Hello from plugin system!",
                                level="INFO")
```

## Creating Plugins

### Step 1: Create Plugin Structure

```
my_plugin/
├── __init__.py
└── plugin.py
```

### Step 2: Implement Plugin Class

```python
from plugin_system.core.plugin import Plugin, PluginMetadata
from typing import Any, Dict

class MyPlugin(Plugin):
    def get_metadata(self) -> PluginMetadata:
        return PluginMetadata(
            name="My Plugin",
            version="1.0.0",
            author="Your Name",
            description="Description of what your plugin does",
            dependencies=[]  # List of required plugins
        )

    def initialize(self, config: Dict[str, Any] = None) -> bool:
        """Initialize plugin with configuration"""
        config = config or {}
        # Setup your plugin
        return True

    def execute(self, *args, **kwargs) -> Any:
        """Main plugin functionality"""
        # Implement your plugin logic
        return "result"

    def shutdown(self) -> None:
        """Clean up resources"""
        super().shutdown()
```

### Step 3: Add Plugin to Directory

Place your plugin directory in a location that the PluginManager scans:

```python
manager.add_plugin_directory('path/to/my_plugins')
```

## Plugin Manager

### Creating a Manager

```python
from plugin_system import PluginManager

# With plugin directories
manager = PluginManager(plugin_dirs=[
    'plugin_system/plugins',
    'custom_plugins'
])

# Add directories later
manager.add_plugin_directory('more_plugins')
```

### Loading Plugins

```python
# Auto-discover plugins
discovered = manager.discover_plugins()

# Load specific plugin
success = manager.load_plugin('my_plugin')

# Initialize plugin
config = {'setting': 'value'}
manager.initialize_plugin('my_plugin', config)
```

### Managing Plugins

```python
# Execute plugin
result = manager.execute_plugin('my_plugin', arg1, arg2, key='value')

# Get plugin instance
plugin = manager.get_plugin('my_plugin')

# Get metadata
metadata = manager.get_plugin_metadata('my_plugin')
print(f"{metadata.name} v{metadata.version}")

# List all plugins
all_plugins = manager.list_plugins()

# Unload plugin
manager.unload_plugin('my_plugin')
```

## Hook System

The hook system enables event-driven plugin communication.

### Basic Hook Usage

```python
from plugin_system import HookManager

hook_manager = HookManager()

# Register a hook callback
def on_user_login(username):
    print(f"User logged in: {username}")
    return True

hook_manager.register_hook('user_login', on_user_login)

# Trigger the hook
results = hook_manager.trigger_hook('user_login', 'john_doe')
```

### Multiple Callbacks

```python
# Register multiple callbacks for same hook
hook_manager.register_hook('user_login', callback1)
hook_manager.register_hook('user_login', callback2)
hook_manager.register_hook('user_login', callback3)

# All callbacks will be called
results = hook_manager.trigger_hook('user_login', 'jane_doe')
```

### Hook Management

```python
# List all hooks
hooks = hook_manager.list_hooks()

# Get callback count
count = hook_manager.get_hook_count('user_login')

# Unregister callback
hook_manager.unregister_hook('user_login', callback1)

# Clear all hooks
hook_manager.clear_hooks()
```

## Examples

### Example 1: Logger Plugin

```python
manager.load_plugin('example_logger')
manager.initialize_plugin('example_logger', {
    'log_file': 'logs/app.log',
    'log_level': 'INFO'
})

# Log messages
manager.execute_plugin('example_logger',
                      "Application started",
                      level="INFO")

manager.execute_plugin('example_logger',
                      "Error occurred",
                      level="ERROR",
                      error_code=500)
```

### Example 2: Validator Plugin

```python
manager.load_plugin('example_validator')
manager.initialize_plugin('example_validator')

# Validate email
result = manager.execute_plugin('example_validator',
                               "user@example.com",
                               'email')
if result['valid']:
    print("Valid email!")

# Validate with custom rules
result = manager.execute_plugin('example_validator',
                               "password123",
                               'length',
                               min=8,
                               max=20)
```

### Example 3: Transformer Plugin

```python
manager.load_plugin('example_transformer')
manager.initialize_plugin('example_transformer')

# Transform data
upper = manager.execute_plugin('example_transformer',
                              "hello world",
                              'uppercase')

# Chain operations
plugin = manager.get_plugin('example_transformer')
result = plugin.chain_operations(
    "hello world",
    [
        ('uppercase', {}),
        ('reverse', {})
    ]
)
```

## API Reference

### Plugin Class

```python
class Plugin(ABC):
    def get_metadata() -> PluginMetadata
    def initialize(config: Dict[str, Any]) -> bool
    def execute(*args, **kwargs) -> Any
    def shutdown() -> None
    def enable() -> None
    def disable() -> None
    def validate() -> tuple[bool, str]

    @property
    def is_enabled -> bool
    @property
    def is_initialized -> bool
```

### PluginManager Class

```python
class PluginManager:
    def __init__(plugin_dirs: List[str])
    def add_plugin_directory(directory: str) -> None
    def discover_plugins() -> List[str]
    def load_plugin(plugin_name: str) -> bool
    def initialize_plugin(plugin_name: str, config: Dict) -> bool
    def execute_plugin(plugin_name: str, *args, **kwargs) -> Any
    def unload_plugin(plugin_name: str) -> bool
    def get_plugin(plugin_name: str) -> Optional[Plugin]
    def get_all_plugins() -> Dict[str, Plugin]
    def get_plugin_metadata(plugin_name: str) -> Optional[PluginMetadata]
    def list_plugins() -> List[str]
```

### HookManager Class

```python
class HookManager:
    def register_hook(hook_name: str, callback: Callable) -> None
    def unregister_hook(hook_name: str, callback: Callable) -> bool
    def trigger_hook(hook_name: str, *args, **kwargs) -> List[Any]
    def clear_hooks(hook_name: str = None) -> None
    def list_hooks() -> List[str]
    def get_hook_count(hook_name: str) -> int
```

## Best Practices

1. **Configuration**: Always provide sensible defaults in your plugin's `initialize()` method
2. **Error Handling**: Use try-except blocks and return meaningful error messages
3. **Resource Cleanup**: Implement `shutdown()` to clean up resources properly
4. **Validation**: Use the `validate()` method to check plugin state and configuration
5. **Documentation**: Document your plugin's configuration options and execute parameters
6. **Testing**: Create unit tests for your plugins

## Advanced Topics

### Plugin Dependencies

Specify dependencies in metadata:

```python
def get_metadata(self) -> PluginMetadata:
    return PluginMetadata(
        name="Advanced Plugin",
        version="1.0.0",
        author="You",
        description="Plugin with dependencies",
        dependencies=["example_logger", "example_validator"]
    )
```

### Custom Plugin Discovery

Override plugin discovery for custom loading logic:

```python
# Load from a specific class
from my_plugins import CustomPlugin

manager.load_plugin('custom', plugin_class=CustomPlugin)
```

### Plugin Communication

Use the hook system for plugin-to-plugin communication:

```python
# In plugin A
hook_manager.trigger_hook('data_processed', data)

# In plugin B
def handle_data(data):
    # Process data from plugin A
    pass

hook_manager.register_hook('data_processed', handle_data)
```

## Troubleshooting

### Plugin Not Found

- Check plugin directory path is correct
- Ensure plugin has `plugin.py` file
- Verify Plugin class inherits from `Plugin`

### Initialization Fails

- Check configuration parameters
- Review plugin logs for errors
- Ensure dependencies are loaded first

### Execution Errors

- Verify plugin is initialized: `plugin.is_initialized`
- Check plugin is enabled: `plugin.is_enabled`
- Review execute parameters match plugin expectations

## Contributing

To add new example plugins:

1. Create plugin directory in `plugin_system/plugins/`
2. Implement plugin class following the pattern
3. Add to the demo in `main.py`
4. Update this guide with usage examples

## License

This plugin system is open source and available for use in your projects.
