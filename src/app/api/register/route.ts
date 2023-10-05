import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";

export async function POST(req: Request) {
  const { password, email, username, name } = await req.json();

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    if (!password || !email || !username || !name)
      return Response.json({ error: "Invalid credentials" }, { status: 422 });

    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name,
        username,
      },
    });

    return Response.json({ user }, { status: 201 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
