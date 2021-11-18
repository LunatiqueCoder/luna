import {StyleSheet, Platform} from 'react-native';
import {StyledText} from '../StyledText';

export const DebugInstructions = Platform.select({
  web: () => (
    <StyledText>
      Press <StyledText style={styles.highlight}>F12</StyledText> in the browser to open{' '}
      <StyledText style={styles.highlight}>Developer tools</StyledText>.
    </StyledText>
  ),
  ios: () => (
    <StyledText>
      Press <StyledText style={styles.highlight}>Cmd + D</StyledText> in the simulator or{' '}
      <StyledText style={styles.highlight}>Shake</StyledText> your device to open the React Native debug menu.
    </StyledText>
  ),
  default: () => (
    <StyledText>
      Press <StyledText style={styles.highlight}>Cmd or Ctrl + M</StyledText> or{' '}
      <StyledText style={styles.highlight}>Shake</StyledText> your device to open the React Native debug menu.
    </StyledText>
  )
});

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700'
  }
});
