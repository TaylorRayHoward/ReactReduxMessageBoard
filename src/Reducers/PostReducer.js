import { FETCH_POSTS } from '../Actions/PostActions';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
}