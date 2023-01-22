import React, {ReactNode, useEffect, useState} from 'react';
import {Button, isClient, XStack, YStack} from 'tamagui';
import {Menu} from '@tamagui/lucide-icons';
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
        pos="fixed"
        space={5}
        paddingHorizontal="$2"
        top={0}
        my={isScrolled ? -2 : 0}
        left={0}
        right={0}
        elevation={isScrolled ? 0 : '$1'}
        py={isScrolled ? '$0' : '$2'}>
        {/*<YStack*/}
        {/*  // className="all ease-in ms200"*/}
        {/*  o={isScrolled ? 0.9 : 0}*/}
        {/*  // fullscreen*/}
        {/*  bc="$background"*/}
        {/*/>*/}
        <Button
          aria-label={'drawer-menu-button'}
          size="$5"
          $md={{size: '$3'}}
          $gtMd={{display: 'none'}}
          icon={Menu}
          alignSelf="center"
          space={2}
          scaleIcon={1.5}
        />
        <Logo />
      </XStack>
      <YStack height={54} w="100%" />
      {children}
    </YStack>
  );
};
