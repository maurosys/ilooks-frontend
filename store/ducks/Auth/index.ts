import { Reducer } from "redux";
import { AuthState, AuthTypes } from "./types";

const INITIAL_STATE: AuthState = {};

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.ADD_AUTH:
      localStorage.setItem(
        "@ilooksecommerce_auth",
        JSON.stringify({ ...state, ...action.payload })
      );
      return { ...state, ...action.payload };

    case AuthTypes.REMOVE_AUTH:
      localStorage.removeItem("@ilooksecommerce_auth");
      return {};

    case AuthTypes.ALTER_AUTH:
      localStorage.setItem(
        "@ilooksecommerce_auth",
        JSON.stringify({ ...state, ...action.payload })
      );
      return { ...state, ...action.payload };

    default:
      if (
        typeof window !== "undefined" &&
        localStorage.getItem("@ilooksecommerce_auth") !== null
      ) {
        return JSON.parse(localStorage.getItem("@ilooksecommerce_auth"));
      } else {
        return state;
      }
  }
};

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state) => {
  const authUser: AuthState = state.auth;
  return authUser;
};

export default reducer;
