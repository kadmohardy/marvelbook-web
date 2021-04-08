/* eslint-disable no-shadow */
import { IUser } from '../../../interfaces/users/user';

export enum UserAccountActions {
  ACCOUNT_INFO_UPDATE_REQUEST = '@user/ACCOUNT_INFO_UPDATE_REQUEST',
  ACCOUNT_INFO_UPDATE_SUCCESS = '@auth/ACCOUNT_INFO_UPDATE_SUCCESS',
  ACCOUNT_INFO_UPDATE_FAILURE = '@auth/ACCOUNT_INFO_UPDATE_FAILURE',
}

export interface AuthenticationState {
  token: string | null;
  signed: boolean;
  loading: boolean;
}

export interface UserState {
  profile: IUser;
  loading: boolean;
}
