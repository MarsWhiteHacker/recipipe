import React, { VFC } from 'react';
import { View, Text } from 'react-native';

export const Favourite: VFC = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>Favourite Page</Text>
    </View>
  );
};
