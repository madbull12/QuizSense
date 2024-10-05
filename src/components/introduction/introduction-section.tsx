import React from 'react';
import AnimatedGradientHero from '@/components/introduction/animated-gradient-text-hero';
import HeadingFadeHero from '@/components/introduction/heading-fade-hero';
import SubscribeButton from '@/components/introduction/subscribe-button';

const IntroductionSection = () => {
  return (
    <section>
      <AnimatedGradientHero />
      <HeadingFadeHero />
      <SubscribeButton />
    </section>
  );
};

export default IntroductionSection;
