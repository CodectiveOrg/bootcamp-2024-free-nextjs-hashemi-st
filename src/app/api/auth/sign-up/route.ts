import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { tryCatch } from "@/utils/api.utils";
import { ApiResponseType } from "@/types/api-response.type";

export async function POST(request: NextRequest): Promise<ApiResponseType<null>> {
 return tryCatch(async () => {
    const body = await request.json();

    await prisma.user.create({ data: body });
    return NextResponse.json({ data: null , status: 201 });
  });
}
