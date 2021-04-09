import produce from 'immer';
import { UserAccountActions, UserState } from './types';
import { UserAccountActionTypes } from './actions';
import { UserActionTypes } from '../auth/actions';
import { AuthenticationActions } from '../auth/types';

const initialState: UserState = {
  profile: {
    fullname: '',
    email: '',
  },
  loading: false,
};

export default function user(
  state = initialState,
  action: UserActionTypes | UserAccountActionTypes,
): UserState {
  return produce(state, draft => {
    switch (action.type) {
      case AuthenticationActions.AUTH_SIGN_IN_SUCCESS: {
        draft.profile = action.payload.user;
        return draft;
      }

      case UserAccountActions.ACCOUNT_INFO_UPDATE_SUCCESS: {
        draft.profile = action.payload;
        return draft;
      }

      case AuthenticationActions.AUTH_SIGN_OUT: {
        draft.profile = {
          fullname: '',
          email: '',
        };
        return draft;
      }

      default:
        return draft;
    }
  });
}
