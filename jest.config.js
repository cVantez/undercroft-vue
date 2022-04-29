module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/client/src/$1',
    '^#scss/(.*)$': '<rootDir>/client/src/scss/$1',
    '^#config/(.*)$': '<rootDir>/server/config/$1',
    '^#routes/(.*)$': '<rootDir>/server/routes/$1'
  }
};
