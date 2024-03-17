import { env } from 'node:process';

import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, type UserConfigExport } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

installGlobals();

const config: UserConfigExport = {
  plugins: [env.STORYBOOK ? react() : remix(), tsconfigPaths()],
  esbuild: {
    supported: {
      'top-level-await': true,
    },
  },
};

if (env.CODESPACES) {
  const server = config.server ?? {};
  server.host = true;
  config.server = server;
}

export default defineConfig(config);
