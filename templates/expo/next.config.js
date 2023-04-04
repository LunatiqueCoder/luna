const {withTamagui} = require('@tamagui/next-plugin');

/** @type {import('next').NextConfig.transpilePackages} */
const transpilePackages = [
  'solito',
  'react-native-safe-area-context',
  'react-native-reanimated',
  'react-native-gesture-handler',
];

const plugins = [
  withTamagui({
    config: './tamagui',
    components: ['tamagui'],
    excludeReactNativeWebExports: [
      'Switch',
      'ProgressBar',
      'Picker',
      'CheckBox',
      'Touchable',
    ],
  }),
];

module.exports = function () {
  /** @type {import('next').NextConfig} */
  let config = {
    transpilePackages,
    experimental: {
      forceSwcTransforms: true,
      //   swcPlugins: [['react-native-reanimated-swc-plugin']],
    },
  };

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    };
  }

  return config;
};
