import React from 'react';
import bsccLogoImg from '../assets/images/bscc_official_logo_1788173049305.jpg';

interface BsccLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  showBorder?: boolean;
}

export const BsccLogo: React.FC<BsccLogoProps> = ({
  size = 'md',
  className = '',
  showBorder = true,
}) => {
  const sizeClasses = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-12 h-12 sm:w-13 sm:h-13',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
    '2xl': 'w-32 h-32 sm:w-40 sm:h-40',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden select-none ${
        sizeClasses[size]
      } ${
        showBorder
          ? 'ring-2 ring-amber-400/90 shadow-md bg-slate-900'
          : 'bg-transparent'
      } ${className}`}
    >
      <img
        src={bsccLogoImg}
        alt="Logo Resmi BSCC Learning Center - PKBM Berkah Sadaya Cianjur"
        className="w-full h-full object-cover object-center rounded-full transform hover:scale-105 transition-transform duration-300"
        referrerPolicy="no-referrer"
        loading="eager"
      />
    </div>
  );
};
