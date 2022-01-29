import React, { FC } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { TitleSize } from '~types/types';
import { Text } from '../text';
import { fontConfigPicker } from './utils/fontConfigPicker';

export const Title: FC<Props> = ({ children, size, lh, fs, style }) => {
  return (
    <Text
      color="main"
      fs={fs ?? fontConfigPicker(size).fs}
      lh={lh ?? fontConfigPicker(size).lh}
      ff="second"
      style={style}
    >
      {children}
    </Text>
  );
};

type Props = {
  size: TitleSize;
  lh?: number;
  fs?: number;
  style?: StyleProp<TextStyle>;
};
