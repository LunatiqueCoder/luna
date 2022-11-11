/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import appJson from './app.json';

import {
  initialWindowMetrics,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useStyles} from './hooks';
import {Home} from './features/Home';
import {Linking} from './features/Linking';
const Tab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  // Used for status bar layout in react-navigation
  const insets = useSafeAreaInsets();

  const {isDarkMode, accentColor, primaryColor} = useStyles();

  const screenOptions = {
    tabBarStyle: {
      backgroundColor: primaryColor,
      paddingTop: insets.top,
    },
    tabBarLabelStyle: {color: isDarkMode ? 'white' : 'black'},
    tabBarIndicatorStyle: {backgroundColor: accentColor},
  };

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen component={Home} key={'home'} name={'home'} />
      <Tab.Screen component={Linking} key={'home'} name={'linking'} />
    </Tab.Navigator>
  );
};

const TabbedApp = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer
        linking={{
          prefixes: ['criszz77.github.io/luna', 'localhost'],
          config: {
            screens: {
              linking: '/linking',
              home: '',
            },
          },
        }}
        documentTitle={{
          formatter: (options, route) =>
            `${appJson.displayName}${
              options?.title || route?.name
                ? ' - ' + options?.title ?? route?.name
                : ' '
            }`,
        }}>
        <TopTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default TabbedApp;
