import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/server.ts'],
  outDir: 'build',
  format: ['cjs', 'esm'],
  sourcemap: true,
  dts: true,
})
