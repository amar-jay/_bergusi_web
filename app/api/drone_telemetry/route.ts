// app/api/dashboard-data/route.js
import { DroneTelemetry } from "@/lib/use-telemetry-data";
import { NextRequest, NextResponse } from "next/server";

const fetchFromServer = async (ip: string): Promise<DroneTelemetry> => {
  try {
    const response = await fetch(`${ip}/drone_telemetry`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: DroneTelemetry = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching drone telemetry:", error);
    throw error;
  }
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    let ip = searchParams.get("ip");

    if (!ip) {
      ip = "http://127.0.0.1:5000";
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

