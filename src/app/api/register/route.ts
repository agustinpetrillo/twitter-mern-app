import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";

export async function POST(req: Request) {
  const { password, email, username, name } = await req.json();

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = prisma.user.create({
      data: {
        email,
        hashedPassword,
        name,
        username,
      },
    });

    return Response.json(user);
  } catch (error) {
    return Response.json(error);
  }
}
