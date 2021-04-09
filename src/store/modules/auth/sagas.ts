import { all, fork, call, delay, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import api from '../../../services/api';
import { signFailure, signInSuccess, SignInRequestActionType } from './actions';

import { AuthenticationActions } from './types';

function* signIn(action: SignInRequestActionType) {
  try {
    const { email, password } = action.payload;

    const response: AxiosResponse = yield call(api.post, '/sessions', {
      email,
      password,
    });
    const { user, token } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield delay(3000);

    yield put(signInSuccess(token, user));
  } catch (error) {
    yield put(signFailure());
  }
}

function* watchSignInRequest() {
  yield takeLatest(AuthenticationActions.AUTH_SIGN_IN_REQUEST, signIn);
}

// eslint-disable-next-line import/prefer-default-export
export function* authSagas() {
  yield all([fork(watchSignInRequest)]);
}
