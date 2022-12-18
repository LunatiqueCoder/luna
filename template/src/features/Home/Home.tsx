import {StyleSheet, View, Text, Linking} from 'react-native';
import {SolitoImage} from 'solito/image';
import {Colors} from '../../hooks';
import Pressable from '../../components/Pressable';

export const Home = () => {
  return (
    <View style={styles.container}>
      <SolitoImage
        src={'/images/luna_cover.jpeg'}
        alt={'logo'}
        fill
        resizeMode={'cover'}
      />
      <View style={styles.headerContainer}>
        <View style={[styles.headerTextContainer, styles.shadow]}>
          <Text style={styles.headerText}>Welcome to React Native</Text>
        </View>
      </View>
      <View style={styles.pressableContainer}>
        <Pressable
          href=""
          title="🌒  Luna Wiki"
          onPress={() => {
            Linking.openURL('https://github.com/criszz77/luna/wiki');
          }}
          pressableStyle={[
            styles.pressable,
            styles.shadow,
            {backgroundColor: `${Colors.benitoite}80`},
          ]}
          labelStyle={[styles.labelStyle]}
        />
        <Pressable
          title="Next steps"
          href="/linking"
          pressableStyle={styles.pressable}
          labelStyle={styles.labelStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  pressableContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  pressable: {
    marginHorizontal: 20,
    height: 50,
    justifyContent: 'center',
  },
  labelStyle: {
    fontSize: 18,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerTextContainer: {
    backgroundColor: `${Colors.light}90`,
    padding: 20,
  },
  headerText: {
    color: Colors.darker,
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  shadow: {
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
