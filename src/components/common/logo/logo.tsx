import React, { VFC } from 'react';
import { StyleSheet, View } from 'react-native';

import globalStyles from '~global/constants.style';
import { LogoSVG } from '../svg';

export const Logo: VFC = () => {
  return (
    <View style={styles.logo}>
      <LogoSVG fill={globalStyles.MAIN_COLOR} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    borderRadius: 50,
    height: 70,
    width: 70,
    borderColor: globalStyles.BORDER_COLOR,
    borderWidth: globalStyles.BORDER_LOGO_WIDTH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
