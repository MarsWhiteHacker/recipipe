import React, { VFC } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  useWindowDimensions,
  View,
  Pressable,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import globalStyles from '~global/constants.style';
import { RootHomeStackParamList } from '~navigations/stack-home-navigation';
import { MainText } from '~components/common/main-text';

type HomeScreenStackNavigationProp =
  NativeStackNavigationProp<RootHomeStackParamList>;

export const FavouriteCard: VFC<Props> = ({ link, name, width, style }) => {
  const { navigate } = useNavigation<HomeScreenStackNavigationProp>();

  const onPressHandler = () => navigate('Category', { name, image: link });

  return (
    <Pressable onPress={onPressHandler} style={styles.wrapper}>
      <View style={[styles.cardWrapper, style]}>
        <View
          style={[
            styles.imageWrapper,
            {
              width,
            },
          ]}
        >
          <Image source={link} style={styles.image} />
        </View>
        <MainText style={styles.cardHeader} fs={14} lh={18}>
          {name}
        </MainText>
      </View>
    </Pressable>
  );
};

type Props = {
  link: ImageSourcePropType;
  name: string;
  width: number;
  style?: StyleProp<ViewStyle>;
};

const styles = StyleSheet.create({
  cardWrapper: {
    display: 'flex',
  },
  imageWrapper: {
    borderRadius: globalStyles.BORDER_RADIUS,
    height: undefined,
    aspectRatio: 1 / 1,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: globalStyles.BORDER_RADIUS,
  },
  cardHeader: {
    marginTop: 16,
    width: '100%',
    textAlign: 'center',
  },
});
