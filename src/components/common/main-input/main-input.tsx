import React, { VFC } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
} from 'react-native';
import { useDispatch } from 'react-redux';

import globalStyles from '~global/constants.style';
import { inputsActions } from '~store/redux/inputs';

export const MainInput: VFC<Props> = ({
  value,
  placeholder,
  type,
  style,
  isSecure,
  onChange,
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
    <TextInput
      style={[styles.input, style]}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={globalStyles.PLACEHOLDER_COLOR}
      keyboardType={type}
      secureTextEntry={isSecure}
      onBlur={onBlurHandler}
      onFocus={onFocusHandler}
    />
  );
};

type Props = {
  value: string;
  placeholder: string;
  onChange: (arg: string) => void;
  type?: KeyboardTypeOptions;
  style?: StyleProp<TextStyle>;
  isSecure?: boolean;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    paddingBottom: 14,
    paddingTop: 14,
    paddingLeft: 16,
    borderColor: globalStyles.BORDER_COLOR,
    borderWidth: globalStyles.BORDER_WIDTH,
    paddingRight: 16,
    fontSize: 16,
    fontFamily: globalStyles.SECOND_FF,
  },
});
