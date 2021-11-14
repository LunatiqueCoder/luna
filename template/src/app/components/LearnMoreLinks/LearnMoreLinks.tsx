import {Fragment} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Linking, Platform} from 'react-native';
import {links} from 'static/constants';
import {useColors} from 'app/hooks/useColors';

export const LearnMoreLinks = (): JSX.Element => {
  const {isDarkMode} = useColors();
  const isAndroid = Platform.OS === 'android';

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
            <Text style={[styles.link, {color: isDarkMode && isAndroid ? '#b19cd9' : '#0645AD'}]}>
              {title}
            </Text>
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
    fontWeight: '400'
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
