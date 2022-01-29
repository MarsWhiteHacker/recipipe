import React, { VFC } from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
} from 'react-native';

import globalStyles from '~global/constants.style';

export const MainInput: VFC<Props> = ({
  value,
  placeholder,
  type,
  style,
  isSecure,
  onChange,
}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={globalStyles.PLACEHOLDER_COLOR}
      keyboardType={type}
      secureTextEntry={isSecure}
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
