import { InProgress } from "@element/InProgress/InProgress";
import React from "react";

export const SettingsTemplate: React.FC = () => {
  return (
    <div className="inprogress">
      <InProgress size={300} />
      <p className="text-lg font-bold mt-2">Settings Page In-Progress</p>
    </div>
  );
};
