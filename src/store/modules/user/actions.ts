import { action } from 'typesafe-actions';
import { toast } from 'react-toastify';
import { UserAccountActions } from './types';
import { IUser } from '../../../interfaces/users/user';

export function updateAccountInfoRequest(
  token: string,
  data: { fullname: string; email: string },
) {
  return action(UserAccountActions.ACCOUNT_INFO_UPDATE_REQUEST, {
    token,
    data,
  });
}

export function updateAccountInfoSuccess(data: IUser) {
  return action(UserAccountActions.ACCOUNT_INFO_UPDATE_SUCCESS, data);
}

export function updateAccountInfoFailure() {
  toast.error('Erro ao tentar atualizar os dados.');
  return action(UserAccountActions.ACCOUNT_INFO_UPDATE_FAILURE);
}

export type UserAccountActionTypes = ReturnType<
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
