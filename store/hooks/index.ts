import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../index";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
