/**
 * @format
 */

import 'react-native';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// FIXME need reanimated update, see https://github.com/software-mansion/react-native-reanimated/issues/3355
if (process.browser) {
  // @ts-ignore
  window._frameTimestamp = null;
}

it('renders correctly', () => {
  renderer.create(<App />);
});
