export interface User {
  fullname: string;
  email: string;
}

export interface ProfileState {
  fullname: string | null;
  email: string | null;
}
