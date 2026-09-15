import { NextResponse } from "next/server";
import { createLimoneBackup } from "@/lib/limone-system";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function securityHeaders() {
  return {
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "same-origin",
  };
}

function authorized(request: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = request.headers.get("authorization") || "";
  return Boolean(secret && auth === `Bearer ${secret}`);
}

export async function GET(request: Request) {
  if (!authorized(request)) {
    console.warn("limone_backup_daily_unauthorized");
    return NextResponse.json({ error: "Não autorizado" }, { status: 401, headers: securityHeaders() });
  }

  try {
    const backup = await createLimoneBackup("daily");
    console.info("limone_backup_daily_ok", { pathname: backup.pathname, size: backup.size });
    return NextResponse.json({ ok: true, backup }, { headers: securityHeaders() });
  } catch (error) {
    console.error("limone_backup_daily_error", error instanceof Error ? error.message : String(error));
    return NextResponse.json({ error: "Backup diário falhou" }, { status: 503, headers: securityHeaders() });
  }
}
