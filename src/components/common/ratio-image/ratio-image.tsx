import React, { VFC } from 'react';
import {
  StyleSheet,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from 'react-native';

export const RatioImage: VFC<Props> = ({ source, heightRatio, style }) => {
  return (
    <Image
      source={source}
      style={[
        style,
        styles.image,
        {
          aspectRatio: 1 / heightRatio,
        },
      ]}
    />
  );
};

type Props = {
  source: ImageSourcePropType;
  heightRatio: number;
  style?: StyleProp<ImageStyle>;
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    resizeMode: 'cover',
  },
});
