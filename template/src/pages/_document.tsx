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

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

function MyDocument() {
  return (
    <Html lang="en" style={{height: '100%'}}>
      <Head />
      <body style={{height: '100%', overflow: 'hidden'}}>
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
    <style
      key={'rn-web-style-tag'}
      dangerouslySetInnerHTML={{__html: normalizeNextElements}}
    />,
    getStyleElement(),
  ];
  return {...page, styles: Children.toArray(styles)};
};

export default MyDocument;
