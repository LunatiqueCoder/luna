import {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import {useRouter} from 'next/router';
import {Logo} from './Logo';
import {Colors, useStyles} from '../hooks';
import Pressable from './Pressable';

interface INavButton {
  href: string;
  title: string;
}

const NavButton = ({href, title}: INavButton) => {
  const {pathname} = useRouter();
  const {primaryColor} = useStyles();
  const routeIsFocused = pathname === href;

  return (
    <Pressable
      href={href}
      title={title}
      hoverTextStyle={{color: primaryColor}}
      pressableStyle={[
        styles.pressable,
        routeIsFocused && styles.selectedPressable,
      ]}
      labelStyle={[
        styles.pressableLabel,
        routeIsFocused && {
          color: Colors.light,
        },
      ]}
    />
  );
};

interface ILayout {
  children: ReactNode;
}

export const Layout = ({children}: ILayout) => {
  const {backgroundStyle} = useStyles();

  return (
    <View style={backgroundStyle}>
      <View style={styles.container}>
        <Logo width={175} height={175} style={styles.logo} />
        <View style={styles.navContainer}>
          <NavButton href="/" title="Home" />
          <NavButton href="/linking" title="Linking" />
        </View>
      </View>
      <View style={styles.childrenContainer}> {children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  childrenContainer: {
    flex: 5,
  },
  navContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  logo: {
    paddingTop: 20,
    marginLeft: 20,
  },
  emptyView: {
    flex: 4,
  },
  labelContainer: {
    borderBottomWidth: 1,
    height: 75,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    minWidth: 100,
    marginHorizontal: 10,
  },
  pressableLabel: {
    textAlign: 'center',
  },
  selectedPressable: {
    backgroundColor: Colors.sereneBlue,
  },
});
