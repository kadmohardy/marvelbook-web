/* eslint-disable no-shadow */
import { signInRequest, signInSuccess, signFailure, signOut } from './actions';

export enum AuthenticationTypes {
  AUTH_SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  AUTH_SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  AUTH_SIGN_UP_REQUEST = '@auth/SIGN_UP_REQUEST',
  AUTH_SIGN_UP_SUCCESS = '@auth/SIGN_UP_SUCCESS',
  AUTH_SIGN_OUT = '@auth/SIGN_OUT',
  AUTH_SIGN_FAILURE = '@auth/SIGN_FAILURE',
}

export interface AuthenticationState {
  token: string | null;
  signed: boolean;
  loading: boolean;
}

export type UserAction = ReturnType<
  | typeof signInRequest
  | typeof signInSuccess
  | typeof signFailure
  | typeof signOut
>;

export type SignInRequestActionType = ReturnType<typeof signInRequest>;
export type SignInSuccessActionType = ReturnType<typeof signInSuccess>;
export type SignFailureActionType = ReturnType<typeof signFailure>;
export type SignOutActionType = ReturnType<typeof signOut>;

export interface ISignInResponse {
  user: {
    fullname: string;
    email: string;
  };
  token: string;
}
