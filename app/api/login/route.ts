import { NextResponse } from "next/server";
import { checkLoginAllowed, loginUser, recordLoginEvent, registerFailedLogin, resetLoginFailures } from "@/lib/limone-system";

export const runtime = "nodejs";

function responseHeaders(request: Request, extra: Record<string, string> = {}) {
  return {
    ...securityHeaders(),
    ...corsHeaders(request),
    ...extra,
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
    "Access-Control-Allow-Methods": "POST, OPTIONS",
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

function clientIdentifier(request: Request, user: string) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip") || "";
  return `${forwardedFor || realIp || "sem-ip"}:${user.toLowerCase()}`;
}

export function OPTIONS(request: Request) {
  return new NextResponse(null, { status: 204, headers: responseHeaders(request) });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const user = String(body.user || "");
  const identifier = clientIdentifier(request, user);
  const allowed = checkLoginAllowed(identifier);
  if (!allowed.allowed) {
    console.warn("limone_login_rate_limited", { user });
    return NextResponse.json(
      { error: "Muitas tentativas incorretas. Aguarde alguns minutos e tente novamente." },
      {
        status: 429,
        headers: responseHeaders(request, { "Retry-After": String(allowed.retryAfterSeconds || 900) }),
      }
    );
  }

  const login = loginUser(user, String(body.pin || ""), body.rememberThisDevice === true);
  if (!login) {
    const retryAfter = registerFailedLogin(identifier);
    console.warn("limone_login_failed", { user, locked: Boolean(retryAfter) });
    return NextResponse.json(
      { error: retryAfter ? "Muitas tentativas incorretas. Aguarde alguns minutos e tente novamente." : "Nome ou PIN incorreto" },
      {
        status: retryAfter ? 429 : 401,
        headers: responseHeaders(request, retryAfter ? { "Retry-After": String(retryAfter) } : {}),
      }
    );
  }
  resetLoginFailures(identifier);
  try {
    await recordLoginEvent(login.user);
  } catch (error) {
    console.warn("limone_login_audit_failed", { user: login.user, error: error instanceof Error ? error.message : "erro" });
  }
  console.info("limone_login_ok", { user: login.user });
  return NextResponse.json(login, { headers: responseHeaders(request) });
}
