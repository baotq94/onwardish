import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from 'src/lib/prisma';
import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
    adapter: PrismaAdapter(prisma) as any,
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
                if (typeof token.email === 'string') {
                    session.user.email = token.email;
                }
            }

            return session;
        },
    },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
