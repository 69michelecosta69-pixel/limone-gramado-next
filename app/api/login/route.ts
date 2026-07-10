import { NextResponse } from "next/server";
import { loginUser } from "@/lib/limone-system";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const login = loginUser(String(body.user || ""), String(body.pin || ""));
  if (!login) {
    return NextResponse.json({ error: "Nome ou PIN incorreto" }, { status: 401 });
  }
  return NextResponse.json(login);
}
