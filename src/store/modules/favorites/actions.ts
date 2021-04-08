import { action } from 'typesafe-actions';
import { toast } from 'react-toastify';
import { IFavorite } from '../../../interfaces/favorites/favorites';
import { FavoritesActions } from './types';

export function addToFavoritesRequest(token: string, data: IFavorite) {
  return action(FavoritesActions.ADD_TO_FAVORITES_REQUEST, {
    token,
    data,
  });
}

export function addToFavoritesSuccess(data: IFavorite) {
  return action(FavoritesActions.ADD_TO_FAVORITES_SUCCESS, {
    data,
  });
}

export function addToFavoritesFailure() {
  toast.error('Erro ao tentar adicionar aos favoritos');
  return action(FavoritesActions.ADD_TO_FAVORITES_FAILURE);
}

export type FavoritesActionTypes = ReturnType<
  | typeof addToFavoritesRequest
  | typeof addToFavoritesSuccess
  | typeof addToFavoritesFailure
>;

export type AddToFavoritesRequestActionType = ReturnType<
  typeof addToFavoritesRequest
>;
export type SignInSuccessActionType = ReturnType<typeof addToFavoritesSuccess>;
export type SignFailureActionType = ReturnType<typeof addToFavoritesFailure>;
