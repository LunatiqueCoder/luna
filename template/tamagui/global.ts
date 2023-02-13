import {TamaguiInternalConfig} from 'tamagui';
import {shorthands} from '@tamagui/shorthands';
import {themes, tokens} from '@tamagui/themes';
import {AnimationDriver} from '@tamagui/web';
import {animations} from './animations';
import {media} from './mediaQueries';
import fonts from './fonts';

/**
 * Tamagui is currently working to support the latest RN version types.
 *
 * When they are ready, e sure to remove this workaround and
 * set the TamaguiCustomConfig according to
 * https://tamagui.dev/docs/core/configuration
 */
type GetMyClassT<C extends AnimationDriver<any>> = C extends AnimationDriver<
  infer T
>
  ? T
  : {};

declare module 'tamagui' {
  interface TamaguiCustomConfig
    extends TamaguiInternalConfig<
      typeof tokens,
      typeof themes,
      typeof shorthands,
      typeof media,
      GetMyClassT<typeof animations>,
      typeof fonts
    > {}
}

export * from 'tamagui';
