import React, { useEffect, useRef, useState } from "react";
import { creators } from "@/helpers/Data";
import Bar2 from "./Bar2";
import CreatorHero from "./CreatorHero";
import Link from "next/link";
import styles from "@/components/CreatorList.module.css";
const CreatorList = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const profileRefs = useRef([]);
  const [expandedItems, setExpandedItems] = useState({});
  const [characterLimit, setCharacterLimit] = useState(100);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 992;
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: isDesktop ? [1] : [0.5], // 👈 Dynamic threshold
    };

    const observer = new IntersectionObserver((entries) => {
      const centerY = window.innerHeight / 2;

      let closestIndex = -1;
      let smallestDistance = Infinity;

      entries.forEach((entry) => {
        if (!entry.isIntersecting) return; // skip hidden

        const rect = entry.boundingClientRect;
        const elementCenterY = rect.top + rect.height / 2;
        const distanceToCenter = Math.abs(elementCenterY - centerY);

        if (distanceToCenter < smallestDistance) {
          smallestDistance = distanceToCenter;
          closestIndex = Number(entry.target.dataset.index);
        }
      });

      if (closestIndex !== -1) {
        setActiveIndex(closestIndex);
      } else {
        if (window.scrollY < 50) {
          setActiveIndex(-1); // reset at top
        }
      }
    }, observerOptions);

    profileRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      profileRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Set limit based on screen width
  useEffect(() => {
    const updateLimit = () => {
      const width = window.innerWidth;
      setCharacterLimit(width <= 991 ? 300 : 1000);
    };

    updateLimit(); // Initial run
    window.addEventListener("resize", updateLimit); // Listen for resize

    return () => window.removeEventListener("resize", updateLimit); // Cleanup
  }, []);

  const handleBarClick = (index) => {
    const target = profileRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      const yOffset = -170; // Adjust this offset based on header height or padding
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    // Scroll to top when collapsing
    if (expandedItems[id]) {
      const section = document.getElementById(`creator-${id}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
      <Bar2 activeIndex={activeIndex} onBarClick={handleBarClick} />
      <CreatorHero />
      <div className={styles.creator_list_wrapper}>
        <div className="container">
          <div className="row">
            {creators.map((creator, index) => {
              const isExpanded = expandedItems[creator.id] || false;
              const fullText = creator.desc || "";
              const isLongText = fullText.length > characterLimit;
              const visibleText = fullText.slice(0, characterLimit);

              return (
                <div
                  key={creator.id}
                  data-index={index}
                  ref={(el) => (profileRefs.current[index] = el)}
                  className={`${styles.profile_container} d-lg-flex col-lg-12 col-xl-12 col-md-12`}
                  id={`creator-${creator.id}`}
                >
                  <div
                    className={`${styles.profile_image} col-lg-4 col-xl-4 col-md-12`}
                  >
                    <img
                      src={creator.image || "default.jpg"}
                      alt={creator.name}
                    />
                  </div>
                  <div
                    className={`${styles.profile_content} col-lg-8 col-xl-8 col-md-12`}
                  >
                    <h1>
                      {index + 1}. {creator.name}
                    </h1>
                    <Link href="">
                      <h2>@{creator.realName}</h2>
                    </Link>

                    <p className={styles.desc}>
                      {isExpanded ? (
                        <>
                          {fullText}
                          <a
                            href="#"
                            className={styles.read_more_btn}
                            onClick={(e) => {
                              e.preventDefault();
                              toggleExpand(creator.id);
                              // Scroll to top of this profile when collapsing
                              if (isExpanded) {
                                const section = document.getElementById(
                                  `creator-${creator.id}`
                                );
                                if (section) {
                                  section.scrollIntoView({
                                    behavior: "smooth",
                                  });
                                }
                              }
                            }}
                            style={{ marginLeft: "8px" }}
                          >
                            Read Less
                          </a>
                        </>
                      ) : (
                        <>
                          {visibleText}
                          {isLongText && (
                            <>
                              <span className={styles.ellipsis}>... </span>
                              <a
                                href="#"
                                className={styles.read_more_btn}
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleExpand(creator.id);
                                }}
                              >
                                Read More
                              </a>
                            </>
                          )}
                        </>
                      )}
                    </p>

                    <p className={styles.trivia}>
                      <strong>TRIVIA : </strong> <span>{creator.trivia}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorList;
