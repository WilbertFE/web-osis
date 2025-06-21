/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginWithGoogle } from "@/lib/firebase/service";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { v4 as uuidv4 } from "uuid";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user, trigger, session }: any) {
      // console.log("JWT Callback:", { token, account, profile, user });

      if (trigger === "update") {
        return { ...token, ...session.user };
      }

      if (account?.provider === "google") {
        const data: {
          username: string;
          name: string;
          email: string;
          image: string;
          info: string;
          type: "google";
          role: "user" | "admin";
        } = {
          username: `user-${uuidv4()}`,
          name: user.name,
          email: user.email,
          image: user.image,
          info: "",
          type: "google",
          role: "user",
        };
        const response = await loginWithGoogle(data);
        if (!response.status) return;

        if (response.status && response.data) {
          token.username = response.data.username;
          token.info = response.data.info;
          token.type = response.data.type;
          token.role = response.data.role;
        }
      }
      return token;
    },
    async session({ session, token }: any) {
      // console.log("Session Callback:", { session, token });
      if ("username" in token) {
        session.user.username = token.username;
      }
      if ("info" in token) {
        session.user.info = token.info;
      }
      if ("type" in token) {
        session.user.type = token.type;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }

      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
