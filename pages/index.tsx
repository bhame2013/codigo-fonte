import { GetServerSideProps } from "next";

import { Layout } from "components/layout";

export default function HomePage({ collection }: HomePageProps) {
  return (
    <Layout>

    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<>(`/collections`);

  if (!data) {
    return {
      props: {
        collection: [],
      },
    };
  }

  return {
    props: {
      collection: data,
    },
  };
};
