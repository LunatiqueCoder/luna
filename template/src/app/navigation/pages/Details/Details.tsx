import {Text, StyleSheet, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useColors} from 'app/hooks/useColors';

export const Details = (): JSX.Element => {
  const {isDarkMode, backgroundColor} = useColors();
  const isAndroid = Platform.OS === 'android';

  return (
    <View style={[styles.background, isAndroid && {backgroundColor}]}>
      <Icon name='rocket' size={30} color={isDarkMode && isAndroid ? 'white' : '#900'} />
      <Text>If you see a rocket, everything is working!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
