import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Section } from 'app/components/Section/Section';

export const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? 'black' : 'white'
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior='automatic' style={backgroundStyle}>
        {/*<Header />*/}
        <View
          style={
            {
              // backgroundColor: isDarkMode ? 'black' : 'white'
            }
          }>
          <Section title='Step One'>
            Edit <Text style={styles.highlight}>src/app/App.tsx</Text> to change this screen and then come
            back to see your edits.
          </Section>
          <Section title='See Your Changes'>{/*<ReloadInstructions />*/}</Section>
          <Section title='Debug'>{/*<DebugInstructions />*/}</Section>
          <Section title='Learn More'>Read the docs to discover what to do next:</Section>
          {/*<LearnMoreLinks />*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700'
  }
});
