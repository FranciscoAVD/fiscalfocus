import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)){
    auth().protect();
  } 
});
//for more details visit https://clerk.com/docs/references/nextjs/clerk-middleware#clerk-middleware
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
