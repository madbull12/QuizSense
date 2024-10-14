'use client';

import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Flame, History, MessageCircleQuestion } from 'lucide-react';
import { ReactTyped } from 'react-typed';


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
          startWhenVisible
          strings={[
            'The process of preserving a body for the afterlife in Ancient Egypt is called ______________.',
            "The study of how the frequency of alleles in a population changes over time is known as ______________."
          ]}
          typeSpeed={40}
          backSpeed={20}
          loop

        />
      </div>
    ),
    icon: <MessageCircleQuestion size={20} />,
  },
  {
    title: 'History',
    description: 'View your recent attempts',
    header: <></>,
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
