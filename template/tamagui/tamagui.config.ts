import {createTamagui} from 'tamagui';
import {shorthands} from '@tamagui/shorthands';
import {themes, tokens} from '@tamagui/theme-base';
import {media, mediaQueryDefaultActive} from './mediaQueries';
import {animations} from './animations';
import fonts from './fonts';

const appConfig = createTamagui({
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  animations,
  fonts,
  shorthands,
  themes,
  tokens,
  media,
});

//@ts-ignore
appConfig.mediaQueryDefaultActive = mediaQueryDefaultActive;

export type AppConfig = typeof appConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
