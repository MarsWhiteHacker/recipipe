import React, { VFC } from 'react';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

export const SquareImage: VFC<Props> = ({ source }) => {
  return <Image source={source} style={styles.image} />;
};

type Props = {
  source: ImageSourcePropType;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1 / 1,
    resizeMode: 'cover',
  },
});
