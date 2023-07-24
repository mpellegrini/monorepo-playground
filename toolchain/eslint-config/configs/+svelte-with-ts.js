import { defineFlatConfig } from 'eslint-define-config'
import merge from 'ts-deepmerge'
import svelteParser from 'svelte-eslint-parser'
import tsParser from '@typescript-eslint/parser'
import svelte from './+svelte.js'
import baseConfig from './ts/base-config.js'

export default merge.withOptions(
  { mergeArrays: false },
  svelte,
  baseConfig,
  defineFlatConfig({
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
        project: ['./tsconfig.json', './.svelte-kit/tsconfig.json'],
        extraFileExtensions: ['.svelte'],
      },
    },
    rules: {
      'svelte/block-lang': [
        'error',
        {
          script: 'ts',
          style: ['postcss', 'css'],
        },
      ],
    },
  }),
)
