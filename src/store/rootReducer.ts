import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./api/auth/authApi";
import app from "./app";

const rootReducer = combineReducers({
  app,
  [authApi.reducerPath]: authApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
