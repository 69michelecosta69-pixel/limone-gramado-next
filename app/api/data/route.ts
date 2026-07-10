import { NextResponse } from "next/server";
import { readLimoneData, requireUser, writeLimoneData } from "@/lib/limone-system";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const session = requireUser(request);
  if (!session) {
    return NextResponse.json({ error: "Login necessário" }, { status: 401 });
  }
  const data = await readLimoneData();
  return NextResponse.json({ data, user: session.name });
}

export async function PUT(request: Request) {
  const session = requireUser(request);
  if (!session) {
    return NextResponse.json({ error: "Login necessário" }, { status: 401 });
  }
  const body = await request.json().catch(() => ({}));
  await writeLimoneData(body.data);
  return NextResponse.json({ ok: true, savedBy: session.name, savedAt: new Date().toISOString() });
}
