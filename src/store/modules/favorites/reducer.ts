import produce from 'immer';
import { FavoritesActionTypes } from './actions';
import { FavoritesState, FavoritesActions } from './types';

const initialState: FavoritesState = {
  favorites: [],
  loading: false,
};

export default function favorites(
  state = initialState,
  action: FavoritesActionTypes,
): FavoritesState {
  return produce(state, draft => {
    switch (action.type) {
      case FavoritesActions.ADD_TO_FAVORITES_REQUEST: {
        draft.loading = true;
        return draft;
      }

      case FavoritesActions.ADD_TO_FAVORITES_SUCCESS: {
        draft.favorites = [...draft.favorites, action.payload.data];
        draft.loading = false;
        return draft;
      }

      case FavoritesActions.ADD_TO_FAVORITES_FAILURE: {
        draft.loading = false;
        return draft;
      }

      default:
        return draft;
    }
  });
}
