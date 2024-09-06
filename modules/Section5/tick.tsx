import React from "react";

const Tick = () => {
  return (
    <div className="content">
      <svg width="100" height="100">
        <circle
          fill="none"
          stroke="#68E534"
          stroke-width="5"
          cx="50"
          cy="50"
          r="45"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          className="circle"
        />
        <polyline
          fill="none"
          stroke="#68E534"
          points="22,53 43,71 76,34"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tick"
        />
      </svg>
    </div>
  );
};

export default Tick;
