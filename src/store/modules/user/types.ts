/* eslint-disable no-shadow */
import {
  updateAccountInfoFailure,
  updateAccountInfoRequest,
  updateAccountInfoSuccess,
} from './actions';

export enum UserActionTypes {
  ACCOUNT_INFO_UPDATE_REQUEST = '@user/ACCOUNT_INFO_UPDATE_REQUEST',
  ACCOUNT_INFO_UPDATE_RESPONSE = '@auth/ACCOUNT_INFO_UPDATE_RESPONSE',
  ACCOUNT_INFO_UPDATE_FAILURE = '@auth/ACCOUNT_INFO_UPDATE_FAILURE',
}

export interface User {
  fullname: string;
  email: string;
}

export interface ProfileState {
  fullname: string;
  email: string;
}

export interface AuthenticationState {
  token: string | null;
  signed: boolean;
  loading: boolean;
}

export type UserAccountAction = ReturnType<
  | typeof updateAccountInfoFailure
  | typeof updateAccountInfoRequest
  | typeof updateAccountInfoSuccess
>;

export type UpdateAccountInfoRequestActionType = ReturnType<
  typeof updateAccountInfoRequest
>;
export type UpdateAccountInfoSuccessActionType = ReturnType<
  typeof updateAccountInfoSuccess
>;
export type UpdateAccountInfoFailureActionType = ReturnType<
  typeof updateAccountInfoFailure
>;

export interface IUpdateAccountInfoResponse {
  fullname: string;
  email: string;
}
