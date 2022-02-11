import React, { FC } from 'react';
import { View, StyleSheet, ImageSourcePropType, ViewStyle } from 'react-native';

import { RatioImage } from '~components/common/ratio-image';
import globalStyle from '~global/constants.style';

export const Hostess: FC<Props> = ({ children, image, style }) => {
  return (
    <View style={[style && style, styles.container]}>
      <View style={styles.imageWrapper}>
        <RatioImage source={image} heightRatio={1} />
      </View>
      <View style={styles.transparentBlock} />
      <View style={styles.infoBlock}>{children}</View>
    </View>
  );
};

type Props = {
  image: ImageSourcePropType;
  style?: ViewStyle;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  infoBlock: {
    backgroundColor: globalStyle.DEFAULT_LIGHT_COLOR,
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flex: 0.75,
  },
  transparentBlock: { flex: 0.25 },
  imageWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
