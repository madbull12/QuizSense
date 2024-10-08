import { auth } from '@/app/api/auth/[...nextauth]/auth';
import SigninForm from '@/components/auth/signin-form';
import { redirect } from 'next/navigation';
import React from 'react';

const SignInPage = async () => {
  const session = await auth();
  if (session?.user) {
    return redirect(`/dashboard`);
  }
  return (
    <main className="flex justify-center items-center h-[calc(100vh-80px)]">
      <SigninForm />
    </main>
  );
};

export default SignInPage;
