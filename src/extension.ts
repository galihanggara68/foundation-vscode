import * as path from 'path';
import * as vscode from 'vscode';
import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient | undefined;

export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration('foundation');
  let binaryPath = config.get<string>('lsp.path');

  if (!binaryPath || binaryPath.trim() === '') {
    binaryPath = 'foundation';
  }

  const serverOptions: ServerOptions = {
    command: binaryPath,
    args: ['lsp'],
    transport: TransportKind.stdio
  };

  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: 'file', language: 'foundation' }],
    synchronize: {
      fileEvents: vscode.workspace.createFileSystemWatcher('**/*.fdn')
    }
  };

  client = new LanguageClient(
    'foundation-lsp',
    'Foundation Language Server',
    serverOptions,
    clientOptions
  );

  client.start().catch((err: unknown) => {
    vscode.window
      .showErrorMessage(
        `Failed to start Foundation Language Server using binary "${binaryPath}". Ensure Foundation is installed and in your PATH.`,
        'View Installation Docs'
      )
      .then((selection) => {
        if (selection === 'View Installation Docs') {
          vscode.env.openExternal(
            vscode.Uri.parse('https://github.com/galihanggara68/foundation#installation')
          );
        }
      });
  });
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
