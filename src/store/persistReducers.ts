import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers: Reducer) => {
  const persistedReducers = persistReducer(
    {
      key: 'marvelbook',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers,
  );

  return persistedReducers;
};
