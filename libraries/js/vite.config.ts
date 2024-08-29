import { defineConfig } from 'vite';
// import { resolve } from 'pathe';
// import dts from 'vite-plugin-dts';

export default defineConfig({
  // plugins: [dts({ insertTypesEntry: true })],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    coverage: {
      exclude: ['src/**/types.ts'],
    },
    mockReset: true,
  },
});
