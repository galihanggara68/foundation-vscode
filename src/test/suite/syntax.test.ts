import * as assert from 'assert';
import * as fs from 'fs';
import * as path from 'path';

suite('Foundation Extension Test Suite', () => {
  test('TextMate grammar JSON is valid and defines core scopes', () => {
    const grammarPath = path.resolve(__dirname, '../../../syntaxes/foundation.tmLanguage.json');
    const content = fs.readFileSync(grammarPath, 'utf8');
    const grammar = JSON.parse(content);

    assert.strictEqual(grammar.scopeName, 'source.fdn');
    assert.ok(grammar.repository.keywords);
    assert.ok(grammar.repository.traits);
    assert.ok(grammar.repository.types);
    assert.ok(grammar.repository.comments);
  });

  test('Code snippets JSON is valid and defines templates', () => {
    const snippetsPath = path.resolve(__dirname, '../../../snippets/foundation.code-snippets');
    const content = fs.readFileSync(snippetsPath, 'utf8');
    const snippets = JSON.parse(content);

    assert.ok(snippets.Entity);
    assert.ok(snippets.Action);
    assert.ok(snippets.Scenario);
  });
});
