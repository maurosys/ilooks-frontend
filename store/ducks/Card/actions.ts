import { action } from "typesafe-actions";
import { CardTypes, card } from "./types";

export const addToCart = (data: card) => action(CardTypes.ADD_TO_CART, data);
export const removeItem = (id: number) => action(CardTypes.REMOVE_ITEM, id);
export const getAll = (data: card[]) => action(CardTypes.GET_ALL, data);
export const alterQuantity = (data: card) =>
  action(CardTypes.ALTER_QUANTITY, data);
