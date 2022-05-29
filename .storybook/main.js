module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // additional
    "@storybook/preset-scss",
    "storybook-addon-paddings",
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",

  //  Code splitting
  features: {
    storyStoreV7: true,
  },

  // Extend webpack config
  webpackFinal: async (config, { configType }) => {
    let rule = config.module.rules.find(
      (rule) =>
        // it can be another rule with file loader
        // we should get only svg related
        rule.test &&
        rule.test.toString().includes("svg") &&
        // file-loader might be resolved to js file path so "endsWith" is not reliable enough
        rule.loader &&
        rule.loader.includes("file-loader")
    );
    rule.test =
      /\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\\?.*)?$/;

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    // Return the altered config
    return config;
  },
};
