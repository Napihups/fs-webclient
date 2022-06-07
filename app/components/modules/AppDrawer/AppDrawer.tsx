import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LogoDark } from "@element/Logo/LogoDark";
import { LogoLight } from "@element/Logo/LogoLight";
import { LogoGeometric } from "@element/Logo/LogoGeometric";
import { DrawerNavigationMenuItem, DrawerNavigationMenus } from "@constant/drawer-navigation-menu";
import { useAppTheme } from "@common/AppTheme";
import { ThemeLightIcon } from "@element/Icons/ThemeLightIcon";
import { ThemeDarkIcon } from "@element/Icons/ThemeDarkIcon";
import { DrawerCollapseIcon } from "@element/Icons/DrawerCollapseIcon";
import { DrawerExpandIcon } from "@element/Icons/DrawerExpandIcon";

const DRAWER_EXPAND_WIDTH = "260px";
const DRAWER_COLLAPSE_WIDTH = "85px";

export const AppDrawer: React.FC = () => {
  const [collapse, setCollapse] = useState<boolean>(false);

  const { theme, setTheme } = useAppTheme();

  const onToggle = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCollapse(!ev.target.checked);
  };

  const onChangeTheme = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const checked = ev.target.checked;

    setTheme(checked ? "dark" : "light");
  };

  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={{ width: collapse ? DRAWER_EXPAND_WIDTH : DRAWER_COLLAPSE_WIDTH }}
        animate={{ width: collapse ? DRAWER_COLLAPSE_WIDTH : DRAWER_EXPAND_WIDTH }}
        transition={{ delay: collapse ? 0.15 : 0 }}
        className="appDrawer"
        role="navigation"
      >
        <div className="w-full">
          <div className="appDrawer__logobox">
            {!collapse && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="appDrawer__logo"
              >
                {theme === "dark" ? <LogoDark /> : <LogoLight />}
              </motion.div>
            )}
            {collapse && (
              <motion.div
                initial={{ opacity: 0, rotate: "180deg", scale: "50%" }}
                animate={{ opacity: 1, rotate: "360deg", scale: "50%" }}
                transition={{
                  rotate: {
                    delay: 0.2,
                  },
                }}
                className="appDrawer__logo"
              >
                <LogoGeometric />
              </motion.div>
            )}
          </div>

          <motion.ul role={"menu"} className="appDrawer__menu">
            {DrawerNavigationMenus.map((item: DrawerNavigationMenuItem) => {
              const { icon: Icon, label, href, index } = item;
              return (
                <Link key={index} href={href}>
                  <li role={"menuitem"}>
                    <Icon />
                    <AnimatePresence>
                      {!collapse && (
                        <motion.span
                          initial={{ opacity: 0, x: 0 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 0 }}
                          className="appDrawer__menuText"
                        >
                          {label}
                        </motion.span>
                      )}
                    </AnimatePresence>{" "}
                  </li>
                </Link>
              );
            })}
          </motion.ul>
        </div>

        <div className="flex flex-col">
          <label className="appDrawer__themeSwitch swap swap-rotate">
            <input type="checkbox" onChange={onChangeTheme} />
            <ThemeDarkIcon className="swap-off fill-current w-8 h-8" />
            <ThemeLightIcon className="swap-on fill-current w-8 h-8" />
          </label>

          <label className="appDrawer__toggler swap swap-rotate">
            <input
              type="checkbox"
              defaultChecked
              data-testid="drawer-toggler"
              onChange={onToggle}
            />
            <DrawerExpandIcon className="swap-off fill-current" />
            <DrawerCollapseIcon className="swap-on fill-current" />
          </label>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
