import {useColorScheme} from 'react-native';
export const Colors = {
  primary: '#1292B4',
  white: '#FFF',
  lighter: '#F3F3F3',
  light: '#DAE1E7',
  dark: '#444',
  darker: '#222',
  black: '#000',
};

export const useStyles = () => {
  // Dark mode theming items
  const isDarkMode = useColorScheme() === 'dark';
  const accentColor = isDarkMode ? Colors.lighter : Colors.darker;
  const primaryColor = isDarkMode ? Colors.darker : Colors.lighter;
  const backgroundStyle = {backgroundColor: Colors.white, flex: 1};

  return {isDarkMode, accentColor, primaryColor, backgroundStyle};
};
