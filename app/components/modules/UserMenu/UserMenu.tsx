import { InProgress } from "@element/InProgress/InProgress";
import React from "react";

export const UserMenu: React.FC = () => {
  return (
    <div className="userMenu">
      <InProgress size={150} />
    </div>
  );
};
