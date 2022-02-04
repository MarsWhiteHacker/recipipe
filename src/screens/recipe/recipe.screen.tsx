import React, { VFC } from 'react';
import { View, Text } from 'react-native';

export const Recipe: VFC = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <Text>Recipe Page</Text>
    </View>
  );
};
