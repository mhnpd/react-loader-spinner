import { defineConfig } from 'tsup'
import fs from 'fs'
import path from 'path'

// Dynamically gather loader component entries for potential per-loader deep imports.
// This enables consumers to import e.g. `react-loader-spinner/oval` if desired.
const loaderDir = path.join(__dirname, 'src', 'loader')
const loaderEntries: Record<string, string> = {}
if (fs.existsSync(loaderDir)) {
  for (const file of fs.readdirSync(loaderDir)) {
    if (/\.tsx?$/.test(file)) {
      const base = file.replace(/\.tsx?$/, '')
      loaderEntries[base] = `src/loader/${file}`
    }
  }
}

export default defineConfig([
  {
    entry: {
      index: 'src/index.ts',
      beta: 'src/beta.ts',
      ...loaderEntries
    },
    format: ['esm', 'cjs'],
    dts: true,
    sourcemap: true,
    clean: true,
    minify: true,
    target: 'es2018',
    treeshake: true,
    splitting: false, // Keep single-file outputs per format for simplicity
    external: ['react', 'react-dom', 'styled-components', 'tinycolor2'],
    outExtension({ format }) {
      return {
        js: format === 'cjs' ? '.cjs' : '.mjs'
      }
    },
    esbuildOptions(options) {
      options.jsx = 'automatic'
    }
  }
])
