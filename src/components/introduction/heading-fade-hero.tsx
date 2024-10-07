'use client';
import * as React from 'react';
import * as m from '@/paraglide/messages'
import TextFade from '@/components/ui/text-fade';
import { useSession } from 'next-auth/react';

export default function HeadingFadeHero() {

  return (
    <TextFade
      direction="down"
      className="pt-6 pb-5 flex-col flex justify-center items-center space-y-6"
    >
      <h2 className="text-xl text-center sm:text-4xl font-bold  md:text-6xl  max-w-3xl">
        {m.quizSense_headline()}
      </h2>
      <div className="text-center md:text-lg max-w-xl mx-auto text-balance dark:text-zinc-300 font-semibold">
        {m.quizSense_description()}
      </div>
    </TextFade>
  );
}
