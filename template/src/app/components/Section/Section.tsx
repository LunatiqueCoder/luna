import {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {StyledText} from '../StyledText';

interface ISection {
  children?: ReactNode;
  title: string;
}

export const Section = ({children, title}: ISection): JSX.Element => {
  return (
    <View style={styles.sectionContainer}>
      <StyledText style={styles.sectionTitle}>{title}</StyledText>
      <StyledText style={styles.sectionDescription}>{children}</StyledText>
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
