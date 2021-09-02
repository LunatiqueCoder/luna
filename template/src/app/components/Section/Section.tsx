import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Section = ({children, title}: any) => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            // color: isDarkMode ? 'black' : 'white'
          }
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            // color: isDarkMode ? 'black' : 'white'
          }
        ]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400'
  }
});
