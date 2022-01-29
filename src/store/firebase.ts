import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore/lite';
import Constants from 'expo-constants';

export const firebase: FirebaseType = {
  firestore: null,
};

export const initializeFirebase = () => {
  const firebaseApp = initializeApp(Constants.manifest?.extra?.firebaseConfig);

  const firestore = getFirestore(firebaseApp);
  firebase.firestore = firestore;

  return firebaseApp;
};

type FirebaseType = {
  firestore: Firestore | null;
};
