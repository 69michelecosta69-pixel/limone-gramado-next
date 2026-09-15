import { createHash, createHmac, randomUUID, scryptSync, timingSafeEqual } from "crypto";
import { get, list, put } from "@vercel/blob";

const DATA_KEY = "limone:system:data";
const CODEX_DATA_KEY = "limone:michele-codex:data";
const BLOB_DATA_PATH = "limone-system/data.json";
const BLOB_BACKUP_PREFIX = "limone-system/backups/";
const CODEX_BLOB_DATA_PATH = "michele-codex/data.json";
const CODEX_BLOB_BACKUP_PREFIX = "michele-codex/backups/";
const TOKEN_TTL_MS = 1000 * 60 * 60 * 12;
const LOGIN_WINDOW_MS = 1000 * 60 * 15;
const LOGIN_LOCK_MS = 1000 * 60 * 15;
const LOGIN_MAX_FAILURES = 5;

const users = {
  maria: {
    name: "Maria",
    salt: "612ae64a68381cfa77d39d6d1583f7a7",
    pinHash: "63d77323675c73a34c38105ca5485d7f4c4339fc354cfd8ff41f10d2e6292cf8",
  },
  bia: {
    name: "Bia",
    salt: "937adb0ad057e06340a8d904ee4a9082",
    pinHash: "71b0776755a7a57203ba1368e62d782dd0137ad015d42fbb64d1197b502b58c7",
  },
  michele: {
    name: "Michele",
    salt: "d782e2a60c40e0f4b225578c98c4641e",
    pinHash: "46ca2aa389863a36176ca4803dd15b15b3d0dae4df7017e1939b2af2488189b8",
  },
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
  expenses: unknown[];
  contacts: unknown[];
  customers: unknown[];
  tasks: unknown[];
  products: unknown[];
  suppliers: unknown[];
  documents: unknown[];
  recipes: unknown[];
  messages: unknown[];
  stockMovements: unknown[];
  backups: unknown[];
  audit: unknown[];
};

type LimoneArrayKey = Exclude<keyof LimoneData, "dashboard">;

