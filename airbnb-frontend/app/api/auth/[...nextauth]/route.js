import { AuthOptions } from "next-auth";
import prisma from "../../../lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
export const authOptions = {
  adapter: PrismaAdapter(prisma), // Use PrismaAdapter with the Prisma instance
  providers: [
    // Google authentication provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // Credentials authentication provider (for custom login)
    CredentialsProvider({
      // The name to display on the login form (e.g., "Sign in with...")
      name: "Credentials",
      credentials: {
        // The email and password fields on the login form
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid Credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid Credentials");
        }
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isCorrectPassword) {
          throw new Error("Invalid Credentials");
        }
        return user;
      },
    }),
  ],

  pages: {
    signIn: "/",
  },
  // Add other NextAuth.js options as needed
  // For example, you can set the session or callbacks options here
  session: {
    // Add session configuration if needed
    strategy: "jwt",
  },
  callbacks: {
    // Add callbacks configuration if needed
  },
  secret: process.env.NEXT_AUTH_SECRET,
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
