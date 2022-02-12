import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Search } from '~screens/search';
import { Category } from '~screens/category';
import {
  CategoryParamsType,
  categoryScreenOptions,
} from '~navigations/stack-navigation-common/stack-navigation-category';
import * as StackSearchNavigationKeys from './stack-search-navigation.keys';

const Stack = createNativeStackNavigator<RootSearchStackParamList>();

export const StackSearchNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: false,
      }}
    >
      <Stack.Screen
        name={StackSearchNavigationKeys.Main}
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={StackSearchNavigationKeys.Category}
        component={Category}
        options={categoryScreenOptions}
      />
    </Stack.Navigator>
  );
};

export type RootSearchStackParamList = {
  [StackSearchNavigationKeys.Main]: undefined;
  [StackSearchNavigationKeys.Category]: CategoryParamsType;
};
