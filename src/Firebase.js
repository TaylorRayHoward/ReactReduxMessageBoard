import * as firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyB6y5SiSArJ1XGpIuLKjJ8BU5hyOSYQZ_A',
  authDomain: 'messageboard-f7999.firebaseapp.com',
  databaseURL: 'https://messageboard-f7999.firebaseio.com',
  projectId: 'messageboard-f7999',
  storageBucket: 'messageboard-f7999.appspot.com',
  messagingSenderId: '1812983197'
};
firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();

