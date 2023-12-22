import * as Loaders from '../src/'
import {
  readFilesFromFolder,
  SOURCE_FOLDER,
  TEST_FOLDER,
  DOCS_FOLDER,
  removeExtension,
  transformNameToDash,
} from './utils'

const Spinners = readFilesFromFolder(SOURCE_FOLDER).map(removeExtension)
const Tests = readFilesFromFolder(TEST_FOLDER).map(removeExtension)
const Docs = readFilesFromFolder(DOCS_FOLDER)
  .filter(i => !i.includes('.json'))
  .map(removeExtension)

const exportedSpinner = Object.keys(Loaders).map(transformNameToDash)

describe('Project Test Coverage', () => {
  it('should have same number of loaders and tests', () => {
    expect(Spinners.length).toEqual(Tests.length)
    expect(Spinners.length).toEqual(Docs.length)
  })

  it('should have same names for loaders and tests', () => {
    Spinners.forEach(spinner => {
      expect(Tests).toContain(spinner)
    })

    Spinners.forEach(spinner => {
      expect(Docs).toContain(spinner)
    })
  })

  it('should have same names for tests and docs', () => {
    Tests.forEach(test => {
      expect(Docs).toContain(test)
    })
  })

  it('should have same names for exported spinners and tests', () => {
    exportedSpinner.forEach(spinner => {
      expect(Spinners).toContain(spinner)
    })
  })
})
