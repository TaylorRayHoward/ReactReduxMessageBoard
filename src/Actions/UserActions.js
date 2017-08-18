import { auth, googleProvider, twitterProvider } from '../Firebase';
export const GET_USER = 'get_user';
export function getUser() {
  return dispatch => {
    auth.onAuthStateChanged(user => {
      dispatch({
        type: GET_USER,
        payload: user
      });
    });
  };
}

export function login(email, password) {
  return dispatch => auth.signInWithEmailAndPassword(email, password);
}

export function logout() {
  return dispatch => auth.signOut();
}

export function createAccount(email, password) {
  return dispatch => auth.createUserWithEmailAndPassword(email, password);
}

export function googleLogin() {
  return dispatch => auth.signInWithPopup(googleProvider);
}

export function twitterLogin() {
  return dispatch => auth.signInWithPopup(twitterProvider);
}