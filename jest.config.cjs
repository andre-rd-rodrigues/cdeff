module.exports = {
  coverageProvider: "v8",
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!src/data/**",
    "!src/messages/**",
    "!src/test-utils/**"
  ],
  moduleNameMapper: {
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.cjs",
    "^public/(.*)$": "<rootDir>/__mocks__/fileMock.cjs",
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i": "<rootDir>/__mocks__/fileMock.cjs",
    "^@/(.*)$": "<rootDir>/src/$1",
    "@next/font/(.*)": `<rootDir>/__mocks__/nextFontMock.cjs`,
    "next/font/(.*)": `<rootDir>/__mocks__/nextFontMock.cjs`,
    "server-only": `<rootDir>/__mocks__/empty.cjs`
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }]
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};
