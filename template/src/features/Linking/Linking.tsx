import {useLink} from 'solito/link';
import {Button, StyleSheet, View} from 'react-native';
import {useStyles} from '../../hooks';

export const Linking = () => {
  // Allows us to use web-compatible navigation
  const linkProps = useLink({
    href: '/',
  });
  const {backgroundStyle} = useStyles();

  return (
    <View style={[backgroundStyle, styles.detailsContainer]}>
      <Button title="Link to Home" {...linkProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
