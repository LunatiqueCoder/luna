import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Details = (): JSX.Element => (
  <SafeAreaView style={styles.background}>
    <Icon name='rocket' size={30} color='#900' />
    <Text>If you see a rocket, everything is working!</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
