import { Animated } from 'react-native';

export const opacityChanger = (
  index: number,
  sliderOffset: Animated.AnimatedDivision,
) => {
  const result = sliderOffset.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 0, 1],
    extrapolate: 'clamp',
  });
  return result;
};
