import firebase from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
  apiKey: 'AIzaSyA3wUU1lQJEX8mkzw0R5VZUKn7Oh0U1LOg',
  authDomain: 'react-firebase-auth-eba99.firebaseapp.com',
  databaseURL: 'https://react-firebase-auth-eba99.firebaseio.com',
  projectId: 'react-firebase-auth-eba99',
  storageBucket: 'react-firebase-auth-eba99.appspot.com',
  messagingSenderId: '118831012529',
};

const devConfig = {
  apiKey: 'AIzaSyCMDCGQrxM97MUQMz4h3LzLlhEm86H5wBY',
  authDomain: 'react-firebase-auth-dev-4493b.firebaseapp.com',
  databaseURL: 'https://react-firebase-auth-dev-4493b.firebaseio.com',
  projectId: 'react-firebase-auth-dev-4493b',
  storageBucket: 'react-firebase-auth-dev-4493b.appspot.com',
  messagingSenderId: '583027747650',
};

const config = process.env.NOVE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
