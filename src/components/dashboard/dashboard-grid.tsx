'use client';

import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { Flame, History, MessageCircleQuestion } from 'lucide-react';
import { MarqueeHotTopics } from '@/components/dashboard/marquee-hot-topics';
import HistorySection from '@/components/dashboard/history-section';
import QuizMeSection from '@/components/dashboard/quiz-me-section';

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
          href={item.href}
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
    header: <QuizMeSection />,
    icon: <MessageCircleQuestion size={20} />,
    href: '/dashboard/quiz-me',
  },
  {
    title: 'History',
    description: 'View your recent attempts',
    header: <HistorySection />,
    icon: <History size={20} />,
    href: '/',
  },
  {
    title: 'Hot Topics',
    description: 'Discover hot topics that suit your interests',
    header: <MarqueeHotTopics />,
    icon: <Flame size={20} />,
    href: '/',
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
