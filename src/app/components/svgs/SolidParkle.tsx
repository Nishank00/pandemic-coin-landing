import React from 'react'

interface SolidParkleProps{
    height?: string;
    width?: string;
    className?: string;
}

const SolidParkle = ({height = '77', width = '80', className}: SolidParkleProps) => {
  return (
    <svg className={className} width={width} height={height} viewBox={`0 0 ${height} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_ii_1233_178)">
        <path d="M75.1857 36.8108L50.4571 28.6691L41.2231 1.74995C40.8674 0.711846 39.7864 0 38.5666 0C37.3467 0 36.2657 0.711846 35.91 1.74995L26.6788 28.6691L1.94738 36.8108C0.855304 37.1717 0.132812 38.0936 0.132812 39.1293C0.132812 40.1624 0.855304 41.0893 1.94738 41.4477L26.6649 49.587L35.9017 77.3267C36.2518 78.3747 37.3355 79.094 38.5666 79.094C39.7948 79.094 40.8813 78.3747 41.2314 77.3242L50.4682 49.5845L75.1885 41.4452C76.275 41.0893 77.0003 40.1649 77.0003 39.1293C77.0003 38.0961 76.275 37.1717 75.1857 36.8108Z" fill="url(#paint0_linear_1233_178)"/>
        </g>
        <defs>
        <filter id="filter0_ii_1233_178" x="-1.45755" y="-1.59036" width="80.0479" height="82.2747" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="1.59036" dy="-1.59036"/>
        <feGaussianBlur stdDeviation="1.43133"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        <feBlend mode="overlay" in2="shape" result="effect1_innerShadow_1233_178"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1.59036" dy="1.59036"/>
        <feGaussianBlur stdDeviation="1.53735"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
        <feBlend mode="lighten" in2="effect1_innerShadow_1233_178" result="effect2_innerShadow_1233_178"/>
        </filter>
        <linearGradient id="paint0_linear_1233_178" x1="22.5198" y1="27.929" x2="87.3156" y2="88.2675" gradientUnits="userSpaceOnUse">
        <stop stop-color="#342CB2"/>
        <stop offset="1" stop-color="#DE1012"/>
        </linearGradient>
        </defs>
        </svg>

  )
}

export default SolidParkle