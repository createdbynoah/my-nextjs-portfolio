import { useState, useEffect } from 'react';

export type BreakpointState = {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  '2xl': boolean;
  xsAndUp: boolean;
  xsAndDown: boolean;
  smAndUp: boolean;
  smAndDown: boolean;
  mdAndUp: boolean;
  mdAndDown: boolean;
  lgAndUp: boolean;
  lgAndDown: boolean;
  xlAndUp: boolean;
  xlAndDown: boolean;
  '2xlAndUp': boolean;
  '2xlAndDown': boolean;
  isMobile: boolean;
};

const getBreakpointValues = (width: number): BreakpointState => ({
  // Basic breakpoints (Tailwind style)
  xs: width < 640,
  sm: width >= 640 && width < 768,
  md: width >= 768 && width < 1024,
  lg: width >= 1024 && width < 1280,
  xl: width >= 1280 && width < 1536,
  '2xl': width >= 1536,
  // andUp / andDown variants
  xsAndUp: true,
  xsAndDown: width < 640,
  smAndUp: width >= 640,
  smAndDown: width < 768,
  mdAndUp: width >= 768,
  mdAndDown: width < 1024,
  lgAndUp: width >= 1024,
  lgAndDown: width < 1280,
  xlAndUp: width >= 1280,
  xlAndDown: width < 1536,
  '2xlAndUp': width >= 1536,
  '2xlAndDown': true,
  isMobile: width < 768,
});

export default function useBreakpoint(): BreakpointState {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return getBreakpointValues(width);
}
