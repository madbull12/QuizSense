"use client"

import React from 'react';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import * as m from '@/paraglide/messages'
import { Link } from '@/lib/i18n';

const gradientVariants = {
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  hidden: { opacity: 0, y: -18 },
};
const SubscribeButton = () => {
  return (
    <motion.div initial="hidden" animate="show" variants={gradientVariants}>
      <RainbowButton className="flex items-center gap-x-2 mx-auto text-sm md:text-base">
        <Link href="/auth/signin">{m.try_out()}</Link>
        <div className="group-hover:translate-x-2 transition-all ">
          <ChevronRight size={18} />
        </div>
      </RainbowButton>
    </motion.div>
  );
};

export default SubscribeButton;
