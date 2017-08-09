/**
 * Created by taylorrayhoward on 8/8/17.
 */
import { GET_USER } from '../Actions/LoginAction';

export default function (state = { loading: true }, action) {
  switch (action.type) {
    case GET_USER:
      return { loading: false, ...action.payload };
    default:
      return state;
  }
}
