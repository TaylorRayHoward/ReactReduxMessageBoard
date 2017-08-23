import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import PostReducer from './PostReducer'
import UserReducer from './UserReducer';
import LoadingReducer from './LoadingReducer';

const rootReducer = combineReducers({
  form: formReducer,
  posts: PostReducer,
  user: UserReducer,
  loading: LoadingReducer
});

export default rootReducer;