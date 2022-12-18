import {ReactNode} from 'react';
import {ScrollView, StyleSheet, Text, View, StatusBar} from 'react-native';
import {useStyles} from '../../hooks';

// *****************************************************************************************************
// This is adapted from this file upstream
// https://github.com/react-native-community/react-native-template-typescript/blob/main/template/App.tsx
interface ISection {
  title: string;
  children?: ReactNode;
}

const Section = ({children, title}: ISection) => {
  const {accentColor} = useStyles();

  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, {color: accentColor}]}>{title}</Text>
      <Text style={[styles.sectionDescription, {color: accentColor}]}>
        {children}
      </Text>
    </View>
  );
};

export const Linking = () => {
  const {backgroundStyle, isDarkMode} = useStyles();

  return (
    <View style={backgroundStyle}>
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>src/features/Home/Home.tsx</Text>{' '}
          to change this screen and then come back to see your edits.
        </Section>
        <Section title="See Your Changes" />
        <Section title="Debug" />
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
