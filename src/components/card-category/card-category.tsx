import React, { VFC } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  useWindowDimensions,
  View,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Header } from '~components/common/header';
import globalStyles from '~global/constants.style';
import { RootHomeStackParamList } from '~navigations/stack-home-navigation';

type HomeScreenStackNavigationProp =
  NativeStackNavigationProp<RootHomeStackParamList>;

export const CardCategory: VFC<Props> = ({ link, name }) => {
  const { width: windowWidth } = useWindowDimensions();
  const aroundCardPadding = 24;

  const { navigate } = useNavigation<HomeScreenStackNavigationProp>();

  const onPressHandler = () => navigate('Category', { name });

  return (
    <Pressable onPress={onPressHandler}>
      <View style={styles.cardWrapper}>
        <View
          style={[
            styles.imageWrapper,
            {
              width: windowWidth / 2 - aroundCardPadding,
            },
          ]}
        >
          <Image source={link} style={styles.image} />
        </View>
        <Header size="small" style={styles.cardHeader}>
          {name}
        </Header>
      </View>
    </Pressable>
  );
};

type Props = {
  link: ImageSourcePropType;
  name: string;
};

const styles = StyleSheet.create({
  cardWrapper: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  imageWrapper: {
    borderRadius: globalStyles.BORDER_RADIUS,
    height: undefined,
    aspectRatio: 1 / 1.05,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: globalStyles.BORDER_RADIUS,
  },
  cardHeader: {
    marginTop: 8,
  },
});
