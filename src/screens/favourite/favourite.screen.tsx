import React, { useCallback, useRef, useState, VFC } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Animated,
  useWindowDimensions,
  ScrollView,
} from 'react-native';

import { ButtonBack } from '~components/common/button-header';
import { RatioImage } from '~components/common/ratio-image';
import globalStyles from '~global/constants.style';
import { CardInfoSimple } from '~components/common/card-info-simple';
import { SearchInput } from '~components/common/search-input';
import { Header } from '~components/common/header';
import { SortSVG } from '~components/common/svg/sort-svg';
import { ListItem } from '~components/common/list-item';
import { SliderDots } from '~components/common/slider-dots';
import { FavouriteCard } from './favourite-card';
import { FavouriteSlider } from './favourite-slider/favourite-slider';

export const Favourite: VFC<Props> = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const data = [
    {
      title: 'Croissants',
      category: 'Recipe',
      link: require('~assets/images/bred.png'),
      isLiked: false,
      id: 1,
    },
    {
      title: 'Croissants',
      category: 'Recipe',
      link: require('~assets/images/bred.png'),
      isLiked: false,
      id: 2,
    },
    {
      title: 'Croissants',
      category: 'Recipe',
      link: require('~assets/images/bred.png'),
      isLiked: false,
      id: 3,
    },
    {
      title: 'Croissants',
      category: 'Recipe',
      link: require('~assets/images/bred.png'),
      isLiked: false,
      id: 4,
    },
    {
      title: 'Croissants',
      category: 'Recipe',
      link: require('~assets/images/bred.png'),
      isLiked: false,
      id: 5,
    },
  ];

  const mockCategories = [
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

  const renderItem = useCallback(({ item }) => {
    return <ListItem data={item} buttonType="settings" />;
  }, []);

  const keyExtractor = useCallback((item) => String(item.id), []);

  return (
    <View style={styles.wrapper}>
      <RatioImage
        heightRatio={0.7}
        source={require('~assets/images/recipes.png')}
        style={styles.image}
      />
      <ButtonBack
        style={[styles.headerButton, { top: 60 }]}
        onPress={() => navigation.goBack()}
        type="edit"
      />
      <View style={styles.container}>
        <CardInfoSimple
          title="My recipes"
          description="You favorite recipes in one place"
          subtext="7 Recipes"
          style={styles.card}
        />
        <SearchInput
          value={searchText}
          onChange={setSearchText}
          placeholder="Recipe Title, Ingredient"
        />
        <Header size="medium" style={styles.categoryHeader}>
          Category
        </Header>

        <FavouriteSlider data={mockCategories} />

        <View style={styles.header}>
          <Header size="small">All Recipe (7)</Header>
          <View>
            <SortSVG fill={globalStyles.PLACEHOLDER_COLOR} />
          </View>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

type Props = {
  navigation: any;
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    position: 'relative',
    backgroundColor: globalStyles.BG_COLOR_SECOND,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  headerButton: {
    position: 'absolute',
    right: 17,
    zIndex: 1,
  },
  container: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },
  card: {
    marginBottom: 27,
    marginTop: 185,
  },
  header: {
    marginTop: 16,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: globalStyles.BORDER_COLOR,
  },
  categoryHeader: {
    marginTop: 27,
    marginBottom: 11,
  },
});
