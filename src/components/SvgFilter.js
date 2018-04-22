import React from 'react';

const SvgFilter = () => (
  <svg id="svgFilterContainer">
    <defs>
      <filter id="svgFilter">
        <feTurbulence
          type="fractalNoise" baseFrequency="0.01"
          numOctaves="2" result="turbulence"/>
        <feDisplacementMap
          in="SourceGraphic" in2="turbulence" scale="0.01" />
      </filter>
    </defs>
  </svg>
);

export default SvgFilter;
