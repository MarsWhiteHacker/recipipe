import React, { useState, VFC } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import { TabNavigation } from '~navigations/tab-navigation/tab-navigation';
import { Auth } from '~screens/auth/auth';
import { Welcome } from '~screens/welcome';
import { useInitializeFirebase } from '~hooks/useInitializeFirabase';
import globalStyles from './src/global/constants.style';

const theme = DefaultTheme;
theme.colors.background = globalStyles.BG_COLOR_MAIN;

const App: VFC = () => {
  const [isAppInitialized, setIsAppInitialized] = useState(false);
  const [fontsLoaded] = useFonts({
    CeraProMedium: require('~assets/fonts/ceraPro/CeraPro-Medium.ttf'),
    RecoletaMedium: require('~assets/fonts/recoleta/Recoleta-Regular.ttf'),
  });

  const isUserLogged = useInitializeFirebase(
    isAppInitialized,
    setIsAppInitialized,
  );

  if (!fontsLoaded || !isAppInitialized) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={globalStyles.MAIN_COLOR} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <NavigationContainer theme={theme}>
        {isUserLogged ? (
          <TabNavigation />
        ) : (
          /* <Welcome /> */
          <Auth />
        )}
        <StatusBar style="auto" />
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
});

export default App;
