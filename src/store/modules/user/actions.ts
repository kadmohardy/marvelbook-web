import { action } from 'typesafe-actions';
import { toast } from 'react-toastify';
import { User, UserActionTypes, IUpdateAccountInfoResponse } from './types';

export function updateAccountInfoRequest(
  token: string,
  data: { fullname: string; email: string },
) {
  console.log('no account');
  return action(UserActionTypes.ACCOUNT_INFO_UPDATE_REQUEST, {
    token,
    data,
  });
}

export function updateAccountInfoSuccess(data: IUpdateAccountInfoResponse) {
  return action(UserActionTypes.ACCOUNT_INFO_UPDATE_RESPONSE, data);
}

export function updateAccountInfoFailure() {
  toast.error('Erro ao tentar atualizar os dados.');
  return action(UserActionTypes.ACCOUNT_INFO_UPDATE_FAILURE);
}
