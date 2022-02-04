import React, { VFC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '~components/common/header';

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
    marginBottom: 16,
    marginTop: 16,
    marginRight: 16,
    marginLeft: 16,
  },
});
