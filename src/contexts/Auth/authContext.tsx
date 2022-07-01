import {
  createContext,
  useState,
  useEffect,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";
import Router from "next/router";

import cookie from "js-cookie";

import {
  GoogleAuthProvider,
  getAuth,
  provider,
  signInWithPopup,
  signOut
} from "../../configs/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";

interface ContextProps {
  user: User | null;
  loading: boolean;
  signinGoogle: () => Promise<void>;
  signout: () => Promise<void>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext({} as ContextProps);

function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  auth.languageCode = "pt-BR";

  const signinGoogle = async () => {
    try {
      setLoading(true);

      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          const user = result.user;

          setUser(user);

          cookie.set("auth.token", token, {
            expires: 1,
          });

          cookie.set("auth.user", JSON.stringify(user), {
            expires: 1,
          });

          Router.push("/");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } catch {
      setLoading(false);
    }
  };

  const signout = async () => {
    await signOut(auth)
      .then(() => {
        cookie.remove("auth.user");
        cookie.remove("auth.token");
        Router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signinGoogle,
        signout,
        setLoading,
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
