import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthConfig } from "next-auth";
import Nodemailer from "next-auth/providers/nodemailer";
import { sendVerificationRequest } from "@/helper/sendVerificationRequest";
import prisma from "@/lib/prisma"
import { env } from "@/env.mjs";
export default {
    adapter: PrismaAdapter(prisma),
    providers: [

        Nodemailer({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: Number(process.env.EMAIL_SERVER_PORT),
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
            sendVerificationRequest
        }),

    ],
    secret: env.AUTH_SECRET,
    callbacks: {
        async session({ session, user }) {
            if (!session.user) return session;

            session.user.id = user.id;
            // session.user.stripeCustomerId = user.stripeCustomerId;
            // session.user.isActive = user.isActive;

            return session;
        },
        // pages: {
        //   signIn: "/auth/signin",
        // },
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
    },
} satisfies NextAuthConfig;