import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const signUpWithEmailAndPass = (
  email: string,
  password: string,
  setIsAuthenticating: (arg: boolean) => void,
) => {
  setIsAuthenticating(true);

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password).catch(() => {
    setIsAuthenticating(false);
  });
};
