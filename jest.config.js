/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  esModuleInterop: false,
  setupFilesAfterEnv: ['<rootDir>/test/config/importJestDOM.ts']
}
