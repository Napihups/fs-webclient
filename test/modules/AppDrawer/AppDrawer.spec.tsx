import { screen, render } from "@testing-library/react";
import { AppDrawer } from "@module/AppDrawer/AppDrawer";

describe("AppDrawer UI test", () => {
  it("Static: Textual for all element in the AppDrawer should be as per requirement", async () => {
    const staticTextItems = {
      home: "Home",
      finance: "Finance",
      calendar: "Calendar",
      timelines: "Timeline",
      diary: "Diary",
      setting: "Settings",
    };

    render(<AppDrawer />);

    await screen.findByText(staticTextItems.home);
    await screen.findByText(staticTextItems.finance);
    await screen.findByText(staticTextItems.calendar);
    await screen.findByText(staticTextItems.timelines);
    await screen.findByText(staticTextItems.diary);
    await screen.findByText(staticTextItems.setting);
  });
});
