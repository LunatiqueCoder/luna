import {useColorScheme as useSystemColorScheme} from 'react-native';
import {createParam} from 'solito';
import {useEffect, useState} from 'react';

const {useParam} = createParam();

export const useColorScheme = () => {
  const [webColorScheme] = useParam('M');
  const systemColorScheme = useSystemColorScheme();

  const [userChangedSystemColorScheme, setUserChangedSystemColorScheme] =
    useState<boolean>(false);

  useEffect(() => {
    setUserChangedSystemColorScheme(true);
  }, [systemColorScheme]);

  if (userChangedSystemColorScheme) {
    return systemColorScheme;
  }

  return webColorScheme;
};
