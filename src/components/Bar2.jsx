import React, { useEffect, useRef } from "react";
import { creators } from "@/helpers/Data";
import gsap from "gsap";
import styles from "@/components/CreatorList.module.css";

const Bar2 = ({ activeIndex, onBarClick }) => {
  const bars = Array.from({ length: creators.length });
  const barRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      barRefs.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div className={styles.bars_wrapper}>
      {bars.map((_, i) => {
        const isTall = i % 4 === 0;
        const isActive = activeIndex !== -1 && i <= activeIndex;
        const isLabelVisible = i === activeIndex;

        return (
          <div
            key={i}
            className={`
              ${styles.bar_wrapper}
              ${isTall ? styles.tall : styles.short}
              ${isLabelVisible ? styles.active : ""}
            `}
            onClick={() => onBarClick(i)}
          >
            <div
              className={`
                ${styles.bar}
                ${isTall ? styles.tall : styles.short}
                ${isLabelVisible ? styles.label_visible : ""}
                ${isActive ? styles.active : ""}
              `}
              ref={(el) => (barRefs.current[i] = el)}
            ></div>

            {/* Only active index has visible label */}
            <div className={styles.bar_label}>{i + 1}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Bar2;
