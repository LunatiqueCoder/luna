import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useColors} from '../../../hooks/useColors';
import {StyledText} from '../../../components';

export const Details = (): JSX.Element => {
  const {backgroundColor, color} = useColors();

  return (
    <View style={[styles.background, {backgroundColor}]}>
      <Icon name='rocket' size={30} color={color} />
      <StyledText>If you see a rocket, everything is working!</StyledText>
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
