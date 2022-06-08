import { DefaultLayout } from "@layout/Default/DefaultLayout";
import type { NextPage } from "next";

const Settings: NextPage = () => {
  return (
    <div>
      <main>
        <DefaultLayout>
          <>Hello Settings</>
        </DefaultLayout>
      </main>
    </div>
  );
};

export default Settings;

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
