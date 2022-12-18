import type {AppProps} from 'next/app';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {useStyles} from '../hooks';
import '../styles.css';

export default function MyApp({Component, pageProps}: AppProps) {
  const {backgroundStyle} = useStyles();

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={backgroundStyle}>
      <Component {...pageProps} />
    </SafeAreaProvider>
  );
}
