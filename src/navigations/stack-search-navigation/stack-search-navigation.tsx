import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Search } from '~screens/search';
import { Category } from '~screens/category';
import { Recipe } from '~screens/recipe';
import * as StackSearchNavigationKeys from './stack-search-navigation.keys';

const Stack = createNativeStackNavigator<RootSearchStackParamList>();

export const StackSearchNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: false,
      }}
    >
      <>
        <Stack.Screen
          name={StackSearchNavigationKeys.Main}
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={StackSearchNavigationKeys.Category}
          component={Category}
          options={({ route }) => ({
            title: `${route.params.name}`,
          })}
        />
        <Stack.Screen
          name={StackSearchNavigationKeys.Recipe}
          component={Recipe}
          options={({ route }) => ({
            title: `${route.params.name}`,
          })}
        />
      </>
    </Stack.Navigator>
  );
};

export type RootSearchStackParamList = {
  [StackSearchNavigationKeys.Main]: undefined;
  [StackSearchNavigationKeys.Category]: { name: string };
  [StackSearchNavigationKeys.Recipe]: { name: string };
};
