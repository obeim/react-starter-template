export interface AuthJwtPayload extends JwtPayload {
  permissions: string[];
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
}
