import produce from 'immer';

import { UserAction, AuthenticationState, AuthenticationTypes } from './types';

const initialState: AuthenticationState = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(
  state = initialState,
  action: UserAction,
): AuthenticationState {
  return produce(state, draft => {
    switch (action.type) {
      case AuthenticationTypes.AUTH_SIGN_IN_REQUEST: {
        draft.loading = true;
        return draft;
      }

      case AuthenticationTypes.AUTH_SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        return draft;
      }

      case AuthenticationTypes.AUTH_SIGN_FAILURE: {
        draft.loading = false;
        return draft;
      }

      case AuthenticationTypes.AUTH_SIGN_OUT: {
        draft.token = null;
        draft.signed = false;
        return draft;
      }

      default:
        return draft;
    }
  });
}
