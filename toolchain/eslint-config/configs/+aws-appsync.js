import { defineFlatConfig } from 'eslint-define-config'
import plugin from '@aws-appsync/eslint-plugin'

export default defineFlatConfig({
  files: ['**/resolvers/**/*.js'],
  ignores: ['**/js-resolvers/**/*.test.js'],
  plugins: {
    '@aws-appsync': plugin,
  },
  rules: {
    '@aws-appsync/no-async': 'error',
    '@aws-appsync/no-await': 'error',
    '@aws-appsync/no-classes': 'error',
    '@aws-appsync/no-for': 'error',
    '@aws-appsync/no-continue': 'error',
    '@aws-appsync/no-generators': 'error',
    '@aws-appsync/no-yield': 'error',
    '@aws-appsync/no-labels': 'error',
    '@aws-appsync/no-regex': 'error',
    '@aws-appsync/no-this': 'error',
    '@aws-appsync/no-try': 'error',
    '@aws-appsync/no-while': 'error',
    '@aws-appsync/no-disallowed-unary-operators': 'error',
    '@aws-appsync/no-disallowed-binary-operators': 'error',
    '@aws-appsync/no-promise': 'error',
    '@aws-appsync/no-disallowed-re-assignment': 'error',
    '@aws-appsync/no-function-passing': 'error',
  },
})
