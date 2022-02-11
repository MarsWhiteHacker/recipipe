import React, { VFC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import globalStyles from '~global/constants.style';
import { Header } from '../header';
import { MainText } from '../main-text';
import { SmallPlusSVG } from '../svg';
import ClockSVG from '../svg/clock-svg';
import DinnerSVG from '../svg/dinner-svg';
import ScaleSVG from '../svg/scale-svg';
import { Title } from '../title';

export const CardInfoExtended: VFC<Props> = ({ title, style }) => {
  return (
    <View style={[styles.infoBlock, style]}>
      <View style={styles.nav}>
        <MainText color="second" fs={14} lh={20}>
          My recipes / Mousse
        </MainText>
        <View style={styles.plus}>
          <SmallPlusSVG />
        </View>
      </View>
      <Header size="medium" style={styles.header}>
        {title}
      </Header>
      <View style={styles.details}>
        <View style={[styles.detail, styles.notLastDetailWrapper]}>
          <ClockSVG />
          <Title size="small" style={styles.detailTitle}>
            40 min
          </Title>
        </View>
        <View style={[styles.detail, styles.notLastDetailWrapper]}>
          <DinnerSVG />
          <Title size="small" style={styles.detailTitle}>
            Easy
          </Title>
        </View>
        <View style={styles.detail}>
          <ScaleSVG />
          <Title size="small" style={styles.detailTitle}>
            500 g
          </Title>
        </View>
      </View>
    </View>
  );
};

type Props = {
  title: string;
  style?: StyleProp<ViewStyle>;
};

const styles = StyleSheet.create({
  infoBlock: {
    width: '100%',
    backgroundColor: globalStyles.BG_COLOR_SECOND,
    borderRadius: globalStyles.BORDER_RADIUS,
    padding: 16,
    display: 'flex',
    borderWidth: 1,
    borderColor: globalStyles.BORDER_COLOR,
    marginBottom: 27,
  },
  nav: {
    borderRadius: globalStyles.BORDER_EXSMALL_RADIUS,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: globalStyles.BG_COLOR_MAIN,
    height: 32,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 8,
  },
  plus: {
    height: 24,
    width: 24,
    backgroundColor: globalStyles.BG_COLOR_SECOND,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: globalStyles.BORDER_EXSMALL_RADIUS,
  },
  header: {
    marginBottom: 16,
    marginTop: 16,
  },
  details: {
    paddingBottom: 8,
    paddingTop: 16,
    borderTopColor: globalStyles.BORDER_COLOR,
    borderTopWidth: globalStyles.BORDER_WIDTH,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  detail: {
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    height: 48,
    alignItems: 'center',
  },
  detailTitle: {
    marginTop: 8,
  },
  notLastDetailWrapper: {
    borderRightWidth: globalStyles.BORDER_WIDTH,
    borderRightColor: globalStyles.BORDER_COLOR,
  },
});
