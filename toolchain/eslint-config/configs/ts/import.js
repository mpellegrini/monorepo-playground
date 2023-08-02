import { defineFlatConfig } from 'eslint-define-config'

const extensions = ['.ts', '.js']

export default defineFlatConfig({
  settings: {
    'import/extensions': extensions,
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: extensions,
      },
    },
  },
  rules: {
    // TypeScript already provides the same checks as part of standard type checking
    // see https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting/#eslint-plugin-import
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',

    // TODO: Might want to consider turning these on at least during CI
    'import/no-named-as-default': 'off',
    'import/no-cycle': 'off',
    'import/no-unused-modules': 'off',
    'import/no-deprecated': 'off',

    // TypeScript will automatically enforce that you include extensions
    // when moduleResolution is set to Node16 or NodeNext.
    'import/extensions': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
  },
})
