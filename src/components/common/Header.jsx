import React from 'react'

const Header = () => {
  return (
    <div
    className="Header_Wrapper"
    style={{ justifyContent: "center", height: 70 }}
  >
    <div className="Header_inner" style={{ height: 70 }}>
      <div className="socialLinks_Wrapper">
        <div
          className="socialLinks_inner abo"
          style={{ display: "none", opacity: 1 }}
        >
          <div className="social-div-main">
            <a
              target="_blank"
              className="social_elm"
              href="https://facebook.com/hollywoodreporterindia"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
          <div className="social-div-main">
            <a
              target="_blank"
              className="social_elm"
              href="https://instagram.com/hollywoodreporterindia"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
          <div className="social-div-main" style={{ position: "relative" }}>
            <a
              target="_blank"
              className="social_elm visihidden"
              style={{ position: "absolute", left: "-7px" }}
              href="https://twitter.com/thrindia_"
            >
              <img src="/x.png" className="xsvg" alt="X Logo" />
            </a>
            <a
              target="_blank"
              className="social_elm"
              href="https://twitter.com/thrindia_"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 16 16"
                style={{ fontSize: 18 }}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
            </a>
          </div>
          <div className="social-div-main">
            <a
              target="_blank"
              className="social_elm"
              href="https://www.youtube.com/@HollywoodReporterIndia"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 256 256"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86,12H128c-.54,0-54.33.2-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68c30.52-11.79,81.66-12,85.85-12h.27c.54,0,54.38-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z" />
              </svg>
            </a>
          </div>
        </div>
        <a
          className="logoCntr socialLinklogoAnimate abo"
          href="/"
          style={{
            pointerEvents: "all",
            opacity: 1,
            width: 160,
            display: "block"
          }}
        >
          <img
            alt="The Hollywood Reporter India Logo"
            loading="lazy"
            width={1000}
            height={1000}
            decoding="async"
            data-nimg={1}
            className=""
            style={{ color: "transparent" }}
          
            src="https://www.hollywoodreporterindia.com/_next/image?url=%2FThr_logo_updated.png&w=2048&q=75"
          />
        </a>
      </div>
      <div className="Links_logoWrapper">
        <a
          className="logoCntr Links_logoAnimate"
          href="/"
        //   style={{ display: "none", opacity: 1 }}
        >
          <img
            alt="The Hollywood Reporter India Logo"
            loading="lazy"
            width={1000}
            height={1000}
            decoding="async"
            data-nimg={1}
            className=""
            style={{ color: "transparent" }}
          
            src="https://www.hollywoodreporterindia.com/_next/image?url=%2FThr_logo_updated.png&w=2048&q=75"
          />
        </a>
      </div>
      <div className="search_Wrapper">
        <div className="searchdiv">
          <div className="search_icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M338.29 338.29 448 448"
              />
            </svg>
          </div>
          <div id="search">Search</div>
        </div>
      </div>
      <div className="tn-ham">
        <div className="three col">
          <div className="hamburger null" id="hamburger-1">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </div>
      </div>
    </div>
    <div
      className="nav nav-menu-top t3"
      style={{ height: "100%", zIndex: "9 !important" }}
    >
      <a
        className="nav-items"
        href="/reviews"
        style={{
          paddingBottom: 0,
          alignItems: "center",
          zIndex: "9 !important"
        }}
      >
        REVIEWS
      </a>
      <a
        className="nav-items"
        href="/features"
        style={{ paddingBottom: 0, alignItems: "center" }}
      >
        FEATURES
      </a>
      <a
        className="nav-items"
        href="/lifestyle"
        style={{ paddingBottom: 0, alignItems: "center" }}
      >
        LIFESTYLE
      </a>
      <a
        className="nav-items"
        href="/global"
        style={{ paddingBottom: 0, alignItems: "center" }}
      >
        GLOBAL
      </a>
      <a
        className="nav-items"
        href="/lists"
        style={{ paddingBottom: 0, alignItems: "center" }}
      >
        LISTS
      </a>
      <a
        className="nav-items"
        href="/charts"
        style={{ paddingBottom: 0, alignItems: "center" }}
      >
        CHARTS
      </a>
      <a
        className="nav-items"
        href="/thr-video"
        style={{ paddingBottom: 0, alignItems: "center" }}
      >
        THR VIDEO
      </a>
    </div>
  </div>
  )
}

export default Header
