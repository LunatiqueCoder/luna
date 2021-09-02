import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Home} from 'app/pages/Home';
import {Details} from 'app/pages/Details';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen component={Home} key={'Home'} name={'Home'} />
          <Tab.Screen component={Details} key={'Details'} name={'Details'} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
