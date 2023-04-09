import {AppConfig} from './tamagui.config';

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export * from 'tamagui';
