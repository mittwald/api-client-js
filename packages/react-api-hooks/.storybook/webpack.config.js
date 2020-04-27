const path = require("path");

module.exports = (storybookConfig) => {
    storybookConfig.config.resolve.alias = {
        ...storybookConfig.config.resolve.alias,
        "react-dom": "@hot-loader/react-dom",
    };

    storybookConfig.config.module.rules.push({
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "../src"),
        use: [
            {
                loader: require.resolve("react-docgen-typescript-loader"),
                options: {
                    propFilter: (prop) => {
                        if (prop.parent) {
                            return !prop.parent.fileName.includes("node_modules");
                        }

                        return true;
                    },
                },
            },
        ],
    });

    storybookConfig.config.resolve.extensions.push(".ts", ".tsx");

    return storybookConfig.config;
};
