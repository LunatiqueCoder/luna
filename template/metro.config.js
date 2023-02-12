/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  serializer: {
    processModuleFilter: module =>
      !module.path.match(
        '/node_modules/(((react-native-)?web|reanimated-swc-plugin)|react-dom|sharp)/',
      ),
  },
};
