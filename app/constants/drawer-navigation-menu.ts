import { DrawerCalendar } from "@element/Icons/DrawerCalendar";
import { DrawerDiary } from "@element/Icons/DrawerDiary";
import { DrawerFinance } from "@element/Icons/DrawerFinance";
import { DrawerHome } from "@element/Icons/DrawerHome";
import { DrawerSetting } from "@element/Icons/DrawerSetting";
import { DrawerTimelines } from "@element/Icons/DrawerTimelines";
import React, { ReactNode } from "react";
import { FIXTURES } from "./fixtures";

export type DrawerNavigationMenuItem = {
  href: string;
  label: string;
  icon: React.FC;
  index: number;
};
export const DrawerNavigationMenus: DrawerNavigationMenuItem[] = [
  {
    href: "#",
    label: FIXTURES.appDrawer.menuTexts.home,
    icon: DrawerHome,
    index: 0,
  },
  {
    href: "#",
    label: FIXTURES.appDrawer.menuTexts.finance,
    icon: DrawerFinance,
    index: 1,
  },
  {
    href: "#",
    label: FIXTURES.appDrawer.menuTexts.calendar,
    icon: DrawerCalendar,
    index: 2,
  },
  {
    href: "#",
    label: FIXTURES.appDrawer.menuTexts.timelines,
    icon: DrawerTimelines,
    index: 3,
  },
  {
    href: "#",
    label: FIXTURES.appDrawer.menuTexts.diary,
    icon: DrawerDiary,
    index: 4,
  },
  {
    href: "#",
    label: FIXTURES.appDrawer.menuTexts.setting,
    icon: DrawerSetting,
    index: 5,
  },
];
