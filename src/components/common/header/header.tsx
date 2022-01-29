import React, { FC } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { HeaderSize } from '~types/types';
import { Text } from '../text';
import { fontConfigPicker } from './utils/fontConfigPicker';

export const Header: FC<Props> = ({ children, size, fs, lh, style }) => {
  return (
    <Text
      ff="main"
      color="main"
      fs={fs ?? fontConfigPicker(size).fs}
      lh={lh ?? fontConfigPicker(size).lh}
      style={style}
    >
      {children}
    </Text>
  );
};

type Props = {
  size: HeaderSize;
  fs?: number;
  lh?: number;
  style?: StyleProp<TextStyle>;
};
