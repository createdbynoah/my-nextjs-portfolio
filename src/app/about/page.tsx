import BodyText from '@/components/texts/BodyText';
import DisplayText from '@/components/texts/DisplayText';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <>
      <DisplayText variant="page">About</DisplayText>
      <BodyText>Welcome to the about page!</BodyText>
    </>
  );
};

export default AboutPage;
