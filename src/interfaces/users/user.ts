/* eslint-disable camelcase */
export interface IUser {
  fullname: string;
  email: string;
}

export interface IUserSignUpRequest {
  fullname: string;
  email: string;
  password: string;
  password_confirmation: string;
}
