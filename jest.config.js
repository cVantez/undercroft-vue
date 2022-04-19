module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/client/src/$1',
    '^#config/(.*)$': '<rootDir>/server/config/$1'
  }
};
