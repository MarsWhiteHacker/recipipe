import React, { useCallback, useState, VFC } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { ButtonBack } from '~components/common/button-header';
import { RatioImage } from '~components/common/ratio-image';
import { RouteCategoryScreenType } from '~navigations/stack-navigation-common/stack-navigation-category';
import globalStyles from '~global/constants.style';
import { CardInfoSimple } from '~components/common/card-info-simple';
import { SearchInput } from '~components/common/search-input';
import { Header } from '~components/common/header';
import { SortSVG } from '~components/common/svg/sort-svg';
import { ListItem } from '~components/common/list-item';

export const Category: VFC<Props> = ({ route, navigation }) => {
  const [searchText, setSearchText] = useState('');

  const data = [
    {
      title: 'Catalana Mousse',
      category: 'Recipe',
      link: require('~assets/images/welcome1.png'),
      isLiked: false,
      id: 1,
    },
    {
      title: 'Catalana Mousse',
      category: 'Recipe',
      link: require('~assets/images/welcome1.png'),
      isLiked: false,
      id: 2,
    },
    {
      title: 'Catalana Mousse',
      category: 'Recipe',
      link: require('~assets/images/welcome1.png'),
      isLiked: false,
      id: 3,
    },
    {
      title: 'Catalana Mousse',
      category: 'Recipe',
      link: require('~assets/images/welcome1.png'),
      isLiked: false,
      id: 4,
    },
    {
      title: 'Catalana Mousse',
      category: 'Recipe',
      link: require('~assets/images/welcome1.png'),
      isLiked: false,
      id: 5,
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
        source={route.params.image}
        style={styles.image}
      />
      <ButtonBack
        style={[styles.backButton, { top: 60 }]}
        onPress={() => navigation.goBack()}
        type="back"
      />
      <View style={styles.container}>
        <CardInfoSimple
          title={route.params.name}
          description={`${route.params.name} recipes category`}
          subtext="7 Recipes"
          style={styles.card}
        />
        <SearchInput
          value={searchText}
          onChange={setSearchText}
          placeholder="Recipe Title, Ingredient"
        />
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
  route: RouteCategoryScreenType;
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
  backButton: {
    position: 'absolute',
    left: 17,
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
});
