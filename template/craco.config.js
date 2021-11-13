const {addBeforeLoader, loaderByName} = require('@craco/craco');

module.exports = {
  babel: {
    presets: ['@babel/preset-react'],
    plugins: [
      'babel-plugin-react-native-web',
      '@babel/plugin-proposal-class-properties',
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic'
        }
      ]
    ]
  },
  webpack: {
    configure: (webpackConfig) => {
      const imageLoader = {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            esModule: false
          }
        }
      };

      addBeforeLoader(webpackConfig, loaderByName('url-loader'), imageLoader);

      return webpackConfig;
    }
  }
};
