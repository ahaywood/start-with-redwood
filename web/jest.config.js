// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build

const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/web',
  moduleNameMapper: {
    '^@startRW/(.*)$': '<rootDir>/web/src/components/admin/$1',
  },
}

module.exports = config
