import { GetServerSideProps } from "next";

import nookies from "nookies";

import { Layout } from "components/layout";
import SignInComponent from "components/sections/login/signIn";

import * as S from "styles/pages/login";

export default function LoginPage() {
  return (
    <Layout newsletter={false}>
      <S.Container>
        <SignInComponent />
      </S.Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { "auth.token": token } = nookies.get(ctx);

  if (token) {
    return {
      redirect: { destination: "/profile" },
      props: {},
    };
  }

  return {
    props: {
      auth: true,
    },
  };
};
