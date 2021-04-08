import { all, fork } from 'redux-saga/effects';
import { authSagas } from './auth/sagas';
import { userSagas } from './user/sagas';

export default function* rootSaga() {
  yield all([fork(authSagas), fork(userSagas)]);
}

// function rootSaga(): Generator<AllEffect<AllEffect<ForkEffect<never>>>, void, unknown>
