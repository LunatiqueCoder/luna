const {
  addBeforeLoader,
  loaderByName,
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES,
} = require('@craco/craco');
import type {CracoConfig} from '@craco/types';

const {DefinePlugin} = require('webpack');
const Dotenv = require('dotenv-webpack');

const config: CracoConfig = {
  babel: {
    presets: [
      // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
      [
        'module:metro-react-native-babel-preset',
        {useTransformReactJSXExperimental: true},
      ],
    ],

    plugins: [
      // https://necolas.github.io/react-native-web/docs/setup/#package-optimization
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
    ],
    loaderOptions: {
      /* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
    },
    // loaderOptions: (babelLoaderOptions, {env, paths}) => {
    //   return babelLoaderOptions;
    // }
  },
  webpack: {
    plugins: {
      add: [
        new Dotenv(),
        new DefinePlugin({
          // `process.env.NODE_ENV === 'production'` must be `true` for production
          // builds to eliminate development checks and reduce build size. You may
          // wish to include additional optimizations.
          // 'process.env.NODE_ENV': JSON.stringify(
          //   process.env.NODE_ENV || 'development',
          // ),
          __DEV__: process.env.NODE_ENV !== 'production',
        }),
        // plugin1,
        // [plugin2, 'append'],
        // [plugin3, 'prepend'] /* Specify if plugin should be appended or prepended */
      ] /* An array of plugins */,
    },
    configure: (webpackConfig, {env, paths}) => {
      const imageLoader = {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            esModule: false,
          },
        },
      };

      addBeforeLoader(webpackConfig, loaderByName('url-loader'), imageLoader);

      return webpackConfig;
    },
  },
};

module.exports = config;
