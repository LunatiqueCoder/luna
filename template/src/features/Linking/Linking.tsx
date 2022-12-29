import React, {ReactNode, Fragment} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking as RNLinking,
  Platform,
} from 'react-native';
import {useStyles, Colors} from '../../hooks';

// *****************************************************************************************************
// This is adapted from this file upstream
// https://github.com/react-native-community/react-native-template-typescript/blob/main/template/App.tsx

const links = [
  {
    id: 1,
    title: '🌘 Luna Wiki',
    link: 'https://github.com/criszz77/luna/wiki',
    description: 'Learn the why and the how of  🌘 Luna implementation.',
  },
  {
    id: 2,
    title: 'React Native Web',
    link: 'https://necolas.github.io/react-native-web/docs/',
    description:
      'Find out how to develop a Web compatibility layer for React Native',
  },
  {
    id: 3,
    title: 'Next.js',
    link: 'https://nextjs.org/',
    description: 'Covers how to use Next.js on web',
  },
  {
    id: 4,
    title: 'Solito',
    link: 'https://reactnative.dev/docs/flexbox',
    description:
      'A tiny wrapper around React Navigation and Next.js that lets you share navigation code across platforms.',
  },
  {
    id: 5,
    title: 'Components',
    link: 'https://reactnative.dev/docs/components-and-apis',
    description: 'The full list of components and APIs inside React Native.',
  },
  {
    id: 6,
    title: 'Navigation',
    link: 'https://reactnative.dev/docs/navigation',
    description:
      'How to handle moving between screens inside your native application.',
  },
  {
    id: 7,
    title: 'Help',
    link: 'https://reactnative.dev/help',
    description:
      'Need more help? There are many other React Native developers who may have the answer.',
  },
  {
    id: 8,
    title: 'Follow us on Twitter',
    link: 'https://twitter.com/reactnative',
    description:
      'Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.',
  },
];

export const LinkList = () => {
  const {primaryColor, accentColor} = useStyles();

  return (
    <View style={styles.container}>
      {links.map(({id, title, link, description}) => (
        <Fragment key={id}>
          <View
            style={[
              styles.separator,
              {
                backgroundColor: primaryColor,
              },
            ]}
          />
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => RNLinking.openURL(link)}
            style={styles.linkContainer}>
            <Text style={styles.link}>{title}</Text>
            <Text
              style={[
                styles.description,
                {
                  color: accentColor,
                },
              ]}>
              {description}
            </Text>
          </TouchableOpacity>
        </Fragment>
      ))}
    </View>
  );
};

const DebugInstructions = Platform.select({
  web: () => (
    <Text>
      <Text style={styles.highlight}>React Dev Tools</Text> supports inspecting
      and editing of <Text style={styles.highlight}>React Native</Text> styles.
      It’s recommended that you rely more on{' '}
      <Text style={styles.highlight}>React Dev Tools</Text> and{' '}
      <Text style={styles.highlight}>live/hot-reloading</Text> rather than
      inspecting and editing the <Text style={styles.highlight}>DOM</Text>{' '}
      directly.
    </Text>
  ),
  ios: () => (
    <Text>
      Press <Text style={styles.highlight}>Cmd + D</Text> in the simulator or{' '}
      <Text style={styles.highlight}>Shake</Text> your device to open the React
      Native debug menu.
    </Text>
  ),
  default: () => (
    <Text>
      Press <Text style={styles.highlight}>Cmd or Ctrl + M</Text> or{' '}
      <Text style={styles.highlight}>Shake</Text> your device to open the React
      Native debug menu.
    </Text>
  ),
});

const ReloadInstructions = Platform.select({
  web: () => <Text>Refresh your browser to reload your app&apos;s code</Text>,
  ios: () => (
    <Text>
      Press <Text style={styles.highlight}>Cmd + R</Text> in the simulator to
      reload your app&apos;s code.
    </Text>
  ),
  default: () => (
    <Text>
      Double tap <Text style={styles.highlight}>R</Text> on your keyboard to
      reload your app&apos;s code.
    </Text>
  ),
});

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
  const {backgroundStyle} = useStyles();

  return (
    <View style={backgroundStyle}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>src/features/Home/Home.tsx</Text>{' '}
          to change this screen and then come back to see your edits.
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
        <LinkList />
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
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.lightBlue,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
});
