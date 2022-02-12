import React, { VFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Title } from '~components/common/title';
import { RecipeListItem } from '../recipe-llistItem';

export const RecipeIngredients: VFC<Props> = ({ title }) => {
  return (
    <View style={styles.wrapper}>
      <Title size="medium" style={styles.title}>
        {title}
      </Title>
      <RecipeListItem text="100g milk" />
      <RecipeListItem text="100g cream 33-36%" />
      <RecipeListItem text="100g vanilla paste" />
      <RecipeListItem text="1 cinnamon stick" />
      <RecipeListItem text="5g lemon zest" />
      <RecipeListItem text="5g orange zest" />
      <RecipeListItem text="66g egg yolks" />
      <RecipeListItem text="66g sugar" />
    </View>
  );
};

type Props = {
  title: string;
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  title: {
    marginTop: 8,
    marginBottom: 12,
  },
});
