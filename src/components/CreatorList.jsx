import React, { useEffect, useRef, useState } from "react";

import { creators } from "@/helpers/Data";
import Bar2 from "./Bar2";
import CreatorHero from "./CreatorHero";

const CreatorList = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const profileRefs = useRef([]);
  const [expandedItems, setExpandedItems] = useState({});

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5, // 50% visible
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         const index = Number(entry.target.dataset.index);
//         if (entry.isIntersecting) {
//           setActiveIndex(index);
//         }
//       });
//     }, observerOptions);

//     profileRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       if (profileRefs.current) {
//         profileRefs.current.forEach((ref) => {
//           if (ref) observer.unobserve(ref);
//         });
//       }
//     };
//   }, []);
  
useEffect(() => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    // threshold: Array.from({ length: 101 }, (_, i) => i / 100), 
    threshold: [0, 0.25, 0.5, 0.75, 1],
  };

  const observer = new IntersectionObserver((entries) => {
    // Filter entries with intersectionRatio > 0.5 (meaningfully visible)
    const visibleEntries = entries.filter(entry => entry.intersectionRatio > 0.5);

    if (visibleEntries.length === 0) {
      // Check if user is scrolled near the top of the page (e.g., within 50px)
      if (window.scrollY < 50) {
        setActiveIndex(-1); // At the very top, no active bar
      }
      // Otherwise, don't update activeIndex to avoid flickering
      return;
    }

    // Choose the profile with the smallest index (top-most visible)
    const indexes = visibleEntries.map(entry => Number(entry.target.dataset.index));
    const newActiveIndex = Math.min(...indexes);

    setActiveIndex(newActiveIndex);
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

  const toggleReadMore = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <>
      <Bar2 activeIndex={activeIndex} onBarClick={handleBarClick} />
      <CreatorHero />
      <div className="creator_list_wrapper">
        <div className="container">
          <div className="row">
            {creators.map((creator, index) => (
              <div
                key={creator.id}
                data-index={index}
                ref={(el) => (profileRefs.current[index] = el)}
                className="profile-container d-lg-flex col-lg-12 col-xl-12 col-md-12"
              >
                <div className="profile-image col-lg-4 col-xl-4 col-md-12">
                  <img
                    src={creator.image || "default.jpg"} // fallback if no image yet
                    alt={creator.name}
                  />
                </div>
                <div className="profile-content col-lg-8 col-xl-8 col-md-12">
                  <h1>{creator.name}</h1>
                  <h2>@{creator.realName}</h2>
                  <p
                    className={`desc ${
                      expandedItems[index] ? "expanded" : "collapsed"
                    }`}
                  >
                    {creator.desc}
                  </p>
                  {/* Show button only on small screens */}
                  <span
                    className="read-more-btn"
                    onClick={() => toggleReadMore(index)}
                  >
                    {expandedItems[index] ? "Read Less" : "...Read More"}
                  </span>
                  <p className="trivia">
                    <strong>TRIVIA : </strong> <span>{creator.trivia}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorList;
