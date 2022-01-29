import React, { VFC } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

import globalStyles from '~global/constants.style';
import { MainText } from '../main-text';

export const Button: VFC<Props> = ({
  title,
  style,
  onPress,
  isLoading = false,
  disabled = false,
}) => {
  const onPressHandler = () => {
    if (!disabled) {
      onPress();
    }
  };

  return (
    <TouchableOpacity onPress={onPressHandler} style={[styles.wrapper, style]}>
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={globalStyles.DEFAULT_LIGHT_COLOR}
        />
      ) : (
        <MainText color="fourth" lh={20}>
          {title}
        </MainText>
      )}
    </TouchableOpacity>
  );
};

type Props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<TextStyle>;
  isLoading?: boolean;
  disabled?: boolean;
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    backgroundColor: globalStyles.MAIN_COLOR,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
  },
});
