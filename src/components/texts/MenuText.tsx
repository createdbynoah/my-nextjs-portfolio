import React from 'react';

interface MenuTextProps {
  children: React.ReactNode;
  className?: string;
}

const MenuText: React.FC<MenuTextProps> = ({ children, className }) => {
  return (
    <p
      className={`font-display text-[2.125rem] md:text-[2rem] font-bold text-center leading-[140%] -tracking-[0.04em] uppercase ${className}`}
    >
      {children}
    </p>
  );
};

export default MenuText;
