import { NextRequest, NextResponse } from "next/server";
import { env } from "@/app/env";

// MLS Redis Sync
export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  
}
