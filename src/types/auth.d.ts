export type User = {
  permissions: string[];
  username: string;
  email: string;
};

export interface JWTData {
  token: string;
  refreshToken: string;
}

export interface AuthState {
  user?: User | null;
  tokenData?: JWTData | null;
  errorKey?: string | null;
}

export interface LoginResult {
  user?: User;
  code: number;
  access: JWTData;
}
export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthJwtPayload extends JwtPayload {
  permissions: string[];
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
}
