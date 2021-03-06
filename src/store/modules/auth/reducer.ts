import produce from 'immer';

import { AuthenticationState, AuthenticationActions } from './types';
import { UserActionTypes } from './actions';

const initialState: AuthenticationState = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(
  state = initialState,
  action: UserActionTypes,
): AuthenticationState {
  return produce(state, draft => {
    switch (action.type) {
      case AuthenticationActions.AUTH_SIGN_IN_REQUEST: {
        draft.loading = true;
        return draft;
      }

      case AuthenticationActions.AUTH_SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        return draft;
      }

      case AuthenticationActions.AUTH_SIGN_FAILURE: {
        draft.loading = false;
        return draft;
      }

      case AuthenticationActions.AUTH_SIGN_OUT: {
        draft.token = null;
        draft.signed = false;
        return draft;
      }

      default:
        return draft;
    }
  });
}
