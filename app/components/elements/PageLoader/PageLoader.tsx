import React from "react";
import { useNProgress } from "@tanem/react-nprogress";

export const PageLoader: React.FC<{ isRouteChanging: boolean }> = ({ isRouteChanging }) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating: isRouteChanging,
    animationDuration: 300,
    incrementDuration: 500,
    minimum: 0.1,
  });

  return (
    <>
      <style jsx>{`
        .container {
          opacity: ${isFinished ? 0 : 1};
          pointerevents: none;
          transition: opacity ${animationDuration}ms linear;
        }
        .bar {
          height: 3px;
          left: 0;
          margin-left: ${(-1 + progress) * 100}%;
          position: fixed;
          top: 0;
          transition: margin-left ${animationDuration}ms linear;
          width: 100%;
          z-index: 1031;
        }

        .spinner {
          display: block;
          height: 100%;
          opacity: 1;
          position: absolute;
          right: 0;
          transform: rotate(3deg) translate(0px, -4px);
          width: 100px;
        }
      `}</style>
      <div className="container">
        <div className="bar bg-base">
          <div className="spinner shadow-base shadow-lg" />
        </div>
      </div>
    </>
  );
};
