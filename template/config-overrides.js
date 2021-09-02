const path = require('path');
const {override, addBabelPlugins, babelInclude, addWebpackModuleRule} = require('customize-cra');

module.exports = override(
  ...addBabelPlugins('@babel/plugin-proposal-class-properties', 'babel-plugin-react-native-web'),
  addWebpackModuleRule({
    test: /\.ttf$/,
    loader: 'url-loader', // or directly file-loader
    include: path.resolve(__dirname, 'node_modules/react-native-vector-icons')
  }),
  babelInclude([
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'node_modules/react-native-elements'),
    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),
    path.resolve(__dirname, 'node_modules/react-native-dynamic-vector-icons'),
    path.resolve(__dirname, 'node_modules/react-native-ratings')
  ])
);
