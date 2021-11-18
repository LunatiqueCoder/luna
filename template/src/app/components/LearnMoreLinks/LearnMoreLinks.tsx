import {Fragment} from 'react';
import {StyleSheet, TouchableOpacity, View, Linking} from 'react-native';
import {links} from 'static/constants';
import {useColors} from 'app/hooks/useColors';
import {StyledText} from '../StyledText';

export const LearnMoreLinks = (): JSX.Element => {
  const {isDarkMode} = useColors();

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
            <StyledText style={[styles.link, {color: isDarkMode ? '#b19cd9' : '#0645AD'}]}>
              {title}
            </StyledText>
            <StyledText style={styles.description}>{description}</StyledText>
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
