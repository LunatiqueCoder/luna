/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin')

process.env.IGNORE_TS_CONFIG_PATHS = 'true'
process.env.TAMAGUI_TARGET = 'web'
process.env.TAMAGUI_DISABLE_WARN_DYNAMIC_LOAD = '1'

const boolVals = {
  true: true,
  false: false,
}

const disableExtraction =
    boolVals[process.env.DISABLE_EXTRACTION] ?? process.env.NODE_ENV === 'development'

const plugins = [
  withTamagui({
    config: './tamagui',
    components: ['tamagui'],
    logTimings: true,
    disableExtraction,
    // experiment - reduced bundle size react-native-web
    // useReactNativeWebLite: true,
    excludeReactNativeWebExports: [
      'Switch',
      'ProgressBar',
      'Picker',
      'CheckBox',
      'Touchable',
    ],
  }),
]

module.exports = function () {
  /** @type {import('next').NextConfig} */
  let config = {
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      disableStaticImages: true,
    },
    transpilePackages: [
      'solito',
      'react-native-web',
      'expo-linking',
      'expo-constants',
      'expo-modules-core',
      'react-native-safe-area-context',
      'react-native-reanimated',
      'react-native-gesture-handler',
    ],
    experimental: {
      // optimizeCss: true,
      forceSwcTransforms: true,
      scrollRestoration: true,
      legacyBrowsers: false,
    },
  }

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    }
  }

  return config
}
