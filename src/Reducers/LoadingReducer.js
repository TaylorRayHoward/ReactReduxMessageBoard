import { POST_STATUS } from '../Actions/PostActions';
import { USER_STATUS } from '../Actions/UserActions';

export default function (state = {}, action) {
  switch (action.type) {
    case POST_STATUS:
      return { ...state, posts: action.payload };
    case USER_STATUS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
