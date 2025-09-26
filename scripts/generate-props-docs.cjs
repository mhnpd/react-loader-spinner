#!/usr/bin/env node
/*
 * Generates component prop metadata JSON files for docs consumption using react-docgen-typescript.
 */
const fs = require('fs')
const path = require('path')
const { withCustomConfig } = require('react-docgen-typescript')

const tsconfigPath = path.join(__dirname, '..', 'tsconfig.json')
const srcDir = path.join(__dirname, '..', 'src', 'loader')
// Place generated prop metadata inside docs/static so it is served as static assets.
const outDir = path.join(__dirname, '..', 'docs', 'static', 'generated', 'props')

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

const parser = withCustomConfig(tsconfigPath, {
  savePropValueAsString: true,
  shouldExtractLiteralValuesFromEnum: true,
  shouldExtractValuesFromUnion: true,
})

const loaderFiles = fs
  .readdirSync(srcDir)
  .filter(f => f.endsWith('.tsx'))
  .map(f => path.join(srcDir, f))

let total = 0
for (const file of loaderFiles) {
  try {
    const docs = parser.parse(file)
    for (const doc of docs) {
      const component = doc.displayName
      const simplified = Object.entries(doc.props || {}).map(([name, meta]) => ({
        name,
        required: meta.required || false,
        type: meta.type?.name || 'unknown',
        description: meta.description || '',
        defaultValue: meta.defaultValue?.value || undefined,
      }))
      const outFile = path.join(outDir, `${component}.json`)
      fs.writeFileSync(outFile, JSON.stringify(simplified, null, 2))
      total++
    }
  } catch (e) {
    // Ignore files without exported components.
  }
}

