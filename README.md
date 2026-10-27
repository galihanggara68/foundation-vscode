# foundation-vscode

Official Visual Studio Code and Open VSX extension for [Foundation](https://github.com/galihanggara68/foundation) `.fdn` Blueprint files.

## Features
- **Syntax Highlighting**: Comprehensive TextMate grammar covering entities, actions, queries, traits (`@table`, `@route`, `@version`), and primitive types (`UUID`, `Money`, `Email`).
- **Real-Time Diagnostics**: Seamless integration with `foundation lsp` over stdio providing compiler red-squiggles as you type.
- **Hover & Documentation**: Instant Markdown tooltips explaining traits, concurrency control, and schema mappings.
- **Code Snippets**: Scaffolding templates for `entity`, `action`, and `scenario`.

## Requirements
Ensure the `foundation` CLI binary is installed and present in your system PATH, or specify its absolute path in settings:
`foundation.lsp.path`: `/path/to/foundation`

## License

Licensed under the Apache License, Version 2.0 (the "License").
Copyright 2026 Foundation Authors.
