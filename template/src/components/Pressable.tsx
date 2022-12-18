import {
  StyleSheet,
  Text,
  Pressable as PressableButton,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {Colors, useStyles} from '../hooks';
import {useLink, UseLinkProps} from 'solito/link';
import {useState} from 'react';

interface IPressable extends UseLinkProps {
  disabled?: boolean;
  title?: string;
  onPress?: () => void;
  pressableStyle?: StyleProp<ViewStyle>;
  hoverTextStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export default function Pressable({
  disabled,
  title = 'Pressable',
  onPress,
  href = '',
  pressableStyle,
  hoverTextStyle,
  labelStyle,
}: IPressable) {
  const linkProps = useLink({
    href,
  });

  const [hovered, setHovered] = useState<boolean>();
  const {accentColor, primaryColor} = useStyles();

  return (
    <PressableButton
      delayLongPress={750}
      disabled={disabled}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={state => [
        styles.pressable,

        {backgroundColor: primaryColor},
        pressableStyle,

        !disabled &&
          state.focused && {
            boxShadow: `0px 0px 0px 1px ${accentColor}`,
          },
        !disabled &&
          state.hovered && {
            backgroundColor: accentColor,
          },

        !disabled && state.pressed && styles.pressed,
        disabled && styles.disabled,
      ]}
      {...(href ? linkProps : {accessibilityRole: 'button', onPress})}>
      <Text
        style={[
          {color: hovered ? primaryColor : accentColor},
          labelStyle,
          hovered && hoverTextStyle,
        ]}>
        {title}
      </Text>
    </PressableButton>
  );
}

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    outlineWidth: 0,
  },
  pressed: {
    backgroundColor: Colors.lightBlue,
  },
  disabled: {
    opacity: 0.5,
  },
});
