import { createContext, useContext, useEffect, useState } from "react";
import router from "next/router";

import { api } from "src/services/api";
import { getCookie, setCookie } from "src/utils/cookies";

import { AxiosResponse } from "axios";
import { useProfile } from "../Profile";

type SignInData = {
  email: string;
  password: string;
};

interface User {
  birthday: string;
  email: string;
  gender: string;
  name: string;
  surname: string;
  phone: string;
}

interface LoginResponse extends User {
  token: string;
}

type AuthContextType = {
  user: User | null;
  cookieExist: boolean;
  signIn(data: SignInData): Promise<AxiosResponse<any> | undefined>;
  signOut(location: string): void;
};

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: any) {
  const [cookieExist, setCookieExist] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const { setAddress } = useProfile()


  async function signIn({ email, password }: SignInData) {
    try {
      const response = await api.post<LoginResponse>("/login", {
        email,
        password,
      });

      setCookie("auth.token", response.data.token, 30);

      setCookie(
        "user",
        JSON.stringify({
          email: response.data.email,
          name: response.data.name,
          surname: response.data.surname,
          birthday: response.data.birthday,
          gender: response.data.gender,
          phone: response.data.phone,
        }),
        30
      );

      api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;

      setUser({
        email: response.data.email,
        name: response.data.name,
        surname: response.data.surname,
        birthday: response.data.birthday,
        gender: response.data.gender,
        phone: response.data.phone,
      });

      setCookieExist(true);

      const address = await api.get("/address/list");

      setCookie(
        "address",
        JSON.stringify(address.data),
        30
      );

      setAddress(address.data)

      return response;

    } catch (e: any) {
      if (e.response) {
        throw e.response.data;
      }
    }
  }

  function signOut(location: string) {
    const existCookie = getCookie("auth.token");

    if (existCookie) {
      document.cookie =
        "auth.token" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

      document.cookie =
        "user" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

      document.cookie =
        "address" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";

      api.defaults.headers["Authorization"] = `Bearer `;

      setCookieExist(false);
      setUser(null);

      router.push(location);
    }
  }

  useEffect(() => {
    if (document) {
      const token = getCookie("auth.token");
      const user = getCookie("user");

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      if (user) {
        setUser(JSON.parse(user));
      }

      setCookieExist(!!token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, cookieExist, signIn, signOut }}>
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
