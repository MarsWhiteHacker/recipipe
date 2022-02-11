import React, { VFC } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import globalStyle from '~global/constants.style';
import { Title } from '../title';

export const ButtonTab: VFC<Props> = ({ name, active, style, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.wrapper,
          {
            backgroundColor: active
              ? globalStyle.MAIN_COLOR
              : globalStyle.BG_COLOR_SECOND,
          },
          style,
        ]}
      >
        <Title
          size="small"
          style={[
            styles.title,
            {
              color: active
                ? globalStyle.FOURTH_TEXT_COLOR
                : globalStyle.SECOND_TEXT_COLOR,
            },
          ]}
        >
          {name}
        </Title>
      </View>
    </TouchableWithoutFeedback>
  );
};

type Props = {
  name: string;
  active: boolean;
  onPress: () => void;
  style?: StyleProp<TextStyle>;
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: globalStyle.BORDER_RADIUS_BIG,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 8,
    height: 36,
  },
  title: {
    textAlign: 'center',
  },
});
