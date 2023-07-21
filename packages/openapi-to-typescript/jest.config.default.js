// AUTO-GENERATED FILE - DO NOT EDIT - put your stuff in jest.config.js
export default {
    testEnvironment: "node",
    moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                useESM: true,
            },
        ],
    },
    extensionsToTreatAsEsm: [".ts"],
    testMatch: ["<rootDir>/src/**/*.test.ts?(x)"],
    collectCoverageFrom: ["src/**/*.ts", "!src/proto/**/*"],
};
