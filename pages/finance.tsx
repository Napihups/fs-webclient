import { DefaultLayout } from "@layout/Default/DefaultLayout";
import type { NextPage } from "next";

const Finance: NextPage = () => {
  return (
    <div>
      <main>
        <DefaultLayout>
          <>Hello Finance</>
        </DefaultLayout>
      </main>
    </div>
  );
};

export default Finance;
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
