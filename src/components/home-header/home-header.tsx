import React, { VFC } from 'react';
import { Platform, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { MainText } from '~components/common/main-text';
import { BellSVG } from '~components/common/svg/bell-svg';
import { ChefSVG } from '~components/common/svg/chef-svg';
import { Title } from '~components/common/title';

export const HomeHeader: VFC<Props> = ({ style }) => {
  return (
    <View
      style={[
        styles.header,
        style,
        { marginTop: Platform.OS === 'ios' ? 75 : 32 },
      ]}
    >
      <View style={styles.headerIcon}>
        <ChefSVG />
      </View>
      <View style={styles.headerInfo}>
        <Title size="medium">Hello Chef</Title>
        <MainText fs={14} color="second">
          What are you cooking today?
        </MainText>
      </View>
      <View style={styles.headerIcon}>
        <BellSVG />
      </View>
    </View>
  );
};

type Props = {
  style?: StyleProp<ViewStyle>;
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerIcon: {
    height: 45,
    width: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerInfo: {
    flex: 1,
    height: 47,
    marginRight: 12,
    marginLeft: 12,
  },
});
