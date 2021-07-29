import { action } from "typesafe-actions";
import { AuthTypes, AuthState } from "./types";

export const addAuth = (data: AuthState) => action(AuthTypes.ADD_AUTH, data);
export const removeAuth = () => action(AuthTypes.REMOVE_AUTH, {});
export const alterQuantity = (data: AuthState) =>
  action(AuthTypes.ALTER_AUTH, data);
