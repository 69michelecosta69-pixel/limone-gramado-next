import { NextResponse } from "next/server";
import { loginUser } from "@/lib/limone-system";

export const runtime = "nodejs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const login = loginUser(String(body.user || ""), String(body.pin || ""));
  if (!login) {
    return NextResponse.json({ error: "Nome ou PIN incorreto" }, { status: 401, headers: corsHeaders });
  }
  return NextResponse.json(login, { headers: corsHeaders });
}
