import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import connectToDb from "@/utils/connectToPrisma";

export async function PATCH(req: Request, res: Response) {
  try {
    const {currentUser} = await 
    const { name, username, bio, profileImage, coverImage } = await req.json();

    if (!name || !username)
      return NextResponse.json(
        { message: "Invalid name or username" },
        { status: 422 }
      );

      await connectToDb()

    const updatedUser = prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name,
        username,
        bio,
        profileImage,
        coverImage
      }
    });

    return NextResponse.json({updatedUser}, {status: 201})
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect()
  }
}
