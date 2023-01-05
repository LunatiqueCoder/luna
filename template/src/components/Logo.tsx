import React from 'react';
import {SolitoImage} from 'solito/image';
import {Platform, useColorScheme} from 'react-native';
import {useLink} from 'solito/link';
import {Button, useMedia} from 'tamagui';
import {tokens} from '@tamagui/theme-base';

const logoMediaQuery = (size: keyof typeof tokens.size) => {
  const dimensions = {
    width: tokens.size[size].val,
    height: tokens.size[size].val,
  };

  // might be fixed by: https://github.com/nandorojo/solito/pull/268
  return Platform.OS === 'web'
    ? dimensions
    : {
        style: dimensions,
      };
};

export const Logo = () => {
  const media = useMedia();
  const colorScheme = useColorScheme() || 'light';
  const linkProps = useLink({
    href: '/',
  });

  return (
    <Button
      size={'$6'}
      chromeless
      focusStyle={{}}
      icon={
        <SolitoImage
          priority
          src={`/images/logo_${colorScheme}.png`}
          alt="logo"
          resizeMode="contain"
          {...logoMediaQuery(8)}
          {...(media.gtSm && {
            ...logoMediaQuery(9),
          })}
          {...(media.gtMd && {
            ...logoMediaQuery(9),
          })}
          {...(media.gtLg && {
            ...logoMediaQuery(10),
          })}
          {...(media.gtXl && {
            ...logoMediaQuery(10),
          })}
        />
      }
      {...linkProps}
    />
  );
};
