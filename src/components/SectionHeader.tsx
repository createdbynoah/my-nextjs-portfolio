import Link from 'next/link';
import React from 'react';
import HeadingText from './texts/HeadingText';

interface SectionHeaderProps {
  title: string;
  to: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, to }) => {
  return (
    <Link href={to} className="hover:cursor-pointer">
      <div className="flex flex-row items-center gap-x-8 w-full">
        <HeadingText variant="h2" noMargin>
          {title}
        </HeadingText>
        <div className="flex flex-grow">
          <div className="flex-grow basis-5/6 border-b-4 border-bg-200" />
          <div className="flex-grow basis-1/6 border-b-4 border-primary " />
        </div>
      </div>
    </Link>
  );
};

export default SectionHeader;
