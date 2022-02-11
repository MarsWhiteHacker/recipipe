import React, { VFC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import globalStyles from '~global/constants.style';
import { Header } from '../header';
import { MainText } from '../main-text';

export const CardInfoSimple: VFC<Props> = ({
  title,
  description,
  subtext,
  style,
}) => {
  return (
    <View style={[styles.infoBlock, style]}>
      <Header size="medium">{title}</Header>
      <MainText color="second" style={styles.categoryText}>
        {description}
      </MainText>
      <MainText fs={14} lh={20}>
        {subtext}
      </MainText>
    </View>
  );
};

type Props = {
  title: string;
  description: string;
  subtext: string;
  style?: StyleProp<ViewStyle>;
};

const styles = StyleSheet.create({
  infoBlock: {
    width: '100%',
    backgroundColor: globalStyles.BG_COLOR_SECOND,
    borderRadius: globalStyles.BORDER_RADIUS,
    paddingBottom: 24,
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: globalStyles.BORDER_COLOR,
    marginBottom: 27,
  },
  categoryText: {
    marginTop: 12,
    marginBottom: 12,
  },
});
