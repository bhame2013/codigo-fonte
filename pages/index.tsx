import { useEffect } from "react";

import nookies from "nookies";
import { Layout } from "components/layout";

import { database } from "src/configs/firebaseConfig";

import { useAuth } from "src/contexts/Auth/authContext";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { api } from "src/api";

export default function HomePage() {
  return (
    <Layout>
     
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { "auth.token": token } = nookies.get(ctx);

  if (!token) {
    return {
      redirect: { destination: "/login" },
      props: {},
    };
  }

  return {
    props: {
      auth: true,
    },
  };
};
