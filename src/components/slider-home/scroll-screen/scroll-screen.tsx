import React, { VFC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  Image,
  StyleSheet,
  View,
  Pressable,
  ImageSourcePropType,
} from 'react-native';

import { Header } from '~components/common/header';
import { MainText } from '~components/common/main-text';
import { LogoSmallSVG } from '~components/common/svg';
import globalStyles from '~global/constants.style';
import { RootStackParamList } from '~navigations/stack-navigation';

type HomeScreenStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export const ScrollScreen: VFC<Props> = ({ width, data }) => {
  const { navigate } = useNavigation<HomeScreenStackNavigationProp>();
  const innerBlockWrapperPadding = 12;
  const innerBlockWidthSidesMargin = 20;
  const innerBlockWidth =
    width - innerBlockWrapperPadding * 2 - innerBlockWidthSidesMargin * 2;

  const onPressHandler = () =>
    navigate('Recipe', { name: data.title, image: data.link });

  return (
    <Pressable onPress={onPressHandler}>
      <View
        style={[
          styles.wrapper,
          {
            width,
          },
        ]}
      >
        <View style={styles.innerBlock}>
          <View style={styles.imageWrapper}>
            <Image source={data.link} style={styles.image} />
          </View>
          <View style={[styles.infoBlock, { width: innerBlockWidth }]}>
            <View style={styles.logoCircle}>
              <LogoSmallSVG fill={globalStyles.MAIN_COLOR} />
            </View>
            <Header size="medium" style={styles.headerBlock}>
              {data.title}
            </Header>
            <MainText color="second" ta="center" style={styles.textBlock}>
              Keep it easy with these simple but delicious recipes.
            </MainText>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

type Props = {
  width: number;
  data: {
    title: string;
    link: ImageSourcePropType;
    id: number;
  };
};

const styles = StyleSheet.create({
  wrapper: {
    height: 400,
    borderColor: globalStyles.BORDER_COLOR,
    borderWidth: globalStyles.BORDER_WIDTH,
    borderRadius: globalStyles.BORDER_RADIUS,
    backgroundColor: globalStyles.DEFAULT_LIGHT_COLOR,
    padding: 12,
  },
  innerBlock: {
    borderRadius: globalStyles.BORDER_SMALL_RADIUS,
    height: '100%',
    width: '100%',
  },
  imageWrapper: {
    height: 210,
    width: '100%',
    borderTopLeftRadius: globalStyles.BORDER_SMALL_RADIUS,
    borderTopRightRadius: globalStyles.BORDER_SMALL_RADIUS,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: globalStyles.BORDER_SMALL_RADIUS,
    borderTopRightRadius: globalStyles.BORDER_SMALL_RADIUS,
  },
  infoBlock: {
    height: 170,
    position: 'absolute',
    marginRight: 20,
    marginLeft: 20,
    top: 190,
    left: 0,
    backgroundColor: globalStyles.DEFAULT_LIGHT_COLOR,
    borderRadius: globalStyles.BORDER_RADIUS,
    padding: 16,
    display: 'flex',
    alignItems: 'center',
  },
  logoCircle: {
    height: 36,
    width: 36,
    borderRadius: 50,
    borderColor: globalStyles.BORDER_COLOR,
    borderWidth: globalStyles.BORDER_WIDTH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBlock: {
    marginTop: 12,
    marginBottom: 12,
  },
  textBlock: {
    width: 250,
  },
});
