'use client';

import { useTransition } from 'react';
import { signIn } from 'next-auth/react';
import * as m from '@/paraglide/messages';
import MovingArrowButton from '../ui/moving-arrow-button';
import { HoverBorderGradient } from '../ui/hover-border-gradient';

export const SignInButton = () => {
  const [isPending, startTransition] = useTransition();

  const handleSignIn = () => {
    startTransition(async () => {
      await signIn('github');
    });
  };

  return (
      <MovingArrowButton
        className="px-4 py-2 gap-x-1 text-sm font-normal"
        text={m.get_started()}
      />
  );
};


