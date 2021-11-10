import {Platform, useColorScheme} from 'react-native';

interface IColors {
  backgroundColor: string;
  color: string;
  isDarkMode: boolean;
}

export const useColors = (): IColors => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundColor = Platform.select({
    ios: isDarkMode ? 'black' : 'white',
    android: isDarkMode ? '#1C2833' : 'white',
    default: 'white'
  });

  const color = Platform.select({
    ios: isDarkMode ? 'white' : 'black',
    android: isDarkMode ? 'white' : '#1C2833',
    default: 'black'
  });

  return {isDarkMode, backgroundColor, color};
};
