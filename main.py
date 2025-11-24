#!/usr/bin/env python3
"""
Demo application showcasing the plugin system.
"""

import logging
import sys
from pathlib import Path

from plugin_system import PluginManager, HookManager


def setup_logging():
    """Configure logging for the demo"""
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    )


def demo_logger_plugin(manager: PluginManager):
    """Demonstrate the Logger plugin"""
    print("\n" + "="*60)
    print("DEMO: Logger Plugin")
    print("="*60)

    # Load and initialize
    manager.load_plugin('example_logger')
    manager.initialize_plugin('example_logger', {
        'log_file': 'logs/demo.log',
        'log_level': 'INFO'
    })

    # Execute logging operations
    result = manager.execute_plugin('example_logger',
                                    "This is an info message",
                                    level="INFO")
    print(f"✓ Logged message: {result['message']}")

    result = manager.execute_plugin('example_logger',
                                    "This is a warning",
                                    level="WARNING",
                                    user="demo_user",
                                    action="test")
    print(f"✓ Logged warning with context")

    result = manager.execute_plugin('example_logger',
                                    "Critical system event",
                                    level="ERROR")
    print(f"✓ Logged error message")


def demo_validator_plugin(manager: PluginManager):
    """Demonstrate the Validator plugin"""
    print("\n" + "="*60)
    print("DEMO: Validator Plugin")
    print("="*60)

    # Load and initialize
    manager.load_plugin('example_validator')
    manager.initialize_plugin('example_validator')

    # Test email validation
    test_emails = [
        "user@example.com",
        "invalid.email",
        "test@domain.co.uk"
    ]

    print("\nEmail Validation:")
    for email in test_emails:
        result = manager.execute_plugin('example_validator', email, 'email')
        status = "✓" if result['valid'] else "✗"
        print(f"  {status} {email}: {result['message']}")

    # Test phone validation
    test_phones = [
        "+1234567890",
        "123",
        "+44987654321"
    ]

    print("\nPhone Validation:")
    for phone in test_phones:
        result = manager.execute_plugin('example_validator', phone, 'phone')
        status = "✓" if result['valid'] else "✗"
        print(f"  {status} {phone}: {result['message']}")

    # Test URL validation
    test_urls = [
        "https://example.com",
        "not-a-url",
        "http://test.org/path"
    ]

    print("\nURL Validation:")
    for url in test_urls:
        result = manager.execute_plugin('example_validator', url, 'url')
        status = "✓" if result['valid'] else "✗"
        print(f"  {status} {url}: {result['message']}")


def demo_transformer_plugin(manager: PluginManager):
    """Demonstrate the Transformer plugin"""
    print("\n" + "="*60)
    print("DEMO: Transformer Plugin")
    print("="*60)

    # Load and initialize
    manager.load_plugin('example_transformer')
    manager.initialize_plugin('example_transformer')

    # String transformations
    text = "Hello Plugin System"
    print(f"\nOriginal text: {text}")

    upper = manager.execute_plugin('example_transformer', text, 'uppercase')
    print(f"  Uppercase: {upper}")

    lower = manager.execute_plugin('example_transformer', text, 'lowercase')
    print(f"  Lowercase: {lower}")

    reversed_text = manager.execute_plugin('example_transformer', text, 'reverse')
    print(f"  Reversed: {reversed_text}")

    # List transformations
    data = [3, 1, 4, 1, 5, 9, 2, 6]
    print(f"\nOriginal list: {data}")

    sorted_data = manager.execute_plugin('example_transformer', data, 'sort')
    print(f"  Sorted: {sorted_data}")

    sorted_desc = manager.execute_plugin('example_transformer', data, 'sort', reverse=True)
    print(f"  Sorted (desc): {sorted_desc}")

    # Nested list flattening
    nested = [[1, 2], [3, [4, 5]], 6]
    print(f"\nNested list: {nested}")
    flat = manager.execute_plugin('example_transformer', nested, 'flatten')
    print(f"  Flattened: {flat}")

    # JSON conversion
    obj = {"name": "Plugin System", "version": "1.0.0", "active": True}
    print(f"\nObject: {obj}")
    json_str = manager.execute_plugin('example_transformer', obj, 'to_json')
    print(f"  JSON: {json_str}")


def demo_hook_system():
    """Demonstrate the hook system"""
    print("\n" + "="*60)
    print("DEMO: Hook System")
    print("="*60)

    hook_manager = HookManager()

    # Register some hooks
    def on_data_received(data):
        print(f"  Hook 1: Received data: {data}")
        return f"processed_{data}"

    def on_data_validated(data):
        print(f"  Hook 2: Validated data: {data}")
        return True

    hook_manager.register_hook('data_received', on_data_received)
    hook_manager.register_hook('data_received', on_data_validated)

    # Trigger hooks
    print("\nTriggering 'data_received' hook:")
    results = hook_manager.trigger_hook('data_received', 'test_data')
    print(f"  Results: {results}")

    # List all hooks
    print(f"\nRegistered hooks: {hook_manager.list_hooks()}")
    print(f"Callbacks for 'data_received': {hook_manager.get_hook_count('data_received')}")


def demo_plugin_management(manager: PluginManager):
    """Demonstrate plugin management features"""
    print("\n" + "="*60)
    print("DEMO: Plugin Management")
    print("="*60)

    # List all plugins
    plugins = manager.list_plugins()
    print(f"\nLoaded plugins: {len(plugins)}")
    for plugin_name in plugins:
        metadata = manager.get_plugin_metadata(plugin_name)
        print(f"  • {metadata.name} v{metadata.version}")
        print(f"    Author: {metadata.author}")
        print(f"    Description: {metadata.description}")

    # Check plugin status
    print("\nPlugin Status:")
    for plugin_name in plugins:
        plugin = manager.get_plugin(plugin_name)
        print(f"  • {plugin_name}")
        print(f"    Enabled: {plugin.is_enabled}")
        print(f"    Initialized: {plugin.is_initialized}")


def main():
    """Main demo application"""
    print("="*60)
    print("Plugin System Demo Application")
    print("="*60)

    setup_logging()

    # Initialize plugin manager
    plugin_dir = str(Path(__file__).parent / 'plugin_system' / 'plugins')
    manager = PluginManager(plugin_dirs=[plugin_dir])

    # Discover plugins
    print(f"\nPlugin directory: {plugin_dir}")
    discovered = manager.discover_plugins()
    print(f"Discovered {len(discovered)} plugins: {', '.join(discovered)}")

    try:
        # Run demos
        demo_logger_plugin(manager)
        demo_validator_plugin(manager)
        demo_transformer_plugin(manager)
        demo_hook_system()
        demo_plugin_management(manager)

        print("\n" + "="*60)
        print("All demos completed successfully!")
        print("="*60)

    except Exception as e:
        print(f"\n✗ Error during demo: {e}")
        import traceback
        traceback.print_exc()
        return 1

    return 0


if __name__ == '__main__':
    sys.exit(main())
