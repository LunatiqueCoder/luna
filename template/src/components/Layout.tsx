import {ReactNode, useEffect, useState} from 'react';
import {isClient, XStack, YStack} from 'tamagui';
import {Logo} from './Logo';
interface ILayout {
  children: ReactNode;
}

export const Layout = ({children}: ILayout) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isClient) {
      const onScroll = () => {
        setIsScrolled(window.scrollY > 30);
      };
      window.addEventListener('scroll', onScroll, {passive: true});
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }
  }, []);

  return (
    <YStack f={1}>
      <XStack
        // className={`ease-out all ms200 blur-light ${
        //   isScrolled ? 'hover-highlights' : ''
        // }`}
        bbc="$borderColor"
        zi={50000}
        // @ts-ignore
        pos="fixed"
        top={0}
        my={isScrolled ? -2 : 0}
        left={0}
        right={0}
        elevation={isScrolled ? 0 : '$1'}
        py={isScrolled ? '$0' : '$2'}>
        <YStack
          // className="all ease-in ms200"
          o={isScrolled ? 0.9 : 0}
          // fullscreen
          bc="$background"
        />
        <Logo />
      </XStack>
      <YStack height={54} w="100%" />
      {children}
    </YStack>
  );
};
