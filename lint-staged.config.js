import { ESLINT_BASE_ARGS } from './tools/utils.js';

function globForCode(/** @type {string} */ toolName) {
  return '*.?(c|m){js,ts}?(x)' + `*(${toolName})`;
}

/** @type {import('lint-staged').Config} */
export default {
  '*': 'prettier --ignore-unknown --write',
  [globForCode('eslint')]: ['eslint', ...ESLINT_BASE_ARGS].join(' '),
  [globForCode('tsc')]: () => 'tsc -b --incremental',
};
