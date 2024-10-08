'use client';

import React from 'react';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const gradientVariants = {
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
    hidden: { opacity: 0, y: -18 },
}
const AnimatedGradientHero = () => {
  return (
    <motion.div initial='hidden' animate='show' variants={gradientVariants}>
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
        <motion.span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-xs sm:text-sm md:text-base`
          )}
        >
          Introducing QuizSense
        </motion.span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </motion.div>
  );
};

export default AnimatedGradientHero;
