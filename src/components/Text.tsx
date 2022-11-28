import React from 'react';

const sizes = {
  default: 14,
  small: 12,
  normal: 14,
  title: 18,
} as const;

const colors = {
  default: 'black',
  'grey-lighter': '#999999',
  'gray-light': '#e1e4e8',
  gray: '#586069',
  'gray-dark': '#24292e',
  'standard': 'rgba(115, 115, 115, .8)',
} as const;

const families = {
  default: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  mono: 'SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace',
} as const;

const weights = {
  default: 400,
  normal: 400,
  thin: 100,
  xlight: 200,
  'extra-light': 200,
  light: 300,
  book: 400,
  medium: 500,
  semibold: 600,
  demi: 600,
  bold: 700,
  xbold: 800,
  'extra-bold',
  black: 900,
} as const;

const lineHeights = {
  default: 1.5,
  '5': 1.0,
  '6': 1.25,
  '7': 1.5,
  '8': 1.75,
  '9': 2.0,
  tighter: 1.0,
  tight: 1.25,
  normal: 1.5,
  wide: 1.75,
  wider: 2.0,
} as const;

const whiteSpaces = {
  default: 'pre',
  nowrap: 'nowrap',
  pre: 'pre',
  'pre-wrap': 'pre-wrap',
  'pre-line': 'pre-line',
} as const;

interface ITextParameters extends Record<string, unknown> {
  children: React.ReactNode | string;
  weight: keyof typeof weights;
  family: keyof typeof families;
  color: keyof typeof colors;
  size: keyof typeof sizes;
  lineHeight: keyof typeof lineHeights;
  whiteSpace: keyof typeof whiteSpaces;
}

/**
 * Text
 * Simple text line with styles as props.
 * @param weight
 * @param family 
 * @param color
 * @param size 
 * @param lineHeight
 * @param whiteSpace
 */
const Text: React.FC<any> = ({
  children = '',
  weight = 'default',
  family = 'default',
  color = 'default',
  size = 'default',
  lineHeight = 'default',
  whiteSpace = 'default',
  ...props
}: ITextParameters) => {
  return (
    <p
      style={{
        color: colors[color],
        fontFamily: families[family],
        fontSize: `${sizes[size]}px`,
        fontWeight: weights[weight],
        lineHeight: lineHeights[lineHeight],
        whiteSpace: whiteSpaces[whiteSpace],
      }}
      { ...props }>
      { children }
    </p>
  );
};

export default Text;
