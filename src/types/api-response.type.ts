import { NextResponse } from "next/server";

type FetchDataType<DataResponse> =
  | { data: DataResponse; error?: undefined }
  | { data?: undefined; error: string };

export type ApiResponseType<DataResponse> = NextResponse<
  FetchDataType<DataResponse>
>;
