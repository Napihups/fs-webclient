import { AppDrawer } from "@module/AppDrawer/AppDrawer";
import React, { Fragment } from "react";

type DefaultProps = {
  children: React.ReactNode;
};
export const DefaultLayout: React.FC<DefaultProps> = ({ children }) => {
  return (
    <Fragment>
      <AppDrawer />
      <div className="defaultLayoutContainer">{children}</div>
    </Fragment>
  );
};
