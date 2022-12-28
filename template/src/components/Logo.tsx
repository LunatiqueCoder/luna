import React from 'react';
import {SolitoImage} from 'solito/image';
import {StyleProp} from 'react-native';
import {ImageStyle} from 'react-native-fast-image';
import {useColorScheme} from '../hooks';

interface ILogo {
  width?: number;
  height?: number;
  style: StyleProp<ImageStyle>;
}

export const Logo = ({height, width, style}: ILogo) => {
  const colorScheme = useColorScheme();

  return (
    <SolitoImage
      priority
      src={`/images/logo_${colorScheme}.png`}
      alt="logo"
      width={width}
      height={height}
      style={style}
      resizeMode="contain"
    />
  );
};
