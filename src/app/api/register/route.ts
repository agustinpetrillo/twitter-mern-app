import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { password, email, username, name } = await req.json();

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    if (!password || !email || !username || !name)
      return Response.json({ error: "Invalid credentials" }, { status: 422 });

    const existingUser = await prisma.user.findFirst({ where: { email } });

    if (existingUser)
      return NextResponse.json(
        { message: "Existing email, please login" },
        { status: 403 }
      );

    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name,
        username,
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
