import { AuthenticationState } from './auth/types';
import { StoreMenuState } from '../modules/menu/types';
import { ProfileState } from './user/types';

export default interface RootState {
  auth: AuthenticationState;
  user: { profile: ProfileState };
  menu: StoreMenuState;
}
