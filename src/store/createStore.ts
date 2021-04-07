import { applyMiddleware, createStore, Middleware, Reducer } from 'redux';

export default (reducers: Reducer, middlewares: Middleware[]) => {
  return createStore(reducers, applyMiddleware(...middlewares));
};
