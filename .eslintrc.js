// @ts-check

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    es6: true,
  },
  plugins: [],
  extends: ['eslint:recommended'],
  rules: {
    'no-duplicate-imports': 'off',
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:import/typescript',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'separate-type-imports', disallowTypeAnnotations: false },
        ],
      },
    },
    {
      files: ['*.js'],
      env: {
        commonjs: true,
      },
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaVersion: 10,
        requireConfigFile: false,
      },
      extends: ['plugin:prettier/recommended'],
      plugins: [],
      rules: {},
    },
  ],
};
