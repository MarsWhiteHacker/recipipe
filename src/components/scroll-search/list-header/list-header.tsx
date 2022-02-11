import React, { VFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '~components/common/header';
import globalStyles from '~global/constants.style';

export const ListHeader: VFC<Props> = ({ title }) => {
  return (
    <View style={styles.listHeaderWrapper}>
      <Header size="small">{title}</Header>
    </View>
  );
};

type Props = {
  title: string;
};

const styles = StyleSheet.create({
  listHeaderWrapper: {
    paddingBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 16,
    backgroundColor: globalStyles.BG_COLOR_SECOND,
  },
});
