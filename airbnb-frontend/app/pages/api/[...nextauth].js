import { AuthOptions } from "next-auth";
import prisma from "@/app/lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
const authOptions = {
  adapter: PrismaAdapter(prisma), // Use PrismaAdapter with the Prisma instance
  providers: [
    // Google authentication provider
    GoogleProvider({
      clientId: "YOUR_GOOGLE_CLIENT_ID",
      clientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
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
        if(!credentials?.email || !credentials?.password){throw new Error("Invalid Credentials")}
        // Add your custom login logic here
        // Example: Check if the email and password are valid in your database
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
        if(!user || !user?.hashedPassword){throw new Error('Invalid Credentials')}
        const isCorrectPassword = await bcrypt.compare(credentials.password,user.hashedPassword);
        if(!isCorrectPassword) { throw new Error("Invalid Credentials");}
        return user;


      },
    }),
  ],

  pages:{
    signin:'/'
  },
  // Add other NextAuth.js options as needed
  // For example, you can set the session or callbacks options here
  session: {
    // Add session configuration if needed
    strategy:"jwt"

  },
  callbacks: {
    // Add callbacks configuration if needed
  },
  secret:process.env.NEXT_AUTH_SECRET,
};

export default NextAuth(authOptions);
