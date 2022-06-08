import { useAppTheme } from "@common/AppTheme";
import { LogoDark } from "@element/Logo/LogoDark";
import { LogoGeometric } from "@element/Logo/LogoGeometric";
import { LogoLight } from "@element/Logo/LogoLight";
import { motion } from "framer-motion";
import React from "react";

type AppLogoBoxProps = {
  collapse: boolean;
};
export const AppLogoBox: React.FC<AppLogoBoxProps> = ({ collapse }) => {
  const { theme } = useAppTheme();
  return (
    <div className="appDrawer__logobox">
      {!collapse && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="appDrawer__logo"
        >
          {theme === "fsDark" ? <LogoDark /> : <LogoLight />}
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
  );
};
