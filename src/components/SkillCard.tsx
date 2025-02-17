import React from 'react';
import HeadingText from './texts/HeadingText';
import InfoNumber from './texts/InfoNumber';
import InfoText from './texts/InfoText';

interface SkillCardProps {
  skill: string;
  description?: string;
  level: string;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  level,
  description,
  className,
}) => {
  return (
    <div
      className={`py-8 px-6 rounded-lg bg-primary flex flex-row justify-between items-center ${className}`}
    >
      <div className="flex-1 flex-col justify-center">
        <HeadingText variant="h4" noMargin className="mb-2">
          {skill}
        </HeadingText>
        <InfoText>{description}</InfoText>
      </div>
      <div className="w-[2] h-[50] border-l-2 border-l-bg opacity-30 " />
      <div className="flex-1">
        <InfoNumber className="text-center">{level}</InfoNumber>
      </div>
    </div>
  );
};

export default SkillCard;
