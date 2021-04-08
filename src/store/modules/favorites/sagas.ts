import { all, fork, call, delay, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { FavoritesActions } from './types';
import api from '../../../services/api';
import {
  addToFavoritesFailure,
  addToFavoritesSuccess,
  AddToFavoritesRequestActionType,
} from './actions';

function* addToFavorites(action: AddToFavoritesRequestActionType) {
  try {
    const { data, token } = action.payload;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response: AxiosResponse = yield call(api.post, '/favorites', data);

    const { favorite } = response.data;
    yield delay(3000);

    yield put(addToFavoritesSuccess(favorite));
  } catch (error) {
    yield put(addToFavoritesFailure());
  }
}

function* watchAddToFavoritesRequest() {
  yield takeLatest(FavoritesActions.ADD_TO_FAVORITES_REQUEST, addToFavorites);
}

// eslint-disable-next-line import/prefer-default-export
export function* authSagas() {
  yield all([fork(watchAddToFavoritesRequest)]);
}
