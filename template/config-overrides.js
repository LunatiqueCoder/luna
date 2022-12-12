const {
  override,
  addBabelPlugins,
  addExternalBabelPlugins,
  addWebpackPlugin,
} = require('customize-cra');

const {DefinePlugin} = require('webpack');

module.exports = override(
  ...addBabelPlugins('babel-plugin-react-native-web'),
  ...addExternalBabelPlugins(
    'react-native-web',
    [
      // Enable new JSX Transform from React
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    ['@babel/plugin-proposal-private-methods', {loose: true}],
    ['@babel/plugin-proposal-private-property-in-object', {loose: true}],
  ),
  addWebpackPlugin(
    new DefinePlugin({
      // `process.env.NODE_ENV === 'production'` must be `true` for production
      // builds to eliminate development checks and reduce build size. You may
      // wish to include additional optimizations.
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
      __DEV__: process.env.NODE_ENV !== 'production',
    }),
  ),
);
