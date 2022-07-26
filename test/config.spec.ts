const fs = require('fs')

const LOADER_FOLDER = `${process.cwd()}/src/loader`
const TEST_LOADER_FOLDER = './test/loader'

describe('project', () => {
  it('should have test for each loader', () => {
    const loaderTestFiles:string[] = []
    fs.readdirSync(LOADER_FOLDER).forEach((file:string) => {
      const testFileName = file.replace('.tsx', '.spec.tsx')
      loaderTestFiles.push(testFileName)
    })
    expect(loaderTestFiles).toEqual(fs.readdirSync(TEST_LOADER_FOLDER))
  })
})
