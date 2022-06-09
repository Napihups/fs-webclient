import { DefaultLayout } from "@layout/Default/DefaultLayout";
import { SettingsTemplate } from "@template/SettingsTemplate";
import type { NextPage } from "next";

const Settings: NextPage = () => {
  return (
    <div>
      <main>
        <DefaultLayout>
          <SettingsTemplate />
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
