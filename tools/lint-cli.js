/* eslint-env node */

import { execa } from 'execa';
import { Listr } from 'listr2';

import { ESLINT_BASE_ARGS } from './utils.js';

process.title = 'Lint';

/** @satisfies {import('execa').Options} */
const execaOpts = {
  preferLocal: true,
};

const tasks = new Listr([], {
  concurrent: true,
  // rendererOptions: {
  //   logger: new ListrLogger({
  //     processOutput: new ProcessOutput(process.stdout, process.stderr, {
  //       dump: [],
  //     }),
  //   }),
  //   showErrorMessage: true,
  // },
});

// TypeScript checks
// for (const task of getProjects(process.cwd()).map((cfgPath) => ({
//   title: `tsc -p ${relative(process.cwd(), cfgPath)}`,
//   task: () => execa('tsc', [...TSC_LINT_ARGS, cfgPath], execaOpts),
//   enabled: process.argv.includes('--typescript'),
// })))
//   tasks.add(task);
tasks.add({
  title: 'tsc -b',
  task: () => execa('tsc', ['-b', '--incremental'], execaOpts),
  enabled: process.argv.includes('--typescript'),
});

// ESLint checks
tasks.add({
  title: 'eslint .',
  task: () => execa('eslint', [...ESLINT_BASE_ARGS, '.'], execaOpts),
  enabled: process.argv.includes('--eslint'),
});

try {
  await tasks.run();
} catch (e) {
  // Ignore errors
}
