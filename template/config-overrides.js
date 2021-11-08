const path = require('path');
const {
  override,
  addBabelPlugins,
  babelInclude,
  addWebpackModuleRule,
  addExternalBabelPlugins
} = require('customize-cra');

module.exports = override(
  ...addBabelPlugins('babel-plugin-react-native-web'),
  ...addExternalBabelPlugins('@babel/plugin-proposal-class-properties'),
  addWebpackModuleRule({
    test: /\.ttf$/,
    loader: 'url-loader', // or directly file-loader
    include: path.resolve(__dirname, 'node_modules/react-native-vector-icons')
  }),
  addWebpackModuleRule({
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
      loader: 'url-loader',
      options: {
        name: '[name].[ext]',
        esModule: false
      }
    }
  }),
  babelInclude([
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'node_modules/react-native-vector-icons')
  ])
);
