import { defineFlatConfig } from 'eslint-define-config'
import plugin from '@typescript-eslint/eslint-plugin'
import im_port from './import.js'
import merge from 'ts-deepmerge'

export default merge(
  defineFlatConfig({
    languageOptions: {
      parserOptions: {
        project: true,
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      '@typescript-eslint': plugin,
    },
    rules: {
      ...plugin.configs['eslint-recommended'].overrides[0].rules,
      ...plugin.configs['recommended'].rules,
      ...plugin.configs['recommended-type-checked'].rules,

      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          variables: true,
        },
      ],
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
    },
  }),
  im_port,
)
