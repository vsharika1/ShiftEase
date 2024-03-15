// Omit `.d.ts` because 1) TypeScript compilation already confirms that
// types are resolved, and 2) it would mask an unresolved
// `.ts`/`.tsx`/`.js`/`.jsx` implementation.
const typeScriptExtensions = ['.ts', '.cts', '.mts', '.tsx'];
const allExtensions = [...typeScriptExtensions, '.js', '.jsx', '.cjs', '.mjs'];

const frameworkModulePaths = ['{react,react-dom/**}', '@remix-run/**'];
const importOrderPartialOpts = {
  pathGroupsExcludedImportTypes: frameworkModulePaths,
  pathGroups: frameworkModulePaths.map((path) => ({
    pattern: path,
    group: 'builtin',
    position: 'after',
  })),
};

/** @satisfies {import('eslint').Linter.Config} */
module.exports = {
  plugins: ['import'],
  settings: {
    'import/extensions': allExtensions,
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': allExtensions,
    },
    'import/resolver': {
      node: {
        extensions: allExtensions,
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: ['./tsconfig.json', './tsconfig.*.json'],
      },
    },
    'import/internal-regex': '^~/',
  },
  rules: {
    // prettier-plugin-organize-imports doesn't handle this
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        distinctGroup: true,
        ...importOrderPartialOpts,
      },
    ],
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    // prettier allows 0 or 1 newline. This rule forces at least 1.
    'import/newline-after-import': [
      'error',
      {
        considerComments: true,
      },
    ],
  },
};
