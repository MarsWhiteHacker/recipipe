import React, { VFC } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import globalStyles from '~global/constants.style';
import { opacityChanger } from './utils/opacityChanger';

export const SliderDots: VFC<Props> = ({
  slidesQuantity,
  sliderOffset,
  dotInnerFilling = globalStyles.DEFAULT_LIGHT_COLOR,
}) => {
  return (
    <View style={styles.container}>
      {new Array(slidesQuantity).fill(' ').map((el, i) => {
        return (
          <View style={styles.circle} key={i}>
            <Animated.View
              style={[
                styles.inner,
                {
                  opacity: opacityChanger(i, sliderOffset),
                  backgroundColor: dotInnerFilling,
                },
              ]}
            />
          </View>
        );
      })}
    </View>
  );
};

type Props = {
  slidesQuantity: number;
  sliderOffset: Animated.AnimatedDivision;
  dotInnerFilling?: string;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 8,
    justifyContent: 'space-around',
  },
  circle: {
    height: 8,
    width: 8,
    marginRight: 4,
    marginLeft: 4,
    backgroundColor: globalStyles.MAIN_COLOR,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    height: 6,
    width: 6,
    borderRadius: 50,
    backgroundColor: globalStyles.DEFAULT_LIGHT_COLOR,
    opacity: 1,
  },
});
