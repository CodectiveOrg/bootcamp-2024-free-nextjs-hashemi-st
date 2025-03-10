import { ApiResponseType } from "@/types/api-response.type";
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import * as jose from "jose";

type ParseBodyResult<T> = [error: null, data: T] | [error: string, data: null];

const alg = "HS256";
const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);

export async function parseBody<T>(
  request: Request
): Promise<ParseBodyResult<T>> {
  try {
    const body = await request.json();
    return [null, body];
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "SyntaxError") {
        return ["فرمت اشتباه است", null];
      }
      return [error.message, null];
    }
    if (typeof error === "string") {
      return [error, null];
    }
    return ["خطای غیر منتظره ", null];
  }
}

export async function tryCatch<T>(
  callback: () => Promise<ApiResponseType<T>>
): Promise<ApiResponseType<T>> {
  try {
    return await callback();
  } catch (error) {
    if (error instanceof Error) {
      console.log("name", error.name);
      if (error.name === "PrismaClientValidationError") {
        return NextResponse.json(
          { error: "همه پارامترهای مورد نیاز پاس داده نشده است." },
          { status: 400 }
        );
      }
      if (error.name === "PrismaClientInitializationError") {
        return NextResponse.json(
          { error: "متاسفانه ارتباط با دیتابیس برقرار نشد." },
          { status: 400 }
        );
      }

      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: "خطای غیر منتظره" }, { status: 500 });
  }
}

export async function setUserCookie(): Promise<void> {
  const cookieStore = cookies();
  const token = await new jose.SignJWT()
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("3d")
    .sign(secret);

  cookieStore.set(process.env.TOKEN_KEY!, token, {
    secure: true,
    httpOnly: true,
    sameSite: "none",
    maxAge: 3 * 24 * 3600,
  });
}

export async function isSignedIn(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get(process.env.TOKEN_KEY!)?.value;

  if (!token) {
    return false;
  }
  try {
    await jose.jwtVerify(token, secret);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function removeCookie(): Promise<void> {
  const cookieStore = cookies();

  cookieStore.delete(process.env.TOKEN_KEY!)
}