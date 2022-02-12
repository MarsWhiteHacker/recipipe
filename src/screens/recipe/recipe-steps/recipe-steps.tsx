import React, { VFC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Title } from '~components/common/title';
import { RecipeListItem } from '../recipe-llistItem';

export const RecipeSteps: VFC = () => {
  return (
    <View style={styles.wrapper}>
      <Title size="medium" style={styles.title}>
        Method
      </Title>
      <RecipeListItem text="Bring cream (first and the smaller part) and milk to a boil with vanilla paste, cinnamon stick, and zests." />
      <RecipeListItem text="Combine egg yolks and sugar. Pour the hot mixture over the yolks and sugar, constantly whisking bring to 82-85 °C. " />
      <RecipeListItem text="Pour the hot cream and over caramelized chocolate, gelatin. Combine thoroughly. Cool down to 40 °C." />
      <RecipeListItem text="Pour the hot cream and over caramelized chocolate, gelatin. Combine thoroughly. Cool down to 40 °C." />
    </View>
  );
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
