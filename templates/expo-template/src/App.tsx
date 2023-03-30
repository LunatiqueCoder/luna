import {StyleSheet, StatusBar, useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {TamaguiProvider, useTheme, Stack, H4} from 'tamagui';
import {SolitoImageProvider} from 'solito/image';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {
  DefaultTheme,
  NavigationContainer,
  DarkTheme,
} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerToggleButton,
  DrawerNavigationOptions,
  DrawerHeaderProps,
} from '@react-navigation/drawer';
import {Home} from './features/Home';
import {Logo} from './components/Logo';
import config from '../tamagui';
import {UserDetailScreen} from './features/DetailScreen';
import {useFonts} from "expo-font";

const Drawer = createDrawerNavigator();

const Header = ({route}: DrawerHeaderProps) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={styles.headerContainer}>
      <DrawerToggleButton tintColor={theme.color?.val} />
      <Stack ai="center" jc={'space-between'} fd={'row'} f={1}>
        <Logo />
        <H4 fontFamily={'$silkscreen'} pr={'$7'}>
          {route.name.toUpperCase()}
        </H4>
      </Stack>
    </SafeAreaView>
  );
};

const screenOptions: DrawerNavigationOptions = {
  header: props => <Header {...props} />,
};

const TopTabNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="home" screenOptions={screenOptions}>
      <Drawer.Screen
        component={Home}
        key={'home'}
        name={'home'}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      />
    </Drawer.Navigator>
  );
};

const linking = {
  prefixes: ['criszz77.github.io/luna', 'localhost'],
  config: {
    screens: {
      home: '',
      'user-detail': 'user/:id',
    },
  },
};

const InnerApp = () => {
  const colorScheme = useColorScheme() || 'light';
  const isDarkMode = colorScheme === 'dark';
  const theme = useTheme();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={styles.container}>
        <StatusBar
          backgroundColor={theme.borderColor?.val}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <NavigationContainer
          theme={isDarkMode ? DarkTheme : DefaultTheme}
          linking={linking}>
          <TopTabNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const App = () => {
  const theme = useColorScheme() || 'light';

  const [loaded] = useFonts({
    "Inter-Medium": require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    "Inter-Bold": require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    "Inter-Black": require('@tamagui/font-inter/otf/Inter-Black.otf'),
    "Inter-ExtraBold": require('@tamagui/font-inter/otf/Inter-ExtraBold.otf'),
    "Inter-ExtraLight": require('@tamagui/font-inter/otf/Inter-ExtraLight.otf'),
    "Inter-Light": require('@tamagui/font-inter/otf/Inter-Light.otf'),
    "Inter-Regular": require('@tamagui/font-inter/otf/Inter-Regular.otf'),
    "Inter-SemiBold": require('@tamagui/font-inter/otf/Inter-SemiBold.otf'),
    "Inter-Thin": require('@tamagui/font-inter/otf/Inter-Thin.otf'),
    "Inter-Italic": require('@tamagui/font-inter/otf/Inter-Italic.otf'),
    "Inter-BoldItalic": require('@tamagui/font-inter/otf/Inter-BoldItalic.otf'),
    "Inter-BlackItalic": require('@tamagui/font-inter/otf/Inter-BlackItalic.otf'),
    "Inter-ExtraBoldItalic": require('@tamagui/font-inter/otf/Inter-ExtraBoldItalic.otf'),
    "Inter-ExtraLightItalic": require('@tamagui/font-inter/otf/Inter-ExtraLightItalic.otf'),
    "Inter-LightItalic": require('@tamagui/font-inter/otf/Inter-LightItalic.otf'),
    "Inter-SemiBoldItalic": require('@tamagui/font-inter/otf/Inter-SemiBoldItalic.otf'),
    "Inter-ThinItalic": require('@tamagui/font-inter/otf/Inter-ThinItalic.otf'),
    Silkscreen: require('@tamagui/font-silkscreen/files/Silkscreen.ttf'),
    "Silkscreen-Bold": require('@tamagui/font-silkscreen/files/Silkscreen-bold.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <SolitoImageProvider nextJsURL="https://luna-gamma.vercel.app/">
      <TamaguiProvider config={config} disableInjectCSS defaultTheme={theme}>
        <InnerApp />
      </TamaguiProvider>
    </SolitoImageProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    height: 50,
    width: 50,
  },
  routeName: {
    flex: 1,
    textAlign: 'right',
    marginRight: 15,
  },
});

export default App;
