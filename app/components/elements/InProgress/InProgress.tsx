import React from "react";
import LottiePlayer from "react-lottie-player";
import * as InprogressAnimation from "@assets/lotties/in-progress.json";

type InProgressProps = {
  size?: number;
};
export const InProgress: React.FC<InProgressProps> = ({ size }) => {
  return (
    <LottiePlayer
      loop={false}
      animationData={InprogressAnimation}
      play
      style={{ width: size ?? 600, height: size ?? 600 }}
    />
  );
};
