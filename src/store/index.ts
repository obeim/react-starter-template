import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from "./rootReducer";
import { authApi } from "./api/auth/authApi";

export interface SerializedError {
  name?: string;
  data: {
    message?: string;
  };
  status: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const middlewares: any[] = [authApi.middleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
