import type {AppProps} from 'next/app';
import Head from 'next/head';
import {ReactNode, useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// Workaround to rehydrate wtih user system color scheme adapted from: https://brianlovin.com/writing/adding-dark-mode-with-next-js
const Providers = ({children}: {children: ReactNode}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <GestureHandlerRootView
      key={mounted ? 0 : 1} // prevents ssr mismatched dark mode
      style={[
        styles.container,
        !mounted && styles.hidden, // prevents ssr flash for mismatched dark mode
      ]}>
      {children}
    </GestureHandlerRootView>
  );
};

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>🌒 Luna App</title>
        <meta name="description" content="Generated by 🌒 Luna" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hidden: {
    visibility: 'hidden',
  },
});
