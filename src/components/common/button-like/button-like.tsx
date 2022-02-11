import React, { VFC } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import globalStyles from '~global/constants.style';
import LikeSVG from '../svg/like-svg';

export const ButtonLike: VFC<Props> = ({ style, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.wrapper, style]}>
        <LikeSVG />
      </View>
    </TouchableWithoutFeedback>
  );
};

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const styles = StyleSheet.create({
  wrapper: {
    height: 48,
    width: 48,
    backgroundColor: globalStyles.BG_COLOR_SECOND,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
