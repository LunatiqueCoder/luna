import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ISection {
  children?: ReactNode;
  title: string;
}

export const Section = ({children, title}: ISection): JSX.Element => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
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
