import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    const hashedPassword = await bcrypt.compare(user.hashedPassword, password);

    if (user && hashedPassword === password) {
      const { hashedPassword, ...userNotPass } = user;
      return Response.json(userNotPass);
    }

    return Response.json(null);
  } catch (error) {
    console.log(error);
    return Response.json(error);
  }
}
