const defaultConfig = require("./jest.config.default");

module.exports = {
    ...defaultConfig,
    testEnvironment: "jsdom"
};
