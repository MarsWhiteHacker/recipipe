import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '~screens/home';
import { Category } from '~screens/category';
import { Recipe } from '~screens/recipe';
import * as StackHomeNavigationKeys from './stack-home-navigation.keys';

const Stack = createNativeStackNavigator<RootHomeStackParamList>();

export const StackHomeNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: false,
      }}
    >
      <>
        <Stack.Screen
          name={StackHomeNavigationKeys.Main}
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={StackHomeNavigationKeys.Category}
          component={Category}
          options={({ route }) => ({
            title: `${route.params.name}`,
          })}
        />
        <Stack.Screen
          name={StackHomeNavigationKeys.Recipe}
          component={Recipe}
          options={({ route }) => ({
            title: `${route.params.name}`,
          })}
        />
      </>
    </Stack.Navigator>
  );
};

export type RootHomeStackParamList = {
  [StackHomeNavigationKeys.Main]: undefined;
  [StackHomeNavigationKeys.Category]: { name: string };
  [StackHomeNavigationKeys.Recipe]: { name: string };
};
