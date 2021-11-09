import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Details = (): JSX.Element => (
  <View style={styles.background}>
    <Icon name='rocket' size={30} color='#900' />
    <Text>If you see a rocket, everything is working!</Text>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
