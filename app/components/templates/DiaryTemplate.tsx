import { InProgress } from "@element/InProgress/InProgress";
import React from "react";

export const DiaryTemplate: React.FC = () => {
  return (
    <div className="inprogress">
      <InProgress size={300} />
      <p className="text-lg font-bold mt-2">Diary Page In-Progress</p>
    </div>
  );
};
