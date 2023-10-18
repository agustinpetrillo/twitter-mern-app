import prisma from "@/libs/prismadb";

export default async function connectToDb() {
  try {
    await prisma.$connect();
  } catch (error: any) {
    return new Error(error.message);
  }
}
