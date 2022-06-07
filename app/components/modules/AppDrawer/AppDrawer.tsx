import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import { FIXTURES } from "@constant/fixtures";

export const AppDrawer: React.FC = () => {
  const router = useRouter();

  return (
    <div className="appDrawer">
      <div></div>
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
    </div>
  );
};
