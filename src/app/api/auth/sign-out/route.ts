import { NextResponse } from "next/server";
import { tryCatch, removeCookie } from "@/utils/api.utils";
import { ApiResponseType } from "@/types/api-response.type";

export async function POST(): Promise<ApiResponseType<null>> {
  return tryCatch(async () => {
    await removeCookie();

    return NextResponse.json({ data: null, status: 200 });
  });
}
