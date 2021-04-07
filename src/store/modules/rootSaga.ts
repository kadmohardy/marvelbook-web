import { all, fork } from 'redux-saga/effects';
import { authSagas } from './auth/sagas';

export default function* rootSaga() {
  yield all([fork(authSagas)]);
}

// function rootSaga(): Generator<AllEffect<AllEffect<ForkEffect<never>>>, void, unknown>
