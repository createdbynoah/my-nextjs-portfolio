import React from 'react';

interface HeroTextProps {
  variant?: 'about' | 'intro';
  children: React.ReactNode;
}

const HeroText: React.FC<HeroTextProps> = ({ variant = 'about', children }) => {
  const getClassName = () => {
    switch (variant) {
      case 'about':
        return 'text-fg text-base md:text-[1.375rem] font-sans leading-[180%] text-center';
      case 'intro':
        return 'text-fg opacity-50 text-[0.625rem] md:text-sm font-sans font-medium leading-[110%] uppercase text-center';
      default:
        return '';
    }
  };

  return <p className={getClassName()}>{children}</p>;
};

export default HeroText;
