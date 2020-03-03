module.exports = (storybookConfig) => {
    storybookConfig.config.resolve.alias = {
        ...storybookConfig.config.resolve.alias,
        "react-dom": "@hot-loader/react-dom",
    };

    return storybookConfig.config;
};
