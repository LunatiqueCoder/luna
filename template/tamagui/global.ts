import {TamaguiInternalConfig} from 'tamagui';
import {shorthands} from '@tamagui/shorthands';
import {themes, tokens} from '@tamagui/theme-base';
import {media} from './mediaQueries';
import fonts from './fonts';

type animations = {
  fast: {type: 'spring'; damping: number; mass: number; stiffness: number};
  medium: {type: 'spring'; damping: number; mass: number; stiffness: number};
  slow: {type: 'spring'; damping: number; stiffness: number};
};

declare module 'tamagui' {
  interface TamaguiCustomConfig
    extends TamaguiInternalConfig<
      typeof tokens,
      typeof themes,
      typeof shorthands,
      typeof media,
      animations,
      typeof fonts
    > {}
}

export * from 'tamagui';
