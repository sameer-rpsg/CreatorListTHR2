import React, { useState } from "react";
import styles from "@/components/CreatorList.module.css";
import Link from "next/link";
import { LuCopyPlus } from "react-icons/lu";
import { RiWhatsappFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLink } from "react-icons/fa";
const CreatorHero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

 const handleToggle = () => {
    setIsExpanded((prev) => {
      const nextState = !prev;

      // Scroll to top of section when collapsing (Read Less)
      if (prev && !nextState) {
        const section = document.getElementById("CreatorListherosec");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }

      return nextState;
    });
  };

  // ✅ Define your long text here
  const fullText = `The Hollywood Reporter India’s Creator A-List 2025, in
              collaboration with Ormax Media, ranks India’s 50 most influential
              digital creators who have redefined and expanded the meaning of
              entertainment not just in the country, but globally. India’s
              creator economy is no longer a fringe curiosity; it is a vast,
              expanding universe of voices, images, and ideas. As of 2025,
              between 2 and 2.5 million active creators — each with more than a
              thousand followers — shape what India watches, wears, eats, and
              aspires to. Together, they already influence $350 billion to $400
              billion in consumer spending, a figure expected to surge beyond $1
              trillion by 2030. Within the narrower lens of creator revenues,
              platforms, and supporting tools, the market itself is valued at
              $1.46 billion in 2025, and is forecast to grow to $5.93 billion by
              2032, riding a compound annual growth rate of 22.2 per cent. Yet,
              the true story lies in its uniqueness. Only around 8 to 10 per
              cent of these millions earn meaningful income today, signalling
              immense untapped potential. The ecosystem’s vitality also comes
              from its depth: not just metropolitan stars but tier-2 and tier-3
              voices, shaping content in dozens of languages. These forces
              transform India’s creator economy into both a cultural movement
              and a trillion-dollar opportunity. Therefore, what makes this list
              necessary is not just the scale of the industry, but its
              transformation of entertainment itself. Creators today are not
              side acts to celebrity culture; they are its new architects,
              driving trends that ripple from regional towns to global fashion
              weeks, from vernacular stand-up clips to K-drama reaction channels
              with cross-continental appeal. They have become arbiters of taste,
              curators of aspiration, and entrepreneurs in their own right. By
              anchoring the ranking in robust methodology and independent data,
              THR India ensures the conversation moves beyond hype. The list
              captures who are shaping discourse, where brands are placing their
              bets, and how audiences are reimagining their relationship with
              entertainment. In a moment when influence is currency, the list
              becomes both record and roadmap for India’s cultural future. It is
              designed with a rigorous framework that distinguishes it from
              simple popularity charts, while deliberately limiting eligibility
              to those who primarily produce video content for digital platforms
              such as YouTube, Instagram, Facebook, and Snapchat. By doing so,
              it excludes established figures like film actors, sportspersons,
              television and OTT celebrities, politicians, and business leaders.
              Brand-led accounts are also disregarded, while creator duos are
              considered as a single unit. News-based creators qualify only if
              their material is made exclusively for online audiences rather
              than for television or print. Five weighted parameters form the
              backbone of the evaluation process. The follower count, worth 25
              per cent of the total score, is taken from whichever platform
              yields the creator’s highest following. Engagement rate, also
              worth 25 per cent, is derived from the interaction-to-follower
              ratio across a creator’s top 10 videos within the previous six
              months. Audience popularity, which contributes 20 per cent, is
              measured using Ormax Influencers India Loves, a monthly survey of
              more than 2,000 people across the country, resulting in 24,000
              responses annually. Brand footprint, also weighted at 20 per cent,
              reflects both the volume and the perceived quality of
              collaborations undertaken in the last half-year. Finally, industry
              impact, which accounts for the remaining 10 per cent, assesses
              wider cultural relevance — such as influence on film, streaming,
              news, politics, or society — using trends in search activity,
              social conversations, and sentiment analysis. The methodology
              begins with a pool of 200 names, drawn initially from follower
              count. Each of these is then evaluated against the five criteria.
              For follower count and engagement rate, the leader in each
              category receives the full 25 points, and all others are assigned
              proportionate values. To illustrate: if the highest-followed
              creator has 100 million followers, one with 40 million earns 10
              points. The same proportional approach applies to audience
              popularity, with the top performer given 20 points and the rest
              scaled down accordingly. Brand footprint is assessed on two
              separate sub-parameters — quantity and quality of partnerships —
              each scored out of 10, for a maximum of 20. Industry impact is
              judged out of 10 points, based on online trends and sentiment.
              Scores across all parameters are combined into a maximum possible
              total of 100 points. These cumulative scores determine the final
              ranking of the 50 creators. Three aspects make the list
              distinctive. First, it adopts a genuinely holistic approach,
              factoring in not just numerical strength on social media but also
              resonance with audiences, partnerships with brands, and influence
              extending into wider cultural or industry domains. Second, it is
              the only such ranking in India to integrate primary audience
              research, thereby capturing a dimension often ignored in digital
              analysis. Third, the collaboration between THR India and Ormax
              Media ensures neutrality: neither party has a vested interest in
              the creator economy, which enhances the credibility and
              objectivity of the list.`;

  const characterLimit = 1000;

  const isLongText = fullText.length > characterLimit;
  const visibleText = fullText.slice(0, characterLimit);
  const hiddenText = fullText.slice(characterLimit);
  return (
    <section id="CreatorListherosec" className={styles.CreatorListHeroSec}>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-start">
          <div className="col-md-8 col-lg-10">
            <div className={styles.CreatorList_contentSec}>
              <h1>
                The Creator A-List: <br /> The 50 Most Influential Influencers
              </h1>
            </div>
          </div>
          <div className="col-md-4 col-lg-2 d-flex align-items-end justify-content-md-end">
            <ul className={styles.followus}>
              <Link target="_blank" href="">
                <li className={styles.items}>
                  <span className={styles.tooltipText}>Share on Whatsapp</span>
                  <RiWhatsappFill className={styles.icons} />
                </li>
              </Link>
              <Link target="_blank" href="">
                <li className={styles.items}>
                  <span className={styles.tooltipText}>Share on Facebook</span>

                  <FaFacebookF className={styles.icons} />
                </li>
              </Link>
              <Link target="_blank" href="">
                <li className={styles.items}>
                  <span className={styles.tooltipText}>Share on X</span>
                  <BsTwitterX className={styles.icons} />
                </li>
              </Link>
              <li className={styles.items}>
                <span className={styles.tooltipText}>copy</span>
                <FaLink className={styles.icons} />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-12 py-3">
          <div className={styles.CreatorList_contentSecExcerptWrapper}>
            <span
              className={styles.CreatorList_contentSecExcerpt}
            >
              {isExpanded ? (
                <>
                  {fullText}
                  <a
                    href="#"
                    className={styles.readMoreBtn}
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggle();
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
                        className={styles.readMoreBtn}
                        onClick={(e) => {
                          e.preventDefault();
                          handleToggle();
                        }}
                      >
                        Read More
                      </a>
                    </>
                  )}
                </>
              )}
            </span>
            {/* <span className="readMoreBtn" onClick={handleToggle}>
              {isExpanded ? " Read Less" : "Read More"}
            </span> */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorHero;
