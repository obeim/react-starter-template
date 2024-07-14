import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { AuthState, JWTData, LoginResult, User } from "@/types";
import { getJWTData, clearJWTData, saveJWTData } from "@/utils/jwtUtils";
import { RootState } from "@/store";

const initState: AuthState = {
  tokenData: getJWTData(),
};
const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    logOut: (state) => {
      clearJWTData();
      state.tokenData = null;
      state.user = null;
    },
    logIn: (
      state,
      action: PayloadAction<LoginResult | FetchBaseQueryError>
    ) => {
      const authData = action.payload as LoginResult;
      const error = action.payload as FetchBaseQueryError;
      if (typeof error?.status === "number") {
        state.errorKey = getErrorKey(error.status as number);
        return;
      } else if (error.status) {
        state.errorKey = "UnkownError";
        return;
      }
      if (authData.code != 200) {
        state.errorKey = getErrorKey(authData.code);
        return;
      }
      state.errorKey = null;
      state.user = authData.user;
      saveJWTData({
        refreshToken: authData.access?.refreshToken,
        token: authData.access?.token,
      });
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    refreshToken: (state, action: PayloadAction<JWTData>) => {
      state.tokenData = action.payload;
      saveJWTData(action.payload);
    },
  },
});

export const authSelector = (state: RootState) => state.jwtAuth;

function getErrorKey(code: number): string {
  switch (code) {
    case 422:
      return "WrongPassword";
    case 404:
      return "AccountNotFound";
    default:
      return "UnkownError";
  }
}

export const { logIn, logOut, updateUser, refreshToken } = authSlice.actions;

export default authSlice.reducer;
