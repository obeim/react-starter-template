import { BASE_HEADERS, BASE_URL } from "@/configs/apiConfig";
import { User } from "@/types";
import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: BASE_HEADERS,
  }) as BaseQueryFn,
  tagTypes: ["User"],
  endpoints: ({ query }) => ({
    profile: query<User, null>({
      query: () => ({
        url: "/user",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useProfileQuery } = authApi;
