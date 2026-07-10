import { createHmac, randomUUID, timingSafeEqual } from "crypto";

const DATA_KEY = "limone:system:data";
const TOKEN_TTL_MS = 1000 * 60 * 60 * 24 * 30;

const users = {
  maria: { name: "Maria", pin: "0427" },
  bia: { name: "Bia", pin: "0427" },
  michele: { name: "Michele", pin: "0427" },
};

type LimoneUserKey = keyof typeof users;

type LimoneData = {
  dashboard: {
    bottles: string;
    sales: string;
    revenue: string;
    stockAlerts: string;
  };
  production: unknown[];
  purchases: unknown[];
  stock: unknown[];
  sales: unknown[];
  contacts: unknown[];
  tasks: unknown[];
};

const initialData: LimoneData = {
  dashboard: {
    bottles: "",
    sales: "",
    revenue: "",
    stockAlerts: "",
  },
  production: [
    {
      id: randomUUID(),
      batch: "LG-2026-001",
      date: "2026-07-10",
      product: "Limoncello",
      bottles: 24,
      responsible: "Maria",
      notes: "Primeira produção piloto",
    },
  ],
  purchases: [
    {
      id: randomUUID(),
      date: "2026-07-10",
      supplier: "Fornecedor local",
      item: "Limões sicilianos",
      quantity: 12,
      unit: "kg",
      total: 96,
    },
  ],
  stock: [
    { id: randomUUID(), item: "Garrafas 275 ml", quantity: 48, minimum: 30, unit: "un" },
    { id: randomUUID(), item: "Açúcar", quantity: 8, minimum: 5, unit: "kg" },
    { id: randomUUID(), item: "Álcool de cereais", quantity: 6, minimum: 4, unit: "L" },
  ],
  sales: [
    {
      id: randomUUID(),
      date: "2026-07-10",
      customer: "Degustação",
      product: "Limoncello 275 ml",
      quantity: 3,
      price: 49,
    },
  ],
  contacts: [
    {
      id: randomUUID(),
      name: "Restaurante exemplo",
      type: "Restaurante",
      phone: "",
      notes: "Contato para apresentação",
    },
  ],
  tasks: [
    {
      id: randomUUID(),
      title: "Conferir estoque de garrafas",
      owner: "Bia",
      due: "2026-07-12",
      done: false,
    },
  ],
};

const memoryStore = globalThis as typeof globalThis & { limoneData?: LimoneData };

function getRedisConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url: url.replace(/\/$/, ""), token } : null;
}

export function loginUser(userValue: string, pin: string) {
  const key = userValue.toLowerCase() as LimoneUserKey;
  const user = users[key];
  if (!user || user.pin !== pin) return null;
  return {
    token: signToken(user.name),
    user: user.name,
  };
}

export function requireUser(request: Request) {
  const auth = request.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  return verifyToken(token);
}

export async function readLimoneData() {
  const redis = getRedisConfig();
  if (!redis) {
    memoryStore.limoneData = normalizeData(memoryStore.limoneData || initialData);
    return memoryStore.limoneData;
  }

  const response = await fetch(redis.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${redis.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["GET", DATA_KEY]),
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Não foi possível ler os dados.");
  const payload = (await response.json()) as { result?: string | null };
  if (!payload.result) {
    await writeLimoneData(initialData);
    return normalizeData(initialData);
  }
  return normalizeData(JSON.parse(payload.result));
}

export async function writeLimoneData(data: unknown) {
  const normalized = normalizeData(data);
  const redis = getRedisConfig();
  if (!redis) {
    memoryStore.limoneData = normalized;
    return normalized;
  }

  const response = await fetch(redis.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${redis.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["SET", DATA_KEY, JSON.stringify(normalized)]),
  });
  if (!response.ok) throw new Error("Não foi possível salvar os dados.");
  return normalized;
}

function normalizeData(data: unknown): LimoneData {
  const source = data && typeof data === "object" ? (data as Partial<LimoneData>) : {};
  const dashboard =
    source.dashboard && typeof source.dashboard === "object"
      ? source.dashboard
      : initialData.dashboard;
  return {
    dashboard: {
      bottles: String(dashboard.bottles ?? ""),
      sales: String(dashboard.sales ?? ""),
      revenue: String(dashboard.revenue ?? ""),
      stockAlerts: String(dashboard.stockAlerts ?? ""),
    },
    production: Array.isArray(source.production) ? source.production : [],
    purchases: Array.isArray(source.purchases) ? source.purchases : [],
    stock: Array.isArray(source.stock) ? source.stock : [],
    sales: Array.isArray(source.sales) ? source.sales : [],
    contacts: Array.isArray(source.contacts) ? source.contacts : [],
    tasks: Array.isArray(source.tasks) ? source.tasks : [],
  };
}

function signToken(user: string) {
  const payload = Buffer.from(JSON.stringify({ user, exp: Date.now() + TOKEN_TTL_MS })).toString("base64url");
  const signature = createHmac("sha256", getTokenSecret()).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

function verifyToken(token: string) {
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;
  const expected = createHmac("sha256", getTokenSecret()).update(payload).digest("base64url");
  if (!safeEqual(signature, expected)) return null;
  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as { user?: string; exp?: number };
    if (!parsed.user || !parsed.exp || parsed.exp < Date.now()) return null;
    return { name: parsed.user };
  } catch {
    return null;
  }
}

function getTokenSecret() {
  return process.env.LIMONE_LOGIN_SECRET || "limone-gramado-prototipo";
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}
