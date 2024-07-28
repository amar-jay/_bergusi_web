// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { method } = req;

  // CORS headers
  const responseHeaders = new Headers();
  responseHeaders.set("Access-Control-Allow-Origin", "*"); // Allow all origins
  responseHeaders.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  ); // Allow all methods
  responseHeaders.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  responseHeaders.set("Access-Control-Allow-Credentials", "true");

  // Handle preflight requests
  if (method === "OPTIONS") {
    return new NextResponse(null, {
      headers: responseHeaders,
    });
  }

  // Continue with the request
  const response = NextResponse.next();
  response.headers.append("Access-Control-Allow-Origin", "*");
  response.headers.append(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  response.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  response.headers.append("Access-Control-Allow-Credentials", "true");

  return response;
}

// Configure middleware for all routes
export const config = {
  matcher: ["/", "/:path*"], // Apply middleware to all routes
};
