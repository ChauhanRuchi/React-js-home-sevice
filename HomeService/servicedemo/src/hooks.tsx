import {RootState,AppDispach} from "../../servicedemo/src/store"
import { TypedUseSelectorHook,useDispatch, useSelector } from "react-redux";

export const useAppselector:TypedUseSelectorHook<RootState>=useSelector
export const useAppdispatch=()=>useDispatch<AppDispach>()