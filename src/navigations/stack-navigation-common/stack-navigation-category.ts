import { RouteProp } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';

import { RootHomeStackParamList } from '~navigations/stack-home-navigation';
import { RootStackParamList } from '~navigations/stack-navigation';
import { RootSearchStackParamList } from '~navigations/stack-search-navigation';

export const categoryScreenOptions = () => ({
  headerShown: false,
});

export const recipeScreenOptions = () => ({
  headerShown: false,
});

export type CategoryParamsType = {
  name: string;
  image: ImageSourcePropType;
};

export type RecipeParamsType = {
  name: string;
  image: ImageSourcePropType;
};

export type RouteCategoryScreenType =
  | RouteProp<RootHomeStackParamList, 'Category'>
  | RouteProp<RootSearchStackParamList, 'Category'>;

export type RouteRecipeScreenType = RouteProp<RootStackParamList, 'Recipe'>;
