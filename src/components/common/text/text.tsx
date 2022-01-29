import React, { FC } from 'react';
import { StyleProp, Text as TextRN, TextStyle } from 'react-native';

import { TextAlign, TextColor, TextFontFamily } from '~types/types';
import { colorPicker } from './utils/colorPicker';
import { fontPicker } from './utils/fontPicker';

export const Text: FC<Props> = ({ children, color, fs, ff, lh, ta, style }) => {
  return (
    <TextRN
      style={[
        {
          color: colorPicker(color),
          fontSize: fs,
          lineHeight: lh,
          fontFamily: fontPicker(ff),
          textAlign: ta,
        },
        style,
      ]}
    >
      {children}
    </TextRN>
  );
};

type Props = {
  color: TextColor;
  fs: number;
  lh?: number;
  ta?: TextAlign;
  ff: TextFontFamily;
  style?: StyleProp<TextStyle>;
};
