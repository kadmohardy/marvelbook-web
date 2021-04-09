/* eslint-disable no-shadow */
import { IFavorite } from '../../../interfaces/favorites/favorites';

export enum FavoritesActions {
  ADD_TO_FAVORITES_REQUEST = '@favorites/ADD_TO_FAVORITES_REQUEST',
  ADD_TO_FAVORITES_SUCCESS = '@favorites/ADD_TO_FAVORITES_SUCCESS',
  ADD_TO_FAVORITES_FAILURE = '@favorites/ADD_TO_FAVORITES_FAILURE',
}

export interface FavoritesState {
  favorites: IFavorite[] | [];
  loading: boolean;
}
