import { createStore, applyMiddleware, Store } from "redux";
import { ProductsState } from "./ducks/products/types";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  products: ProductsState;
}

// const localStorageMiddleware = ({ getState }) => {
//   // <--- FOCUS HERE
//   return (next) => (action) => {
//     const result = next(action);
//     localStorage.setItem("applicationState", JSON.stringify(getState()));
//     return result;
//   };
// };

// const persistedState =
//   typeof window !== "undefined" && localStorage.getItem("applicationState")
//     ? JSON.parse(localStorage.getItem("applicationState"))
//     : {};

// const reHydrateStore = () => { // <-- FOCUS HERE
//     //funcao errada
//     if (localStorage.getItem('applicationState') !== null) {
//         return JSON.parse(localStorage.getItem('applicationState')) // re-hydrate the store

//     }
// }

import rootReducer from "./ducks/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
  //   persistedState,
  //   composeWithDevTools(applyMiddleware(sagaMiddleware, localStorageMiddleware))
);

export type RootState = ReturnType<typeof store.getState>;
export type RootStore = typeof store;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);

export default store;
