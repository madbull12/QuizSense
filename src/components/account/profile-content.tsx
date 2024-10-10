import React from 'react';
import { CredenzaHeader, CredenzaTitle } from '@/components/ui/credenza';
import { ArrowLeft } from 'lucide-react';
import { useSectionAccount } from '@/store/account';
import AvatarFallback from '@/components/ui/avatar-fallback';
import { Button } from '@/components/ui/button';

const ProfileContent = () => {
  const handleSelectSection = useSectionAccount((state) => state.selectSection);
  return (
    <div className=' space-y-8'>
      <ArrowLeft className='cursor-pointer' onClick={() => handleSelectSection('')} />
      <CredenzaHeader>
        <CredenzaTitle className="text-xl sm:text-2xl md:text-3xl">
          Update Profile
        </CredenzaTitle>
      </CredenzaHeader>
      <section className='flex items-start gap-x-4 h-auto'>
                      {/* <Image
            className="overflow-hidden rounded-full"
            src={`${user?.image}`}
            alt={`${user?.name}`}
            width={100}
            height={100}
          /> */}
          <AvatarFallback alias="AL"/>
          <div>
            <p className='text-sm'>Profile image</p>
            <Button variant={'link'} className='p-0 outline-none text-sm font-light h-0'>Upload image</Button>
          </div>
          <Button variant={'link'} className='text-destructive p-0 self-end'>Remove image</Button>
      </section>
      <div className='space-x-4 flex items-center justify-end'>
        <Button variant={'ghost'} onClick={()=>handleSelectSection("")}>Cancel</Button>
        <Button>Continue</Button>
      </div>

    </div>
  );
};

export default ProfileContent;
