'use client';

import { signOut } from 'next-auth/react';
import * as m from '@/paraglide/messages';
import MovingArrowButton from '../ui/moving-arrow-button';
import { useRouter } from '@/lib/i18n';
import { Button } from '../ui/button';
import { Session } from 'next-auth';

interface Props {
  session: Session | null;
}
export const SignInButton = ({ session }: Props) => {
  const router = useRouter();

  if (session?.user) {
    return <Button onClick={() => signOut()}>Sign out</Button>;
  }

  return (
    <MovingArrowButton
      className="px-4 py-2 gap-x-1 text-sm font-normal"
      text={m.get_started()}
      onClick={() => router.push('/auth/signin')}
    />
  );
};
