import { DrawerNavigationMenus, DrawerNavigationMenuItem } from "@constant/drawer-navigation-menu";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const _setMenuItemActiveClass = (currentPath: string, itemPath: string) => {
  return currentPath === itemPath ? "active" : "";
};

type AppDrawerMenuProps = {
  collapse: boolean;
};
export const AppDrawerMenu: React.FC<AppDrawerMenuProps> = ({ collapse }) => {
  const router = useRouter();

  return (
    <motion.ul role={"menu"} className="appDrawer__menu">
      {DrawerNavigationMenus.map((item: DrawerNavigationMenuItem) => {
        const { icon: Icon, label, href, index } = item;
        return (
          <Link key={index} href={href}>
            <li role={"menuitem"} className={`${_setMenuItemActiveClass(router.pathname, href)}`}>
              <Icon />
              <AnimatePresence initial={false}>
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
  );
};
