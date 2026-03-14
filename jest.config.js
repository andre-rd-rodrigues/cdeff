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
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^public/(.*)$": "<rootDir>/__mocks__/fileMock.js",
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i": "<rootDir>/__mocks__/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
    "@next/font/(.*)": `<rootDir>/__mocks__/nextFontMock.js`,
    "next/font/(.*)": `<rootDir>/__mocks__/nextFontMock.js`,
    "server-only": `<rootDir>/__mocks__/empty.js`
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
