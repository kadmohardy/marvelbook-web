import { action } from 'typesafe-actions';
import { User } from '../user/types';
import { SearchActionTypes } from './types';

export function searchComics(email: string, password: string) {
  return action(SearchActionTypes.SEARCH_COMMICS, {
    email,
    password,
  });
}

export function signInSuccess(token: string, user: User) {
  return action(SearchActionTypes.SEARCH_CHARACTERS, {
    token,
    user,
  });
}
