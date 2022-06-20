module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', './jest.setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
}
