import { useAuth } from "src/contexts/Auth/authContext";
import { LoaderCircle } from "../loader-circle";

import { ButtonSocial } from "./styles";

export function ButtonGoogle() {
  const { signinGoogle, setLoading, loading } = useAuth();

  return (
    <ButtonSocial $loading={loading}>
      <button type="button" className="google" onClick={signinGoogle}>
        {loading ? (
          <LoaderCircle size={22} />
        ) : (
          <>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5636 5.89108C14.7529 5.14548 13.3311 4.25327 11.2234 4.25327C8.25644 4.25327 5.73807 6.17041 4.82647 8.82072L4.82662 8.82422C4.60213 9.50865 4.46499 10.2419 4.46499 10.9998C4.46499 11.7575 4.60213 12.4909 4.83909 13.1753L4.8379 13.1762C5.73616 15.8281 8.25533 17.7466 11.2234 17.7466C12.8946 17.7466 14.1668 17.2944 15.1147 16.6466L15.1153 16.6471L15.1154 16.6465C16.6121 15.6199 17.2856 14.0922 17.4103 13.0777H11.2242V8.99558H21.763C21.9251 9.68001 22 10.34 22 11.2444C22 14.5933 20.7777 17.4166 18.6575 19.3355L18.6565 19.3354L18.6567 19.3356C16.7983 21.0222 14.2541 22 11.2234 22C6.83323 22 3.04172 19.5311 1.19588 15.9378L1.19653 15.936C0.436238 14.4452 0 12.7714 0 10.9998C0 9.22791 0.436356 7.55375 1.19684 6.06285L1.19588 6.06212C3.04172 2.46885 6.83322 0 11.2234 0C14.2541 0 16.7859 1.08777 18.7315 2.85998L15.5636 5.89108Z"
              ></path>
            </svg>

            <span>
              Entrar com o <b>Google</b>
            </span>
          </>
        )}
      </button>
    </ButtonSocial>
  );
}
