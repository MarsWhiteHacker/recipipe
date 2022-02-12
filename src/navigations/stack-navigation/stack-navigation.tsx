import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Recipe } from '~screens/recipe';
import {
  RecipeParamsType,
  recipeScreenOptions,
} from '~navigations/stack-navigation-common/stack-navigation-category';
import { TabNavigation } from '~navigations/tab-navigation';
import * as StackNavigationKeys from './stack-navigation.keys';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackNavigationKeys.Main}
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={StackNavigationKeys.Recipe}
        component={Recipe}
        options={recipeScreenOptions}
      />
    </Stack.Navigator>
  );
};

export type RootStackParamList = {
  [StackNavigationKeys.Main]: undefined;
  [StackNavigationKeys.Recipe]: RecipeParamsType;
};
