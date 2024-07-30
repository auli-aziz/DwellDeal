import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
