import { JWTData } from "./jwtData";
import { User } from "./user";

export interface AuthState {
  user?: User | null;
  tokenData?: JWTData | null;
  errorKey?: string | null;
}
