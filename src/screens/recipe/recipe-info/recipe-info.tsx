import React, { VFC } from 'react';
import { StyleSheet, View } from 'react-native';
import { MainText } from '~components/common/main-text';
import { Title } from '~components/common/title';

export const RecipeInfo: VFC<Props> = ({ text }) => {
  return (
    <View style={styles.wrapper}>
      <MainText>{text}</MainText>
      <Title size="medium" style={styles.videoTitle}>
        Video
      </Title>
    </View>
  );
};

type Props = {
  text: string;
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  videoTitle: {
    marginTop: 18,
    marginBottom: 28,
  },
});
