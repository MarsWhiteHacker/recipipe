import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '~screens/home';
import { Category } from '~screens/category';
import {
  CategoryParamsType,
  categoryScreenOptions,
} from '~navigations/stack-navigation-common/stack-navigation-category';
import { Favourite } from '~screens/favourite';
import * as StackFavouriteNavigationKeys from './stack-favourite-navigation.keys';

const Stack = createNativeStackNavigator<RootFavouriteStackParamList>();

export const StackFavouriteNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackFavouriteNavigationKeys.Main}
        component={Favourite}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={StackFavouriteNavigationKeys.Category}
        component={Category}
        options={categoryScreenOptions}
      />
    </Stack.Navigator>
  );
};

export type RootFavouriteStackParamList = {
  [StackFavouriteNavigationKeys.Main]: undefined;
  [StackFavouriteNavigationKeys.Category]: CategoryParamsType;
};
