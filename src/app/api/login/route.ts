//@ts-nocheck
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    if (!email && !password)
      return NextResponse.json({ message: "Invalid data" }, { status: 422 });

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user)
      return NextResponse.json(
        { message: "User not registered" },
        { status: 401 }
      );

    const isCorrectPassword = bcrypt.compare(password, user.hashedPassword);

    if (!isCorrectPassword)
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 403 }
      );

    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
