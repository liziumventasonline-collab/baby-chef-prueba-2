import React, { useState } from 'react';
import appLogo from '../assets/images/baby_chef_logo_hd_1787457808085.jpg';

interface BabyChefLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: string;
}

export const BabyChefLogo: React.FC<BabyChefLogoProps> = ({
  className = '',
  size = 'md',
  rounded = 'rounded-2xl'
}) => {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  }[size];

  if (hasError) {
    return (
      <div
        className={`${sizeClasses} ${rounded} bg-white flex items-center justify-center p-1 border border-stone-200 shadow-xs ${className}`}
      >
        {/* Crisp vector heart baby chef logo fallback */}
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Heart frame left lobe (Sky Blue) */}
          <path
            d="M50 82C30 70 12 52 12 34C12 20 23 12 36 12C43 12 47 15 50 20C53 15 57 12 64 12C77 12 88 20 88 34C88 52 70 70 50 82Z"
            fill="#F0F9FF"
            stroke="#7DD3FC"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Mint cradle hand */}
          <path
            d="M32 68C42 75 58 75 68 68C60 62 40 62 32 68Z"
            fill="#A7F3D0"
          />
          {/* Sleeping Baby Face */}
          <circle cx="48" cy="42" r="16" fill="#FED7AA" />
          {/* Baby Soft Blue Hair */}
          <path
            d="M34 38C34 26 44 24 54 26C58 27 62 30 63 35C58 32 48 31 40 37Z"
            fill="#38BDF8"
          />
          {/* Closed eye */}
          <path
            d="M45 44C47 46 49 46 51 44"
            stroke="#78350F"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Golden spoon */}
          <path
            d="M62 38C66 34 72 38 70 42C68 46 62 44 60 41L54 45"
            stroke="#F59E0B"
            strokeWidth="3"
            strokeLinecap="round"
            fill="#FDE68A"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses} ${rounded} bg-white flex items-center justify-center p-0.5 shadow-sm border border-stone-200/80 overflow-hidden ${className}`}
    >
      <img
        src={appLogo}
        alt="Baby Chef Logo"
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${rounded}`}
      />
    </div>
  );
};
