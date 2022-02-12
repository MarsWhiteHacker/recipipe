import React, { useState, VFC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import { Auth } from '~screens/auth/auth';
import { Welcome } from '~screens/welcome';
import { useInitializeFirebase } from '~hooks/useInitializeFirabase';
import { StackNavigation } from '~navigations/stack-navigation';
import globalStyles from './src/global/constants.style';
import store from './src/store/redux';

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
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        {isUserLogged ? (
          <StackNavigation />
        ) : (
          /* <Welcome /> */
          <Auth />
        )}
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
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
