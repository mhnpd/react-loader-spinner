import * as fs from 'fs'

export const SOURCE_FOLDER = `${process.cwd()}/src/loader`
export const TEST_FOLDER = `${process.cwd()}/test/loader`
export const DOCS_FOLDER = `${process.cwd()}/docs/docs/components`

// transform same-name to PascalCase
export function transformName(name: string): string {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

// fns to transfer PascalCase to same-name
export function transformNameToDash(name: string): string {
  // special case for DNA
  if (name === 'DNA') {
    return 'dna'
  }
  return name
    .split(/(?=[A-Z])/)
    .map(word => word.toLowerCase())
    .join('-')
}

// fun to read a files from a folder
export function readFilesFromFolder(folder: string): string[] {
  const files: string[] = []
  fs.readdirSync(folder).forEach((file: string) => {
    files.push(file)
  })
  return files
}

export function removeExtension(name: string): string {
  return name.split('.')[0]
}
