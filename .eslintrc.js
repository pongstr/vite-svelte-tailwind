module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    worker: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['svelte3'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  ignorePatterns: [
    'public/app/**/*.js',
    'public/app/**/*.js.map',
    './*.{js,cjs,mjs}',
  ],
}
