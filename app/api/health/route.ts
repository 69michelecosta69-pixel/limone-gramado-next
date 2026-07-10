import { NextResponse } from "next/server";

export const runtime = "nodejs";

export function GET() {
  return NextResponse.json({ ok: true, name: "LIMONE GRAMADO", time: new Date().toISOString() });
}
