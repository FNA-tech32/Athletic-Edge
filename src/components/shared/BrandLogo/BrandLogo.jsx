import React from "react";
import loaderIcon from "../../../assets/logo/loder.png";
import { BRAND_INFO } from "../../../config/brandConfig";

const BrandLogo = ({ className = "", textClassName = "text-white", size = "text-2xl" }) => {
  const parts = BRAND_INFO.brandName.split(" ");
  const firstWord = parts[0] || "Athletic";
  const remainingWords = parts.slice(1).join(" ") || "Edge";

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <img
        src={loaderIcon}
        alt={`${BRAND_INFO.brandName} Logo`}
        className="h-9 w-auto object-contain"
      />
      <div className="flex flex-col leading-none">
        <span
          className={`${size} font-bold tracking-wider uppercase ${textClassName}`}
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {firstWord} <span className="text-main">{remainingWords}</span>
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;

