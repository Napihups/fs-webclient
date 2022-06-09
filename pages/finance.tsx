import { DefaultLayout } from "@layout/Default/DefaultLayout";
import { FinanceTemplate } from "@template/FinanceTemplate";
import type { NextPage } from "next";

const Finance: NextPage = () => {
  return (
    <div>
      <main>
        <DefaultLayout>
          <FinanceTemplate />
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
