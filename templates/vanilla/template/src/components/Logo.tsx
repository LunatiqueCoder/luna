import {SolitoImage} from 'solito/image';
import {useLink} from 'solito/link';
import {Button, useMedia, useThemeName} from 'tamagui';
import {tokens} from '@tamagui/themes';

const logoMediaQuery = (size: keyof typeof tokens.size) => ({
  width: tokens.size[size].val,
  height: tokens.size[size].val,
});

export const Logo = () => {
  const theme = useThemeName();
  const media = useMedia();
  const linkProps = useLink({
    href: '/',
  });

  return (
    <Button
      size={'$6'}
      chromeless
      focusStyle={{}}
      icon={
        <SolitoImage
          priority
          src={`/images/logo_${theme}.png`}
          alt="logo"
          resizeMode="contain"
          sizes="(max-width: 600px) 400px,
                 800px"
          {...logoMediaQuery(8)}
          {...((media.gtSm || media.gtMd) && {
            ...logoMediaQuery(9),
          })}
          {...((media.gtLg || media.gtXl) && {
            ...logoMediaQuery(10),
          })}
        />
      }
      {...linkProps}
    />
  );
};
