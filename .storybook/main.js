module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // additional
    "@storybook/preset-scss",
    "storybook-addon-paddings",
  ],
  framework: "@storybook/react",
};
