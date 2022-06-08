import { DefaultLayout } from "@layout/Default/DefaultLayout";
import type { NextPage } from "next";

const Diary: NextPage = () => {
  return (
    <div>
      <main>
        <DefaultLayout>
          <>Hello Diary</>
        </DefaultLayout>
      </main>
    </div>
  );
};

export default Diary;

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
