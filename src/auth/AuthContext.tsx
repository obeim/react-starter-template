import Loading from "@/components/Loading";
import { useProfileQuery } from "@/store/api/auth/authApi";
import { User } from "@/types";
import { PropsWithChildren, createContext, useContext } from "react";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  user?: User | Record<string, never>;
}>({
  isAuthenticated: false,
  user: {},
});

function AuthProvider({ children }: PropsWithChildren) {
  const { data: user, isLoading } = useProfileQuery(null);

  return isLoading ? (
    <Loading /> // Splash screen here
  ) : (
    <AuthContext.Provider value={{ isAuthenticated: Boolean(user), user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthContext, AuthProvider, useAuthContext };
