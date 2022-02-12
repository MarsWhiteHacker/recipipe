import React, { useState, VFC } from 'react';

import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import { Header } from '~components/common/header';
import { SearchInput } from '~components/common/search-input';
import globalStyles from '~global/constants.style';
import { ScrollSearch } from './scroll-search';

export const Search: VFC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <View
          style={[styles.header, { height: Platform.OS === 'ios' ? 90 : 60 }]}
        >
          <Header size="small">Search Recipe</Header>
        </View>
        <View style={styles.inputWrapper}>
          <SearchInput
            value={searchText}
            onChange={setSearchText}
            placeholder="Recipe Title, Ingredient"
          />
        </View>
        <ScrollSearch />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: globalStyles.BG_COLOR_SECOND,
  },
  inputWrapper: {
    margin: 16,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomWidth: globalStyles.BORDER_WIDTH,
    borderBottomColor: globalStyles.BORDER_COLOR,
  },
});
