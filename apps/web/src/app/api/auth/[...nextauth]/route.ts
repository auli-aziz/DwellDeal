import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(process.env.NEXT_PUBLIC_NESTJS_SERVER + "/auth/refresh", {
    method: "POST",
    headers: {
      authorization: "Refresh " + token.backendTokens.refreshToken
    }
  });

  const response = await res.json();
  console.log("refreshed ");
  
  return {
    ...token,
    backendTokens: response
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;
        const res = await fetch(
          process.env.NEXT_PUBLIC_NESTJS_SERVER + "/auth/login",
          {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res.status === 401) return null;
        const user = await res.json();
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    async jwt({token, user}) {
        console.log({token, user });
        if(user) return { ...token, ...user };

        if(new Date().getTime() < token.backendTokens.expiresIn) {
          return token
        } else {
          return await refreshToken(token);
        }
    },

    async session({token, session}) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;

      return session;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
