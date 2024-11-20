import { signIn } from "@/lib/service";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      type: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials;

        const user = await signIn(username, password);
        if (user) {
          return true;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider === "credentials") {
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if ("username" in token) {
        session.user.username = token.username;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