type MicheleCodexData = {
  items: unknown[];
  notes: Record<string, unknown>;
  audit: unknown[];
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
      costCategory: "Insumos",
      transportCost: 0,
      paidAmount: 0,
      paymentStatus: "Pendente",
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
      channel: "Venda direta",
      paymentStatus: "Pago",
    },
  ],
  expenses: [
    {
      id: randomUUID(),
      date: "2026-07-10",
      category: "Marketing",
      description: "Material inicial de divulgação",
      amount: 0,
      paymentStatus: "Pendente",
      notes: "",
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
    {
      id: randomUUID(),
      name: "Hotel Casa da Montanha",
      type: "Hotel",
      phone: "55 54 3295-7575",
      notes: "Enviar proposta para Gustavo.buske@casadamontanha.com.br",
    },
    {
      id: randomUUID(),
      name: "Toro Gramado",
      type: "Restaurante",
      phone: "55 54 99385-0673",
      notes: "Experiência gastronômica, etílica e musical em Gramado.",
    },
  ],
  customers: [
    {
      id: randomUUID(),
      name: "Juri Italiano Cliente Casanova",
      company: "Casanova",
      group: "Cliente / parceiro",
      phone: "55 54 8428-2718",
      city: "Gramado",
      status: "Contato futuro",
      notes: "Amigo e cliente. Futuramente pode expor garrafas no gelato.",
    },
    {
      id: randomUUID(),
      name: "Luciano Gramado",
      company: "",
      group: "Cliente",
      phone: "55 54 9942-3332",
      city: "Gramado",
      status: "Cliente",
      notes: "Cliente em Gramado.",
    },
    {
      id: randomUUID(),
      name: "Adega Salvador",
      company: "Adega Salvador Ltda",
      group: "Revendedor / ponto de venda",
      phone: "55 54 99715-1454",
      city: "Gramado",
      status: "Parceiro ativo",
      notes:
        "Compra garrafas LIMONE GRAMADO de 500 ml diretamente por R$ 50,00 a unidade e define o próprio preço de revenda. Endereço: Rodovia ERS-115, 36316, Loja 1, Várzea Grande, Gramado/RS, CEP 95677-276. Instagram: @adegasalvador.gramado_rs.",
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
  products: [
{"id":"maca-canela-275","name":"Maçã com Canela 275 ml","category":"Maçã com Canela","size":"275 ml","price":0,"unitCost":0,"notes":"LOTE DE TESTE sem anis. Preço e custo ainda não definidos (zero é marcador, não preço grátis). Validar teor alcoólico e validade antes da venda."},
{"id":"maca-canela-500","name":"Maçã com Canela 500 ml","category":"Maçã com Canela","size":"500 ml","price":0,"unitCost":0,"notes":"LOTE DE TESTE sem anis. Preço e custo ainda não definidos (zero é marcador, não preço grátis). Validar teor alcoólico e validade antes da venda."},
    {
      id: randomUUID(),
      name: "Limoncello 275 ml",
      category: "Limoncello",
      size: "275 ml",
      price: 68,
      unitCost: 25,
      notes: "Venda direta inicial",
    },
    {
      id: randomUUID(),
      name: "Limoncello 500 ml",
      category: "Limoncello",
      size: "500 ml",
      price: 89.5,
      unitCost: 32,
      notes: "Mercado Livre sugerido: R$ 99,90 + frete",
    },
    {
      id: randomUUID(),
      name: "Arancello 275 ml",
      category: "Arancello",
      size: "275 ml",
      price: 68,
      unitCost: 25,
      notes: "Receita com laranja",
    },
    {
      id: randomUUID(),
      name: "Arancello 500 ml",
      category: "Arancello",
      size: "500 ml",
      price: 89.5,
      unitCost: 32,
      notes: "Produto premium",
    },
    {
      id: randomUUID(),
      name: "Creme Irlandesa 275 ml",
      category: "Creme",
      size: "275 ml",
      price: 78,
      unitCost: 30,
      notes: "Creme artesanal tipo Baileys, produto próprio LIMONE GRAMADO",
    },
    {
      id: randomUUID(),
      name: "Creme Irlandesa 500 ml",
      category: "Creme",
      size: "500 ml",
      price: 98,
      unitCost: 40,
      notes: "Creme artesanal premium, testar lote pequeno antes da venda",
    },
  ],
  suppliers: [
    {
      id: randomUUID(),
      name: "Garrafaria Nunes",
      type: "Garrafas e embalagens",
      phone: "+55 51 9599-6333",
      address: "R. Buttenbender, 1146 - Fatima, Canoas - RS, 92200-570",
      notes:
        "Compra NF-e 000.001.944 de 09/07/2026: 105 garrafas Seduction 500 ml a R$ 5,60, 105 tampas 28 mm a R$ 0,80 e 105 lacres 28/29 mm a R$ 0,24. Produtos R$ 697,20, frete R$ 80,00 e total pago por PIX R$ 777,20. Entrega recebida e conferida em 13/07/2026. Carga: 7 caixas/volumes, 49 kg. Guardar os lacres em local fresco, seco e protegido do calor e do sol.",
    },
    {
      id: randomUUID(),
      name: "Joimar Embalagens",
      type: "Garrafas e embalagens",
      phone: "55 51 9139-9907",
      address: "R. Gomes de Freitas, 503 - Jardim Itu, Porto Alegre - RS, 91380-000",
      notes:
        "Fornecedor reserva e referencia tecnica para garrafa Seduction 500 ml com tampa. Site informa pacote com 10 garrafas, capacidade 500 ml, altura 30 cm, diametro 6 cm e tampa 29 mm. Preco maior que Garrafaria Nunes; usar para comparacao ou emergencia.",
    },
    {
      id: randomUUID(),
      name: "AG Química",
      type: "Álcool de cereais",
      phone: "+55 51 9278-0795",
      address: "Rua Arabutã, 10, Navegantes, Porto Alegre - RS, 90240-470",
      notes:
        "Compra NF-e 005.356 de 09/07/2026: 50 L de álcool extra fino de cereais, lote C05092025, a R$ 19,00/L. Total pago por PIX R$ 950,00, com frete CIT Express incluso e sem cobrança adicional. Embalagem: 2 bombonas de 20 L + 2 bombonas de 5 L, em 3 volumes. Entrega recebida e conferida em 10/07/2026. Certificado: fabricação 05/09/2025, validade 05/09/2027 e teor alcoólico 96,03% vol.",
    },
    {
      id: randomUUID(),
      name: "Induflex Rótulos e Etiquetas Ltda.",
      type: "Rótulos e etiquetas",
      phone: "+55 47 9140-3817",
      address: "Endereço não confirmado",
      notes:
        "Contato WhatsApp: induflexrotulos2 / Scheila. Telefone comercial: (47) 3275-3388. NF-e 000.022.051 de 13/08/2026: 2.000 etiquetas físicas para 275 ml e 500 ml, frente e verso, mais layout. Produtos/serviço R$ 2.270,00, frete R$ 107,45 e total da NF-e R$ 2.377,45.",
    },
  ],
  documents: [
    {
      id: randomUUID(),
      title: "Endereço LIMONE GRAMADO",
      category: "Empresa",
      responsible: "Michele",
      status: "Ativo",
      location: "Estrada da Santinha, 820, Linha 28, Gramado/RS, CEP 95679-899",
      notes: "Complemento: Rua Alfredo Capeletti, acesso pela Estrada da Santinha.",
    },
    {
      id: randomUUID(),
      title: "Garrafa Ice 275 ml - referencia tecnica",
      category: "Embalagens",
      responsible: "Michele",
      status: "Ativo",
      location: "Garrafaria Nunes / referencia de fornecedor",
      notes:
        "Capacidade 275 ml. Altura 202 mm. Diametro 58 mm. Tampa aluminio 28 mm curta ou pry off/coroa. Peso 194 g. Quantidade por caixa 83 unidades. Caixa 32 x 40 x 50 cm. Peso da caixa 17 kg. Usar como referencia para rotulos, contrarrotulos, renderings e embalagens.",
    },
    {
      id: randomUUID(),
      title: "Garrafa Seduction 500 ml - referencia tecnica",
      category: "Embalagens",
      responsible: "Michele",
      status: "Ativo",
      location: "Joimar Embalagens / Garrafaria Nunes",
      notes:
        "Capacidade 500 ml. Altura 300 mm. Diametro 60 mm. Tampa 29 mm. Vidro transparente. Referencia publica Joimar Embalagens: 10 garrafas de vidro 500 ml Seduction com tampa. Usar como referencia para rotulos, contrarrotulos, renderings e embalagens.",
    },
    {
      id: randomUUID(),
      title: "Plano Mercado Livre",
      category: "Vendas online",
      responsible: "Michele",
      status: "Análise",
      location: "Online",
      notes:
        "500 ml: venda direta R$ 89,50. Mercado Livre R$ 99,90 + frete comprador. Frete grátis exige simular, preço mínimo sugerido R$ 119,90.",
    },
  ],
  recipes: [
{"id":"maca-canela-base-600ml","name":"Maçã com Canela — sem anis (teste)","product":"Maçã com Canela","alcohol":0.6,"peel":0,"sugar":0.3,"water":0,"bottles275":8,"bottles500":4,"notes":"TESTE sem anis: 0,6 L álcool alimentício 96% vol., 1,5 L suco de maçã, 0,3 kg açúcar, 3 paus de canela, 2 favas de baunilha, 3 cravos. Aquecer só suco, açúcar e especiarias por 10–15 min; esfriar completamente, coar e só depois adicionar álcool longe de calor/chamas. Repousar cerca de 4 semanas. Volume estimado 2,3 L, cerca de 25% vol. não medidos. Validar teor e validade antes de vender. Fonte adaptada: https://www.boente-shop.de/blogs/ratgeber/bratapfellikoer-selber-machen"},
    {
      id: randomUUID(),
      name: "Limoncello clássico",
      product: "Limoncello",
      alcohol: 10,
      peel: 800,
      sugar: 7.68,
      water: 17.39,
      bottles275: 112,
      bottles500: 62,
      notes: "Base padrão para cálculo. Ajustar depois dos testes reais.",
    },
    {
      id: randomUUID(),
      name: "Arancello clássico",
      product: "Arancello",
      alcohol: 10,
      peel: 900,
      sugar: 7.2,
      water: 17.8,
      bottles275: 112,
      bottles500: 62,
      notes: "Base inicial para laranja. Validar doçura e aroma em lote pequeno.",
    },
    {
      id: randomUUID(),
      name: "Creme Irlandesa tipo Baileys",
      product: "Creme Irlandesa",
      alcohol: 1,
      peel: 0,
      sugar: 0,
      water: 1.4,
      bottles275: 20,
      bottles500: 11,
      notes:
        "Base para álcool de cereais 96%: diluir para aproximadamente 40% antes de misturar leite condensado, creme de leite, café, cacau/chocolate e baunilha. Produto próprio, inspirado em creme irlandês.",
    },
  ],
  messages: [
    {
      id: randomUUID(),
      date: "2026-07-13",
      to: "Maria e Bia",
      title: "Sistema online",
      text: "Registrar compras, vendas, estoque, contatos e tarefas para todos verem os mesmos dados.",
    },
  ],
  stockMovements: [
    {
      id: randomUUID(),
      date: "2026-07-09",
      type: "Entrada",
      item: "Álcool de cereais",
      quantity: 50,
      unit: "L",
      source: "AG Química",
      notes:
        "NF-e 005.356. 2 bombonas de 20 L + 2 de 5 L, lote C05092025. Total pago R$ 950,00, frete incluso. Entrega recebida e conferida em 10/07/2026.",
    },
    {
      id: randomUUID(),
      date: "2026-07-09",
      type: "Entrada",
      item: "Garrafas 500 ml",
      quantity: 105,
      unit: "un",
      source: "Garrafaria Nunes",
      notes: "NF-e 000.001.944. Entrega recebida e conferida em 13/07/2026.",
    },
    {
      id: randomUUID(),
      date: "2026-07-09",
      type: "Entrada",
      item: "Tampas 28 mm",
      quantity: 105,
      unit: "un",
      source: "Garrafaria Nunes",
      notes: "NF-e 000.001.944. Entrega recebida e conferida em 13/07/2026.",
    },
    {
      id: randomUUID(),
      date: "2026-07-09",
      type: "Entrada",
      item: "Lacres 28/29 mm cristal",
      quantity: 105,
      unit: "un",
      source: "Garrafaria Nunes",
      notes: "NF-e 000.001.944. Guardar em local fresco, seco e protegido do calor e do sol.",
    },
  ],
  backups: [],
  audit: [
    {
      id: randomUUID(),
      date: "2026-07-13",
      user: "Michele",
      action: "Sistema web igualado à app",
      module: "Sistema",
      notes: "Adicionados módulos principais da versão Master.",
    },
  ],
};

const initialMicheleCodexData: MicheleCodexData = {
  items: [
    {
      id: randomUUID(),
      type: "decision",
      title: "Separar app operacional da central pessoal Michele Codex",
      detail:
        "A app LIMONE GRAMADO continua para produção, compras, estoque e vendas. Michele Codex fica para pensar, planejar e organizar decisões.",
      status: "Ativo",
      priority: "Alta",
      date: "2026-07-14",
    },
    {
      id: randomUUID(),
      type: "task",
      title: "Conferir Induflex em 23/07/2026",
      detail: "Pagar restante R$ 702,50 somente quando Scheila avisar que o pedido ficou pronto.",
      status: "Aberta",
      priority: "Alta",
      date: "2026-07-23",
    },
    {
      id: randomUUID(),
      type: "task",
      title: "Pedir para Bia guardar lacres em local fresco",
      detail: "Garrafaria Nunes lembrou que o lacre não pode ficar em local quente.",
      status: "Aberta",
      priority: "Alta",
      date: "2026-07-14",
    },
    {
      id: randomUUID(),
      type: "document",
      title: "Sistema LIMONE GRAMADO online",
      detail: "Versão atual testada: 1.0.5-producao-pronta. URL: https://www.limonegramado.com.br/sistema",
      status: "OK",
      priority: "Normal",
      date: "2026-07-14",
    },
    {
      id: randomUUID(),
      type: "prompt",
      title: "Resumo para ChatGPT sobre LIMONE",
      detail:
        "Usar quando quiser continuar o projeto em outro chat: explicar app online, módulos, segurança, dados, fornecedores, receitas e próximos passos.",
      status: "Pronto",
      priority: "Normal",
      date: "2026-07-14",
    },
  ],
  notes: {
    mission: "Organizar as ideias e decisões de Michele para LIMONE GRAMADO.",
    nextStep: "Transformar entradas soltas em tarefas, decisões e prompts claros.",
    operatingApp: "https://www.limonegramado.com.br/sistema",
  },
  audit: [
    {
      id: randomUUID(),
      date: "2026-07-14",
      user: "Michele",
      action: "Central Michele Codex criada",
      module: "Michele Codex",
      notes: "Dados separados da app operacional LIMONE GRAMADO.",
    },
  ],
};

type LoginAttempt = {
  count: number;
  firstFailureAt: number;
  lockedUntil: number;
};

const memoryStore = globalThis as typeof globalThis & {
  limoneData?: LimoneData;
  micheleCodexData?: MicheleCodexData;
  limoneLoginAttempts?: Map<string, LoginAttempt>;
};

function loginAttempts() {
  if (!memoryStore.limoneLoginAttempts) memoryStore.limoneLoginAttempts = new Map();
  return memoryStore.limoneLoginAttempts;
}

function getRedisConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url: url.replace(/\/$/, ""), token } : null;
}

