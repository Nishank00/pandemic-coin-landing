import React from 'react'

interface SparkleProps{
    className?: string;
}

const Sparkle = ({className}:SparkleProps) => {
  return (
    <svg className={className} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 0C25 13.8073 13.8073 25 0 25C13.8073 25 25 36.1927 25 50C25 36.1927 36.1927 25 50 25C35.3596 25 25 13.8073 25 0Z" stroke="url(#paint0_linear_1233_278)" stroke-width="1.5" stroke-miterlimit="10"/>
<defs>
<linearGradient id="paint0_linear_1233_278" x1="14.5621" y1="17.6556" x2="55.59" y2="56.9678" gradientUnits="userSpaceOnUse">
<stop stop-color="#342CB2"/>
<stop offset="1" stop-color="#DE1012"/>
</linearGradient>
</defs>
</svg>

  )
}

export default Sparkle