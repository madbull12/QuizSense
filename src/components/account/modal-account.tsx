import React, { useState } from 'react';
import {
  Credenza,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from '@/components/ui/credenza';
import { Settings } from 'lucide-react';
import * as m from '@/paraglide/messages';
import ProfileSection from '@/components/account/profile-section';
import DangerSection from '@/components/account/danger-section';
import ProfileContent from '@/components/account/profile-content';
import { useSectionAccount } from '@/store/account';



const ModalAccount = () => {
  const section = useSectionAccount((state) => state.section)
  return (
    <Credenza>
      <CredenzaTrigger className="flex items-center">
        <Settings className="mr-2 size-4" /> <span>{m.manage_account()}</span>
      </CredenzaTrigger>
      <CredenzaContent className="md:min-h-[500px] md:min-w-[700px] w-full ">
        {section === '' && (
          <>
            <CredenzaHeader>
              <CredenzaTitle className="text-xl sm:text-2xl md:text-3xl">
                Account
              </CredenzaTitle>
              <CredenzaDescription className="text-xs md:text-sm">
                Manage your account information
              </CredenzaDescription>
            </CredenzaHeader>
            <ProfileSection  />
            <CredenzaHeader>
              <CredenzaTitle className="text-xl sm:text-2xl md:text-3xl">
                Security
              </CredenzaTitle>
              <CredenzaDescription className="text-xs md:text-sm">
                Manage your security preferences
              </CredenzaDescription>
            </CredenzaHeader>
            <DangerSection />
          </>
        )}
        {section === "profile" && <ProfileContent />}
      </CredenzaContent>
    </Credenza>
  );
};

export default ModalAccount;
