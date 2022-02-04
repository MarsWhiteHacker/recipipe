import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore/lite';
import { FirebaseStorage, getStorage } from 'firebase/storage';
import Constants from 'expo-constants';

export const firebase: FirebaseType = {
  firestore: null,
  storage: null,
};

export const initializeFirebase = () => {
  const firebaseApp = initializeApp(Constants.manifest?.extra?.firebaseConfig);

  const firestore = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);
  firebase.firestore = firestore;
  firebase.storage = storage;

  return firebaseApp;
};

type FirebaseType = {
  firestore: Firestore | null;
  storage: FirebaseStorage | null;
};
