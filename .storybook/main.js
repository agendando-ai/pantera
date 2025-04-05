import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  viteFinal: (config) => {
    // Alias react-native para react-native-web
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native": "react-native-web",
    };

    // Extensões extras se necessário
    config.resolve.extensions = [
      ...(config.resolve.extensions || []),
      ".web.js",
      ".js",
      ".ts",
      ".tsx",
    ];

    return config;
  },
};
export default config;
