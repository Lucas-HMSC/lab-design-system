module.exports = {
  "stories": [
    "../src/docs",
    "../src/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true,
    "interactionsDebugger": true,
  },
  "staticDirs": [
    "../public"
  ],
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/lab-design-system/'
    }

    return config;
  }
}