export interface LoginResult {
  user?: User;
  code: number;
  access: JWTData;
}
export interface LoginRequest {
  email: string;
  password: string;
}
