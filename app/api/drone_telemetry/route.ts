// app/api/dashboard-data/route.js
import { DroneTelemetry } from "@/lib/use-telemetry-data";
import { NextRequest, NextResponse } from "next/server";
import { fetchFromServer } from "@/lib/drone_requests";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    let ip = searchParams.get("ip");

    if (!ip) {
      ip = "172.31.173.220";
      //  return NextResponse.json({ error: 'IP address is required' }, { status: 400 });
    }

    const data: any = await fetchFromServer(ip);
    // set all floating point numbers to 2 decimal places
    Object.keys(data).forEach((key) => {
      if (typeof data[key] === "number") {
        data[key] = data[key].toFixed(2);
      }
    });

    // Create a NextResponse object
    const response = NextResponse.json(data as DroneTelemetry);

    // Set cache control headers
    response.headers.set("Cache-Control", "no-store, max-age=0");

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Disable static optimization for this route
export const dynamic = "force-dynamic";