export function loginUser(userValue: string, pin: string, rememberThisDevice = false) {
  const key = userValue.toLowerCase() as LimoneUserKey;
  const user = users[key];
  if (!user || !verifyPin(pin, user.salt, user.pinHash)) return null;
  return {
    token: signToken(user.name, key === "michele" && rememberThisDevice === true),
    user: user.name,
  };
}

export function checkLoginAllowed(identifier: string) {
  const key = normalizeIdentifier(identifier);
  const attempts = loginAttempts();
  const current = attempts.get(key);
  if (!current) return { allowed: true };
  const now = Date.now();
  if (current.lockedUntil > now) {
    return { allowed: false, retryAfterSeconds: Math.ceil((current.lockedUntil - now) / 1000) };
  }
  if (now - current.firstFailureAt > LOGIN_WINDOW_MS) {
    attempts.delete(key);
  }
  return { allowed: true };
}

export function registerFailedLogin(identifier: string) {
  const key = normalizeIdentifier(identifier);
  const attempts = loginAttempts();
  const now = Date.now();
  const current = attempts.get(key);
  const next: LoginAttempt =
    current && now - current.firstFailureAt <= LOGIN_WINDOW_MS
      ? { ...current, count: current.count + 1 }
      : { count: 1, firstFailureAt: now, lockedUntil: 0 };
  if (next.count >= LOGIN_MAX_FAILURES) {
    next.lockedUntil = now + LOGIN_LOCK_MS;
  }
  attempts.set(key, next);
  return next.lockedUntil > now ? Math.ceil((next.lockedUntil - now) / 1000) : 0;
}

