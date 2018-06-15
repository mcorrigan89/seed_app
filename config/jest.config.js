const { projectRoot, projectSource } = require('./paths');

module.exports = {
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    `**/routes/**/*.{ts,tsx}`,
    `!**/routes/**/index.{ts,tsx}`
  ],
  coverageReporters: ['json', 'lcov', 'text'],
  coverageDirectory: `${projectRoot}/test_reports/`,
  globals: {
    'ts-jest': {
      tsConfigFile: `${projectRoot}/tsconfig.spec.json`,
      babelConfig: {
        plugins: ["syntax-dynamic-import", "babel-plugin-dynamic-import-node"]
      }
    },
  },
  moduleNameMapper: {
    '@tests/(.*)': `${projectRoot}/tests/$1`,
    '@components/(.*)': `${projectSource}/components/$1`,
    '@helpers/(.*)': `${projectSource}/helpers/$1`,
    '@interfaces/(.*)': `${projectSource}/interfaces/$1`,
    '@routes/(.*)': `${projectSource}/routes/$1`,
    '@store/(.*)': `${projectSource}/store/$1`,
  },
  rootDir: projectRoot,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(tsx?)$': `${projectRoot}/node_modules/ts-jest/preprocessor.js`,
  },
  testMatch: [`${projectRoot}/src/**/*.spec.(ts|js|tsx|jsx)`],
  testEnvironment: 'node',
};
