import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '~screens/home';
import { Category } from '~screens/category';
import {
  CategoryParamsType,
  categoryScreenOptions,
} from '~navigations/stack-navigation-common/stack-navigation-category';
import * as StackHomeNavigationKeys from './stack-home-navigation.keys';

const Stack = createNativeStackNavigator<RootHomeStackParamList>();

export const StackHomeNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackHomeNavigationKeys.Main}
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={StackHomeNavigationKeys.Category}
        component={Category}
        options={categoryScreenOptions}
      />
    </Stack.Navigator>
  );
};

export type RootHomeStackParamList = {
  [StackHomeNavigationKeys.Main]: undefined;
  [StackHomeNavigationKeys.Category]: CategoryParamsType;
};
