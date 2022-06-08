import { DefaultLayout } from "@layout/Default/DefaultLayout";
import type { NextPage } from "next";

const Calendar: NextPage = () => {
  return (
    <div>
      <main>
        <DefaultLayout>
          <>Hello Calendar</>
        </DefaultLayout>
      </main>
    </div>
  );
};

export default Calendar;

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
