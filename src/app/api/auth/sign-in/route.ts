import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { tryCatch, parseBody, setUserCookie } from "@/utils/api.utils";
import { comparePassword } from "@/utils/bcrypt.utils";
import { ApiResponseType } from "@/types/api-response.type";
import { signInDto } from "@/dto/auth.dto";

export async function POST(
  request: NextRequest,
): Promise<ApiResponseType<null>> {
  return tryCatch(async () => {
    const [ParseError, body] = await parseBody<signInDto>(request);
    if (ParseError !== null) {
      return NextResponse.json({ error: ParseError }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { username: body.username },
    });

    if (!user) {
      return NextResponse.json(
        { error: "کاربری با این نام یافت نشد" },
        { status: 404 },
      );
    }

    if (!(await comparePassword(body.password, user.password))) {
      return NextResponse.json(
        { error: "رمز وارد شده صحیح نمی باشد" },
        { status: 401 },
      );
    }

    await setUserCookie();

    return NextResponse.json({ data: null, status: 200 });
  });
}
