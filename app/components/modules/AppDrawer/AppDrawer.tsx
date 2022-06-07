import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FIXTURES } from "@constant/fixtures";
import { LogoDark } from "@element/Logo/LogoDark";
import { LogoGeometric } from "@element/Logo/LogoGeometric";

export const AppDrawer: React.FC = () => {
  const [collapse, setCollapse] = useState<boolean>(false);

  const router = useRouter();

  return (
    <AnimatePresence initial={false}>
      <motion.div
        initial={{ width: collapse ? "260px" : "83px" }}
        animate={{ width: collapse ? "83px" : "260px" }}
        className="appDrawer"
        role="navigation"
      >
        <div className="appDrawer__logobox">
          {!collapse && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="appDrawer__logo"
            >
              <LogoDark />
            </motion.div>
          )}
          {collapse && (
            <motion.div
              initial={{ opacity: 0, rotate: "0deg", scale: "50%" }}
              animate={{ opacity: 1, rotate: "360deg", scale: "50%" }}
              className="appDrawer__logo"
            >
              <LogoGeometric />
            </motion.div>
          )}
        </div>
        <ul>
          <Link href={"#"}>
            <li>{FIXTURES.appDrawer.menuTexts.home}</li>
          </Link>
          <Link href={"#"}>
            <li>{FIXTURES.appDrawer.menuTexts.finance}</li>
          </Link>
          <Link href={"#"}>
            <li>{FIXTURES.appDrawer.menuTexts.calendar}</li>
          </Link>
          <Link href={"#"}>
            <li>{FIXTURES.appDrawer.menuTexts.timelines}</li>
          </Link>
          <Link href={"#"}>
            <li>{FIXTURES.appDrawer.menuTexts.diary}</li>
          </Link>
          <Link href={"#"}>
            <li>{FIXTURES.appDrawer.menuTexts.setting}</li>
          </Link>
        </ul>
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
