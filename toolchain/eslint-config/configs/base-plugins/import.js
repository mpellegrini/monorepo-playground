import { defineFlatConfig } from 'eslint-define-config'
import im_port from 'eslint-plugin-import'

export default defineFlatConfig({
  plugins: {
    import: im_port,
  },
  // begin temporary workaround
  // see https://github.com/import-js/eslint-plugin-import/issues/2556#issuecomment-1419518561
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
    },
  },
  settings: {
    'import/parsers': {
      espree: ['.js'],
    },
    'import/resolver': {
      typescript: true,
    },
    // end temporary workaround
    'import/internal-regex': '^@(apps|packages|toolchain|serverless|infrastructure)/',
  },
  rules: {
    ...im_port.configs.recommended.rules,

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always-and-inside-groups',
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
})
