import * as Loaders from '../src/'
const fs = require('fs')

const LOADER_FOLDER = `${process.cwd()}/src/loader`
const TEST_LOADER_FOLDER = `${process.cwd()}/test/loader`

describe('Project Test Coverage', () => {
  it('should have test for each loader', () => {
    const loaderTestFiles:string[] = []
    fs.readdirSync(LOADER_FOLDER).forEach((file:string) => {
      const testFileName = file.replace('.tsx', '.spec.tsx')
      loaderTestFiles.push(testFileName)
    })
    const testFiles = fs.readdirSync(TEST_LOADER_FOLDER).sort()
    expect(loaderTestFiles.sort()).toEqual(testFiles)
  })

  it('Should export all the loader correctly', () => {
    const loaderNames = Object.keys(Loaders)
    const loaderFiles:string[] = []
    fs.readdirSync(LOADER_FOLDER).forEach((file:string) => {
      const testFileName = file.replace('.tsx', '')
      loaderFiles.push(testFileName)
    })
    expect(loaderNames.sort()).toEqual(loaderFiles.sort())
  })
})
