import React from 'react';

type HeadingTextProps = {
  children: React.ReactNode;
  variant?: 'h1-blog' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
};

const HeadingText: React.FC<HeadingTextProps> = ({
  children,
  variant = 'h1-blog',
}) => {
  return (
    <>
      {variant === 'h1-blog' && (
        <h1 className="md:text-4xl text-2xl font-sans font-semibold text-fg text-center -tracking-[0.02em]">
          {children}
        </h1>
      )}
      {variant === 'h2' && (
        <h2 className="md:text-[2rem] text-3xl font-display font-bold text-primary leading-[140%] tracking-[0.04em] uppercase mb-[40px]">
          {children}
        </h2>
      )}
      {variant === 'h3' && (
        <h3 className="md:text-xl text-base font-sans font-semibold text-fg leading-[140%] mb-[40px]">
          {children}
        </h3>
      )}
      {variant === 'h4' && (
        <h4 className="md:text-[1.625rem] text-lg font-sans font-semibold text-bg leading-[110%] mb-[40px]">
          {children}
        </h4>
      )}
      {variant === 'h5' && (
        <h5 className="md:text-[1.375rem] text-base font-sans font-semibold text-fg leading-[140%] mb-[40px]">
          {children}
        </h5>
      )}
      {variant === 'h6' && (
        <h6 className="md:text-lg text-sm font-sans font-bold text-bg leading-[140%] -tracking-[0.02em] mb-[40px]">
          {children}
        </h6>
      )}
    </>
  );
};

export default HeadingText;
