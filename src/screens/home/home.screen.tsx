import React, { VFC } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import { CardCategory } from '~components/card-category';
import { Header } from '~components/common/header';
import { HomeHeader } from '~components/home-header';
import { SliderHome } from '~components/slider-home';

export const Home: VFC = () => {
  // TODO: replace by real array when server read
  const mockArray = [
    {
      link: require('~assets/images/creams.png'),
      name: 'Creams',
    },
    {
      link: require('~assets/images/cookies.png'),
      name: 'Cookies',
    },
    {
      link: require('~assets/images/macaron.png'),
      name: 'Macaron',
    },
    {
      link: require('~assets/images/cakes.png'),
      name: 'Cakes',
    },
  ];
  return (
    <ScrollView style={styles.wrapper}>
      <HomeHeader style={styles.header} />
      {/* TODO: replace with real data */}
      <SliderHome data={[1, 2, 3]} />

      <Header size="medium" style={styles.categoryHeader}>
        Category
      </Header>
      <View style={styles.categoriesWrapper}>
        {mockArray.map((category, i) => (
          <CardCategory key={i} link={category.link} name={category.name} />
        ))}
      </View>
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
  categoryHeader: {
    marginBottom: 16,
  },
  categoriesWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
});
