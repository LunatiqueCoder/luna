import React from 'react';
import {Text, TextProps} from 'react-native';
import {useColors} from '../hooks/useColors';

export const StyledText = ({children, style, ...props}: TextProps): JSX.Element => {
  const {color} = useColors();

  return (
    <Text {...props} style={[{color}, style]}>
      {children}
    </Text>
  );
};
