import React from 'react';
import { Separator } from '../ui/separator';
import AvatarFallback from '../ui/avatar-fallback';
import { ArrowRight } from 'lucide-react';
import { useSession } from 'next-auth/react';
interface Props<T> {
  handleClick: (value: T) => void;
  
}
const SecuritySection = <T extends string>({ handleClick }: Props<T>) => {
  const { data } = useSession();

  return (
    <section>
      <p className="px-6 md:px-0 py-1">Security</p>
      <Separator />
      <div
        onClick={() => handleClick('security' as T)}
        className="hover:bg-neutral-900 group rounded-md px-6 py-4 transition-colors ease-in-out mt-2 gap-x-6 cursor-pointer flex items-center"
      >
        <AvatarFallback alias="AL" className="w-[50px] h-[50px] " />
        <p className="text-xs md:text-sm text-neutral-500 mr-auto">
          {data?.user.email}
        </p>
        <ArrowRight
          size={20}
          className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all ease-in-out duration-200"
        />
      </div>
    </section>
  );
};

export default SecuritySection;
