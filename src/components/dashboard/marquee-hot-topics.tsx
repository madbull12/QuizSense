import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';
import { Link } from '@/lib/i18n';

const hotTopics = [
  'Quantum Computer',
  'Rust Programming',
  'Artificial Intelligence',
  'Cloud Computing',
  'Internet of Things',
  'Cyber Security',
];

const firstRow = hotTopics.slice(0, hotTopics.length / 2);
const secondRow = hotTopics.slice(hotTopics.length / 2);

const HotTopicCard = ({ topic }: { topic: string }) => {
  return (
    <Link href="/dashboard/quiz-me" onClick={(e)=>e.stopPropagation()}>
      <figure
        className={cn(
          'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
          // light styles
          'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
          // dark styles
          'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
        )}
      >
        {topic}
      </figure>
    </Link>
  );
};

export function MarqueeHotTopics() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((topic, idx) => (
          <HotTopicCard key={idx} topic={topic} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((topic, idx) => (
          <HotTopicCard key={hotTopics.length + idx} topic={topic} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
