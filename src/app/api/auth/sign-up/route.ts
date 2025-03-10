import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { tryCatch, parseBody, setUserCookie } from "@/utils/api.utils";
import { hashPassword } from "@/utils/bcrypt.utils";
import { ApiResponseType } from "@/types/api-response.type";
import { signupDto } from "@/dto/auth.dto";

export async function POST(
  request: NextRequest,
): Promise<ApiResponseType<null>> {
  return tryCatch(async () => {
    const [ParseError, body] = await parseBody<signupDto>(request);
    if (ParseError !== null) {
      return NextResponse.json({ error: ParseError }, { status: 400 });
    }

    const username = await prisma.user.findUnique({
      where: { username: body.username },
    });
    const email = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (username) {
      return NextResponse.json(
        { error: "نام کاربری تکراری است" },
        { status: 400 },
      );
    }

    if (email) {
      return NextResponse.json(
        { error: "ایمیل وارد شده تکراری است" },
        { status: 400 },
      );
    }

    await setUserCookie();
    const hashedPassword = await hashPassword(body.password);
    await prisma.user.create({ data: { ...body, password: hashedPassword } });
    return NextResponse.json({ data: null, status: 201 });
  });
}
