'use client';
import React from 'react';
import HeadingText from './texts/HeadingText';
import BodyText from './texts/BodyText';
import useBreakpoint from '@/hooks/useBreakpoint';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  last?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  duration,
  description,
  last = false,
}) => {
  const { isMobile } = useBreakpoint();
  return (
    <div
      className={`flex-1 flex-col md:py-24 py-6 ${
        !last ? !isMobile && 'border-b-2 border-b-bg-200' : ''
      }`}
    >
      <HeadingText variant="h3" noMargin className="mb-2">
        {title}
      </HeadingText>
      <BodyText variant="sm" noMargin>
        {company}
      </BodyText>

      <BodyText variant="sm" className="mb-6">
        {duration}
      </BodyText>
      <BodyText noMargin>{description}</BodyText>
    </div>
  );
};

export default ExperienceCard;
