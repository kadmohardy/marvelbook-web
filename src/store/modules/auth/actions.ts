import { typedAction } from '../typedAction';
import { User } from '../user/types';
import { AuthenticationTypes } from './types';

export function signInRequest(email: string, password: string) {
  return typedAction(AuthenticationTypes.AUTH_SIGN_IN_REQUEST, {
    email,
    password,
  });
}

export function signInSuccess(token: string, user: User) {
  return typedAction(AuthenticationTypes.AUTH_SIGN_IN_SUCCESS, {
    token,
    user,
  });
}

export function signUpRequest(
  fullname: string,
  email: string,
  password: string,
) {
  return typedAction(AuthenticationTypes.AUTH_SIGN_UP_REQUEST, {
    fullname,
    email,
    password,
  });
}

export function signFailure() {
  return typedAction(AuthenticationTypes.AUTH_SIGN_FAILURE);
}

export function signOut() {
  return typedAction(AuthenticationTypes.AUTH_SIGN_OUT);
}
