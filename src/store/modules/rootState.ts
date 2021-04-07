import { AuthenticationState } from './auth/types';
import { ProfileState } from './user/types';

export default interface RootState {
  auth: AuthenticationState;
  user: { profile: ProfileState };
}
