// babel.config.js
module.exports = function (api) {
  // Detect web usage (this may change in the future if Next.js changes the loader)
  const isWeb = api.caller(
    caller =>
      caller &&
      (caller.name === 'babel-loader' ||
        caller.name === 'next-babel-turbo-loader'),
  );

  return {
    presets: [
      // Only use next in the browser, it'll break your native project
      isWeb && require('next/babel'),
      [
        'module:metro-react-native-babel-preset',
        {useTransformReactJSXExperimental: true},
      ],
    ].filter(Boolean),
    plugins: [
      'react-native-reanimated/plugin',
      ['@babel/plugin-transform-flow-strip-types'],
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic',
        },
      ],
    ],
  };
};
