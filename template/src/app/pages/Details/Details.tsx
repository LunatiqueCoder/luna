import React from 'react';
import {Text, StyleSheet, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useColors} from 'app/hooks/useColors';

export const Details = (): JSX.Element => {
  const {backgroundColor} = useColors();

  return (
    <View style={[styles.background, Platform.OS === 'android' && {backgroundColor}]}>
      <Icon name='rocket' size={30} color='#900' />
      <Text>If you see a rocket, everything is working!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
