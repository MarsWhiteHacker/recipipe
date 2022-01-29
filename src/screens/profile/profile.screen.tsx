import React, { VFC } from 'react';
import { View, Text, Button } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';

export const Profile: VFC = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <Text>Profile Page</Text>
      <Button
        title="Sign out"
        onPress={() => {
          const auth = getAuth();
          signOut(auth);
        }}
      />
    </View>
  );
};
