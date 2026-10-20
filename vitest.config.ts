import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',

    exclude: [
      '**/node_modules/**',
      '**/.git/**',
      'tests/**',
      'test-results/**',
      'playwright-report/**',
    ],

    coverage: {
      provider: 'v8',

      reporter: [
        'text',
        'html',
      ],

      exclude: [
        'node_modules/',
        'src/test/',
        'tests/',
        'test-results/',
        'playwright-report/',
        '**/*.config.*',
      ],
    },
  },
});