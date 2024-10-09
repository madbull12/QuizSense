'use client';

import LanguageSwitcher from '@/components/navbar/language-switcher';
import { usePathname } from 'next/navigation';
import { SignInButton } from '@/components/navbar/sign-in-button';
import { Link } from '@/lib/i18n';
import * as m from '@/paraglide/messages';
import { UserDropdown } from './user-dropdown';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';

export const Navbar = () => {
  const pathname = usePathname();
  const session = useSession();
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-lg font-bold">
          {m.app_name()}
        </Link>
        <div className="flex items-center gap-2">
          {!pathname.includes('/dashboard') && <SignInButton />}

          {session.data && (
            <>
              {pathname.includes('/dashboard') && (
                <UserDropdown session={session?.data as Session} />
              )}
            </>
          )}

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
