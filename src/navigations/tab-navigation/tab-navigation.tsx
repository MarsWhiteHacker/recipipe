import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StackHomeNavigation } from '~navigations/stack-home-navigation';
import { StackSearchNavigation } from '~navigations/stack-search-navigation';
import { Favourite } from '~screens/favourite';
import { Profile } from '~screens/profile';
import { Header } from '~components/common/header';
import * as TabNavigationKeys from './tab-navigation.keys';
import { TabBar } from './tab-bar';

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerTitle: (props) => <Header size="small">{props.children}</Header>,
      }}
    >
      <Tab.Screen
        name={TabNavigationKeys.Home}
        component={StackHomeNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={TabNavigationKeys.Search}
        component={StackSearchNavigation}
        options={{ title: 'Search Recipe' }}
      />
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
