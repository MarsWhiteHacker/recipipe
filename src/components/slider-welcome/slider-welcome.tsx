import React, { useRef, VFC } from 'react';
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';

import { SliderDots } from '~components/common/slider-dots';
import { ScrollScreen } from './scroll-screen/scroll-screen';
import { scrollData } from './utils/scroll-data';

export const SliderWelcome: VFC = () => {
  const data = scrollData();
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const sliderOffset = Animated.divide(scrollX, windowWidth);

  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: scrollX,
          },
        },
      },
    ],
    { useNativeDriver: true },
  );

  return (
    <View style={styles.scrollWrapper}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={1}
        decelerationRate="fast"
      >
        {data.map((item, i) => (
          <ScrollScreen
            width={windowWidth}
            height={windowHeight}
            data={item}
            key={i}
          />
        ))}
      </Animated.ScrollView>
      <View style={[styles.footer, { width: windowWidth }]}>
        <SliderDots slidesQuantity={data.length} sliderOffset={sliderOffset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollWrapper: {
    flex: 1,
    position: 'relative',
  },
  footer: {
    display: 'flex',
    height: 65,
    position: 'absolute',
    left: 0,
    bottom: 0,
    alignItems: 'center',
  },
});
