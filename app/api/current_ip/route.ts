import { NextRequest, NextResponse } from "next/server";
import { fetchIp } from "@/lib/drone_requests";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    let ip = searchParams.get("ip");

    if (!ip) {
      ip = "http://127.0.0.1:5000";
      //  return NextResponse.json({ error: 'IP address is required' }, { status: 400 });
    }

    let data: any = await fetchIp(ip);
    // set all floating point numbers to 2 decimal places
    if (!data) {
      data = "unknown";
    }

    // Create a NextResponse object
    const response = NextResponse.json(data);

    // Set cache control headers
    response.headers.set("Cache-Control", "no-store, max-age=0");

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Disable static optimization for this route
export const dynamic = "force-dynamic";
