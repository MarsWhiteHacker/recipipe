import React, { useState, VFC } from 'react';

import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SearchInput } from '~components/common/search-input';
import { ScrollSearch } from '~components/scroll-search';
import globalStyles from '~global/constants.style';

export const Search: VFC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
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
    marginBottom: 16,
    marginTop: 16,
    marginRight: 16,
    marginLeft: 16,
  },
});
