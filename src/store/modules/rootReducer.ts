import { combineReducers } from 'redux';
import auth from './auth/reducer';
import user from './user/reducer';
import favorites from './favorites/reducer';

const rootReducer = combineReducers({
  auth,
  user,
  favorites,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
