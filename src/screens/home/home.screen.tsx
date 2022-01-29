import React, { VFC } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { HomeHeader } from '~components/home-header';
import { SliderHome } from '~components/slider-home';

export const Home: VFC = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <HomeHeader style={styles.header} />
      <SliderHome data={[1, 2, 3]} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  header: {
    marginBottom: 25,
  },
});
