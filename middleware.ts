import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/api/uploadthing"], // Add the routes that should be public and accessible without authentication
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Match all paths except for static files and Next.js internals
  ],
};
