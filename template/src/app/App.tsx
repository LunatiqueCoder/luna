import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Home, Details} from 'app/pages';
import {StatusBar, useColorScheme} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
              tabBarStyle: {backgroundColor: isDarkMode ? 'black' : 'white'},
              tabBarLabelStyle: {color: isDarkMode ? 'white' : 'black'}
            }}
          >
            <Tab.Screen component={Home} key={'Home'} name={'Home'} />
            <Tab.Screen component={Details} key={'Details'} name={'Details'} />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