export function resetLoginFailures(identifier: string) {
  loginAttempts().delete(normalizeIdentifier(identifier));
}

export function requireUser(request: Request) {
  const auth = request.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  return verifyToken(token);
}

export async function readLimoneData() {
  if (hasBlobStore()) {
    const blob = await get(BLOB_DATA_PATH, { access: "private", useCache: false });
    if (!blob || !blob.stream) {
      await writeLimoneData(initialData);
      return normalizeData(initialData);
    }
    const text = await streamToText(blob.stream);
    return normalizeData(JSON.parse(text));
  }

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
  validateLimoneData(normalized);
  if (hasBlobStore()) {
    await createBlobBackup();
    await put(BLOB_DATA_PATH, JSON.stringify(normalized), {
      access: "private",
      allowOverwrite: true,
      cacheControlMaxAge: 60,
      contentType: "application/json",
    });
    return normalized;
  }

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

export async function readMicheleCodexData() {
  if (hasBlobStore()) {
    const blob = await get(CODEX_BLOB_DATA_PATH, { access: "private", useCache: false });
    if (!blob || !blob.stream) {
      await writeMicheleCodexData(initialMicheleCodexData);
      return normalizeMicheleCodexData(initialMicheleCodexData);
    }
    const text = await streamToText(blob.stream);
    return normalizeMicheleCodexData(JSON.parse(text));
  }

  const redis = getRedisConfig();
  if (!redis) {
    memoryStore.micheleCodexData = normalizeMicheleCodexData(memoryStore.micheleCodexData || initialMicheleCodexData);
    return memoryStore.micheleCodexData;
  }

  const response = await fetch(redis.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${redis.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["GET", CODEX_DATA_KEY]),
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Não foi possível ler os dados do Michele Codex.");
  const payload = (await response.json()) as { result?: string | null };
  if (!payload.result) {
    await writeMicheleCodexData(initialMicheleCodexData);
    return normalizeMicheleCodexData(initialMicheleCodexData);
  }
  return normalizeMicheleCodexData(JSON.parse(payload.result));
}

export async function writeMicheleCodexData(data: unknown) {
  const normalized = normalizeMicheleCodexData(data);
  validateMicheleCodexData(normalized);
  if (hasBlobStore()) {
    await createMicheleCodexBackup();
    await put(CODEX_BLOB_DATA_PATH, JSON.stringify(normalized), {
      access: "private",
      allowOverwrite: true,
      cacheControlMaxAge: 60,
      contentType: "application/json",
    });
    return normalized;
  }

  const redis = getRedisConfig();
  if (!redis) {
    memoryStore.micheleCodexData = normalized;
    return normalized;
  }

  const response = await fetch(redis.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${redis.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(["SET", CODEX_DATA_KEY, JSON.stringify(normalized)]),
  });
  if (!response.ok) throw new Error("Não foi possível salvar os dados do Michele Codex.");
  return normalized;
}

export async function recordLoginEvent(user: string) {
  const data = await readLimoneData();
  data.audit.push({
    id: randomUUID(),
    date: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
    user,
    action: "Entrada no sistema",
    module: "Segurança",
    notes: "Login online confirmado.",
  });
  if (data.audit.length > 160) data.audit = data.audit.slice(-160);
  await writeLimoneData(data);
}

export async function createLimoneBackup(reason = "manual") {
  if (!hasBlobStore()) throw new Error("Backup online indisponível.");
  const current = await get(BLOB_DATA_PATH, { access: "private", useCache: false });
  if (!current?.stream) throw new Error("Dados atuais não encontrados para backup.");
  const currentText = await streamToText(current.stream);
  const parsed = JSON.parse(currentText);
  validateLimoneData(normalizeData(parsed));
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const result = await put(`${BLOB_BACKUP_PREFIX}${timestamp}-${reason}-${randomUUID()}.json`, currentText, {
    access: "private",
    allowOverwrite: false,
    cacheControlMaxAge: 60,
    contentType: "application/json",
  });
  return { pathname: result.pathname, size: currentText.length, createdAt: new Date().toISOString() };
}

export async function testLatestBackupRestore() {
  if (!hasBlobStore()) throw new Error("Backup online indisponível.");
  const backups = await listLimoneBackups();
  const latest = backups[0];
  if (!latest) throw new Error("Nenhum backup encontrado.");
  const backup = await get(latest.pathname, { access: "private", useCache: false });
  if (!backup?.stream) throw new Error("Não foi possível ler o backup.");
  const text = await streamToText(backup.stream);
  const data = normalizeData(JSON.parse(text));
  validateLimoneData(data);
  return {
    ok: true,
    backup: latest.pathname,
    uploadedAt: latest.uploadedAt,
    counts: {
      production: data.production.length,
      purchases: data.purchases.length,
      stock: data.stock.length,
      sales: data.sales.length,
      expenses: data.expenses.length,
      customers: data.customers.length,
      recipes: data.recipes.length,
    },
  };
}

export function limoneDataRevision(data: unknown) {
  return createHash("sha256").update(stableStringify(normalizeData(data))).digest("hex");
}

export function micheleCodexRevision(data: unknown) {
  return createHash("sha256").update(stableStringify(normalizeMicheleCodexData(data))).digest("hex");
}

export class LimoneValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LimoneValidationError";
  }
}

