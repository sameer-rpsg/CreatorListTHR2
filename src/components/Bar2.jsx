// import React, { useEffect, useState } from "react";
// import { creators } from "@/helpers/Data";
// import gsap from "gsap";

// const Bars2 = ({ activeIndex, onBarClick }) => {
//   const [isDesktop, setIsDesktop] = useState(true); // Default to desktop
//   const bars = Array.from({ length: creators.length });

//   var isTall;
//   var isActive;
//   var isLabelVisible; // Only show label for current active index
//   useEffect(() => {
//     const mm = gsap.matchMedia();
//     mm.add("(min-width: 992px)", () => {
//       setIsDesktop(true);
//     });

//     mm.add("(max-width: 991px)", () => {
//       setIsDesktop(false);
//     });

//     return () => mm.kill(); // Clean up on unmount
//   }, []);

//   return (
//     <div className="bars-wrapper">
//       {bars.map((_, i) => {
//         isTall = i % 4 === 0;
//         isActive = activeIndex !== -1 && i <= activeIndex;
//         isLabelVisible = i === activeIndex;
//          const barStyle = isDesktop
//           ? {
//               width: isLabelVisible ? "65px" : isTall ? "45px" : "30px",
//               height: "2px",
//               backgroundColor: isActive ? "#fff" : "red",
//               transition: "all 0.3s ease",
//               cursor: "pointer",
//             }
//           : {
//               height: isLabelVisible ? "40px" : isTall ? "30px" : "20px",
//               width: "2px",
//               backgroundColor: isActive ? "red" : "#fff",
//               transition: "all 0.3s ease",
//               cursor: "pointer",
//             };

//         return (
//           <div
//             key={i}
//             className={`bar-wrapper ${isTall ? "tall" : "short"} ${
//               isLabelVisible ? "active" : ""
//             }`}
//             onClick={() => onBarClick(i)}
//           >
//             {/* <div className="bar-wrapper-inner"> */}
//               <div
//                 className={`bar ${isActive ? "active" : ""}`}
//                style={barStyle}
//               ></div>

//               {/* Only active index has visible label */}
//               <div
//                 className="bar-label"
//                 //   style={{
//                 //     opacity: isLabelVisible ? 1 : 0,
//                 //     transition: "opacity 0.3s ease",
//                 //   }}
//               >
//                 {i + 1}
//               </div>
//             {/* </div> */}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Bars2;

// import React from "react";
// import { creators } from "@/helpers/Data";

// const Bar2 = ({ activeIndex, onBarClick }) => {
//   const bars = Array.from({ length: creators.length });

//   return (
//     <div className="bars-wrapper">
//       {bars.map((_, i) => {
//         const isTall = i % 4 === 0;
//         const isActive = activeIndex !== -1 && i <= activeIndex;
//         const isLabelVisible = i === activeIndex; // Only show label for current active index

//         return (
//           <div
//             key={i}
//             className={`bar-wrapper ${isTall ? "tall" : "short"} ${
//               isLabelVisible ? "active" : ""
//             }`}
//             onClick={() => onBarClick(i)}
//           >
//             <div
//               className={`bar ${isActive ? "active" : ""}`}
//               style={{
//                 width: isTall ? "70px" : "40px",
//                 height: isLabelVisible ? "4px" : "2px",
//                 backgroundColor: isActive ? "#fff" : "red",
//                 transition: "all 0.3s ease",
//                 cursor: "pointer",
//               }}
//             ></div>

//             {/* Only active index has visible label */}
//             <div
//               className="bar-label"
//               //   style={{
//               //     opacity: isLabelVisible ? 1 : 0,
//               //     transition: "opacity 0.3s ease",
//               //   }}
//             >
//               {i + 1}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Bar2;

import React from "react";
import { creators } from "@/helpers/Data";

const Bar2 = ({ activeIndex, onBarClick }) => {
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
            <div
              //  className={`bar ${isTall ? "tall" : "short"} ${isActive ? "active" : ""} ${isLabelVisible ? "label-visible" : ""}`}
              className={`bar 
    ${isTall ? "tall" : "short"} 
    ${isLabelVisible ? "label-visible" : ""} 
    ${isActive ? "active" : ""}
  `}

            
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
        );
      })}
    </div>
  );
};

export default Bar2;
