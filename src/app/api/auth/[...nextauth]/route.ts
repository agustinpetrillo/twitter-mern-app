import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/libs/prismadb";
import { authOptions } from "@/utils/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
