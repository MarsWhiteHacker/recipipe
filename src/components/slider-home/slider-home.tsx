import React, { useEffect, useRef, useState, VFC } from 'react';
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';

import globalStyles from '~global/constants.style';
import { SliderDots } from '~components/common/slider-dots';
import { SliderHeader } from './slider-header/slider-header';
import { ScrollScreen } from './scroll-screen/scroll-screen';

export const SliderHome: VFC<Props> = ({ data }) => {
  const { width: windowWidth } = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollScreenWidth = windowWidth - 32;
  const sliderOffset = Animated.divide(scrollX, scrollScreenWidth);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const id = sliderOffset.addListener((v) => {
      const currentIndexScrollUp = Math.floor(v.value + 1);
      const currentIndexScrollDown = Math.ceil(v.value + 1);

      if (currentIndexScrollUp > currentSlide) {
        setCurrentSlide(currentIndexScrollUp);
      } else if (currentIndexScrollDown < currentSlide) {
        setCurrentSlide(currentIndexScrollDown);
      }
    });
    return () => sliderOffset.removeListener(id);
  }, [currentSlide, sliderOffset]);

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
    <>
      <SliderHeader
        style={styles.sliderHeader}
        currentSlide={currentSlide}
        slidesQunatity={data.length}
      />
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={1}
        decelerationRate="fast"
      >
        {data.map((item, i) => (
          <ScrollScreen key={i} width={scrollScreenWidth} />
        ))}
      </Animated.ScrollView>
      <View style={styles.dotsWrapper}>
        <SliderDots
          slidesQuantity={data.length}
          sliderOffset={sliderOffset}
          dotInnerFilling={globalStyles.BG_COLOR_MAIN}
        />
      </View>
    </>
  );
};

type Props = {
  data: Array<number>;
};

const styles = StyleSheet.create({
  sliderHeader: {
    paddingBottom: 8,
  },
  dotsWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 10,
  },
});
