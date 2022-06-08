import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { AppDrawer } from "@module/AppDrawer/AppDrawer";
import { DrawerNavigationMenus } from "@constant/drawer-navigation-menu";
import userEvent from "@testing-library/user-event";
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

  afterEach(() => {
    cleanup();
  });

  afterAll(() => {
    window._virtualConsole.emit = emit;
  });
  beforeEach(() => {
    window._virtualConsole.emit = jest.fn();
    jest.clearAllMocks();

    useRouter.mockImplementation(() => {
      return {
        pathname: DrawerNavigationMenus[0].href,
        prefetch: () => {},
      };
    });
    useAppTheme.mockImplementation(() => {
      return {
        theme: "fsDark",
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

    render(<AppDrawer collapse={false} onDrawerToggle={() => {}} />);

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
    render(<AppDrawer collapse={false} onDrawerToggle={() => {}} />);

    const drawer = screen.getByRole("navigation");
    expect(drawer.style.width).toBe(DRAWER_EXPAND_WIDTH);
  });

  test("Static: Logo Geometric should be display when on collapse", async () => {
    render(<AppDrawer collapse={true} onDrawerToggle={() => {}} />);

    expect(await screen.findByTestId("LogoGeometric")).toBeDefined();
  });

  test("Static: Logo Dark should be display when on expand", async () => {
    render(<AppDrawer collapse={false} onDrawerToggle={() => {}} />);

    expect(await screen.findByTestId("LogoDark")).toBeDefined();
  });

  test("Static: LogoLight should be displayb when  on light mode", async () => {
    useAppTheme.mockImplementation(() => {
      return {
        theme: "fsLight",
      };
    });

    render(<AppDrawer collapse={false} onDrawerToggle={() => {}} />);

    expect(await screen.findByTestId("LogoLight")).toBeDefined();
  });

  test("Behaviour: Clicking on the drawer toggler should call its parent handler", async () => {
    const onDrawerToggle = jest.fn();
    render(<AppDrawer collapse={false} onDrawerToggle={onDrawerToggle} />);

    const toggler = await screen.findByTestId("drawer-toggler");

    fireEvent(toggler, new MouseEvent("click", { bubbles: true }));

    expect(onDrawerToggle).toBeCalledWith(true);
  });
});
