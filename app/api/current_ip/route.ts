import { NextRequest, NextResponse } from "next/server";
import { fetchIp, IpReturnType } from "@/lib/drone_requests";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    let ip = searchParams.get("ip");

    if (!ip) {
      //      ip = "127.0.0.1";
      ip = "172.31.173.220";
      //  return NextResponse.json({ error: 'IP address is required' }, { status: 400 });
    }
    console.log(ip);

    let data: IpReturnType = await fetchIp(ip);
    // set all floating point numbers to 2 decimal places

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
