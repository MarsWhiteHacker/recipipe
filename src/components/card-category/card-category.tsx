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
import { Title } from '~components/common/title';

type HomeScreenStackNavigationProp =
  NativeStackNavigationProp<RootHomeStackParamList>;

export const CardCategory: VFC<Props> = ({
  link,
  name,
  windowWidthRatio,
  heightRatio,
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const aroundCardPadding = 24;
  const isHalfRatio = windowWidthRatio === 2;

  const { navigate } = useNavigation<HomeScreenStackNavigationProp>();

  const onPressHandler = () => navigate('Category', { name, image: link });

  return (
    <Pressable
      onPress={onPressHandler}
      style={{ width: `${100 / windowWidthRatio}%` }}
    >
      <View style={styles.cardWrapper}>
        <View
          style={[
            styles.imageWrapper,
            {
              width: windowWidth / windowWidthRatio - aroundCardPadding,
              aspectRatio: 1 / heightRatio,
            },
          ]}
        >
          <Image source={link} style={styles.image} />
        </View>
        <Title
          size="small"
          style={[
            styles.cardHeader,
            {
              textAlign: isHalfRatio ? 'justify' : 'center',
              marginTop: isHalfRatio ? 8 : 16,
            },
          ]}
          fs={18}
          lh={18}
        >
          {name}
        </Title>
      </View>
    </Pressable>
  );
};

type Props = {
  link: ImageSourcePropType;
  name: string;
  windowWidthRatio: number;
  heightRatio: number;
};

const styles = StyleSheet.create({
  cardWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
    width: '100%',
  },
  imageWrapper: {
    borderRadius: globalStyles.BORDER_RADIUS,
    height: undefined,
    marginLeft: 8,
    marginRight: 8,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: globalStyles.BORDER_RADIUS,
  },
  cardHeader: {
    marginTop: 8,
    width: '100%',
    paddingLeft: 16,
    marginRight: 16,
    textAlign: 'center',
  },
});
