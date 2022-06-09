import { AppDrawer } from "@module/AppDrawer/AppDrawer";
import { AppHeadbar } from "@module/AppHeadbar/AppHeadBar";
import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";

type DefaultProps = {
  children: React.ReactNode;
};
export const DefaultLayout: React.FC<DefaultProps> = ({ children }) => {
  const [drawerCollapse, setDrawerCollapse] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const onDrawerToggle = (collapse: boolean) => {
    setDrawerCollapse(collapse);
  };

  const handleScrollingEffect = useCallback(() => {
    if (window.scrollY > 80) {
      if (!scrolled) {
        setScrolled(true);
      }
    } else {
      if (scrolled) {
        setScrolled(false);
      }
    }
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollingEffect);

    return () => {
      window.removeEventListener("scroll", handleScrollingEffect);
    };
  }, [handleScrollingEffect]);

  return (
    <div className="flex flex-row">
      <AppDrawer collapse={drawerCollapse} onDrawerToggle={onDrawerToggle} />
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ paddingLeft: drawerCollapse ? "260px" : "85px" }}
          animate={{ paddingLeft: drawerCollapse ? "85px" : "260px" }}
          transition={{
            delay: drawerCollapse ? 0.2 : 0,
          }}
          className="defaultLayoutContainer"
        >
          <div className={`pageHead ${scrolled ? "scroll" : ""}`}>
            <AppHeadbar />
          </div>
          <div className="pageContent">{children}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
