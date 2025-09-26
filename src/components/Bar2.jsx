import React from "react";
import { creators } from "@/helpers/Data";

const Bars2 = ({ activeIndex, onBarClick }) => {
  const bars = Array.from({ length: creators.length });

  return (
    <div className="bars-wrapper">
      {bars.map((_, i) => {
        const isTall = i % 4 === 0;
        const isActive = activeIndex !== -1 && i <= activeIndex;
        const isLabelVisible = i === activeIndex; // Only show label for current active index

        return (
          <div
            key={i}
            className={`bar-wrapper ${isTall ? "tall" : "short"} ${
              isLabelVisible ? "active" : ""
            }`}
            onClick={() => onBarClick(i)}
          >
            <div className="bar-wrapper-inner">
            <div
              className={`bar ${isActive ? "active" : ""}`}
              style={{
               width: isLabelVisible ? "65px" : isTall ? "45px" : "30px",
                height: isLabelVisible ? "4px" : "2px",
                backgroundColor: isActive ? "#fff" : "red",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            ></div>

            {/* Only active index has visible label */}
            <div
              className="bar-label"
              //   style={{
              //     opacity: isLabelVisible ? 1 : 0,
              //     transition: "opacity 0.3s ease",
              //   }}
            >
              {i + 1}
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bars2;

