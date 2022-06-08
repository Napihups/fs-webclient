import { AppDrawer } from "@module/AppDrawer/AppDrawer";
import React, { Fragment, useState } from "react";

type DefaultProps = {
  children: React.ReactNode;
};
export const DefaultLayout: React.FC<DefaultProps> = ({ children }) => {
  const [drawerCollapse, setDrawerCollapse] = useState<boolean>(false);

  const onDrawerToggle = (collapse: boolean) => {
    setDrawerCollapse(collapse);
  };
  return (
    <Fragment>
      <AppDrawer collapse={drawerCollapse} onDrawerToggle={onDrawerToggle} />
      <div className="defaultLayoutContainer">{children}</div>
    </Fragment>
  );
};
