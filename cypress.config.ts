import { defineConfig } from 'cypress';
import task from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
      include: './***',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:8080',
    setupNodeEvents(on, config) {
      task(on, config);

      return config;
    },
  },
});
