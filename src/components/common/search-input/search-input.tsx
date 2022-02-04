import React, { VFC } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';

import globalStyles from '~global/constants.style';
import { inputsActions } from '~store/redux/inputs';
import { SearchSVG } from '../svg';

export const SearchInput: VFC<Props> = ({
  value,
  onChange,
  placeholder,
  style,
}) => {
  const dispatch = useDispatch();

  const onFocusHandler = () => {
    dispatch(inputsActions.inputsFocusStateOn(true));
  };

  const onBlurHandler = () => {
    setTimeout(() => {
      dispatch(inputsActions.inputsFocusStateOn(false));
    }, 200);
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={[styles.input, style]}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={globalStyles.SECOND_TEXT_COLOR}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      />
      <View style={styles.iconWrapper}>
        <SearchSVG fill={globalStyles.SECOND_TEXT_COLOR} />
      </View>
    </View>
  );
};

type Props = {
  value: string;
  placeholder: string;
  onChange: (arg: string) => void;
  style?: StyleProp<TextStyle>;
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: globalStyles.INPUT_BG,
    height: 48,
    borderRadius: 16,
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontFamily: globalStyles.SECOND_FF,
    fontSize: 16,
    lineHeight: 16,
    flex: 1,
    paddingRight: 16,
  },
  iconWrapper: {
    height: 24,
    width: 24,
  },
});
