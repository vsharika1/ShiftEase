/** @satisfies {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { node: true, es2024: true },
  extends: [
    'eslint:recommended',
    './.eslintrc.import.cjs',
    './.eslintrc.unicorn.cjs',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // project: ['./tsconfig.json', './tsconfig.*.json'],
    // tsconfigRootDir: __dirname,
    EXPERIMENTAL_useProjectService: true,
  },
  plugins: ['react-refresh', '@stylistic'],
  settings: {
    react: {
      version: 'detect',
    },
    formComponents: ['Form'],
    linkComponents: [
      { name: 'Link', linkAttribute: 'to' },
      { name: 'NavLink', linkAttribute: 'to' },
    ],
  },
  rules: {
    'react-hooks/exhaustive-deps': 'error',

    'react-refresh/only-export-components': [
      'error',
      {
        allowConstantExport: true,
        allowExportNames: [
          'meta',
          'links',
          'headers',
          'loader',
          'action',
          'handle',
        ],
      },
    ],

    // eslint rules
    'no-useless-rename': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-lonely-if': 'error',
    'prefer-object-has-own': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'require-unicode-regexp': 'error',
    'array-callback-return': ['error', { checkForEach: true, allowVoid: true }],
    'no-constant-binary-expression': 'error', // default in 'eslint:recommended' since v9
    'no-constructor-return': 'error',
    'no-empty-static-block': 'error', // default in 'eslint:recommended' since v9
    'no-unmodified-loop-condition': 'error',

    // @stylistic rules - needed as prettier doesn't handle these
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/jsx-curly-brace-presence': [
      'error',
      { propElementValues: 'always' },
    ],

    // @typescript-eslint rules
    '@typescript-eslint/consistent-type-exports': [
      'error',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      { ignoreStringArrays: true },
    ],
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreVoidOperator: true, ignoreArrowShorthand: true },
    ],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/no-throw-literal': 'off', // Gets in the way of Remix's throw `Response` pattern.
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        // Ignore when passing `() => Promise<void>` to `() => void`
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],

    // eslint-plugin-react rules
    'react/jsx-no-bind': [
      'error',
      {
        ignoreDOMComponents: true,
      },
    ],
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-undef': 'off', // TypeScript catches this for us already
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-uses-vars': 'off', // TypeScript catches this for us already
    'react/no-access-state-in-setstate': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-namespace': 'error',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/prop-types': 'off', // TypeScript catches this for us already
    'react/self-closing-comp': 'error',
    'react/void-dom-elements-no-children': 'error',
  },
};
