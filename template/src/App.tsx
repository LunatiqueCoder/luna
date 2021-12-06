/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import appJson from './app.json';
import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
  // @ts-ignore -- these are not well typed, but are only example screens
} from '../node_modules/react-native/Libraries/NewAppScreen';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {useLinkTo} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {NavigationContainer} from '@react-navigation/native';

// *****************************************************************************************************
// This pasted directly in from this file upstream
// https://github.com/react-native-community/react-native-template-typescript/blob/main/template/App.tsx
// The SafeAreaView and StatusBar are commented as those characteristics are provided by react-navigation
const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}> // <-- provided by react-navigation
    // <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> // <-- provided by react-navigation
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Header />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.tsx</Text> to change this
          screen and then come back to see your edits.
        </Section>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
        <LearnMoreLinks />
      </View>
    </ScrollView>
    // </SafeAreaView> // <-- provided by react-navigation
  );
};

// *****************************************************************************************************
// The rest of the file is to set up a react-navigation and react-native-vector-icons demonstration:
const Tab = createMaterialTopTabNavigator();
const TopTabNavigator = () => {
  // Used for status bar layout in react-navigation
  const insets = useSafeAreaInsets();

  // Allows us to use web-compatible navigation
  const linkTo = useLinkTo();

  // Dark mode theming items
  const isDarkMode = useColorScheme() === 'dark';
  const accentColor = isDarkMode ? Colors.lighter : Colors.darker;
  const primaryColor = isDarkMode ? Colors.darker : Colors.lighter;
  const backgroundStyle = {backgroundColor: primaryColor, flex: 1};

  const DetailsTab = () => (
    <View style={[backgroundStyle, styles.detailsContainer]}>
      <Icon name="rocket" size={30} color={'red'} />
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        If you see a rocket, react-native-vector-icons is working!
      </Text>
    </View>
  );
  const LinkingExample = () => {
    return (
      <View style={[backgroundStyle, styles.detailsContainer]}>
        <Button title="Link to Details" onPress={() => linkTo('/details')} />
      </View>
    );
  };

  const screenOptions = {
    tabBarStyle: {
      backgroundColor: primaryColor,
      paddingTop: insets.top,
    },
    tabBarLabelStyle: {color: isDarkMode ? Colors.light : Colors.dark},
    tabBarIndicatorStyle: {backgroundColor: accentColor},
  };

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen component={App} key={'Home'} name={'Home'} />
      <Tab.Screen component={DetailsTab} key={'Details'} name={'Details'} />
      <Tab.Screen component={LinkingExample} key={'Linking'} name={'Linking'} />
    </Tab.Navigator>
  );
};

const TabbedApp = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer
        linking={{
          prefixes: ['plaut-ro.github.io/luna', 'localhost'],
          config: {
            screens: {
              Details: 'details',
              Linking: 'linking',
              Home: '*', // Fall back to if no routes match
            },
          },
        }}
        documentTitle={{
          formatter: (options, route) =>
            `${appJson.displayName}${
              options?.title || route?.name
                ? ' - ' + options?.title ?? route?.name
                : ' '
            }`,
        }}>
        <TopTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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

export default TabbedApp;
