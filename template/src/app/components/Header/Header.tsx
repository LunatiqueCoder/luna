import React from 'react';
import {ImageBackground, StyleSheet, Text, useColorScheme} from 'react-native';

export const Header = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <ImageBackground
      accessibilityRole="image"
      source={require('static/assets/logo.png')}
      style={[
        styles.background,
        {
         flex: 1 // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        },
      ]}
      // imageStyle={styles.logo}
    >
      {/*<HermesBadge />*/}
      <Text
        style={[
          styles.text,
          {
            // color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Welcome to
        {'\n'}
        React Native
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
});
