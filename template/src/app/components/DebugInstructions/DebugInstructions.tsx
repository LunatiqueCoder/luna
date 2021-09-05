import React from 'react'
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Platform} from 'react-native';

export const DebugInstructions = Platform.select({
  web: () => (
    <Text>
      Press <Text style={styles.highlight}>F12</Text> in the browser to open{' '}
      <Text style={styles.highlight}>Developer tools</Text>.
    </Text>
  ),
  ios: () => (
    <Text>
      Press <Text style={styles.highlight}>Cmd + D</Text> in the simulator or{' '}
      <Text style={styles.highlight}>Shake</Text> your device to open the React
      Native debug menu.
    </Text>
  ),
  default: () => (
    <Text>
      Press <Text style={styles.highlight}>Cmd or Ctrl + M</Text> or{' '}
      <Text style={styles.highlight}>Shake</Text> your device to open the React
      Native debug menu.
    </Text>
  ),
});

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700'
  }
});
