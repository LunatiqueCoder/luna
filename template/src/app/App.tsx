import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {useColors} from 'app/hooks/useColors';
import {TopTabNavigator} from 'app/navigation/TopTabNavigator';

const App = (): JSX.Element => {
  const {isDarkMode, backgroundColor} = useColors();

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundColor} />
      <NavigationContainer>
        <TopTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
