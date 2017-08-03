import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import PostReducer from './PostReducer'


const rootReducer = combineReducers({
  form: formReducer,
  posts: PostReducer
});

export default rootReducer;