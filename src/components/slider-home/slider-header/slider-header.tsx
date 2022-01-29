import React, { VFC } from 'react';
import { Animated, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { Header } from '~components/common/header';
import { MainText } from '~components/common/main-text';

export const SliderHeader: VFC<Props> = ({
  style,
  currentSlide,
  slidesQunatity,
}) => {
  return (
    <Animated.View style={[styles.sliderHeader, style]}>
      <Header size="medium" style={styles.sliderHeaderText}>
        My favorite recipes
      </Header>
      <MainText
        lh={25}
        color="second"
        style={[styles.sliderHeaderText, styles.sliderCount]}
      >
        {`${currentSlide}/${slidesQunatity}`}
      </MainText>
    </Animated.View>
  );
};

type Props = {
  style?: StyleProp<ViewStyle>;
  currentSlide: number | Animated.AnimatedAddition;
  slidesQunatity: number;
};

const styles = StyleSheet.create({
  sliderHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sliderHeaderText: {
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: -1, height: 4 },
    textShadowRadius: 5,
  },
  sliderCount: {
    paddingRight: 1,
    paddingLeft: 5,
  },
});
