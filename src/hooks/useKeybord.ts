import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

export const useKeybord = (): boolean => {
  const [keyboardState, setKeyboardState] = useState<boolean>(false);

  useEffect(() => {
    const { remove: removeStart } = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardState(true),
    );
    const { remove: removeHide } = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardState(false),
    );

    return () => {
      removeStart();
      removeHide();
    };
  }, []);

  return keyboardState;
};
