import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    const hashedPassword = await bcrypt.compare(
      user.hashedPassword,
      body.password
    );

    if (user && hashedPassword === body.password) {
      const { hashedPassword, ...userNotPass } = user;
      return Response.json(userNotPass);
    }

    return Response.json(null);
  } catch (error) {
    console.log(error);
    return Response.json(error);
  }
}
