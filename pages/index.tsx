import { useEffect } from "react";

import nookies from "nookies";
import { Layout } from "components/layout";

import { database } from "src/configs/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

import { useAuth } from "src/contexts/Auth/authContext";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const exampleCollection = collection(database, "examples");

export default function HomePage() {
  const { user } = useAuth();

  // async function getNotes() {
  //   return await getDocs(exampleCollection).then((data) => {
  //     const dataExamples = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));

  //     console.log(dataExamples);
  //   });
  // }

  // useEffect(() => {
  //   getNotes();
  // }, []);

  return <Layout></Layout>;
}

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
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
