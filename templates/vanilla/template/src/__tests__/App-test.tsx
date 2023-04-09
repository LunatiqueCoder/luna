/**
 * @format
 */

import 'react-native';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

it('renders correctly', () => {
  renderer.create(<App />);
});
