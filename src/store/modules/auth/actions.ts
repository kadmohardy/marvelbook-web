import { action } from 'typesafe-actions';
import { toast } from 'react-toastify';
import { User } from '../user/types';
import { AuthenticationTypes } from './types';

export function signInRequest(email: string, password: string) {
  console.log('TESTANDO AUSHDUAHSDUASHUDHA');
  return action(AuthenticationTypes.AUTH_SIGN_IN_REQUEST, {
    email,
    password,
  });
}

export function signInSuccess(token: string, user: User) {
  return action(AuthenticationTypes.AUTH_SIGN_IN_SUCCESS, {
    token,
    user,
  });
}

export function signFailure() {
  toast.error('Erro ao tentar realizar o signin. Usuário/Senha incorretos.');
  return action(AuthenticationTypes.AUTH_SIGN_FAILURE);
}

export function signOut() {
  return action(AuthenticationTypes.AUTH_SIGN_OUT);
}
