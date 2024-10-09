import React from 'react';
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

const ModalAccount = () => {
  return (
    <Credenza>
      <CredenzaTrigger className="flex items-center">
        <Settings className="mr-2 size-4" /> <span>{m.manage_account()}</span>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle className="text-xl sm:text-2xl md:text-3xl">
            Account
          </CredenzaTitle>
          <CredenzaDescription className="text-xs md:text-sm">
            Manage your account information
          </CredenzaDescription>
        </CredenzaHeader>
        <ProfileSection />

        <CredenzaFooter>
          <CredenzaClose asChild>
            <button>Close</button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
};

export default ModalAccount;
