import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import connectToDb from "@/utils/connectToPrisma";

export async function GET(req: Request, res: Response) {
  try {
    await connectToDb();
    const users = await prisma.user.findMany();
    return NextResponse.json({ users }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
