import React, { VFC } from 'react';
import { View, Text } from 'react-native';

export const Category: VFC = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <Text>Category Page</Text>
    </View>
  );
};
