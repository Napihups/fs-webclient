import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { LogoDark } from "@element/Logo/LogoDark";
import { LogoGeometric } from "@element/Logo/LogoGeometric";
import { DrawerNavigationMenuItem, DrawerNavigationMenus } from "@constant/drawer-navigation-menu";

const DRAWER_EXPAND_WIDTH = "260px";
const DRAWER_COLLAPSE_WIDTH = "85px";

export const AppDrawer: React.FC = () => {
  const [collapse, setCollapse] = useState<boolean>(false);

  const router = useRouter();

  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={{ width: collapse ? DRAWER_EXPAND_WIDTH : DRAWER_COLLAPSE_WIDTH }}
        animate={{ width: collapse ? DRAWER_COLLAPSE_WIDTH : DRAWER_EXPAND_WIDTH }}
        transition={{ delay: collapse ? 0.15 : 0 }}
        className="appDrawer"
        role="navigation"
      >
        <div className="appDrawer__logobox">
          {!collapse && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="appDrawer__logo"
            >
              <LogoDark />
            </motion.div>
          )}
          {collapse && (
            <motion.div
              initial={{ opacity: 0, rotate: "180deg", scale: "50%" }}
              animate={{ opacity: 1, rotate: "360deg", scale: "50%" }}
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

        <button
          aria-label="Drawer collapse toggle"
          data-testid="drawer-toggler"
          onClick={() => setCollapse(!collapse)}
        >
          Click me
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
