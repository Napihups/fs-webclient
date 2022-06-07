import { screen, render, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppDrawer } from "@module/AppDrawer/AppDrawer";

describe("AppDrawer UI test", () => {
  afterEach(() => {
    cleanup();
  });
  test("Static: Textual for all element in the AppDrawer should be as per requirement", async () => {
    const staticTextItems = {
      home: "Home",
      finance: "Finance",
      calendar: "Calendar",
      timelines: "Timeline",
      diary: "Diary",
      setting: "Settings",
    };

    render(<AppDrawer />);

    const drawer = await screen.findByRole("navigation");

    await screen.findByText(staticTextItems.home);
    await screen.findByText(staticTextItems.finance);
    await screen.findByText(staticTextItems.calendar);
    await screen.findByText(staticTextItems.timelines);
    await screen.findByText(staticTextItems.diary);
    await screen.findByText(staticTextItems.setting);

    expect(drawer).toMatchSnapshot();
  });

  test("Static: Default Drawer should have a width of 260px", async () => {
    render(<AppDrawer />);

    const drawer = screen.getByRole("navigation");
    expect(drawer.style.width).toBe("260px");
  });
  test("Testcase: The logo display on the drawer should change when user toggling", async () => {
    const user = userEvent.setup();
    render(<AppDrawer />);
    const toggler = await screen.findByTestId("drawer-toggler");
    expect(await screen.getByTestId("LogoDark")).toBeDefined();
    await user.click(toggler);

    await new Promise(process.nextTick);

    expect(await screen.findByTestId("LogoGeometric")).toBeDefined();
  });
});
