import React from 'react';

interface DisplayTextProps {
  children: React.ReactNode;
  variant?: 'hero' | 'page';
  className?: string;
}

const DisplayText: React.FC<DisplayTextProps> = ({
  children,
  variant = 'page',
  className,
}) => {
  return (
    <h1
      className={`font-display ${
        variant === 'hero'
          ? 'text-[120px] lg:text-[260px]'
          : 'text-[80px] lg:text-[180px]'
      } font-black text-primary text-center leading-[110%] -tracking-[0.02em] uppercase ${className}`}
    >
      {children}
    </h1>
  );
};

export default DisplayText;
