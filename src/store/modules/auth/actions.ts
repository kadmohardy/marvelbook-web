import { action } from 'typesafe-actions';
import { toast } from 'react-toastify';
import { AuthenticationActions } from './types';
import { IUser } from '../../../interfaces/users/user';

export function signInRequest(email: string, password: string) {
  return action(AuthenticationActions.AUTH_SIGN_IN_REQUEST, {
    email,
    password,
  });
}

export function signInSuccess(token: string, user: IUser) {
  return action(AuthenticationActions.AUTH_SIGN_IN_SUCCESS, {
    token,
    user,
  });
}

export function signFailure() {
  toast.error('Erro ao tentar realizar o signin. Usuário/Senha incorretos.');
  return action(AuthenticationActions.AUTH_SIGN_FAILURE);
}

export function signOut() {
  return action(AuthenticationActions.AUTH_SIGN_OUT);
}

export type UserActionTypes = ReturnType<
  | typeof signInRequest
  | typeof signInSuccess
  | typeof signFailure
  | typeof signOut
>;

export type SignInRequestActionType = ReturnType<typeof signInRequest>;
export type SignInSuccessActionType = ReturnType<typeof signInSuccess>;
export type SignFailureActionType = ReturnType<typeof signFailure>;
export type SignOutActionType = ReturnType<typeof signOut>;
