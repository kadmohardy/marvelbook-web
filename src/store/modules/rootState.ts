import { AuthenticationState } from './auth/types';
import { FavoritesState } from './favorites/types';
import { UserState } from './user/types';

export default interface RootState {
  auth: AuthenticationState;
  user: UserState;
  favorites: FavoritesState;
}
