import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import prisma from 'src/lib/prisma';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as any,
    // https://next-auth.js.org/configuration/providers/oauth
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.image = user.image;
            }

            return token;
        },
        session: async ({ session, token }) => {
            if (token) {
                session.user.id = token.id as string;
                session.user.name = token.name;
                session.user.email = token.email;
            }

            return session;
        }
    },
};

export default NextAuth(authOptions);
