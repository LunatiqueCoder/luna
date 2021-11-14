import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Section, DebugInstructions, LearnMoreLinks, Header} from 'app/components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useColors} from 'app/hooks/useColors';

export const Home = (): JSX.Element => {
  const {backgroundColor} = useColors();

  return (
    <View style={[styles.background, Platform.OS === 'android' && {backgroundColor}]}>
      <ScrollView style={styles.background}>
        <Header />
        <SafeAreaView>
          <Section title='Step One'>
            Edit <Text style={styles.highlight}>src/app/navigation/pages/Home.tsx</Text> to change this screen
            and then come back to see your edits.
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
        </SafeAreaView>
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
