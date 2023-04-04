import {Children} from 'react';
import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import {AppRegistry} from 'react-native';
import config from '../../app.json';
import Tamagui from '../../tamagui';

function MyDocument() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async ({
  renderPage,
}: DocumentContext): Promise<DocumentInitialProps> => {
  AppRegistry.registerComponent(config.name, () => Main);
  const {getStyleElement} = AppRegistry.getApplication(config.name);
  const page = await renderPage();
  const styles = [
    getStyleElement(),
    <style
      key={'tamagui-rn-web-style-tag'}
      dangerouslySetInnerHTML={{
        __html: Tamagui.getCSS(),
      }}
    />,
  ];
  return {...page, styles: Children.toArray(styles)};
};

export default MyDocument;
