import React from 'react';
import Link from 'next/link';
import BodyText from './BodyText';

interface LinkTextProps {
  to: string;
  children: React.ReactNode;
}

const LinkText: React.FC<LinkTextProps> = ({ to, children }) => {
  return (
    <Link href={to} className="hover:underline ">
      <BodyText link className="hover:text-primary-500 hover:font-bold">
        {children}
      </BodyText>
    </Link>
  );
};

export default LinkText;