export async function listLimoneBackups() {
  if (!hasBlobStore()) return [];
  const result = await list({ prefix: BLOB_BACKUP_PREFIX, limit: 50 });
  return result.blobs
    .map((backup) => ({
      pathname: backup.pathname,
      size: backup.size,
      uploadedAt: backup.uploadedAt.toISOString(),
    }))
    .sort((left, right) => right.uploadedAt.localeCompare(left.uploadedAt));
}

function hasBlobStore() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN || process.env.VERCEL_OIDC_TOKEN);
}

async function createBlobBackup() {
  try {
    await createLimoneBackup("auto");
  } catch {
    // A backup failure must not block Maria, Bia or Michele from saving current work.
  }
}

async function createMicheleCodexBackup() {
  try {
    if (!hasBlobStore()) return;
    const current = await get(CODEX_BLOB_DATA_PATH, { access: "private", useCache: false });
    if (!current?.stream) return;
    const currentText = await streamToText(current.stream);
    validateMicheleCodexData(normalizeMicheleCodexData(JSON.parse(currentText)));
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    await put(`${CODEX_BLOB_BACKUP_PREFIX}${timestamp}-auto-${randomUUID()}.json`, currentText, {
      access: "private",
      allowOverwrite: false,
      cacheControlMaxAge: 60,
      contentType: "application/json",
    });
  } catch {
    // A backup failure must not block the personal assistant from saving current work.
  }
}

