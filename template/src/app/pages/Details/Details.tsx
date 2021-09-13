import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

export const Details = () => (
  <SafeAreaView style={styles.background}>
    <Text>In progress...</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
