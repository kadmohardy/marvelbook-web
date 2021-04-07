import { all, fork, call, delay, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { signFailure, signInSuccess } from './actions';

import {
  AuthenticationTypes,
  SignInRequestActionType,
  ISignInResponse,
} from './types';

function* signIn(action: SignInRequestActionType) {
  try {
    console.log('TESTANDO ASUHDUASHDUAUSHDU22222');
    const { email, password } = action.payload;

    const response: ISignInResponse = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { user, token } = response;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield delay(3000);

    yield put(signInSuccess(token, user));
  } catch (error) {
    yield put(signFailure());
  }
}

function* watchSignInRequest() {
  yield takeLatest(AuthenticationTypes.AUTH_SIGN_IN_REQUEST, signIn);
}

// eslint-disable-next-line import/prefer-default-export
export function* authSagas() {
  yield all([fork(watchSignInRequest)]);
}

// export default all([
//   takeLatest(AuthenticationTypes.AUTH_SIGN_IN_REQUEST, signIn),
// ]);
