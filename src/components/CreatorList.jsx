// import React, { useEffect, useRef, useState } from "react";

// import { creators } from "@/helpers/Data";
// import Bar2 from "./Bar2";
// import CreatorHero from "./CreatorHero";
// import gsap from "gsap";

// const CreatorList = () => {
//   const [activeIndex, setActiveIndex] = useState(-1);
//   const profileRefs = useRef([]);
//   const [expandedItems, setExpandedItems] = useState({});

// // useEffect(() => {
// //   const observerOptions = {
// //     root: null,
// //     rootMargin: "0px",
// //     // threshold: Array.from({ length: 101 }, (_, i) => i / 100),
// //     threshold: [0, 0.25, 0.5, 0.75, 1],
// //   };

// //   const observer = new IntersectionObserver((entries) => {
// //     // Filter entries with intersectionRatio > 0.5 (meaningfully visible)
// //     const visibleEntries = entries.filter(entry => entry.intersectionRatio > 0.5);

// //     if (visibleEntries.length === 0) {
// //       // Check if user is scrolled near the top of the page (e.g., within 50px)
// //       if (window.scrollY < 50) {
// //         setActiveIndex(-1); // At the very top, no active bar
// //       }
// //       // Otherwise, don't update activeIndex to avoid flickering
// //       return;
// //     }

// //     // Choose the profile with the smallest index (top-most visible)
// //     const indexes = visibleEntries.map(entry => Number(entry.target.dataset.index));
// //     const newActiveIndex = Math.min(...indexes);

// //     setActiveIndex(newActiveIndex);
// //   }, observerOptions);

// //   profileRefs.current.forEach((ref) => {
// //     if (ref) observer.observe(ref);
// //   });

// //   return () => {
// //     profileRefs.current.forEach((ref) => {
// //       if (ref) observer.unobserve(ref);
// //     });
// //   };
// // }, []);

// useEffect(()=>{
//    const mm = gsap.matchMedia();
//    mm.add("(min-width: 992px)", () => {
//   const observerOptions = {
//     root: null,
//     rootMargin: "0px",
//     threshold: [1.0], // Only fully visible elements will trigger
//   };

//   const observer = new IntersectionObserver((entries) => {
//     // Filter entries that are fully in view
//     const fullyVisibleEntries = entries.filter(entry => entry.intersectionRatio === 1);

//     if (fullyVisibleEntries.length === 0) {
//       if (window.scrollY < 50) {
//         setActiveIndex(-1); // At top of page
//       }
//       return; // Do nothing to avoid flickering
//     }

//     // Choose the top-most fully visible profile container
//     const indexes = fullyVisibleEntries.map(entry => Number(entry.target.dataset.index));
//     const newActiveIndex = Math.min(...indexes);

//     setActiveIndex(newActiveIndex);
//   }, observerOptions);

//   profileRefs.current.forEach((ref) => {
//     if (ref) observer.observe(ref);
//   });
// });

//    mm.add("(max-width: 991px)", () => {})

//     return () => {
//     profileRefs.current.forEach((ref) => {
//       if (ref) observer.unobserve(ref);
//     });
//   };
// },[])

//   const handleBarClick = (index) => {
//     const target = profileRefs.current[index];
//     if (target) {
//       target.scrollIntoView({ behavior: "smooth", block: "center" });
//       const yOffset = -170; // Adjust this offset based on header height or padding
//       const y =
//         target.getBoundingClientRect().top + window.pageYOffset + yOffset;

//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//   };

//   const toggleReadMore = (index) => {
//     setExpandedItems((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   return (
//     <>
//       <Bar2 activeIndex={activeIndex} onBarClick={handleBarClick} />
//       <CreatorHero />
//       <div className="creator_list_wrapper">
//         <div className="container">
//           <div className="row">
//             {creators.map((creator, index) => (
//               <div
//                 key={creator.id}
//                 data-index={index}
//                 ref={(el) => (profileRefs.current[index] = el)}
//                 className="profile-container d-lg-flex col-lg-12 col-xl-12 col-md-12"
//               >
//                 <div className="profile-image col-lg-4 col-xl-4 col-md-12">
//                   <img
//                     src={creator.image || "default.jpg"} // fallback if no image yet
//                     alt={creator.name}
//                   />
//                 </div>
//                 <div className="profile-content col-lg-8 col-xl-8 col-md-12">
//                   <h1>{creator.name}</h1>
//                   <h2>@{creator.realName}</h2>
//                   <p
//                     className={`desc ${
//                       expandedItems[index] ? "expanded" : "collapsed"
//                     }`}
//                   >
//                     {creator.desc}
//                   </p>
//                   {/* Show button only on small screens */}
//                   <span
//                     className="read-more-btn"
//                     onClick={() => toggleReadMore(index)}
//                   >
//                     {expandedItems[index] ? "Read Less" : "...Read More"}
//                   </span>
//                   <p className="trivia">
//                     <strong>TRIVIA : </strong> <span>{creator.trivia}</span>
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreatorList;

// //   useEffect(() => {
// //     const observerOptions = {
// //       root: null,
// //       rootMargin: "0px",
// //       threshold: 0.5, // 50% visible
// //     };

// //     const observer = new IntersectionObserver((entries) => {
// //       entries.forEach((entry) => {
// //         const index = Number(entry.target.dataset.index);
// //         if (entry.isIntersecting) {
// //           setActiveIndex(index);
// //         }
// //       });
// //     }, observerOptions);

// //     profileRefs.current.forEach((ref) => {
// //       if (ref) observer.observe(ref);
// //     });

// //     return () => {
// //       if (profileRefs.current) {
// //         profileRefs.current.forEach((ref) => {
// //           if (ref) observer.unobserve(ref);
// //         });
// //       }
// //     };
// //   }, []);

import React, { useEffect, useRef, useState } from "react";

import { creators } from "@/helpers/Data";
import Bar2 from "./Bar2";
import CreatorHero from "./CreatorHero";
const CreatorList = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const profileRefs = useRef([]);
  const [expandedItems, setExpandedItems] = useState({});
  const [characterLimit, setCharacterLimit] = useState(100);

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
      <div className="creator_list_wrapper">
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
                  className="profile-container d-lg-flex col-lg-12 col-xl-12 col-md-12"
                  id={`creator-${creator.id}`}
                >
                  <div className="profile-image col-lg-4 col-xl-4 col-md-12">
                    <img
                      src={creator.image || "default.jpg"}
                      alt={creator.name}
                    />
                  </div>
                  <div className="profile-content col-lg-8 col-xl-8 col-md-12">
                    <h1>{index + 1}. {creator.name}</h1>
                    <h2>@{creator.realName}</h2>

                    <p className="desc">
                      {isExpanded ? (
                        <>
                          {fullText}
                          <a
                            href="#"
                            className="read-more-btn"
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
                              <span className="ellipsis">... </span>
                              <a
                                href="#"
                                className="read-more-btn"
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

                    <p className="trivia">
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
