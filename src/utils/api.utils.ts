import { ApiResponseType } from "@/types/api-response.type";
import { NextResponse } from "next/server";

type ParseBodyResult<T> = [error: null, data: T] | [error: string, data: null];

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
      console.log('name',error.name)
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
