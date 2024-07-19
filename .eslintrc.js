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
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
      extends: [
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'prettier',
        'plugin:import/typescript',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'separate-type-imports', disallowTypeAnnotations: false },
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
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
