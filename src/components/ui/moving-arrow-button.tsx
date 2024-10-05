'use client';

import { ChevronRight } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Props extends ButtonProps {
  text: string;
}
const MovingArrowButton = ({ text, className, ...props }: Props) => {
  return (
    <>
      <Button
        className={cn(
          'group cursor-pointer slide-anime  rounded-full dark:bg-white  text-white dark:text-black flex justify-between items-center font-semibold ',
          className
        )}
        {...props}
      >
        {text}
        <div className="group-hover:translate-x-2 transition-all ">
          <ChevronRight size={18} />
        </div>
      </Button>
    </>
  );
};

export default MovingArrowButton;