async function streamToText(stream: ReadableStream<Uint8Array>) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let text = "";
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    text += decoder.decode(value, { stream: true });
  }
  return text + decoder.decode();
}

function normalizeMicheleCodexData(data: unknown): MicheleCodexData {
  const source = data && typeof data === "object" ? (data as Partial<MicheleCodexData>) : {};
  const notes = source.notes && typeof source.notes === "object" && !Array.isArray(source.notes) ? source.notes : {};
  return {
    items: Array.isArray(source.items) ? source.items : [],
    notes: { ...initialMicheleCodexData.notes, ...notes },
    audit: Array.isArray(source.audit) ? source.audit : [],
  };
}

function normalizeData(data: unknown): LimoneData {
  const source = data && typeof data === "object" ? (data as Partial<LimoneData>) : {};
  const dashboard =
    source.dashboard && typeof source.dashboard === "object"
      ? source.dashboard
      : initialData.dashboard;
  const normalized = {
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
    expenses: Array.isArray(source.expenses) ? source.expenses : initialData.expenses,
    contacts: Array.isArray(source.contacts) ? source.contacts : [],
    customers: Array.isArray(source.customers) ? source.customers : initialData.customers,
    tasks: Array.isArray(source.tasks) ? source.tasks : [],
    products: Array.isArray(source.products) ? source.products : initialData.products,
    suppliers: Array.isArray(source.suppliers) ? source.suppliers : initialData.suppliers,
    documents: Array.isArray(source.documents) ? source.documents : initialData.documents,
    recipes: Array.isArray(source.recipes) ? source.recipes : initialData.recipes,
    messages: Array.isArray(source.messages) ? source.messages : initialData.messages,
    stockMovements: Array.isArray(source.stockMovements) ? source.stockMovements : initialData.stockMovements,
    backups: Array.isArray(source.backups) ? source.backups : initialData.backups,
    audit: Array.isArray(source.audit) ? source.audit : initialData.audit,
  };
  ensureDefaultCatalogItems(normalized);
  return normalized;
}

