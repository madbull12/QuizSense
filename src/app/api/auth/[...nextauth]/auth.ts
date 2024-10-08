import NextAuth from 'next-auth';

import authConfig from '@/app/api/auth/[...nextauth]/auth.config';

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig)
