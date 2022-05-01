import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";

const CircleText = () => {
  useEffect(() => {
    gsap.to(".logo", {
      duration: 7.5,
      rotation: 360,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <svg className="logo" viewBox="0 0 500 500">
      <defs>
        <path
          d="M243.2, 382.4c-74.8,   
    0-135.5-60.7-135.5-135.5s60.7-135.5,135.5-135.5s135.5, 60.7, 135.5,
    135.5 S318, 382.4, 243.2, 382.4z"
          id="textcircle"
          transform="rotate(82 250 250)"
        />
      </defs>
      <text dy="70" textLength="850" fill="white">
        <textPath xlinkHref="#textcircle" fontWeight="700">
          Shannon & Kevin 01.21.23&nbsp;&nbsp;
        </textPath>
      </text>
    </svg>
  );
};

export default CircleText;
