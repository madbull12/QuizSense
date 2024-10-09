import React from 'react';
import { Separator } from '@/components/ui/separator';
import AvatarFallback from '../ui/avatar-fallback';
import { useSession } from 'next-auth/react';

const ProfileSection = () => {
    const { data } = useSession()
  return (
    <section>
      <p className="py-1">Profile</p>
      <Separator />
      <div className="hover:bg-neutral-900 rounded-md px-6 py-4 transition-colors ease-in-out mt-2 gap-x-6 cursor-pointer flex items-center">
        <AvatarFallback alias="AL" className="w-[50px] h-[50px] " />
        <p className='text-xs md:text-sm text-neutral-500'>
            {data?.user.email}
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