function validateMicheleCodexData(data: MicheleCodexData) {
  if (!Array.isArray(data.items)) throw new LimoneValidationError("Michele Codex: lista de registros inválida.");
  if (!data.notes || typeof data.notes !== "object" || Array.isArray(data.notes)) {
    throw new LimoneValidationError("Michele Codex: plano inválido.");
  }
  data.items.forEach((item, index) => {
    if (!item || typeof item !== "object" || Array.isArray(item)) {
      throw new LimoneValidationError(`Michele Codex: registro inválido na linha ${index + 1}.`);
    }
    const record = item as Record<string, unknown>;
    if (!String(record.id || "").trim()) {
      throw new LimoneValidationError(`Michele Codex: registro ${index + 1} sem código.`);
    }
    if (!String(record.title || "").trim()) {
      throw new LimoneValidationError(`Michele Codex: registro ${index + 1} sem título.`);
    }
    if (!String(record.type || "").trim()) {
      throw new LimoneValidationError(`Michele Codex: registro ${index + 1} sem tipo.`);
    }
  });
}

function ensureDefaultCatalogItems(data: LimoneData) {
  const requiredProducts = initialData.products.filter((product) =>
    ["Creme Irlandesa 275 ml", "Creme Irlandesa 500 ml", "Maçã com Canela 275 ml", "Maçã com Canela 500 ml"].includes(String(asRecord(product).name))
  );
  requiredProducts.forEach((product) => {
    if (!data.products.some((entry) => normalizeText(asRecord(entry).name) === normalizeText(asRecord(product).name))) {
      data.products.push(product);
    }
  });

  const requiredRecipes = initialData.recipes.filter((recipe) => ["Creme Irlandesa", "Maçã com Canela"].includes(String(asRecord(recipe).product)));
  requiredRecipes.forEach((recipe) => {
    if (!data.recipes.some((entry) => normalizeText(asRecord(entry).name) === normalizeText(asRecord(recipe).name))) {
      data.recipes.push(recipe);
    }
  });
}

