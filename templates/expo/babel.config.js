module.exports = function (api) {
  api.cache(true)
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
      // if you want reanimated support
      'react-native-reanimated/plugin',
      ...(process.env.EAS_BUILD_PLATFORM === 'android'
          ? []
          : [
            [
              '@tamagui/babel-plugin',
              {
                config: './tamagui',
                components: ['tamagui'],
              },
            ],
          ]),
      [
        'transform-inline-environment-variables',
        {
          include: 'TAMAGUI_TARGET',
        },
      ],
    ],
  }
}
