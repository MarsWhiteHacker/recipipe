import React from 'react';

import {
  HomeSVG,
  SearchSVG,
  FavouriteSVG,
  ProfileSVG,
} from '~components/common/svg';
import * as TabNavigationKeys from '../../tab-navigation.keys';

export const imagePicker = (
  name: TabNavigationKeys.TabScreensType,
  fill: string,
) => {
  switch (name) {
    case TabNavigationKeys.Home:
      return <HomeSVG fill={fill} />;
    case TabNavigationKeys.Search:
      return <SearchSVG fill={fill} />;
    case TabNavigationKeys.Favourite:
      return <FavouriteSVG fill={fill} />;
    case TabNavigationKeys.Profile:
    default:
      return <ProfileSVG fill={fill} />;
  }
};
