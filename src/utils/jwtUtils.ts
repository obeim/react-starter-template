import { AuthJwtPayload, JWTData } from "@/types";

import { jwtDecode } from "jwt-decode";
const _TOKEN_DATA_KEY = "_token_data_";

function saveJWTData(token: JWTData) {
  localStorage.setItem(_TOKEN_DATA_KEY, JSON.stringify(token));
}

function clearJWTData() {
  localStorage.removeItem(_TOKEN_DATA_KEY);
}

function isUserLogedin(): boolean {
  return localStorage.getItem(_TOKEN_DATA_KEY) != null;
}

function getJWTData(): JWTData | null {
  const json = localStorage.getItem(_TOKEN_DATA_KEY);
  if (!json) {
    return null;
  }
  return JSON.parse(json) as JWTData;
}
function getTokenPayload(): AuthJwtPayload | null {
  const token = getJWTData()?.token;
  if (!token) {
    return null;
  }
  const tokenPayload = jwtDecode<AuthJwtPayload>(token!);
  return tokenPayload;
}

function getUserRole() {
  const tokenPayload = getTokenPayload();
  const role =
    tokenPayload?.[
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    ];
  if (!role) {
    return null;
  }
  return role;
}
export {
  saveJWTData,
  clearJWTData,
  getUserRole,
  getTokenPayload,
  isUserLogedin,
  getJWTData,
};
