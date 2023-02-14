import {createTamagui} from 'tamagui';
import {shorthands} from '@tamagui/shorthands';
import {themes, tokens} from '@tamagui/themes';
import {media, mediaQueryDefaultActive} from './mediaQueries';
import {animations} from './animations';
import fonts from './fonts';

/* Alter the themes however you wish */
themes.light_Button.background = 'hsl(0, 0%, 92%)';
themes.light.background = 'rgb(242, 242, 242)'; // @react-navigation - DefaultTheme.colors.background

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

export default appConfig;
