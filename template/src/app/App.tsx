import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Home, Details} from 'app/pages';

const Tab = createMaterialTopTabNavigator();

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen component={Home} key={'Home'} name={'Home'} />
            <Tab.Screen component={Details} key={'Details'} name={'Details'} />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