function stableStringify(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map((entry) => stableStringify(entry)).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value as Record<string, unknown>)
      .sort()
      .map((key) => `${JSON.stringify(key)}:${stableStringify((value as Record<string, unknown>)[key])}`)
      .join(",")}}`;
  }
  return JSON.stringify(value);
}

function validateLimoneData(data: LimoneData) {
  validateRequiredFields(data);
  validateNumbers(data);
  validateUniqueProductionBatches(data);
  validateUniqueStockItems(data);
}

function validateRequiredFields(data: LimoneData) {
  const rules: Array<[LimoneArrayKey, string, string[]]> = [
    ["production", "Produção", ["batch", "date", "product", "responsible"]],
    ["purchases", "Compras", ["date", "supplier", "item", "unit"]],
    ["stock", "Estoque", ["item", "unit"]],
    ["sales", "Vendas", ["date", "customer", "product"]],
    ["expenses", "Despesas", ["date", "category", "description", "paymentStatus"]],
    ["customers", "Clientes", ["name", "group", "status"]],
    ["tasks", "Tarefas", ["title", "owner", "due"]],
    ["products", "Produtos", ["name", "category", "size"]],
    ["suppliers", "Fornecedores", ["name", "type"]],
    ["documents", "Documentos", ["title", "category", "responsible", "status"]],
    ["recipes", "Receitas", ["name", "product"]],
    ["messages", "Mensagens", ["date", "to", "title"]],
    ["stockMovements", "Movimentos", ["date", "type", "item", "unit"]],
    ["contacts", "Contatos", ["name", "type"]],
  ];

  for (const [collection, label, fields] of rules) {
    const items = data[collection];
    if (!Array.isArray(items)) continue;
    items.forEach((item, index) => {
      const record = asRecord(item);
      fields.forEach((field) => {
        if (!String(record[field] ?? "").trim()) {
          throw new LimoneValidationError(`${label}: campo obrigatório ausente (${field}) no registro ${index + 1}.`);
        }
      });
    });
  }
}

function validateNumbers(data: LimoneData) {
  const positiveRules: Array<[LimoneArrayKey, string, string]> = [
    ["production", "bottles", "Produção: garrafas"],
    ["purchases", "quantity", "Compras: quantidade"],
    ["sales", "quantity", "Vendas: quantidade"],
    ["sales", "price", "Vendas: preço"],
    ["stockMovements", "quantity", "Movimentos: quantidade"],
  ];
  for (const [collection, field, label] of positiveRules) {
    data[collection].forEach((item, index) => {
      if (numberOf(asRecord(item)[field]) <= 0) {
        throw new LimoneValidationError(`${label} deve ser maior que zero no registro ${index + 1}.`);
      }
    });
  }

  const nonNegativeRules: Array<[LimoneArrayKey, string, string]> = [
    ["purchases", "total", "Compras: valor total"],
    ["stock", "quantity", "Estoque: quantidade"],
    ["stock", "minimum", "Estoque: mínimo"],
    ["sales", "price", "Vendas: preço"],
    ["products", "price", "Produtos: preço"],
    ["products", "unitCost", "Produtos: custo estimado"],
    ["expenses", "amount", "Despesas: valor"],
    ["purchases", "transportCost", "Compras: frete/transporte"],
    ["purchases", "paidAmount", "Compras: valor pago fornecedor"],
    ["recipes", "alcohol", "Receitas: álcool"],
    ["recipes", "peel", "Receitas: cascas"],
    ["recipes", "sugar", "Receitas: açúcar"],
    ["recipes", "water", "Receitas: água"],
    ["recipes", "bottles275", "Receitas: garrafas 275 ml"],
    ["recipes", "bottles500", "Receitas: garrafas 500 ml"],
  ];
  for (const [collection, field, label] of nonNegativeRules) {
    data[collection].forEach((item, index) => {
      if (numberOf(asRecord(item)[field]) < 0) {
        throw new LimoneValidationError(`${label} não pode ser negativo no registro ${index + 1}.`);
      }
    });
  }

  data.purchases.forEach((item, index) => {
    const record = asRecord(item);
    const totalToPay = numberOf(record.total) + numberOf(record.transportCost);
    const paid = numberOf(record.paidAmount);
    if (totalToPay > 0 && paid > totalToPay + 0.01) {
      throw new LimoneValidationError(`Compras: valor pago maior que o total no registro ${index + 1}.`);
    }
  });
}

function validateUniqueProductionBatches(data: LimoneData) {
  const seen = new Set<string>();
  data.production.forEach((item, index) => {
    const batch = normalizeText(asRecord(item).batch);
    if (!batch) return;
    if (seen.has(batch)) {
      throw new LimoneValidationError(`Produção: lote duplicado no registro ${index + 1}.`);
    }
    seen.add(batch);
  });
}

function validateUniqueStockItems(data: LimoneData) {
  const seen = new Set<string>();
  data.stock.forEach((item, index) => {
    const record = asRecord(item);
    const key = `${normalizeText(record.item)}|${normalizeText(record.unit || "un")}`;
    if (seen.has(key)) {
      throw new LimoneValidationError(`Estoque: item duplicado com a mesma unidade no registro ${index + 1}.`);
    }
    seen.add(key);
  });
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" ? (value as Record<string, unknown>) : {};
}

function numberOf(value: unknown) {
  const parsed = Number(value ?? 0);
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalizeText(value: unknown) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function signToken(user: string, rememberThisDevice = false) {
  const ttl = rememberThisDevice ? 1000 * 60 * 60 * 24 * 30 : TOKEN_TTL_MS;
  const payload = Buffer.from(JSON.stringify({ user, exp: Date.now() + ttl })).toString("base64url");
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
  const secret = process.env.LIMONE_LOGIN_SECRET;
  if (secret) return secret;
  if (process.env.NODE_ENV === "production") throw new Error("LIMONE_LOGIN_SECRET não configurado.");
  return "limone-gramado-desenvolvimento-local";
}

function normalizeIdentifier(identifier: string) {
  return identifier.toLowerCase().replace(/[^a-z0-9:._-]/g, "").slice(0, 120) || "desconhecido";
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

function verifyPin(pin: string, salt: string, expectedHash: string) {
  const actualHash = scryptSync(pin, salt, 32).toString("hex");
  return safeEqual(actualHash, expectedHash);
}
