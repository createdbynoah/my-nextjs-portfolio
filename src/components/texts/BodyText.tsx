import React from 'react';

type BodyTextProps = {
  children: React.ReactNode;
  variant?: 'sm' | 'base' | 'lg' | 'xl';
  link?: boolean;
  className?: string;
  noMargin?: boolean;
};

const BodyText: React.FC<BodyTextProps> = ({
  children,
  variant = 'base',
  link = false,
  className,
  noMargin = false,
}) => {
  return (
    <>
      {variant === 'sm' && (
        <p
          className={`lg:text-base text-sm font-sans font-medium ${
            link ? 'text-primary' : 'text-fg opacity-50'
          }  leading-[170%] ${!noMargin && 'mb-[20px]'} ${className}`}
        >
          {children}
        </p>
      )}
      {variant === 'base' && (
        <p
          className={`xl:text-lg lg:text-base text-sm font-sans ${
            link ? 'text-primary' : 'text-fg'
          } leading-[170%] ${
            !noMargin && 'md:mb-[70px] mb-[35px]'
          } ${className}`}
        >
          {children}
        </p>
      )}
      {variant === 'lg' && (
        <p
          className={`xl:text-[1.375rem] lg:text-xl text-lg font-sans ${
            link ? 'text-primary' : 'text-fg opacity-50'
          } xl:leading-[1.75em] lg:leading-[1.75em] leading-[1.75em] ${
            !noMargin && 'mb-[20px]'
          } ${className}`}
        >
          {children}
        </p>
      )}
      {variant === 'xl' && (
        <p
          className={`lg:text-[1.75rem] text-xl font-sans ${
            link ? 'text-primary' : 'text-fg'
          } leading-[120%] ${!noMargin && 'mb-[20px]'} ${className}`}
        >
          {children}
        </p>
      )}
    </>
  );
};

export default BodyText;
