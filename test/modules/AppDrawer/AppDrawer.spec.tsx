import { screen, render, cleanup, waitFor } from "@testing-library/react";
import { AppDrawer } from "@module/AppDrawer/AppDrawer";
import { DrawerNavigationMenus } from "@constant/drawer-navigation-menu";
import React from "react";

const DRAWER_EXPAND_WIDTH = "260px";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
const useAppTheme = jest.spyOn(require("@common/AppTheme"), "useAppTheme");

declare global {
  interface Window {
    _virtualConsole: any;
  }
}

describe("AppDrawer UI test", () => {
  let emit: any;

  beforeAll(() => {
    ({ emit } = window._virtualConsole);
  });

  beforeEach(() => {
    window._virtualConsole.emit = jest.fn();
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  afterAll(() => {
    window._virtualConsole.emit = emit;
  });
  beforeEach(() => {
    useRouter.mockImplementation(() => {
      return {
        pathname: DrawerNavigationMenus[0].href,
        prefetch: () => {},
      };
    });
    useAppTheme.mockImplementation(() => {
      return {
        theme: "fsLight",
        setTheme: () => {},
      };
    });
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
    expect(drawer.style.width).toBe(DRAWER_EXPAND_WIDTH);
  });
});
