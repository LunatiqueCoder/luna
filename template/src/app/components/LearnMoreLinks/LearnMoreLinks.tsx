import {StyleSheet, Text, TouchableOpacity, useColorScheme, View, Linking} from 'react-native';
import React, {Fragment} from 'react';

const links = [
  {
    id: 1,
    title: 'The Basics',
    link: 'https://reactnative.dev/docs/tutorial',
    description: 'Explains a Hello World for React Native.'
  },
  {
    id: 2,
    title: 'Style',
    link: 'https://reactnative.dev/docs/style',
    description: 'Covers how to use the prop named style which controls the visuals.'
  },
  {
    id: 3,
    title: 'Layout',
    link: 'https://reactnative.dev/docs/flexbox',
    description: 'React Native uses flexbox for layout, learn how it works.'
  },
  {
    id: 4,
    title: 'Components',
    link: 'https://reactnative.dev/docs/components-and-apis',
    description: 'The full list of components and APIs inside React Native.'
  },
  {
    id: 5,
    title: 'Navigation',
    link: 'https://reactnative.dev/docs/navigation',
    description: 'How to handle moving between screens inside your application.'
  },
  {
    id: 6,
    title: 'Networking',
    link: 'https://reactnative.dev/docs/network',
    description: 'How to use the Fetch API in React Native.'
  },
  {
    id: 7,
    title: 'Help',
    link: 'https://reactnative.dev/help',
    description: 'Need more help? There are many other React Native developers who may have the answer.'
  },
  {
    id: 8,
    title: 'Follow us on Twitter',
    link: 'https://twitter.com/reactnative',
    description:
      'Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.'
  }
];

export const LearnMoreLinks = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      {links.map(({id, title, link, description}) => (
        <Fragment key={id}>
          <View style={styles.separator} />
          <TouchableOpacity
            accessibilityRole='button'
            onPress={() => Linking.openURL(link)}
            style={styles.linkContainer}
          >
            <Text style={styles.link}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </TouchableOpacity>
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: '#0645AD'
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black',
    opacity: 0.3
  }
});
