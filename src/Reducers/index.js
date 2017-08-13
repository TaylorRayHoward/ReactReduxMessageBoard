import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import PostReducer from './PostReducer'
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  form: formReducer,
  posts: PostReducer,
  user: UserReducer
});

export default rootReducer;