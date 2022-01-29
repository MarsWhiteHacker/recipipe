import React, { VFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '~components/common/header';
import { Logo } from '~components/common/logo';
import { MainText } from '~components/common/main-text';
import { Title } from '~components/common/title';
import { Hostess } from '~components/layouts/hostess';
import { WelcomeInfo } from '~types/types';

export const ScrollScreen: VFC<Props> = ({ width, height, data }) => {
  return (
    <Hostess image={data.image} style={{ width, height }}>
      <View style={styles.infoBlock}>
        <View style={styles.emptyBlock} />

        <Header size="big">{data.header}</Header>
        <MainText fs={17} lh={21}>
          {data.subheader}
        </MainText>

        <View style={styles.emptyBlock} />

        <Logo />

        <View style={styles.emptyBlock} />

        <View style={styles.textBlock}>
          <View style={styles.titleWrapper}>
            <Title size="big">{data.title}</Title>
          </View>
          <View style={styles.subtitleWrapper}>
            <MainText>{data.subtitle}</MainText>
          </View>
          <MainText ta="center">{data.description}</MainText>
        </View>
      </View>
    </Hostess>
  );
};

type Props = {
  width: number;
  height: number;
  data: WelcomeInfo;
};

const styles = StyleSheet.create({
  infoBlock: {
    flex: 1,
    paddingLeft: 32,
    paddingRight: 32,
    display: 'flex',
    alignItems: 'center',
  },
  textBlock: {
    paddingLeft: 15,
    paddingRight: 15,
    display: 'flex',
    alignItems: 'center',
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
  },
  subtitleWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 24,
  },
  emptyBlock: {
    height: 50,
  },
});
