import { NextResponse } from "next/server";
import { requireUser, testLatestBackupRestore } from "@/lib/limone-system";

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
    console.warn("limone_backup_restore_test_unauthorized");
    return NextResponse.json({ error: "Login necessário" }, { status: 401, headers: responseHeaders(request) });
  }

  try {
    const result = await testLatestBackupRestore();
    console.info("limone_backup_restore_test_ok", { user: session.name, backup: result.backup });
    return NextResponse.json({ ...result, user: session.name }, { headers: responseHeaders(request) });
  } catch (error) {
    console.error("limone_backup_restore_test_error", error instanceof Error ? error.message : String(error));
    return NextResponse.json(
      { error: "Teste de restauração falhou." },
      { status: 503, headers: responseHeaders(request) },
    );
  }
}
