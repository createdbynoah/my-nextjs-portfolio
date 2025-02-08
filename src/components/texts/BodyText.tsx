import React from 'react';

type BodyTextProps = {
  children: React.ReactNode;
  variant?: 'sm' | 'base' | 'lg' | 'xl';
  className?: string;
};

const BodyText: React.FC<BodyTextProps> = ({ children, variant = 'base' }) => {
  return (
    <>
      {variant === 'sm' && (
        <p className="lg:text-lg text-sm font-sans font-medium text-fg opacity-50 leading-[170%] mb-[20px]">
          {children}
        </p>
      )}
      {variant === 'base' && (
        <p className="lg:text-lg md:text-base text-sm font-sans text-fg leading-[170%] md:mb-[70px] mb-[35px]">
          {children}
        </p>
      )}
      {variant === 'lg' && (
        <p className="lg:text-[1.375rem] md:text-xl text-lg font-sans text-fg opacity-50 leading-[170%] mb-[20px]">
          {children}
        </p>
      )}
      {variant === 'xl' && (
        <p className="md:text-[1.75rem] text-xl font-sans text-fg leading-[120%] mb-[20px]">
          {children}
        </p>
      )}
    </>
  );
};

export default BodyText;
