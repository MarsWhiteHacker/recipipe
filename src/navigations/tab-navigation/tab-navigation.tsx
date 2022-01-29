import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '~screens/home';
import { Favourite } from '~screens/favourite';
import { Profile } from '~screens/profile';
import { Search } from '~screens/search';
import * as TabNavigationKeys from './tab-navigation.keys';
import { TabBar } from './tab-bar';

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name={TabNavigationKeys.Home}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name={TabNavigationKeys.Search} component={Search} />
      <Tab.Screen name={TabNavigationKeys.Favourite} component={Favourite} />
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
