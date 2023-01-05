const {DefinePlugin} = require('webpack');

const colorSchemeHeaders = [
  {
    key: 'Accept-CH',
    value: 'Sec-CH-Prefers-Color-Scheme',
  },
  {
    key: 'Vary',
    value: 'Sec-CH-Prefers-Color-Scheme',
  },
  {
    key: 'Critical-CH',
    value: 'Sec-CH-Prefers-Color-Scheme',
  },
];

/** @type {import('next').NextConfig.transpilePackages} */
const transpilePackages = [
  'react-native',
  'react-native-gesture-handler',
  'react-native-safe-area-context',
  'react-native-reanimated',
  'solito',
];

/** @type {import('next').NextConfig.headers} */
const headers = async () => {
  return [
    {
      // Apply these headers to all routes in your application.
      source: '/:path*',
      headers: [...colorSchemeHeaders],
    },
  ];
};

/** @type {import('next').NextConfig.webpack} */
const webpack = (config, options) => {
  // Mix in aliases
  if (!config.resolve) {
    config.resolve = {};
  }

  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    // Alias direct react-native imports to react-native-web
    'react-native$': 'react-native-web',
    // Alias internal react-native modules to react-native-web
    'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter$':
      'react-native-web/dist/vendor/react-native/NativeEventEmitter/RCTDeviceEventEmitter',
    'react-native/Libraries/vendor/emitter/EventEmitter$':
      'react-native-web/dist/vendor/react-native/emitter/EventEmitter',
    'react-native/Libraries/EventEmitter/NativeEventEmitter$':
      'react-native-web/dist/vendor/react-native/NativeEventEmitter',
  };

  config.resolve.extensions = [
    '.web.js',
    '.web.jsx',
    '.web.ts',
    '.web.tsx',
    ...(config.resolve?.extensions ?? []),
  ];

  if (!config.plugins) {
    config.plugins = [];
  }

  // Expose __DEV__ from Metro.
  config.plugins.push(
    new DefinePlugin({
      __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
    }),
  );

  return config;
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages,
  headers,
  webpack,
};

module.exports = nextConfig;
