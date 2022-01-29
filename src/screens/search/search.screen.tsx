import React, { VFC } from 'react';
import { View, Text } from 'react-native';

export const Search: VFC = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Search Page</Text>
    </View>
  );
};
