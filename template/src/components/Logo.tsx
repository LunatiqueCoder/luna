import React from 'react';
import {SolitoImage} from 'solito/image';
import {StyleProp, Pressable, ViewStyle} from 'react-native';
import {ImageStyle} from 'react-native-fast-image';
import {useColorScheme} from '../hooks';
import {useLink} from 'solito/link';

interface ILogo {
  width?: number;
  height?: number;
  containerStyle?: StyleProp<ViewStyle>;
  style: StyleProp<ImageStyle>;
}

export const Logo = ({height, width, style, containerStyle}: ILogo) => {
  const colorScheme = useColorScheme();
  const linkProps = useLink({
    href: '/',
  });

  return (
    <Pressable style={containerStyle} {...linkProps}>
      <SolitoImage
        priority
        src={`/images/logo_${colorScheme}.png`}
        alt="logo"
        width={width}
        height={height}
        style={style}
        resizeMode="contain"
      />
    </Pressable>
  );
};
