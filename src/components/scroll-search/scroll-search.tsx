import React, { useCallback, VFC } from 'react';
import { SectionList, StyleSheet, View } from 'react-native';

import globalStyles from '~global/constants.style';
import { ListHeader } from './list-header/list-header';
import { ListItem } from './list-item/list-item';

export const ScrollSearch: VFC = () => {
  // TODO: replace by real data when server is ready
  const data = [
    {
      title: 'My favorite',
      data: [
        {
          title: 'Cream',
          category: 'Category',
          link: require('~assets/images/creams.png'),
          isLiked: true,
          id: 1,
        },
        {
          title: 'Cream',
          category: 'Category',
          link: require('~assets/images/creams.png'),
          isLiked: true,
          id: 2,
        },
      ],
    },
    {
      title: 'Result from catalog',
      data: [
        {
          title: 'Cream',
          category: 'Category',
          link: require('~assets/images/creams.png'),
          isLiked: false,
          id: 3,
        },
        {
          title: 'Macaron',
          category: 'Category',
          link: require('~assets/images/macaron.png'),
          isLiked: false,
          id: 4,
        },
        {
          title: 'Cake',
          category: 'Category',
          link: require('~assets/images/cakes.png'),
          isLiked: false,
          id: 5,
        },
      ],
    },
  ];

  const keyExtractor = useCallback((item) => String(item.id), []);

  const ItemSeparatorComponent = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  return (
    <SectionList
      sections={data}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => <ListItem data={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <ListHeader title={title} />
      )}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: globalStyles.BORDER_COLOR,
  },
});
