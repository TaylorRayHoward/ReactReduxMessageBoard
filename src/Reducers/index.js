import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import PostReducer from './PostReducer'
import LoginReducer from './LoginReducer'


const rootReducer = combineReducers({
  form: formReducer,
  posts: PostReducer,
  user: LoginReducer
});

export default rootReducer;