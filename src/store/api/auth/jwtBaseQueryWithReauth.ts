// Need to use the React-specific entry point to import createApi
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";

import { logOut, refreshToken } from "./jwtAuth.slice";
import { RootState } from "@/store/rootReducer";
import { BASE_URL } from "@/configs/apiConfig";
import { JWTData } from "@/types";

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL, //import.meta.env.VITE_API_URL,
  prepareHeaders(headers, api) {
    const token = (api.getState() as RootState).jwtAuth?.tokenData?.token;
    if (token) {
      // include token in req header
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    }
  },
});
const jwtBaseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          "auth/refreshToken",
          api,
          extraOptions
        );
        if (refreshResult.data) {
          api.dispatch(refreshToken(refreshResult.data as JWTData));
          // retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logOut());
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export { jwtBaseQueryWithReauth as baseQueryWithReauth };
