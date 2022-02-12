import React, { useRef, VFC } from 'react';
import {
  Animated,
  ImageSourcePropType,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

import { SliderDots } from '~components/common/slider-dots';
import globalStyles from '~global/constants.style';
import { FavouriteCard } from '../favourite-card';

export const FavouriteSlider: VFC<Props> = ({ data }) => {
  const { width: windowWidth } = useWindowDimensions();

  const scrollX = useRef(new Animated.Value(0)).current;

  const windowPaddings = 16;
  const scrollScreensGap = 16;
  const scrollScreenWidth =
    (windowWidth - windowPaddings * 2 - scrollScreensGap * 3) / 4;
  const sliderOffset = Animated.divide(scrollX, scrollScreenWidth);

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
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        decelerationRate="fast"
        disableIntervalMomentum
        snapToInterval={scrollScreenWidth + scrollScreensGap}
      >
        {data.map((item, i) => (
          <FavouriteCard
            key={i}
            link={item.link}
            name={item.name}
            width={scrollScreenWidth}
            style={i !== data.length - 1 && styles.nonLastCardWrapper}
          />
        ))}
      </Animated.ScrollView>
      <View style={styles.dotsWrapper}>
        <SliderDots
          slidesQuantity={data.length - 3}
          sliderOffset={sliderOffset}
          dotInnerFilling={globalStyles.BG_COLOR_SECOND}
        />
      </View>
    </>
  );
};

type Props = {
  data: Array<{
    name: string;
    link: ImageSourcePropType;
  }>;
};

const styles = StyleSheet.create({
  nonLastCardWrapper: {
    marginRight: 16,
  },
  dotsWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 10,
  },
});
