import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StackHomeNavigation } from '~navigations/stack-home-navigation';
import { StackSearchNavigation } from '~navigations/stack-search-navigation';
import { StackFavouriteNavigation } from '~navigations/stack-favourite-navigation';
import { Profile } from '~screens/profile';
import * as TabNavigationKeys from './tab-navigation.keys';
import { TabBar } from './tab-bar';

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={TabNavigationKeys.Home}
        component={StackHomeNavigation}
      />
      <Tab.Screen
        name={TabNavigationKeys.Search}
        component={StackSearchNavigation}
      />
      <Tab.Screen
        name={TabNavigationKeys.Favourite}
        component={StackFavouriteNavigation}
      />
      <Tab.Screen name={TabNavigationKeys.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

export type RootTabParamList = {
  [TabNavigationKeys.Home]: undefined;
  [TabNavigationKeys.Search]: undefined;
  [TabNavigationKeys.Favourite]: undefined;
  [TabNavigationKeys.Profile]: undefined;
};
