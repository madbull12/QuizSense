'use client';

import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Flame, History, MessageCircleQuestion } from 'lucide-react';
import { ReactTyped } from 'react-typed';
import { AnimatedList } from '@/components/ui/animated-list';
import { cn } from '@/lib/utils';
interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}
let notifications = [
  {
    name: 'Python programming',
    description: 'Multiple choice',
    time: '15m ago',

    icon: '💸',
    color: '#00C9A7',
  },
  {
    name: 'Ancient Egypt',
    description: 'True or false',
    time: '10m ago',
    icon: '👤',
    color: '#FFB800',
  },
  {
    name: 'Finance',
    description: 'Fill in the blanks',
    time: '5m ago',
    icon: '💬',
    color: '#FF3D71',
  },
];
notifications = Array.from({ length: 10 }, () => notifications).flat();
const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        'relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        // light styles
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        // dark styles
        'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]'
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

const DashboardGrid = () => {
  return (
    <BentoGrid className="max-w-5xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 2 || i === 6 ? 'md:col-span-4' : 'md:col-span-2'}
        />
      ))}
    </BentoGrid>
  );
};

const items = [
  {
    title: 'Quiz Me',
    description: 'Challenge yourself with a quiz!',
    header: (
      <div className="flex flex-col gap-y-2">
        <ReactTyped
          className="text-3xl font-light text-left break-words"
          // startWhenVisible
          strings={[
            'The process of preserving a body for the afterlife in Ancient Egypt is called ______________.',
            'The study of how the frequency of alleles in a population changes over time is known as ______________.',
          ]}
          // shuffle
          // loop
          backSpeed={20}
          typeSpeed={20}
        />
      </div>
    ),
    icon: <MessageCircleQuestion size={20} />,
  },
  {
    title: 'History',
    description: 'View your recent attempts',
    header: (
      <div
        className={cn(
          'relative flex h-[500px] w-full flex-col p-6 overflow-hidden  md:shadow-xl'
        )}
      >
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    ),
    icon: <History size={20} />,
  },
  {
    title: 'Hot Topics',
    description: 'Discover hot topics that suit your interests',
    header: <></>,
    icon: <Flame size={20} />,
  },
  //   {
  //     title: "The Power of Communication",
  //     description:
  //       "Understand the impact of effective communication in our lives.",
  //     header: <Skeleton />,
  //     // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  //   },
  //   {
  //     title: "The Pursuit of Knowledge",
  //     description: "Join the quest for understanding and enlightenment.",
  //     header: <Skeleton />,
  //     // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  //   },
  //   {
  //     title: "The Joy of Creation",
  //     description: "Experience the thrill of bringing ideas to life.",
  //     header: <Skeleton />,
  //     // icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  //   },
  //   {
  //     title: "The Spirit of Adventure",
  //     description: "Embark on exciting journeys and thrilling discoveries.",
  //     header: <Skeleton />,
  //     // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  //   },
];

export default DashboardGrid;
