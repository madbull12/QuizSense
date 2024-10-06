import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthConfig } from 'next-auth';
import { env } from '@/env.mjs';
import prisma from '@/lib/prisma';
import { stripeServer } from '@/lib/stripe';
import Nodemailer from 'next-auth/providers/nodemailer'
import { sendVerificationRequest } from '@/helper/sendVerificationRequest';
export const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [

    Nodemailer({
      server: env.EMAIL_SERVER,
      from: env.EMAIL_FROM,
      sendVerificationRequest
    })

  ],
  callbacks: {
    async session({ session, user }) {
      if (!session.user) return session;

      session.user.id = user.id;
      // session.user.stripeCustomerId = user.stripeCustomerId;
      // session.user.isActive = user.isActive;

      return session;
    },
  },
  // events: {
  //   createUser: async ({ user }) => {
  //     if (!user.email || !user.name) return;

  //     await stripeServer.customers
  //       .create({
  //         email: user.email,
  //         name: user.name,
  //       })
  //       .then(async (customer) => {
  //         return prisma.user.update({
  //           where: { id: user.id },
  //           data: {
  //             stripeCustomerId: customer.id,
  //           },
  //         });
  //       });
  //   },
  // },
};
