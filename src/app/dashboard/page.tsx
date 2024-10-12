import React from 'react';
import { auth } from '@/app/api/auth/[...nextauth]/auth';
import { env } from '@/env.mjs';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import DashboardGrid from '@/components/dashboard/dashboard-grid';

export const metadata: Metadata = {
  title:"Dashboard",
  description:"The dashboard page of QuizSense"
}

const DashboardPage = async () => {
  const session = await auth();
  if (!session?.user) {
    return redirect(`/auth/signin`);
  }
  return (
    <main className="container p-4 space-y-4">
      <h1 className="text-lg md:text-2xl font-bold">Welcome to QuizSense</h1>
      <DashboardGrid />
    </main>
  );
};

export default DashboardPage;
