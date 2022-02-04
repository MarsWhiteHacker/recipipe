import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { VFC } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { MainText } from '~components/common/main-text';
import { HeartSVG } from '~components/common/svg/heart-svg';
import { Title } from '~components/common/title';
import globalStyles from '~global/constants.style';
import { RootSearchStackParamList } from '~navigations/stack-search-navigation';

type SearchScreenStackNavigationProp =
  NativeStackNavigationProp<RootSearchStackParamList>;

export const ListItem: VFC<Props> = ({ data }) => {
  const { navigate } = useNavigation<SearchScreenStackNavigationProp>();

  const onPressHandler = () => navigate('Category', { name: data.title });

  return (
    <TouchableWithoutFeedback onPress={onPressHandler}>
      <View style={styles.listItemWrapper}>
        <Image source={data.link} style={styles.itemListImage} />
        <View style={styles.itemListInfo}>
          <Title size="small">{data.title}</Title>
          <View style={styles.listTag}>
            <MainText fs={12} lh={15}>
              {data.category}
            </MainText>
          </View>
          {data.isLiked && (
            <View style={styles.listHeart}>
              <HeartSVG fill={globalStyles.MAIN_COLOR} />
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

type Props = {
  data: {
    title: string;
    category: string;
    link: ImageSourcePropType;
    isLiked: boolean;
    id: number;
  };
};

const styles = StyleSheet.create({
  itemListImage: {
    width: 52,
    height: 52,
    borderRadius: globalStyles.BORDER_EXSMALL_RADIUS,
  },
  itemListInfo: {
    height: 52,
    flex: 1,
    paddingLeft: 12,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
  },
  listTag: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: globalStyles.INPUT_BG,
    borderRadius: 100,
    alignSelf: 'flex-start',
  },
  listHeart: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  listItemWrapper: {
    height: 85,
    width: '100%',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'row',
  },
});
