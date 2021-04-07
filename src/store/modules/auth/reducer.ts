import produce from 'immer';
// import { Reducer } from 'redux';

import { UserAction, AuthenticationState, AuthenticationTypes } from './types';

const initialState: AuthenticationState = {
  token: null,
  signed: false,
  loading: false,
};

// const reducer: Reducer<AuthenticationState> = (
//   state = initialState,
//   action,
// ) => {
//   switch (action.type) {
//     case AuthenticationTypes.AUTH_SIGN_IN_REQUEST: {
//       return { ...state, loading: true };
//     }
//     case AuthenticationTypes.AUTH_SIGN_IN_SUCCESS: {
//       return {
//         ...state,
//         loading: false,
//         token: action.payload.token,
//         signed: true,
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// };

export default function auth(
  state = initialState,
  action: UserAction,
): AuthenticationState {
  return produce(state, draft => {
    switch (action.type) {
      case AuthenticationTypes.AUTH_SIGN_IN_REQUEST: {
        console.log('REDUCER DE ATUH', action.payload);
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
