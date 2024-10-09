import { cn } from '@/lib/utils';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    alias:string;
}
const AvatarFallback = ({ alias,className,...props }:Props) => {
  return (
    <div {...props} className={cn("w-[35px] bg-gray-500 h-[35px] rounded-full text-lg grid place-items-center",className)}>
      {alias}
    </div>
  );
};

export default AvatarFallback;
