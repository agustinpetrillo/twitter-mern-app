import { NextResponse } from "next/server";

export async function PATCH(req: Request, res: Response) {
  try {
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
