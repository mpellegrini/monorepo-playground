import { defineFlatConfig } from 'eslint-define-config'
import merge from 'ts-deepmerge'

import awsAppSync from './+aws-appsync.js'

export default merge.withOptions(
  { mergeArrays: false },
  awsAppSync,
  defineFlatConfig({
    files: ['**/resolvers/**/*.ts'],
    ignores: ['**/js-resolvers/**/*.test.ts'],
    rules: {
      '@aws-appsync/no-recursion': 'error',
      '@aws-appsync/no-disallowed-methods': 'error',
      '@aws-appsync/no-function-passing': 'error',
      '@aws-appsync/no-function-reassign': 'error',
      '@aws-appsync/no-function-return': 'error',
    },
  }),
)
