import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Section, DebugInstructions, LearnMoreLinks, Header} from 'app/components';

export const Home = (): JSX.Element => {
  return (
    <View style={styles.background}>
      <ScrollView style={styles.background}>
        <Header />
        <View>
          <Section title='Step One'>
            Edit <Text style={styles.highlight}>src/app/pages/Home.tsx</Text> to change this screen and then
            come back to see your edits.
          </Section>
          <Section title='See Your Changes'>
            <Text>
              Double tap <Text style={styles.highlight}>R</Text> on your keyboard to reload your app's code.
            </Text>
          </Section>
          <Section title='Debug'>
            <DebugInstructions />
          </Section>
          <Section title='Learn More'>Read the docs to discover what to do next:</Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700'
  },
  background: {
    flex: 1
  }
});
