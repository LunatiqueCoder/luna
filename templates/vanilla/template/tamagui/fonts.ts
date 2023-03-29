import {createFont, GenericFont} from 'tamagui';
import {createSilkscreenFont} from '@tamagui/font-silkscreen';
import {createInterFont} from '@tamagui/font-inter';

const genericFontSizes = {
  1: 10,
  2: 11,
  3: 12,
  4: 14,
  5: 15,
  6: 16,
  7: 20,
  8: 22,
  9: 30,
  10: 42,
  11: 52,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 124,
} as const;

export function createGenericFont<
  A extends GenericFont<keyof typeof genericFontSizes>,
>(
  family: string,
  font: Partial<A> = {},
  {
    sizeLineHeight = val => val * 1.35,
  }: {
    sizeLineHeight?: (val: number) => number;
  } = {},
): A {
  const size = font.size || genericFontSizes;
  return createFont({
    family,
    size,
    lineHeight: Object.fromEntries(
      Object.entries(size).map(([k, v]) => [k, sizeLineHeight(+v)]),
    ) as typeof size,
    weight: {0: '300'},
    letterSpacing: {4: 0},
    ...(font as any),
  });
}

const systemFamily =
  process.env.TAMAGUI_TARGET === 'native'
    ? 'Inter-Medium'
    : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const silkscreenFont = createSilkscreenFont();
const headingFont = createInterFont(
  {
    size: {
      5: 13,
      6: 15,
      9: 32,
      10: 44,
    },
    transform: {
      6: 'uppercase',
      7: 'none',
    },
    weight: {
      6: '400',
      7: '700',
    },
    color: {
      6: '$colorFocus',
      7: '$color',
    },
    letterSpacing: {
      5: 2,
      6: 1,
      7: 0,
      8: 0,
      9: -1,
      10: -1.5,
      12: -2,
      14: -3,
      15: -4,
    },
    // for native
    face: {
      700: {normal: 'Inter-Bold'},
      800: {normal: 'Inter-Bold'},
      900: {normal: 'Inter-Bold'},
    },
  },
  {sizeLineHeight: size => Math.round(size * 1.1 + (size < 30 ? 10 : 5))},
);

const bodyFont = createInterFont(
  {
    family: systemFamily,
    weight: {
      1: '500',
      7: '600',
    },
    // for native
    face: {
      900: {normal: 'Inter-Bold'},
    },
  },
  {
    sizeSize: size => Math.round(size),
    sizeLineHeight: size => Math.round(size * 1.1 + (size >= 12 ? 8 : 4)),
  },
);

const monoFont = createGenericFont(
  '"ui-monospace", "SFMono-Regular", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
  {
    weight: {
      1: '500',
    },
    size: {
      1: 11,
      2: 12,
      3: 13,
      4: 14,
      5: 16,
      6: 18,
      7: 20,
      8: 22,
      9: 30,
      10: 42,
      11: 52,
      12: 62,
      13: 72,
      14: 92,
      15: 114,
      16: 124,
    },
  },
  {
    sizeLineHeight: x => x * 1.5,
  },
);

export default {
  // noto: notoFont as any,
  heading: headingFont,
  body: bodyFont,
  mono: monoFont,
  silkscreen: silkscreenFont,
};
