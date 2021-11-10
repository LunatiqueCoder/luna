import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useColors} from '../hooks/useColors';
import {Details, Home} from './pages';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = (): JSX.Element => {
  const insets = useSafeAreaInsets();
  const {backgroundColor, color} = useColors();

  const screenOptions = {
    tabBarStyle: {backgroundColor, paddingTop: insets.top},
    tabBarLabelStyle: {color},
    tabBarIndicatorStyle: {backgroundColor: color}
  };

  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
      <Tab.Screen component={Home} key={'Home'} name={'Home'} />
      <Tab.Screen component={Details} key={'Details'} name={'Details'} />
    </Tab.Navigator>
  );
};
