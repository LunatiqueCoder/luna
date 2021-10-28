/**
 * @format
 */

import 'react-native';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore -- the import is needed for tests
import React from 'react';
import App from '../app/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
