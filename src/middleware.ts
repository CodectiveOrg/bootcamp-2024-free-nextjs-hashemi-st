import { NextRequest } from "next/server";
import { isSignedIn } from "@/utils/api.utils";

const authorizedRoutes = ["/dashboard"];
const unauthorizedRoutes = ["/auth", "/auth/sign-up", "/auth/sign-in"];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isAuthorizedRoutes = authorizedRoutes.includes(path);
  const isUnauthorizedRoutes = unauthorizedRoutes.includes(path);

  if (await isSignedIn(request)) {
    if (isUnauthorizedRoutes && !path.startsWith("/dashboard"))
      return Response.redirect(new URL("/dashboard", request.url));
  } else {
    if(isAuthorizedRoutes && !path.startsWith("/auth/sign-in")){
        return Response.redirect(new URL("/auth/sign-in", request.url)); 
    }
}
} 

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
