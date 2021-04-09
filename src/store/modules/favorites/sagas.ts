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
    console.log('favorios', action.payload);
    const { data, token } = action.payload;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    const response: AxiosResponse = yield call(api.post, '/favorites', {
      name: data.name,
      description: data.description,
      image: data.image,
      type: data.type,
      marvel_id: data.id,
    });

    yield delay(3000);
    console.log('favorios', response);

    yield put(addToFavoritesSuccess(response.data));
  } catch (error) {
    yield put(addToFavoritesFailure());
  }
}

function* watchAddToFavoritesRequest() {
  yield takeLatest(FavoritesActions.ADD_TO_FAVORITES_REQUEST, addToFavorites);
}

// eslint-disable-next-line import/prefer-default-export
export function* favoritesSagas() {
  yield all([fork(watchAddToFavoritesRequest)]);
}
