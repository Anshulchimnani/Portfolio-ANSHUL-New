# ANSHUL-REPO-REPO

A flexible and extensible plugin system for building modular Python applications.

## Features

- **Dynamic Plugin Loading**: Automatically discover and load plugins from directories
- **Lifecycle Management**: Complete plugin lifecycle control (load, initialize, execute, shutdown)
- **Hook System**: Event-driven architecture for plugin communication
- **Extensible Architecture**: Easy to create custom plugins for any use case
- **Type-Safe**: Built with Python type hints for better IDE support
- **Well-Documented**: Comprehensive guides and examples

## Quick Start

```bash
# Install dependencies
pip install -r requirements.txt

# Run the demo application
python main.py
```

## Example Usage

```python
from plugin_system import PluginManager

# Initialize plugin manager
manager = PluginManager(plugin_dirs=['plugin_system/plugins'])

# Discover and load plugins
plugins = manager.discover_plugins()
manager.load_plugin('example_logger')
manager.initialize_plugin('example_logger', {'log_file': 'app.log'})

# Execute plugin functionality
result = manager.execute_plugin('example_logger', "Hello World!", level="INFO")
```

## Included Example Plugins

1. **Logger Plugin**: Log messages to file and console with timestamps
2. **Validator Plugin**: Validate emails, URLs, phone numbers, and custom patterns
3. **Transformer Plugin**: Transform data between formats (uppercase, lowercase, JSON, etc.)

## Documentation

See [PLUGIN_GUIDE.md](PLUGIN_GUIDE.md) for comprehensive documentation including:

- Architecture overview
- Creating custom plugins
- Plugin manager API
- Hook system usage
- Advanced topics and best practices

## Project Structure

```
.
├── plugin_system/           # Core plugin system
│   ├── core/               # Base classes and managers
│   │   ├── plugin.py       # Plugin base class
│   │   ├── manager.py      # Plugin manager
│   │   └── hooks.py        # Hook system
│   └── plugins/            # Example plugins
│       ├── example_logger/
│       ├── example_validator/
│       └── example_transformer/
├── main.py                 # Demo application
├── PLUGIN_GUIDE.md         # Comprehensive guide
└── requirements.txt        # Dependencies
```

## Creating Your Own Plugin

```python
from plugin_system.core.plugin import Plugin, PluginMetadata

class MyPlugin(Plugin):
    def get_metadata(self) -> PluginMetadata:
        return PluginMetadata(
            name="My Plugin",
            version="1.0.0",
            author="Your Name",
            description="What your plugin does"
        )

    def initialize(self, config: dict = None) -> bool:
        # Setup your plugin
        return True

    def execute(self, *args, **kwargs):
        # Your plugin logic
        return "result"
```

## License

Open source and available for use in your projects.

---

## A Code Repository's Poem

In digital halls where logic flows,
A repository silently grows,
Lines of code like verses true,
Crafted carefully, tried and new.

Commits like chapters, stories told,
Of bugs resolved and features bold,
Branches diverge and merge again,
Collaboration's endless chain.

Through pull requests and review's keen eye,
Quality standards held up high,
In README's welcoming embrace,
We document this coding space.

So here we gather, build, and share,
A testament to creators' care,
Where innovation finds its home,
In ANSHUL's repository poem.
