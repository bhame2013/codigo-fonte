import { useState } from "react";
import Link from "next/link";
import { useAuth } from "src/contexts/Auth/authContext";
import * as S from "./styles";

export function HeaderComponent() {
  const [settings, setSettings] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <S.Header>
      <div className="top">
        <div className="content">
          <Link href="/" passHref>
            <a href="replaced" className="logo">
              <img src="/images/logo.png" />
            </a>
          </Link>

          <div className="user">
            <div className="text">
              <span className="paragraph-3-bold">{user?.displayName}</span>
            </div>

            <div className="user-image">
              {/* {user?.photoURL && <img src={user.photoURL} />} */}
              <button
                className="ball"
                type="button"
                onClick={() => setSettings(!settings)}
              ></button>

              {settings && (
                <>
                  <div className="settings">
                    <button type="button" className="new-code">
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        data-view-component="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                        ></path>
                      </svg>

                      <span className="paragraph-3-semibold">Novo Código</span>
                    </button>

                    <button
                      type="button"
                      className="signOut paragraph-3-semibold"
                      onClick={() => signOut("/login")}
                    >
                      Sign out
                    </button>
                  </div>

                  <div className="overlay" onClick={() => setSettings(false)} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </S.Header>
  );
}
