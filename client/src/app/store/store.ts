
import { configureStore, legacy_createStore } from "@reduxjs/toolkit"
import { counterReducer, counterSlice } from "../../features/contact/counterReducer"
import { useDispatch, useSelector } from "react-redux";
import { catelogApi } from "../../features/catelog/catelogApi";
import { uiSlice } from "../layout/uiSlice";

export const configureTheStore = () => {
  return legacy_createStore(counterReducer)
}

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [catelogApi.reducerPath]: catelogApi.reducer,
    ui: uiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(catelogApi.middleware)
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>();