import { DefaultLayout } from "@layout/Default/DefaultLayout";
import { DiaryTemplate } from "@template/DiaryTemplate";
import type { NextPage } from "next";

const Diary: NextPage = () => {
  return (
    <div>
      <main>
        <DefaultLayout>
          <DiaryTemplate />
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
