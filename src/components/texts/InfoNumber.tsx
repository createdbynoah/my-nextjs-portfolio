import React from 'react';

interface InfoNumberProps {
  children: React.ReactNode;
  className?: string;
}

const InfoNumber: React.FC<InfoNumberProps> = ({ children, className }) => {
  return (
    <p
      className={`font-sans font-semibold lg:text-6xl md:text-[2.875rem] text-[2.625rem] text-bg opacity-30 ${className}`}
    >
      {children}
    </p>
  );
};

export default InfoNumber;
