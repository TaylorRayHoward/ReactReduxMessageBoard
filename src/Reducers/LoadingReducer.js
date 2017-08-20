import { USER_STATUS } from '../Actions/UserActions';
import { POST_STATUS } from '../Actions/PostActions';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_STATUS:
      return { ...state, user: action.payload };
    case POST_STATUS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
