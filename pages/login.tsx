import { GetServerSideProps } from "next";
import nookies from "nookies";

import { ButtonGoogle } from "components/data/components";
import * as S from "styles/pages/login";

export default function LoginPage() {
  return (
    <S.Login>
      <h3 className="title-3-bold">Codie Code</h3>
      
      <div className="socials">
        <ButtonGoogle />
      </div>
    </S.Login>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "auth.token": token } = nookies.get(ctx);

  if (token) {
    return {
      redirect: { destination: "/" },
      props: {},
    };
  }

  return {
    props: {
      auth: true,
    },
  };
};
