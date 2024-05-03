import { BaseQueryApi } from "@reduxjs/toolkit/query";
import Cookies from "js-cookie";

export const BASE_HEADERS = (
  headers: Headers,
  api: Pick<BaseQueryApi, "getState" | "extra" | "endpoint" | "type" | "forced">
) => {
  headers.set("Authorization", `Bearer ${Cookies.get("access_token")}`);
  headers.set("Accept-Language", `${localStorage.getItem("lang") || "en"}`);
  return headers;
};

export const BASE_URL: string = import.meta.env.VITE_API_URL;
