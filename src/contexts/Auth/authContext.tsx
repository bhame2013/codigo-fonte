import {
  createContext,
  useState,
  useEffect,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";
import { getCookie, setCookie } from "src/utils/cookies";
import { api } from "src/api";
import { useRouter } from "next/router";
import _ from "lodash";

interface PayloadLogin {
  email: string;
  password: string;
}

interface ContextProps {
  user: any | null;
  signIn: (payload: PayloadLogin) => Promise<void>;
  signOut: (location: string) => void;
}

const AuthContext = createContext({} as ContextProps);

function AuthProvider({ children }) {
  const [user, setUser] = useState<any | null>(null);

  const router = useRouter();

  async function signIn({ email, password }: PayloadLogin) {
    try {
      const data = await api.post("/login", { email, password });

      if (data?.status !== 200) {
        throw new Error(JSON.parse(data.request.response)?.message);
      }

      if (data) {
        setCookie("auth.token", data.data.access_token, 30);

        api.defaults.headers[
          "Authorization"
        ] = `Bearer ${data.data.access_token}`;
      }
    } catch (e) {
      throw e;
    }
  }

  function signOut(location: string) {
    const existCookie = getCookie("auth.token");

    if (existCookie) {
      document.cookie =
        "auth.token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

      api.defaults.headers["Authorization"] = `Bearer `;

      setUser(null);

      router.push(location);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth() must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
