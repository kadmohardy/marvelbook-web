import { combineReducers } from 'redux';
import auth from './auth/reducer';
import user from './user/reducer';

const rootReducer = combineReducers({
  auth,
  user,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
