/**
 * Actions Types
 */
export enum AuthTypes {
  ADD_AUTH = "@auth/ADD_AUTH",
  REMOVE_AUTH = "@auth/REMOVE_AUTH",
  ALTER_AUTH = "@auth/ALTER_AUTH",
}

/**
 * State Type
 */

export interface AuthState {
  fullName?: string;
  status?: string;
  token?: string;
  typeUser?: string;
  userId?: string;
  hash?: string;
}
