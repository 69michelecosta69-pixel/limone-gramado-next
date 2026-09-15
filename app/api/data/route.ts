import { NextResponse } from "next/server";
import { LimoneValidationError, limoneDataRevision, readLimoneData, requireUser, writeLimoneData } from "@/lib/limone-system";

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
    "Access-Control-Allow-Methods": "GET, PUT, OPTIONS",
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
    console.warn("limone_data_get_unauthorized");
    return NextResponse.json({ error: "Login necessário" }, { status: 401, headers: responseHeaders(request) });
  }
  try {
    const data = await readLimoneData();
    console.info("limone_data_get_ok", { user: session.name });
    return NextResponse.json({ data, revision: limoneDataRevision(data), user: session.name }, { headers: responseHeaders(request) });
  } catch (error) {
    console.error("limone_data_get_error", error instanceof Error ? error.message : String(error));
    return NextResponse.json(
      { error: "Banco de dados online indisponível. Verifique a configuração do servidor." },
      { status: 503, headers: responseHeaders(request) }
    );
  }
}

export async function PUT(request: Request) {
  const session = requireUser(request);
  if (!session) {
    console.warn("limone_data_put_unauthorized");
    return NextResponse.json({ error: "Login necessário" }, { status: 401, headers: responseHeaders(request) });
  }
  try {
    const body = await request.json().catch(() => ({}));
    const expectedRevision = request.headers.get("if-match") || "";
    if (!expectedRevision) {
      console.warn("limone_data_put_missing_revision", { user: session.name });
      return NextResponse.json(
        { error: "Atualize os dados antes de salvar. A versão local está sem controle de sincronização." },
        { status: 428, headers: responseHeaders(request) }
      );
    }
    const currentData = await readLimoneData();
    const currentRevision = limoneDataRevision(currentData);
    if (expectedRevision !== currentRevision) {
      console.warn("limone_data_put_revision_conflict", { user: session.name });
      return NextResponse.json(
        { error: "Os dados online foram alterados por outra pessoa. Atualize a tela e tente novamente.", revision: currentRevision },
        { status: 409, headers: responseHeaders(request) }
      );
    }
    const saved = await writeLimoneData(body.data);
    console.info("limone_data_put_ok", { user: session.name });
    return NextResponse.json(
      { ok: true, revision: limoneDataRevision(saved), savedBy: session.name, savedAt: new Date().toISOString() },
      { headers: responseHeaders(request) }
    );
  } catch (error) {
    if (error instanceof LimoneValidationError) {
      console.warn("limone_data_put_validation_error", { user: session.name, error: error.message });
      return NextResponse.json(
        { error: error.message },
        { status: 400, headers: responseHeaders(request) }
      );
    }
    console.error("limone_data_put_error", error instanceof Error ? error.message : String(error));
    return NextResponse.json(
      { error: "Banco de dados online indisponível. Os dados não foram salvos no servidor." },
      { status: 503, headers: responseHeaders(request) }
    );
  }
}
