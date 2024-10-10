import React from 'react';
import { Separator } from '@/components/ui/separator';

import { Button } from '@/components/ui/button';

const DangerSection = () => {
  return (
    <section>
      <p className="px-6 md:px-0 py-1">Danger</p>
      <Separator />
      <div  className="rounded-md p-6 gap-x-6  flex items-center justify-between">
        <div className="flex flex-col">
            <p className='text-semibold'>Delete account</p>
            <p className='text-neutral-500 text-xs sm:text-sm'>Delete your account and all its associated data</p>
        </div>
        <Button variant={'destructive'} className='text-[12px] px-4 py-1'>DELETE ACCOUNT</Button>
      </div>
    </section>
  );
};

export default DangerSection;
