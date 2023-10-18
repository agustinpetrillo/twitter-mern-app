import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import connectToDb from "@/utils/connectToPrisma";

export async function GET(req: Request, res: Response) {
  try {
    await connectToDb();
    const tweets = await prisma.post.findMany();
    return NextResponse.json({ tweets }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: Request, res: Response) {
  const { body, userId } = await req.json();

  try {
    if (!body || !userId)
      return Response.json({ error: "Invalid credentials" }, { status: 422 });

    await connectToDb();

    const existingUser = await prisma.user.findFirst({ where: { id: userId } });

    if (!existingUser)
      return NextResponse.json({ message: "Invalid user" }, { status: 401 });

    const tweet = await prisma.post.create({
      data: {
        body,
        userId,
      },
    });

    return NextResponse.json({ tweet }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
