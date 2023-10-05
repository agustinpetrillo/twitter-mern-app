import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    const isCorrectPassword = await bcrypt.compare(
      user.hashedPassword,
      password
    );

    if (user) {
      return NextResponse.json({ user }, { status: 201 });
    }

    return NextResponse.json(null);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
