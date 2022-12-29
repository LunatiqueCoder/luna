import {Text, StyleSheet, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerHeaderProps,
  DrawerNavigationOptions,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import {SolitoImageProvider} from 'solito/image';
import {useStyles} from './hooks';
import {Home} from './features/Home';
import {Linking} from './features/Linking';
import {Logo} from './components/Logo';

const Drawer = createDrawerNavigator();

const Header = ({route}: DrawerHeaderProps) => {
  const {
    accentColor,
    backgroundStyle: {backgroundColor},
  } = useStyles();

  return (
    <SafeAreaView
      edges={['top']}
      style={[styles.headerContainer, {backgroundColor}]}>
      <DrawerToggleButton tintColor={accentColor} />
      <Logo containerStyle={styles.logoContainer} style={styles.logo} />
      <Text style={[styles.routeName, {color: accentColor}]}>
        {route.name.toUpperCase()}
      </Text>
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
        component={Linking}
        key={'linking'}
        name={'linking'}
        options={{title: 'Linking'}}
      />
    </Drawer.Navigator>
  );
};

const linking = {
  prefixes: ['criszz77.github.io/luna', 'localhost'],
  config: {
    screens: {
      linking: '/linking',
      home: '',
    },
  },
};

const DrawerApp = () => {
  const {backgroundStyle, isDarkMode} = useStyles();

  return (
    <SolitoImageProvider nextJsURL="https://luna-gamma.vercel.app/">
      <SafeAreaProvider
        initialMetrics={initialWindowMetrics}
        style={backgroundStyle}>
        <GestureHandlerRootView style={styles.container}>
          <StatusBar
            backgroundColor={backgroundStyle.backgroundColor}
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          />
          <NavigationContainer linking={linking}>
            <TopTabNavigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
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
    justifyContent: 'space-between',
    paddingBottom: 5,
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

export default DrawerApp;
