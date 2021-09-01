module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'react-hooks'],
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard'
  ],
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['./src']
      }
    }
  },
  ignorePatterns:['.eslintrc.js','*config*'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-shadow': 'warn',
    'no-unused-vars': 'off',
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-key': ['warn', {checkFragmentShorthand: true, checkKeyMustBeforeSpread: true}],
    'react/jsx-sort-props': [
      'error',
      {
        // callbacksLast: true,
        // shorthandFirst: true,
        // shorthandLast: false,
        ignoreCase: true
        // noSortAlphabetically: false,
        // ReservedFirst: true
      }
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-array-index-key': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    'react/sort-prop-types': ['error', {ignoreCase: true}],
  }
};
