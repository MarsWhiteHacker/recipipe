import React, { FC } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { TextAlign, TextColor } from '~types/types';
import globalStyle from '~global/constants.style';
import { Text } from '../text';

export const MainText: FC<Props> = ({ children, color, lh, fs, ta, style }) => {
  return (
    <Text
      color={color ?? 'main'}
      fs={fs ?? globalStyle.MAIN_TEXT_FS}
      lh={lh ?? globalStyle.MAIN_TEXT_LH}
      ta={ta}
      ff="second"
      style={style}
    >
      {children}
    </Text>
  );
};

type Props = {
  color?: TextColor;
  lh?: number;
  fs?: number;
  ta?: TextAlign;
  style?: StyleProp<TextStyle>;
};
