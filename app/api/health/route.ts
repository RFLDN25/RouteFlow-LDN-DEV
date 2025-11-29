import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "RouteFlow London",
    status: "ok",
    time: new Date().toISOString()
  });
}
