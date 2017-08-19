import { database } from '../Firebase';
export const FETCH_POSTS = 'fetch_posts';

export function getPosts() {
  return dispatch => {
    database.on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };
}

export function savePost(post, uid) {
  return dispatch => database.push({ ...post, uid });
}

export function deletePost(id) {
  return dispatch => database.child(id).remove();
}