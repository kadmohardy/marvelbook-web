import { all, fork, call, delay, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import api from '../../../services/api';
import { updateAccountInfoFailure, updateAccountInfoSuccess } from './actions';

import { UserActionTypes, UpdateAccountInfoRequestActionType } from './types';

function* updateAccountInfo(action: UpdateAccountInfoRequestActionType) {
  console.log('updateAccountInfo');

  try {
    const { data, token } = action.payload;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    const response: AxiosResponse = yield call(api.patch, '/users', {
      fullname: data.fullname,
      email: data.email,
    });
    yield delay(3000);
    const { user } = response.data;
    yield put(updateAccountInfoSuccess(user));
  } catch (error) {
    yield put(updateAccountInfoFailure());
  }
}

function* watchSignInRequest() {
  yield takeLatest(
    UserActionTypes.ACCOUNT_INFO_UPDATE_REQUEST,
    updateAccountInfo,
  );
}

// eslint-disable-next-line import/prefer-default-export
export function* userSagas() {
  yield all([fork(watchSignInRequest)]);
}
