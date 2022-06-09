import { InProgress } from "@element/InProgress/InProgress";
import React from "react";

export const CalendarTemplate: React.FC = () => {
  return (
    <div className="inprogress">
      <InProgress size={300} />
      <p className="text-lg font-bold mt-2">Calendar Page In-Progress</p>
    </div>
  );
};
