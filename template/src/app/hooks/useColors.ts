import {useColorScheme} from 'react-native';

interface IColors {
  backgroundColor: string;
  color: string;
  isDarkMode: boolean;
}

export const useColors = (): IColors => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode ? '#1C2833' : 'white';
  const color = isDarkMode ? 'white' : '#1C2833';

  return {isDarkMode, backgroundColor, color};
};
