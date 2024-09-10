import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import TwitterProvider from 'next-auth/providers/twitter';
import AppleProvider from 'next-auth/providers/apple';
import  CredentialsProvider  from "next-auth/providers/credentials";
import { RequestInternal } from "next-auth";

interface CredentialsProps {
    email: string;
    password: string;
}

export const authOptions = {
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
            },
            authorize: async (credentials, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">) => {
                if(!credentials) return null;

                const {email, password} = credentials as CredentialsProps;

                try {
                    const headers = new Headers();
                headers.set('Content-Type', 'application/json');
                
                const response = await fetch(`${process.env.BACKEND_API_URL}${process.env.BACKEND_API_PATH}/auth/signin`, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({})
                })

                const user = await response.json();

                if(response.ok && user) {
                    return user;
                }

                return null;
                } catch(error) {
                    console.error("Error during API call: ", error);
                    return null;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
        }),
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID!,
            clientSecret: process.env.TWITTER_CLIENT_SECRET!,
        }),
        AppleProvider({
            clientId: process.env.APPLE_CLIENT_ID!,
            clientSecret: process.env.APPLE_CLIENT_SECRET!
        })
    ],
    callback: {
        async jwt({token, user, account, profile, isNewUser }: any) {
            if(account) {
                token.accessToken = account?.access_token,
                token.id = user?.id
            }
            return token;
        },
        pages: {
            signIn: 'signin',  // Custom sign-in page if needed
        },
        async session({session, token}: any) {
            session.user.id = token.sub;
            session.accessToken = token.accessToken;
            return session;
        },
        secret: process.env.NEXTAUTH_SECRET,
    },
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
