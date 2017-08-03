import { database } from '../Firebase'
export const FETCH_POSTS = 'fetch_posts'

export function getPosts () {
  return dispatch => {
    database.on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      })
    })
  }
}

export function savePost(post) {
  return dispatch => database.push(post)
}

export function deletePost(id) {
  return dispatch => database.child(id).remove();
}