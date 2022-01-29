import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const signInWithEmailAndPass = (
  email: string,
  password: string,
  setIsAuthenticating: (arg: boolean) => void,
) => {
  setIsAuthenticating(true);

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password).catch(() => {
    setIsAuthenticating(false);
  });
};
