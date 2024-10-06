'use client';

import { useTransition } from 'react';
import { signIn } from 'next-auth/react';
import * as m from '@/paraglide/messages';
import MovingArrowButton from '../ui/moving-arrow-button';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import { Link, useRouter } from '@/lib/i18n';

export const SignInButton = () => {
  const router = useRouter();
  return (
    <MovingArrowButton
      className="px-4 py-2 gap-x-1 text-sm font-normal"
      text={m.get_started()}
      onClick={()=>router.push("/auth/signin")}
    />
  );
};
