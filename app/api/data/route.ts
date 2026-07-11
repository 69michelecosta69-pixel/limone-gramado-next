import { NextResponse } from "next/server";
import { readLimoneData, requireUser, writeLimoneData } from "@/lib/limone-system";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function GET(request: Request) {
  const session = requireUser(request);
  if (!session) {
    return NextResponse.json({ error: "Login necessário" }, { status: 401, headers: corsHeaders });
  }
  const data = await readLimoneData();
  return NextResponse.json({ data, user: session.name }, { headers: corsHeaders });
}

export async function PUT(request: Request) {
  const session = requireUser(request);
  if (!session) {
    return NextResponse.json({ error: "Login necessário" }, { status: 401, headers: corsHeaders });
  }
  const body = await request.json().catch(() => ({}));
  await writeLimoneData(body.data);
  return NextResponse.json({ ok: true, savedBy: session.name, savedAt: new Date().toISOString() }, { headers: corsHeaders });
}
