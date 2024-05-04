import { BASE_HEADERS, BASE_URL } from "@/configs/apiConfig";
import { LoginRequest, LoginResult, User } from "@/types";
import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
//import { baseQueryWithReauth } from "./jwtBaseQueryWithReauth";
export const authApi = createApi({
  reducerPath: "authApi",
  //jwtBaseQueryWithReauth
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: BASE_HEADERS,
  }) as BaseQueryFn,
  tagTypes: ["User"],
  endpoints: ({ query, mutation }) => ({
    jtwLogin: mutation<LoginResult, LoginRequest>({
      query: (data) => ({
        method: "POST",
        url: "/user/auth/login",
        body: _loginToFormData(data),
      }),
    }),
    profile: query<User, null>({
      query: () => ({
        url: "/user",
      }),
      providesTags: ["User"],
    }),
  }),
});
function _loginToFormData(lr: LoginRequest) {
  const fd = new FormData();
  fd.append("Email", lr.email);
  fd.append("Password", lr.password);
  return fd;
}
export const { useProfileQuery, useJtwLoginMutation } = authApi;
