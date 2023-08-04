import { defineFlatConfig } from 'eslint-define-config'
import recommended from '../configs/recommended.js'
import globals from 'globals'
import plusTypeScript from '../configs/+typescript.js'
import plusAwsAppSync from '../configs/+aws-appsync-with-ts.js'
import plusVitest from '../configs/+vitest.js'
import plusPrettier from '../configs/+prettier.js'
import globalIgnores from '../configs/+global-ignores.js'

const { nodeBuiltin, es2021 } = globals

export default defineFlatConfig([
  {
    languageOptions: {
      globals: {
        ...nodeBuiltin,
        ...es2021,
      },
    },
  },
  recommended,
  plusTypeScript,
  plusAwsAppSync,
  plusVitest,
  plusPrettier,
  globalIgnores,
])
