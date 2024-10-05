import React from 'react';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { ChevronRight } from 'lucide-react';

const SubscribeButton = () => {
  return (
    <RainbowButton className="flex items-center gap-x-2 mx-auto">
      <span>Subscribe Now</span>
      <div className="group-hover:translate-x-2 transition-all ">
        <ChevronRight size={18} />
      </div>
    </RainbowButton>
  );
};

export default SubscribeButton;
