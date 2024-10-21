"use client"
import { cn } from '@/lib/utils';
import {  ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-4 gap-4   ',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href: string;
}) => {
  const router = useRouter()
  return (
      <div
      onClick={()=>router.push(href)}
        className={cn(
          'row-span-1 cursor-pointer rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:border-white/[0.2] bg-transparent border border-transparent justify-between flex flex-col space-y-4',
          className
        )}
      >
        {header}
        <div className="flex items-center justify-between transition duration-200">
          <div className="">
            {icon}
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
              {title}
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
              {description}
            </div>
          </div>
          <ChevronRight className="group-hover/bento:visible invisible group-hover/bento:translate-x-0 -translate-x-2 transition-all  ease-in-out  " />
        </div>
      </div>
  );
};
