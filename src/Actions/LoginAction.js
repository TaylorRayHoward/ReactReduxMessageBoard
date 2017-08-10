/**
 * Created by taylorrayhoward on 8/8/17.
 */
import { auth } from '../Firebase';
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

export function login(username, password) {
  return dispatch => auth.signInWithEmailAndPassword(username, password);
}