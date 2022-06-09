import { DefaultLayout } from "@layout/Default/DefaultLayout";
import { TimelinesTemplate } from "@template/TimelinesTemplate";
import type { NextPage } from "next";

const Timelines: NextPage = () => {
  return (
    <div>
      <main>
        <DefaultLayout>
          <TimelinesTemplate />
        </DefaultLayout>
      </main>
    </div>
  );
};

export default Timelines;

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
