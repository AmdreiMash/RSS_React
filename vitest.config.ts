/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    svgr(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/testsSetup.ts'],
    coverage: {
      provider: 'istanbul',
      all: true,
    },
  },
});
