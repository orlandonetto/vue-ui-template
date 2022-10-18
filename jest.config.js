module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: ["**/unit/*.spec.js"],
  setupFiles: ["./tests/setup.js"],
  collectCoverage: true,
  collectCoverageFrom: ["src/components/**/*.vue", "!**/node_modules/**"],
  coverageDirectory: "./coverage",
  coverageReporters: ["text", "text-summary"],
  coveragePathIgnorePatterns: ["/node_modules/", "/src/assets"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
