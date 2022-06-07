const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@element/(.*)$": "<rootDir>/app/components/elements/$1",
    "^@common/(.*)$": "<rootDir>/app/components/common/$1",
    "^@layout/(.*)$": "<rootDir>/app/components/layouts/$1",
    "^@template/(.*)$": "<rootDir>/app/components/templates/$1",
    "^@module/(.*)$": "<rootDir>/app/components/modules/$1",
    "^@constant/(.*)$": "<rootDir>/app/constants/$1",
    "^@context/(.*)$": "<rootDir>/app/context/$1",
    "^@hook/(.*)$": "<rootDir>/app/hooks/$1",
    "^@util/(.*)$": "<rootDir>/app/utils/$1",
    "^@api/(.*)$": "<rootDir>/app/api/$1",
    "^@lib/(.*)$": "<rootDir>/app/lib/$1",
    "^@redux/(.*)$": "<rootDir>/app/redux/$1",
    "^@fsTypes/(.*)$": "<rootDir>/app/types/$1",
    "^@schemas/(.*)$": "<rootDir>/app/schemas/$1",
    "^@pages/(.*)$": "<rootDir>/pages/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
