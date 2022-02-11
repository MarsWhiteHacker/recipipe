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
    {
      link: require('~assets/images/mousse.png'),
      name: 'Mousse',
    },
    {
      link: require('~assets/images/bred.png'),
      name: 'Bred',
    },
  ];

  const mockForSlider = [
    {
      title: 'Tarts',
      link: require('~assets/images/home1.png'),
      id: 1,
    },
    {
      title: 'Catalana Mousse',
      link: require('~assets/images/welcome1.png'),
      id: 2,
    },
    {
      title: 'Tarts',
      link: require('~assets/images/home1.png'),
      id: 3,
    },
  ];

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        <HomeHeader style={styles.header} />
        {/* TODO: replace with real data */}
        <SliderHome data={mockForSlider} />

        <Header size="medium" style={styles.categoryHeader}>
          Category
        </Header>
      </View>
      <View style={styles.categoriesWrapper}>
        {mockArray.map((category, i) => (
          <CardCategory
            key={i}
            link={category.link}
            name={category.name}
            windowWidthRatio={i === 0 || i === 1 ? 2 : 4}
            heightRatio={i === 0 || i === 1 ? 1.05 : 1}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
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
    marginBottom: 32,
    paddingLeft: 8,
    paddingRight: 8,
  },
});
