import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { tryCatch, parseBody } from "@/utils/api.utils";
import { ApiResponseType } from "@/types/api-response.type";

export async function POST(
  request: NextRequest
): Promise<ApiResponseType<null>> {
  return tryCatch(async () => {
    const [ParseError, body] = await parseBody<any>(request);
    if (ParseError) {
      return NextResponse.json({ error:ParseError}, {status: 400 });
    }
    await prisma.user.create({data:body});
    return NextResponse.json({ data: null, status: 201 });
  });
}
