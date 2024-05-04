import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./api/auth/authApi";
import jwtAuthReducer from "./api/auth/jwtAuth.slice";
import app from "./app";

const rootReducer = combineReducers({
  app,
  [authApi.reducerPath]: authApi.reducer,
  jwtAuth: jwtAuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
