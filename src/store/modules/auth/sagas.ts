import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { signFailure, signInSuccess } from './actions';

import {
  AuthenticationTypes,
  SignInRequestActionType,
  SignUpRequestActionType,
  ISignInResponse,
} from './types';

export function* signIn(action: SignInRequestActionType) {
  try {
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

export function* signUp(action: SignUpRequestActionType) {
  try {
    const { fullname, email, password } = action.payload;

    yield call(api.post, '/users', {
      fullname,
      email,
      password,
    });
  } catch (error) {
    yield put(signFailure());
  }
}

export default all([
  takeLatest(AuthenticationTypes.AUTH_SIGN_IN_REQUEST, signIn),
  takeLatest(AuthenticationTypes.AUTH_SIGN_UP_REQUEST, signUp),
]);
