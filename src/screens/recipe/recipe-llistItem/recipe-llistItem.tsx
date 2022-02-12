import React, { VFC } from 'react';
import { StyleSheet, View } from 'react-native';
import { SettingsSVG } from '~components/common/svg/settings-svg';
import { Title } from '~components/common/title';

import globalStyles from '~global/constants.style';

export const RecipeListItem: VFC<Props> = ({ text }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.pointWrapper}>
        <View style={styles.point} />
      </View>
      <Title size="small" style={styles.title}>
        {text}
      </Title>
      <SettingsSVG fill={globalStyles.PLACEHOLDER_COLOR} />
    </View>
  );
};

type Props = {
  text: string;
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 4,
    marginTop: 4,
    paddingBottom: 10,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pointWrapper: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  point: {
    backgroundColor: globalStyles.MAIN_COLOR,
    height: 13,
    width: 13,
    borderRadius: 50,
  },
  title: {
    flex: 1,
  },
});
