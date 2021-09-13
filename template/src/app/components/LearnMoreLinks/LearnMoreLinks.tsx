import React, {FC, Fragment} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Linking} from 'react-native';
import {links} from 'static/constants';

export const LearnMoreLinks: FC = () => {
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
