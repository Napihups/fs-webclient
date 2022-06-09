import { InProgress } from "@element/InProgress/InProgress";
import React from "react";

export const MessageDrawer: React.FC = () => {
  return (
    <div className="messageDrawer">
      <InProgress size={300} />
    </div>
  );
};
