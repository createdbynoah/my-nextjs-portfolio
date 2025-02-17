import React from 'react';

interface InfoTextProps {
  children: React.ReactNode;
}

const InfoText: React.FC<InfoTextProps> = ({ children }) => {
  return (
    <p className="font-sans text-bg lg:text-lg text-sm lg:leading-[120%] leading-[120%]">
      {children}
    </p>
  );
};

export default InfoText;
