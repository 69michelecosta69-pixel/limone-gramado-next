import { NextResponse } from "next/server";
import { listLimoneBackups, requireUser } from "@/lib/limone-system";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function responseHeaders(request: Request) {
  return {
    ...securityHeaders(),
    ...corsHeaders(request),
  };
}

function corsHeaders(request: Request) {
  const origin = request.headers.get("origin") || "";
  const allowedOrigins = new Set([
    "https://www.limonegramado.com.br",
    "https://limonegramado.com.br",
  ]);
  return {
    ...(allowedOrigins.has(origin) ? { "Access-Control-Allow-Origin": origin, Vary: "Origin" } : {}),
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

function securityHeaders() {
  return {
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "same-origin",
  };
}

export function OPTIONS(request: Request) {
  return new NextResponse(null, { status: 204, headers: responseHeaders(request) });
}

export async function GET(request: Request) {
  const session = requireUser(request);
  if (!session) {
    console.warn("limone_backups_get_unauthorized");
    return NextResponse.json({ error: "Login necessário" }, { status: 401, headers: responseHeaders(request) });
  }
  try {
    const backups = await listLimoneBackups();
    console.info("limone_backups_get_ok", { user: session.name, count: backups.length });
    return NextResponse.json({ backups, user: session.name }, { headers: responseHeaders(request) });
  } catch (error) {
    console.error("limone_backups_get_error", error instanceof Error ? error.message : String(error));
    return NextResponse.json(
      { error: "Não foi possível ler as cópias de segurança." },
      { status: 503, headers: responseHeaders(request) },
    );
  }
}
