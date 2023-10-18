import { NextResponse, NextRequest } from "next/server";
import prisma from "@/libs/prismadb";
import connectToDb from "@/utils/connectToPrisma";

export async function GET(req: NextRequest, res: Response) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");
    if (!userId || typeof userId !== "string") throw new Error("Invalid id");

    await connectToDb();

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    const followers = await prisma.user.count({
      where: {
        followingIds: { has: userId },
      },
    });

    return NextResponse.json({ user, followers }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
