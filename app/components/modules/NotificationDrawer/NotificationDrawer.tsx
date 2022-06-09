import { InProgress } from "@element/InProgress/InProgress";
import React from "react";

export const NotificationDrawer: React.FC = () => {
  return (
    <div className="notificationDrawer">
      <InProgress size={300} />
    </div>
  );
};
