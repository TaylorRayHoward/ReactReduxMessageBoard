import { auth, googleProvider, twitterProvider } from '../Firebase';

export const GET_USER = 'get_user';
export const USER_STATUS = 'user_status';
export function getUser() {
  return dispatch => {
    dispatch({
      type: USER_STATUS,
      payload: true
    });
    auth.onAuthStateChanged(user => {
      dispatch({
        type: GET_USER,
        payload: user
      });
      dispatch({
        type: USER_STATUS,
        payload: false
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