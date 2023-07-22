import { defineFlatConfig } from 'eslint-define-config'
import globals from 'globals'
import recommended from '../configs/recommended.js'
import plusTypeScript from '../configs/+typescript.js'
import plusSvelteKit from '../configs/+svelte-with-ts.js'
import plusVitest from '../configs/+vitest.js'
import plusPrettier from '../configs/+prettier.js'
import globalIgnores from '../configs/+global-ignores.js'

const { nodeBuiltin, es2021, browser } = globals

export default defineFlatConfig([
  {
    languageOptions: {
      globals: {
        ...nodeBuiltin,
        ...es2021,
        ...browser,
      },
    },
  },
  recommended,
  plusTypeScript,
  plusSvelteKit,
  plusVitest,
  plusPrettier,
  globalIgnores,
  {
    ignores: ['.svelte-kit', 'build'],
  },
])
