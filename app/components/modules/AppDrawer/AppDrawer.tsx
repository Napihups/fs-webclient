import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DrawerCollapseIcon } from "@element/Icons/DrawerCollapseIcon";
import { DrawerExpandIcon } from "@element/Icons/DrawerExpandIcon";
import { AppDrawerMenu } from "./AppDrawerMenu";
import { AppLogoBox } from "./AppLogoBox";

const DRAWER_EXPAND_WIDTH = "260px";
const DRAWER_COLLAPSE_WIDTH = "85px";

type AppDrawerProps = {
  collapse: boolean;
  onDrawerToggle: (collapse: boolean) => void;
};
export const AppDrawer: React.FC<AppDrawerProps> = ({ collapse, onDrawerToggle }) => {
  const onToggle = (ev: React.ChangeEvent<HTMLInputElement>) => {
    onDrawerToggle(!ev.target.checked);
  };

  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={{ width: collapse ? DRAWER_EXPAND_WIDTH : DRAWER_COLLAPSE_WIDTH }}
        animate={{ width: collapse ? DRAWER_COLLAPSE_WIDTH : DRAWER_EXPAND_WIDTH }}
        transition={{ delay: collapse ? 0.15 : 0 }}
        className={`appDrawer`}
        role="navigation"
      >
        <div className="w-full">
          <AppLogoBox collapse={collapse} />
          <AppDrawerMenu collapse={collapse} />
        </div>

        <div className="flex flex-col">
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
