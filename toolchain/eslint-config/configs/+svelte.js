import { defineFlatConfig } from 'eslint-define-config'
import plugin from 'eslint-plugin-svelte'

export default defineFlatConfig({
  files: ['**/*.svelte'],
  plugins: {
    svelte: plugin,
  },
  processor: 'svelte/svelte',
  rules: {
    ...plugin.configs.recommended.rules,
    'svelte/block-lang': [
      'error',
      {
        script: 'js',
        style: ['postcss', 'css'],
      },
    ],
    'svelte/comment-directive': ['error', { reportUnusedDisableDirectives: true }],
  },
})
