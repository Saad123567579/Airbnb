import { AuthOptions } from "next-auth";
import prisma from "@/app/lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
        // Add your custom login logic here
        // Example: Check if the email and password are valid in your database
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (user && user.password === credentials.password) {
          // Return the user object to indicate successful login
          return Promise.resolve(user);
        } else {
          // Return null or false to indicate login failed
          return Promise.resolve(null);
        }
      },
    }),
  ],

  // Add other NextAuth.js options as needed
  // For example, you can set the session or callbacks options here
  session: {
    // Add session configuration if needed
  },
  callbacks: {
    // Add callbacks configuration if needed
  },
};

export default authOptions;
