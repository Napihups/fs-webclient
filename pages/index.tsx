import { DefaultLayout } from "@layout/Default/DefaultLayout";
import { HomeTemplate } from "@template/HomeTemplate";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Napigo - Home</title>
      </Head>
      <main>
        <DefaultLayout>
          <HomeTemplate />
        </DefaultLayout>
      </main>
    </>
  );
};

export default Home;

/**
 *
 * @returns
 */
export async function getServerSideProps() {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  return { props: {} };
}
