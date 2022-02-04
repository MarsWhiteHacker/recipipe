import React, { useState, VFC } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

import { Button } from '~components/common/button';
import { Header } from '~components/common/header';
import { MainInput } from '~components/common/main-input';
import { MainText } from '~components/common/main-text';
import { Hostess } from '~components/layouts/hostess';
import inputsSelectors from '~store/redux/inputs/inputs.selectors';
import { signInWithEmailAndPass } from './utils/signInWithEmailAndPass';
import { signUpWithEmailAndPass } from './utils/signUpWithEmailAndPass';

export const Auth: VFC = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const onChangeAuthScreen = () => {
    setIsNewUser((state) => !state);
    setEmail('');
    setPassword('');
  };

  const onSubmitHandler = () => {
    if (email && password) {
      if (isNewUser) {
        signUpWithEmailAndPass(email, password, setIsAuthenticating);
      } else {
        signInWithEmailAndPass(email, password, setIsAuthenticating);
      }
    }
  };

  const isInputFocused = useSelector(inputsSelectors.isFocused);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <Hostess image={require('~assets/images/auth.png')}>
            <View style={styles.infoBlock}>
              <View style={styles.emptyBlock} />

              <Header size="big">Recipipe</Header>
              <MainText fs={17} lh={21}>
                All recipes in one place
              </MainText>
              <MainInput
                placeholder="Email"
                value={email}
                onChange={setEmail}
                type="email-address"
                style={styles.email}
              />
              <MainInput
                placeholder="Password"
                value={password}
                onChange={setPassword}
                isSecure
                style={styles.password}
              />
              <Button
                title={isNewUser ? 'Sign up' : 'Sign in'}
                onPress={onSubmitHandler}
                isLoading={isAuthenticating}
                disabled={isAuthenticating}
              />
            </View>
          </Hostess>
        </KeyboardAvoidingView>
        {!isInputFocused && (
          <View style={[styles.footer]}>
            <View style={styles.footerTextWrapper}>
              <MainText lh={20}>
                {isNewUser
                  ? 'Already have an account? '
                  : 'Don’t have an account? '}
              </MainText>
              <TouchableOpacity
                onPress={onChangeAuthScreen}
                style={styles.linkWrapper}
              >
                <MainText lh={20} color="third">
                  {isNewUser ? 'Sign in' : 'Sign up'}
                </MainText>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
  infoBlock: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
  },
  emptyBlock: {
    height: 50,
  },
  footer: {
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    alignItems: 'center',
    height: 75,
  },
  footerTextWrapper: {
    height: 32,
    paddingLeft: 16,
    paddingRight: 16,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkWrapper: {
    width: 60,
  },
  email: {
    marginTop: 24,
  },
  password: {
    marginTop: 9,
    marginBottom: 24,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },
});
