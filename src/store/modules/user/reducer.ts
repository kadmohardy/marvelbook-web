import produce from 'immer';
import { AuthenticationTypes, UserAction } from '../auth/types';
import { ProfileState, UserAccountAction, UserActionTypes } from './types';

type Profile = {
  profile: ProfileState | null;
};

const initialState: Profile = {
  profile: null,
};

export default function user(
  state = initialState,
  action: UserAction | UserAccountAction,
): Profile {
  return produce(state, draft => {
    switch (action.type) {
      case AuthenticationTypes.AUTH_SIGN_IN_SUCCESS: {
        draft.profile = action.payload.user;
        return draft;
      }

      case UserActionTypes.ACCOUNT_INFO_UPDATE_RESPONSE: {
        console.log('To no reducer', action.payload);
        draft.profile = action.payload;
        return draft;
      }

      case '@auth/SIGN_OUT': {
        draft.profile = null;
        return draft;
      }

      default:
        return draft;
    }
  });
}
