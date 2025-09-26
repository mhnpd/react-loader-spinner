/* Post-build compatibility script
 * Copies modern output filenames to legacy ones expected by existing consumers:
 * - dist/index.cjs -> dist/main.js
 * - dist/index.mjs -> dist/module.js
 */
const fs = require('fs')
const path = require('path')

const dist = path.join(__dirname, '..', 'dist')
const mappings = [
  ['index.cjs', 'main.js'],
  ['index.mjs', 'module.js']
]

for (const [from, to] of mappings) {
  const src = path.join(dist, from)
  const dest = path.join(dist, to)
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest)
    // eslint-disable-next-line no-console
    console.log(`[postbuild] Copied ${from} -> ${to}`)
  } else {
    // eslint-disable-next-line no-console
    console.warn(`[postbuild] Source file missing: ${from}`)
  }
}
