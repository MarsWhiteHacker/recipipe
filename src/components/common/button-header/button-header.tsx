import React, { VFC } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import globalStyles from '~global/constants.style';
import BackSVG from '../svg/back-svg';
import LikeSVG from '../svg/like-svg';
import { PencilSVG } from '../svg/pencil-svg';

export const ButtonBack: VFC<Props> = ({ style, type, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.wrapper, style]}>
        {type === 'back' && <BackSVG />}
        {type === 'like' && <LikeSVG />}
        {type === 'edit' && <PencilSVG />}
      </View>
    </TouchableWithoutFeedback>
  );
};

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  type: 'back' | 'like' | 'edit';
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
