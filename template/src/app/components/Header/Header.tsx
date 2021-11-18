import {ImageBackground, StyleSheet} from 'react-native';
import {StyledText} from '../StyledText';

export const Header = (): JSX.Element => {
  return (
    <ImageBackground
      accessibilityRole='image'
      source={require('static/assets/logo.png')}
      style={styles.background}
      imageStyle={styles.logo}
    >
      <StyledText style={styles.text}>
        Welcome to
        {'\n'}
        React Native
      </StyledText>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32
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
    marginBottom: -192
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center'
  }
});
