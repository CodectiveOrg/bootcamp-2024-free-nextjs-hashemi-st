import Prisma from "@prisma/client";

export type signupDto = Omit<Prisma.User, "id">;
export type signInDto = Pick<Prisma.User, "username" | "password">;
