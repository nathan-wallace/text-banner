

/** @type { import('@storybook/react-vite').StorybookConfig } */
import commonjs from 'vite-plugin-commonjs'
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false, // Disables the actions tab
      },
    },
    '@storybook/addon-a11y', // Adds the a11y tab
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  viteFinal: async (config, { configType }) => {
    const defaultBase = configType === 'PRODUCTION' ? './' : '/';
    const base = process.env.STORYBOOK_BASE || defaultBase;
    config.base = base;
    console.log('Vite base path set to:', config.base);
    return config;
  },
};
export default config;