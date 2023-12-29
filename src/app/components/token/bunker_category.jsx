// BunkerCategory.js
import React from 'react';

const BunkerCategory = ({ imgSrc, imgAlt, title, subtitle, listItems }) => {
  return (
    <div className="style_categoriesDropdown__D8QRD">
      <a className="style_category__G0CuS style_active__nfKS_" style={{ '--delay': '0s' }} href={imgSrc}>
        <img
          alt={imgAlt}
          loading="lazy"
          width="624"
          height="985"
          decoding="async"
          data-nimg="1"
          className="style_background__8XCHK"
          style={{ color: 'transparent' }}
          srcSet={`${imgSrc}&w=640&q=75 1x, ${imgSrc}&w=1920&q=75 2x`}
          src={imgSrc}
        />
        <div className="style_title__BWLJ7"><span>{title}</span> bunker</div>
        <div className="style_subtitle__g4BxC">{subtitle}</div>
        <ul className="style_list__VsX4s">
          {listItems.map((item, index) => (
            <li key={index} className="style_item__kllcy">
              <div className="style_icon__szvqs">
                <img
                  alt={item.iconAlt}
                  loading="lazy"
                  width="39"
                  height="39"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: 'transparent' }}
                  src={item.iconSrc}
                />
              </div>
              <div>{item.text}</div>
            </li>
          ))}
        </ul>
        <div className="style_ctaWrapper__KJzat">
          <div className="style_cta__qGJ1_">
            Дізнатися більше
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ... Your SVG path here ... */}
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BunkerCategory;
