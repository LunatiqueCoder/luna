import {useColorScheme} from 'react-native';

export const Colors = {
  white: '#FFF',
  black: '#000',
  light: '#DAE1E7',
  lighter: '#F3F3F3',
  dark: '#444',
  darker: '#222',
  lightBlue: '#add8e6',
  sereneBlue: '#1292B4',
  benitoite: '#007DAA',
};

export const useStyles = () => {
  // Dark mode theming items
  const isDarkMode = useColorScheme() === 'dark';
  const accentColor = isDarkMode ? Colors.light : Colors.dark;
  const primaryColor = isDarkMode ? Colors.dark : Colors.light;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return {isDarkMode, accentColor, primaryColor, backgroundStyle};
};
