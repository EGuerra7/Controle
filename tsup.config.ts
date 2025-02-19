import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/server.ts'],
  outDir: 'build',
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  noExternal: ['fastify'],
  ignoreWatch: ['src/**/*.test.ts', 'src/**/*.spec.ts'],
})
