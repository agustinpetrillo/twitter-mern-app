import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prisma from "@/libs/prismadb";
import { authOptions } from "@/utils/authOptions";

export async function GET(req: Request, res: Response) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) throw new Error("Not signed in");

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) throw new Error("Not signed in");

    return NextResponse.json({ currentUser }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
