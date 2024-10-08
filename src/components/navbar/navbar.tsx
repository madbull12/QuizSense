import { auth } from '@/app/api/auth/[...nextauth]/auth';
import { LanguageSwitcher } from './language-switcher';

import { SignInButton } from '@/components/navbar/sign-in-button';
import { Link } from '@/lib/i18n';
import * as m from '@/paraglide/messages';

export const Navbar = async () => {
  const session = await auth();
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-lg font-bold">
          {m.app_name()}
        </Link>
        <div className="flex items-center gap-2">
          <SignInButton session={session} />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
