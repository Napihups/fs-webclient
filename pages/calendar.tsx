import { DefaultLayout } from "@layout/Default/DefaultLayout";
import { CalendarTemplate } from "@template/CalendarTemplate";
import type { NextPage } from "next";

const Calendar: NextPage = () => {
  return (
    <div>
      <main>
        <DefaultLayout>
          <CalendarTemplate />
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
