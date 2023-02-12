import {useState} from 'react';
import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  XStack,
  YStack,
} from 'tamagui';
import {ChevronDown, ChevronUp} from '@tamagui/lucide-icons';
import {useLink} from 'solito/link';

export function Home() {
  const linkProps = useLink({
    href: '/user/nate',
  });

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center" fontFamily={'$silkscreen'}>
          Welcome to Tamagui.
        </H1>
        <Paragraph ta="center">
          Here&apos;s a basic starter to show navigating from one screen to
          another. This screen uses the same code on Next.js and React Native.
        </Paragraph>

        <Separator />
        <Paragraph ta="center">
          Made by{' '}
          <Anchor
            color="$color12"
            href="https://twitter.com/natebirdman"
            target="_blank">
            @natebirdman
          </Anchor>
          ,{' '}
          <Anchor
            color="$color12"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer">
            give it a ⭐️
          </Anchor>
        </Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>

      <SheetDemo />
    </YStack>
  );
}

function SheetDemo() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);
  return (
    <>
      <Button
        aria-label={'toggle-sheet-button'}
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen(x => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom>
        <Sheet.Overlay />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <H1 ta="center">What is Lorem Ipsum?</H1>

          <Button
            size="$6"
            circular
            icon={ChevronDown}
            aria-label={'close-sheet-button'}
            onPress={() => {
              setOpen(false);
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
