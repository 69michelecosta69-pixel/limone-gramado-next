const STORAGE_KEY = "limone-gramado-v1";
const SESSION_KEY = "limone-gramado-session";
const API_BASE = "";
const OFFLINE_ONLY = false;
const APP_VERSION = "1.0.40-maca-canela-integrada";
const AUTO_REFRESH_MS = 10000;
const PROGRAM_UPDATE_CHECK_MS = 1000 * 60 * 15;
const DASHBOARD_KEYS = ["bottles", "sales", "revenue", "stockAlerts"];
const SOFTWARE_RIGHTS = Object.freeze({
  software: "LIMONE GRAMADO - Sistema de Gestão",
  author: "Michele Costantino",
  owner: "LIMONE GRAMADO",
  copyright: "© 2026 Michele Costantino / LIMONE GRAMADO. Todos os direitos reservados.",
  noticeDate: "2026-07-26",
  rightsFile: "DIREITOS_AUTORAIS_LIMONE_GRAMADO.txt"
});

window.LIMONE_GRAMADO_DIREITOS = SOFTWARE_RIGHTS;

const initialData = {
  dashboard: {
    bottles: "",
    sales: "",
    revenue: "",
    stockAlerts: ""
  },
  production: [
    {
      id: crypto.randomUUID(),
      batch: "LG-2026-001",
      date: "2026-07-10",
      product: "Limoncello",
      bottles: 24,
      responsible: "Maria",
      notes: "Primeira produção piloto"
    }
  ],
  purchases: [
    {
      id: crypto.randomUUID(),
      date: "2026-07-10",
      supplier: "Fornecedor local",
      item: "Limões sicilianos",
      quantity: 12,
      unit: "kg",
      total: 96,
      costCategory: "Insumos",
      transportCost: 0,
      paidAmount: 0,
      paymentStatus: "Pendente"
    }
  ],
  stock: [
    { id: crypto.randomUUID(), item: "Garrafas 275 ml", quantity: 48, minimum: 30, unit: "un" },
    { id: crypto.randomUUID(), item: "Açúcar", quantity: 8, minimum: 5, unit: "kg" },
    { id: crypto.randomUUID(), item: "Álcool de cereais", quantity: 6, minimum: 4, unit: "L" }
  ],
  sales: [
    {
      id: crypto.randomUUID(),
      date: "2026-07-10",
      customer: "Degustação",
      product: "Limoncello 275 ml",
      quantity: 3,
      price: 49,
      channel: "Venda direta",
      paymentStatus: "Pago"
    }
  ],
  expenses: [
    {
      id: crypto.randomUUID(),
      date: "2026-07-10",
      category: "Marketing",
      description: "Material inicial de divulgação",
      amount: 0,
      paymentStatus: "Pendente",
      notes: ""
    }
  ],
  contacts: [
    {
      id: crypto.randomUUID(),
      name: "Restaurante exemplo",
      type: "Restaurante",
      phone: "",
      notes: "Contato para apresentação"
    },
    {
      id: crypto.randomUUID(),
      name: "Hotel Casa da Montanha",
      type: "Hotel",
      phone: "55 54 3295-7575",
      notes: "Enviar proposta para Gustavo.buske@casadamontanha.com.br"
    },
    {
      id: crypto.randomUUID(),
      name: "Toro Gramado",
      type: "Restaurante",
      phone: "55 54 99385-0673",
      notes: "Experiência gastronômica, etílica e musical em Gramado."
    }
  ],
  customers: [
    {
      id: crypto.randomUUID(),
      name: "Juri Italiano Cliente Casanova",
      company: "Casanova",
      group: "Cliente / parceiro",
      phone: "55 54 8428-2718",
      city: "Gramado",
      status: "Contato futuro",
      notes: "Amigo e cliente. Futuramente pode expor garrafas no gelato."
    },
    {
      id: crypto.randomUUID(),
      name: "Luciano Gramado",
      company: "",
      group: "Cliente",
      phone: "55 54 9942-3332",
      city: "Gramado",
      status: "Cliente",
      notes: "Cliente em Gramado."
    },
    {
      id: crypto.randomUUID(),
      name: "Adega Salvador",
      company: "Adega Salvador Ltda",
      group: "Revendedor / ponto de venda",
      phone: "55 54 99715-1454",
      city: "Gramado",
      status: "Parceiro ativo",
      notes: "Ponto de venda parceiro em Várzea Grande. Endereço: Rodovia ERS-115, 36316, Loja 1, Gramado/RS, CEP 95677-276. Instagram: @adegasalvador.gramado_rs."
    }
  ],
  tasks: [
    {
      id: crypto.randomUUID(),
      title: "Conferir estoque de garrafas",
      owner: "Bia",
      due: "2026-07-12",
      done: false
    },
    {
      id: crypto.randomUUID(),
      title: "Confirmar com a BM Hortifruti o pedido de 15 kg de limão siciliano e combinar entrega ou retirada",
      owner: "Bia",
      due: "2026-09-07",
      done: false
    }
  ],
  products: [
{"id":"maca-canela-275","name":"Maçã com Canela 275 ml","category":"Maçã com Canela","size":"275 ml","price":0,"unitCost":0,"notes":"LOTE DE TESTE sem anis. Preço e custo ainda não definidos (zero é marcador, não preço grátis). Validar teor alcoólico e validade antes da venda."},
{"id":"maca-canela-500","name":"Maçã com Canela 500 ml","category":"Maçã com Canela","size":"500 ml","price":0,"unitCost":0,"notes":"LOTE DE TESTE sem anis. Preço e custo ainda não definidos (zero é marcador, não preço grátis). Validar teor alcoólico e validade antes da venda."},
    {
      id: crypto.randomUUID(),
      name: "Limoncello 275 ml",
      category: "Limoncello",
      size: "275 ml",
      price: 68,
      unitCost: 25,
      notes: "Venda direta inicial"
    },
    {
      id: crypto.randomUUID(),
      name: "Limoncello 500 ml",
      category: "Limoncello",
      size: "500 ml",
      price: 89.5,
      unitCost: 32,
      notes: "Mercado Livre sugerido: R$ 99,90 + frete"
    },
    {
      id: crypto.randomUUID(),
      name: "Arancello 275 ml",
      category: "Arancello",
      size: "275 ml",
      price: 68,
      unitCost: 25,
      notes: "Receita com laranja"
    },
    {
      id: crypto.randomUUID(),
      name: "Arancello 500 ml",
      category: "Arancello",
      size: "500 ml",
      price: 89.5,
      unitCost: 32,
      notes: "Produto premium"
    },
    {
      id: crypto.randomUUID(),
      name: "Creme Irlandesa 275 ml",
      category: "Creme",
      size: "275 ml",
      price: 78,
      unitCost: 30,
      notes: "Creme artesanal tipo Baileys, produto próprio LIMONE GRAMADO"
    },
    {
      id: crypto.randomUUID(),
      name: "Creme Irlandesa 500 ml",
      category: "Creme",
      size: "500 ml",
      price: 98,
      unitCost: 40,
      notes: "Creme artesanal premium, testar lote pequeno antes da venda"
    }
  ],
  suppliers: [
    {
      id: crypto.randomUUID(),
      name: "Garrafaria Nunes",
      type: "Garrafas e embalagens",
      phone: "+55 51 9599-6333",
      address: "R. Buttenbender, 1146 - Fatima, Canoas - RS, 92200-570",
      notes:
        "Compra NF-e 000.001.944 de 09/07/2026: 105 garrafas Seduction 500 ml a R$ 5,60, 105 tampas 28 mm a R$ 0,80 e 105 lacres 28/29 mm a R$ 0,24. Produtos R$ 697,20, frete R$ 80,00 e total pago por PIX R$ 777,20. Entrega recebida e conferida em 13/07/2026. Carga: 7 caixas/volumes, 49 kg. Guardar os lacres em local fresco, seco e protegido do calor e do sol."
    },
    {
      id: crypto.randomUUID(),
      name: "Joimar Embalagens",
      type: "Garrafas e embalagens",
      phone: "55 51 9139-9907",
      address: "R. Gomes de Freitas, 503 - Jardim Itu, Porto Alegre - RS, 91380-000",
      notes:
        "Fornecedor reserva e referencia tecnica para garrafa Seduction 500 ml com tampa. Site informa pacote com 10 garrafas, capacidade 500 ml, altura 30 cm, diametro 6 cm e tampa 29 mm. Preco maior que Garrafaria Nunes; usar para comparacao ou emergencia."
    },
    {
      id: crypto.randomUUID(),
      name: "AG Química",
      type: "Álcool de cereais",
      phone: "+55 51 9278-0795",
      address: "Rua Arabutã, 10, Navegantes, Porto Alegre - RS, 90240-470",
      notes:
        "Compra NF-e 005.356 de 09/07/2026: 50 L de álcool extra fino de cereais, lote C05092025, a R$ 19,00/L. Total pago por PIX R$ 950,00, com frete CIT Express incluso e sem cobrança adicional. Embalagem: 2 bombonas de 20 L + 2 bombonas de 5 L, em 3 volumes. Entrega recebida e conferida em 10/07/2026. Certificado: fabricação 05/09/2025, validade 05/09/2027 e teor alcoólico 96,03% vol."
    },
    {
      id: crypto.randomUUID(),
      name: "Induflex Rótulos e Etiquetas Ltda.",
      type: "Rótulos e etiquetas",
      phone: "+55 47 9140-3817",
      address: "Endereço não confirmado",
      notes:
        "Contato WhatsApp: induflexrotulos2 / Scheila. Telefone comercial: (47) 3275-3388. NF-e 000.022.051 de 13/08/2026: 2.000 etiquetas físicas para 275 ml e 500 ml, frente e verso, mais layout. Produtos/serviço R$ 2.270,00, frete R$ 107,45 e total da NF-e R$ 2.377,45."
    },
    {
      id: crypto.randomUUID(),
      name: "BM Hortifruti",
      type: "Frutas e hortifrúti",
      phone: "+55 54 98449-3890",
      address: "Rua Pernambuco, 305 - Bairro Dutra, Gramado - RS",
      notes:
        "Horário: segunda a sábado, das 07:40 às 12:00 e das 13:30 às 17:00. Limão siciliano: R$ 12,40/kg. Caixa geralmente com 15 kg (R$ 186,00). Em 02/09/2026 foi solicitado um primeiro pedido de 15 kg para segunda-feira; entrega e forma de pagamento ainda aguardam confirmação. O fornecedor também ficou de verificar se as frutas recebem cera ou outro tratamento pós-colheita na casca."
    }
  ],
  documents: [
    {
      id: crypto.randomUUID(),
      title: "Endereço LIMONE GRAMADO",
      category: "Empresa",
      responsible: "Michele",
      status: "Ativo",
      location: "Estrada da Santinha, 820, Linha 28, Gramado/RS, CEP 95679-899",
      notes: "Complemento: Rua Alfredo Capeletti, acesso pela Estrada da Santinha."
    },
    {
      id: crypto.randomUUID(),
      title: "Garrafa Ice 275 ml - referencia tecnica",
      category: "Embalagens",
      responsible: "Michele",
      status: "Ativo",
      location: "Garrafaria Nunes / referencia de fornecedor",
      notes:
        "Capacidade 275 ml. Altura 202 mm. Diametro 58 mm. Tampa aluminio 28 mm curta ou pry off/coroa. Peso 194 g. Quantidade por caixa 83 unidades. Caixa 32 x 40 x 50 cm. Peso da caixa 17 kg. Usar como referencia para rotulos, contrarrotulos, renderings e embalagens."
    },
    {
      id: crypto.randomUUID(),
      title: "Garrafa Seduction 500 ml - referencia tecnica",
      category: "Embalagens",
      responsible: "Michele",
      status: "Ativo",
      location: "Joimar Embalagens / Garrafaria Nunes",
      notes:
        "Capacidade 500 ml. Altura 300 mm. Diametro 60 mm. Tampa 29 mm. Vidro transparente. Referencia publica Joimar Embalagens: 10 garrafas de vidro 500 ml Seduction com tampa. Usar como referencia para rotulos, contrarrotulos, renderings e embalagens."
    },
    {
      id: crypto.randomUUID(),
      title: "Plano Mercado Livre",
      category: "Vendas online",
      responsible: "Michele",
      status: "Análise",
      location: "Online",
      notes: "500 ml: venda direta R$ 89,50. Mercado Livre R$ 99,90 + frete comprador. Frete grátis exige simular, preço mínimo sugerido R$ 119,90."
    }
  ],
  recipes: [
{"id":"maca-canela-base-600ml","name":"Maçã com Canela — sem anis (teste)","product":"Maçã com Canela","alcohol":0.6,"peel":0,"sugar":0.3,"water":0,"bottles275":8,"bottles500":4,"notes":"TESTE sem anis: 0,6 L álcool alimentício 96% vol., 1,5 L suco de maçã, 0,3 kg açúcar, 3 paus de canela, 2 favas de baunilha, 3 cravos. Aquecer só suco, açúcar e especiarias por 10–15 min; esfriar completamente, coar e só depois adicionar álcool longe de calor/chamas. Repousar cerca de 4 semanas. Volume estimado 2,3 L, cerca de 25% vol. não medidos. Validar teor e validade antes de vender. Fonte adaptada: https://www.boente-shop.de/blogs/ratgeber/bratapfellikoer-selber-machen"},
    {
      id: crypto.randomUUID(),
      name: "Limoncello clássico",
      product: "Limoncello",
      alcohol: 10,
      peel: 800,
      sugar: 9,
      water: 11.9,
      bottles275: 116,
      bottles500: 64,
      notes: "Receita oficial: rendimento final aproximado de 32 L (3,2 L por litro de álcool)."
    },
    {
      id: crypto.randomUUID(),
      name: "Arancello clássico",
      product: "Arancello",
      alcohol: 10,
      peel: 900,
      sugar: 7.2,
      water: 17.8,
      bottles275: 112,
      bottles500: 61,
      notes: "Receita baseada no teste de 5 L: rendimento final aproximado de 30,8 L (3,08 L por litro de álcool)."
    },
    {
      id: crypto.randomUUID(),
      name: "Creme Irlandesa tipo Baileys",
      product: "Creme Irlandesa",
      alcohol: 1,
      peel: 0,
      sugar: 0,
      water: 1.4,
      bottles275: 20,
      bottles500: 11,
      notes: "Base para álcool de cereais 96%: diluir para aproximadamente 40% antes de misturar leite condensado, creme de leite, café, cacau/chocolate e baunilha. Produto próprio, inspirado em creme irlandês."
    }
  ],
  messages: [
    {
      id: crypto.randomUUID(),
      date: "2026-07-13",
      to: "Maria e Bia",
      title: "Sistema online",
      text: "Registrar compras, vendas, estoque, contatos e tarefas para todos verem os mesmos dados."
    }
  ],
  stockMovements: [
    {
      id: crypto.randomUUID(),
      date: "2026-07-09",
      type: "Entrada",
      item: "Álcool de cereais",
      quantity: 50,
      unit: "L",
      source: "AG Química",
      notes:
        "NF-e 005.356. 2 bombonas de 20 L + 2 de 5 L, lote C05092025. Total pago R$ 950,00, frete incluso. Entrega recebida e conferida em 10/07/2026."
    },
    {
      id: crypto.randomUUID(),
      date: "2026-07-09",
      type: "Entrada",
      item: "Garrafas 500 ml",
      quantity: 105,
      unit: "un",
      source: "Garrafaria Nunes",
      notes: "NF-e 000.001.944. Entrega recebida e conferida em 13/07/2026."
    },
    {
      id: crypto.randomUUID(),
      date: "2026-07-09",
      type: "Entrada",
      item: "Tampas 28 mm",
      quantity: 105,
      unit: "un",
      source: "Garrafaria Nunes",
      notes: "NF-e 000.001.944. Entrega recebida e conferida em 13/07/2026."
    },
    {
      id: crypto.randomUUID(),
      date: "2026-07-09",
      type: "Entrada",
      item: "Lacres 28/29 mm cristal",
      quantity: 105,
      unit: "un",
      source: "Garrafaria Nunes",
      notes: "NF-e 000.001.944. Guardar em local fresco, seco e protegido do calor e do sol."
    }
  ],
  backups: [],
  audit: [
    {
      id: crypto.randomUUID(),
      date: "2026-07-13",
      user: "Michele",
      action: "Sistema web igualado à app",
      module: "Sistema",
      notes: "Adicionados módulos principais da versão Master."
    }
  ]
};

const titles = {
  home: "Início",
  production: "Produção",
  purchases: "Compras",
  stock: "Estoque",
  sales: "Vendas",
  more: "Mais"
};

let state = loadState();
ensureCollections();
let currentScreen = "home";
let deferredInstallPrompt = null;
let session = loadSession();
let syncStatus = session ? "Conectando..." : "Faça login para sincronizar.";
let autoRefreshTimer = null;
let editingItem = null;
let moreScreen = "reports";
let homeSearchQuery = "";
let productionDraft = null;
let serverRevision = "";
let programUpdateAvailable = false;
let programUpdateInfo = null;
let programUpdateTimer = null;
let serviceWorkerRegistration = null;
let refreshingProgram = false;

const app = document.getElementById("app");
const screenTitle = document.getElementById("screen-title");
const installButton = document.getElementById("install-button");
const userPill = document.getElementById("user-pill");
const switchUserButton = document.getElementById("switch-user-button");
const desktopSyncStatus = document.getElementById("desktop-sync-status");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  updateInstallButton();
});

installButton.addEventListener("click", async () => {
  if (!session || !deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  updateInstallButton();
});

switchUserButton.addEventListener("click", () => renderLogin("", true));

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    setScreen(button.dataset.screen);
  });
});

document.querySelectorAll(".desktop-nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.more) {
      setMoreScreen(button.dataset.more);
      return;
    }
    setScreen(button.dataset.screen);
  });
});

setupProgramUpdates();

initApp();

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return structuredClone(initialData);
  try {
    return { ...structuredClone(initialData), ...JSON.parse(saved) };
  } catch {
    return structuredClone(initialData);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (session) {
    syncToServer();
  }
}

function loadSession() {
  const saved = localStorage.getItem(SESSION_KEY);
  if (!saved) return null;
  try {
    const parsed = JSON.parse(saved);
    if (!parsed?.token || tokenExpired(parsed.token)) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function tokenExpired(token) {
  try {
    const base64 = String(token).split(".")[0].replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
    const payload = JSON.parse(atob(padded));
    return !payload.exp || payload.exp < Date.now();
  } catch {
    return true;
  }
}

async function initApp() {
  updateUserPill();
  updateInstallButton();
  checkProgramUpdate();
  startProgramUpdateChecks();
  if (!session) {
    renderLogin();
    return;
  }
  await loadFromServer();
  startAutoRefresh();
  setScreen("home");
}

function setupProgramUpdates() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", async () => {
    try {
      serviceWorkerRegistration = await navigator.serviceWorker.register("sw.js");
      serviceWorkerRegistration.addEventListener("updatefound", () => {
        const worker = serviceWorkerRegistration.installing;
        if (!worker) return;
        worker.addEventListener("statechange", () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) {
            showProgramUpdate({ version: "nova", notes: "Nova versão instalada em segundo plano." });
          }
        });
      });
      await serviceWorkerRegistration.update();
    } catch {
      // A app continua funcionando mesmo se o navegador não permitir service worker.
    }
  });
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!refreshingProgram) return;
    window.location.reload();
  });
}

function startProgramUpdateChecks() {
  if (programUpdateTimer) return;
  programUpdateTimer = window.setInterval(checkProgramUpdate, PROGRAM_UPDATE_CHECK_MS);
}

async function checkProgramUpdate() {
  try {
    serviceWorkerRegistration?.update();
    const response = await fetch(`version.json?agora=${Date.now()}`, {
      cache: "no-store",
      headers: { "Cache-Control": "no-cache" }
    });
    if (!response.ok) return;
    const info = await response.json();
    if (info.version && info.version !== APP_VERSION) {
      showProgramUpdate(info);
    } else {
      programUpdateAvailable = false;
      programUpdateInfo = null;
      renderProgramUpdateBanner();
    }
  } catch {
    // Sem internet: apenas tenta novamente no próximo ciclo.
  }
}

function showProgramUpdate(info) {
  programUpdateAvailable = true;
  programUpdateInfo = info;
  renderProgramUpdateBanner();
}

function renderProgramUpdateBanner() {
  let banner = document.getElementById("program-update-banner");
  if (!programUpdateAvailable) {
    banner?.remove();
    return;
  }
  if (!banner) {
    banner = element("div", "update-banner", `
      <div>
        <strong>Atualização disponível</strong>
        <span id="program-update-text">Nova versão da app LIMONE pronta.</span>
      </div>
      <button class="button" type="button" id="program-update-button">Atualizar agora</button>
    `);
    document.body.append(banner);
    banner.querySelector("#program-update-button").addEventListener("click", activateProgramUpdate);
  }
  const version = programUpdateInfo?.version ? `Versão ${programUpdateInfo.version}` : "Nova versão";
  const notes = programUpdateInfo?.notes ? ` - ${programUpdateInfo.notes}` : "";
  banner.querySelector("#program-update-text").textContent = `${version}${notes}`;
}

async function activateProgramUpdate() {
  refreshingProgram = true;
  const button = document.getElementById("program-update-button");
  if (button) {
    button.disabled = true;
    button.textContent = "Atualizando...";
  }
  try {
    if ("caches" in window) {
      const cacheKeys = await caches.keys();
      await Promise.all(
        cacheKeys
          .filter((key) => key.startsWith("limone-gramado-"))
          .map((key) => caches.delete(key))
      );
    }
    serviceWorkerRegistration = serviceWorkerRegistration || await navigator.serviceWorker?.getRegistration();
    await serviceWorkerRegistration?.update();
    serviceWorkerRegistration?.waiting?.postMessage({ type: "SKIP_WAITING" });
  } catch {
    // Mesmo sem service worker, recarregar busca a versão online mais recente.
  }
  window.setTimeout(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("atualizacao", String(Date.now()));
    window.location.replace(url.toString());
  }, 900);
}

function updateUserPill() {
  if (!session) {
    userPill.hidden = true;
    userPill.textContent = "";
    switchUserButton.hidden = true;
    updateInstallButton();
    return;
  }
  userPill.hidden = false;
  userPill.textContent = session.user;
  switchUserButton.hidden = false;
  updateInstallButton();
}

function updateInstallButton() {
  installButton.hidden = !session || !deferredInstallPrompt;
}

function renderLogin(error = "", canCancel = false) {
  screenTitle.textContent = "Entrada";
  if (!canCancel) {
    document.querySelectorAll(".nav-item").forEach((button) => {
      button.classList.remove("is-active");
    });
  }
  app.innerHTML = "";
  const login = element("section", "auth-card", `
    <h2>Entrar no LIMONE</h2>
    <p class="meta">Maria, Bia e Michele usam o mesmo sistema com dados compartilhados.</p>
    ${error ? `<p class="text-error">${escapeHTML(error)}</p>` : ""}
    <form id="login-form" class="form-grid">
      <div class="field full">
        <label for="login-user">Pessoa</label>
        <select id="login-user" name="user">
          <option value="maria">Maria</option>
          <option value="bia">Bia</option>
          <option value="michele">Michele</option>
        </select>
      </div>
      <div class="field full">
        <label for="login-pin">PIN</label>
        <input id="login-pin" name="pin" type="password" inputmode="numeric" autocomplete="current-password" required>
      </div>
      <div class="field full" id="remember-device-field" hidden>
        <label for="remember-device">
          <input id="remember-device" name="rememberThisDevice" type="checkbox" disabled style="width:auto; min-height:auto; margin-right:8px">
          Permanecer conectado por 30 dias neste dispositivo (Michele)
        </label>
        <p class="meta">Marque somente no seu PC pessoal protegido. A sessão fica apenas neste navegador/app; não altera outros aparelhos. Sem marcar: 12 horas. Use Sair para encerrar o acesso neste dispositivo.</p>
      </div>
      <div class="actions field full">
        <button class="button" type="submit">Entrar</button>
        ${canCancel ? `<button class="button secondary" type="button" id="cancel-login">Cancelar</button>` : ""}
      </div>
    </form>
  `);
  const userSelect = login.querySelector("#login-user");
  const rememberField = login.querySelector("#remember-device-field");
  const rememberCheckbox = login.querySelector("#remember-device");
  userSelect.addEventListener("change", () => {
    const isMichele = userSelect.value === "michele";
    rememberField.hidden = !isMichele;
    rememberCheckbox.disabled = !isMichele;
    rememberCheckbox.checked = false;
  });
  login.querySelector("#login-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await loginWithPin(String(formData.get("user")), String(formData.get("pin")), userSelect.value === "michele" && rememberCheckbox.checked);
  });
  const cancelButton = login.querySelector("#cancel-login");
  if (cancelButton) {
    cancelButton.addEventListener("click", () => setScreen(currentScreen));
  }
  app.append(login);
}

async function loginWithPin(user, pin, rememberThisDevice = false) {
  if (OFFLINE_ONLY) {
    renderLogin("Entrada offline desativada. Use internet para entrar com segurança.");
    return;
  }
  try {
    const response = await fetch(`${API_BASE}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pin, rememberThisDevice })
    });
    const payload = await readApiPayload(response);
    if (!response.ok) throw new Error(payload.error || "Não foi possível entrar");
    session = { token: payload.token, user: payload.user };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    updateUserPill();
    await loadFromServer();
    startAutoRefresh();
    setScreen("home");
  } catch (error) {
    renderLogin(friendlyNetworkError(error));
  }
}

function friendlyNetworkError(error) {
  if (String(error.message || "").includes("Failed to fetch")) {
    return "Não conectou ao servidor online. Verifique internet e tente novamente.";
  }
  return error.message || "Erro de conexão";
}

async function loadFromServer() {
  if (OFFLINE_ONLY) {
    syncStatus = `Modo offline: dados salvos no celular de ${session.user}.`;
    return;
  }
  if (!session) return;
  try {
    const payload = await apiRequest("/api/data");
    state = { ...structuredClone(initialData), ...payload.data };
    serverRevision = payload.revision || "";
    ensureCollections();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    syncStatus = `Sincronizado como ${payload.user}`;
  } catch (error) {
    syncStatus = "Sem conexão com o servidor. Mostrando dados deste aparelho.";
  }
}

function ensureCollections() {
  Object.keys(initialData).forEach((key) => {
    if (key === "dashboard") {
      state.dashboard = { ...initialData.dashboard, ...(state.dashboard || {}) };
      return;
    }
    if (!Array.isArray(state[key])) {
      state[key] = structuredClone(initialData[key]);
    }
  });
  ensureDefaultCatalogItems();
}

function ensureDefaultCatalogItems() {
  const requiredProducts = initialData.products.filter((product) => ["Creme Irlandesa 275 ml", "Creme Irlandesa 500 ml", "Maçã com Canela 275 ml", "Maçã com Canela 500 ml"].includes(product.name));
  requiredProducts.forEach((product) => {
    if (!state.products.some((entry) => normalizeStockName(entry.name) === normalizeStockName(product.name))) {
      state.products.push(structuredClone(product));
    }
  });
  const requiredRecipes = initialData.recipes.filter((recipe) => ["Creme Irlandesa", "Maçã com Canela"].includes(recipe.product));
  requiredRecipes.forEach((recipe) => {
    if (!state.recipes.some((entry) => normalizeStockName(entry.name) === normalizeStockName(recipe.name))) {
      state.recipes.push(structuredClone(recipe));
    }
  });
  const requiredSuppliers = initialData.suppliers.filter((supplier) => supplier.name === "BM Hortifruti");
  requiredSuppliers.forEach((supplier) => {
    if (!state.suppliers.some((entry) => normalizeStockName(entry.name) === normalizeStockName(supplier.name))) {
      state.suppliers.push(structuredClone(supplier));
    }
  });
  const requiredTasks = initialData.tasks.filter((task) => task.title.startsWith("Confirmar com a BM Hortifruti"));
  requiredTasks.forEach((task) => {
    if (!state.tasks.some((entry) => normalizeStockName(entry.title) === normalizeStockName(task.title))) {
      state.tasks.push(structuredClone(task));
    }
  });
}

let syncTimer = null;
function syncToServer() {
  if (OFFLINE_ONLY) {
    syncStatus = "Salvo neste aparelho.";
    return;
  }
  clearTimeout(syncTimer);
  syncTimer = setTimeout(async () => {
    try {
      await apiRequest("/api/data", {
        method: "PUT",
        headers: { "If-Match": serverRevision },
        body: JSON.stringify({ data: state })
      }).then((payload) => {
        serverRevision = payload.revision || serverRevision;
      });
      syncStatus = `Sincronizado ${new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`;
      render();
    } catch (error) {
      if (error.status === 409 || error.status === 428) {
        syncStatus = "Os dados online mudaram. Atualizando para evitar sobrescrever outra pessoa.";
        await loadFromServer();
      } else {
        syncStatus = "Não foi possível sincronizar. Os dados ficaram salvos neste aparelho.";
      }
      render();
    }
  }, 250);
}

function startAutoRefresh() {
  stopAutoRefresh();
  autoRefreshTimer = setInterval(async () => {
    if (!session || document.hidden) return;
    await loadFromServer();
    if (session && !isEditing() && currentScreen === "home") {
      render();
    }
  }, AUTO_REFRESH_MS);
}

function isEditing() {
  const active = document.activeElement;
  return Boolean(active?.matches("input, select, textarea") || active?.closest("form"));
}

function stopAutoRefresh() {
  if (!autoRefreshTimer) return;
  clearInterval(autoRefreshTimer);
  autoRefreshTimer = null;
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.token}`,
      ...(options.headers || {})
    },
    body: options.body
  });
  const payload = await readApiPayload(response);
  if (!response.ok) {
    if (response.status === 401) logout();
    const error = new Error(payload.error || "Erro de sincronização");
    error.status = response.status;
    error.payload = payload;
    throw error;
  }
  return payload;
}

async function readApiPayload(response) {
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }
  const text = await response.text();
  throw new Error(text.includes("<!doctype") ? "Servidor LIMONE não encontrado neste endereço." : "Resposta inesperada do servidor.");
}

function logout() {
  stopAutoRefresh();
  session = null;
  localStorage.removeItem(SESSION_KEY);
  updateUserPill();
  renderLogin();
}

function setScreen(screen) {
  if (!session) {
    renderLogin();
    return;
  }
  editingItem = null;
  currentScreen = screen;
  screenTitle.textContent = titles[screen];
  updateNavigation();
  render();
}

function setMoreScreen(screen) {
  if (!session) {
    renderLogin();
    return;
  }
  editingItem = null;
  currentScreen = "more";
  moreScreen = screen;
  screenTitle.textContent = moreTitle(screen);
  updateNavigation();
  render();
}

function moreTitle(screen) {
  const labels = {
    reports: "Relatórios", products: "Produtos", customers: "Clientes", recipes: "Receitas",
    suppliers: "Fornecedores", movements: "Movimentos", documents: "Documentos", calculator: "Calculadora",
    costs: "Custos", messages: "Mensagens", contacts: "Contatos", tasks: "Tarefas",
    backup: "Cópia", audit: "Histórico", account: "Conta", data: "Dados"
  };
  return labels[screen] || "Mais";
}

function updateNavigation() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.screen === currentScreen);
  });
  document.querySelectorAll(".desktop-nav-item").forEach((button) => {
    const active = button.dataset.more ? currentScreen === "more" && button.dataset.more === moreScreen : button.dataset.screen === currentScreen;
    button.classList.toggle("is-active", active);
  });
  if (desktopSyncStatus) desktopSyncStatus.textContent = syncStatus;
}

function render() {
  const renderers = {
    home: renderHome,
    production: renderProduction,
    purchases: renderPurchases,
    stock: renderStock,
    sales: renderSales,
    more: renderMore
  };
  updateNavigation();
  app.innerHTML = "";
  app.append(renderers[currentScreen]());
}

function renderHome() {
  const fragment = document.createDocumentFragment();
  const calculatedBottles = sum(state.production, "bottles");
  const calculatedSales = sum(state.sales, "quantity");
  const calculatedRevenue = state.sales.reduce((total, sale) => total + Number(sale.quantity) * Number(sale.price), 0);
  const calculatedLowStock = state.stock.filter((item) => Number(item.quantity) <= Number(item.minimum)).length;
  const totalBottles = dashboardValue("bottles", calculatedBottles);
  const monthSales = dashboardValue("sales", calculatedSales);
  const revenue = dashboardValue("revenue", calculatedRevenue);
  const lowStock = dashboardValue("stockAlerts", calculatedLowStock);
  const openTasks = state.tasks.filter((task) => !task.done).length;

  fragment.append(element("section", "hero", `
    <h2>Controle simples para Maria, Bia e Michele</h2>
    <p>Registre produção, compras, estoque, vendas, contatos e tarefas com dados compartilhados.</p>
    <p class="sync-line"><strong>${escapeHTML(syncStatus)}</strong></p>
  `));

  fragment.append(renderHomeRecipeStarter());
  fragment.append(renderHomeSmartIdeas({ calculatedLowStock, openTasks }));
  fragment.append(renderDailyRoutine({ calculatedLowStock, openTasks }));
  fragment.append(renderDataQualityPanel());
  fragment.append(renderHomeQuickStockEntry());
  fragment.append(renderHomeNextAction({ calculatedLowStock, openTasks }));
  fragment.append(renderHomeReadinessMini());
  fragment.append(renderHomeWorkflow());

  fragment.append(element("section", "grid", `
    ${stat("Garrafas produzidas", totalBottles)}
    ${stat("Vendas registradas", monthSales)}
    ${stat("Receita", formatBRL(revenue))}
    ${stat("Alertas de estoque", lowStock)}
  `));

  fragment.append(renderHomeSearch());

  const actions = element("section", "section", `
    <h2>Ações rápidas</h2>
    <div class="quick-actions">
      <button class="button" type="button" data-go="production">Nova produção</button>
      <button class="button" type="button" data-go="sales">Nova venda</button>
      <button class="button secondary" type="button" data-go="stock">Atualizar estoque</button>
      <button class="button secondary" type="button" data-go="more">Ver tarefas (${openTasks})</button>
    </div>
  `);
  actions.querySelectorAll("[data-go]").forEach((button) => {
    button.addEventListener("click", () => setScreen(button.dataset.go));
  });
  fragment.append(actions);
  fragment.append(renderTeamOverview());

  fragment.append(renderDashboardEditor({
    calculatedBottles,
    calculatedSales,
    calculatedRevenue,
    calculatedLowStock
  }));
  fragment.append(renderTaskPreview());
  return fragment;
}

function renderDailyRoutine({ calculatedLowStock, openTasks }) {
  const todayText = today();
  const productionsToday = state.production.filter((item) => item.date === todayText).length;
  const salesToday = state.sales.filter((item) => item.date === todayText).length;
  const pendingSales = state.sales.filter((sale) => (sale.paymentStatus || "Pendente") !== "Pago").length;
  const routine = [
    {
      time: "Manhã",
      title: "Conferir estoque antes de comprar ou produzir",
      text: calculatedLowStock > 0 ? `${calculatedLowStock} item(ns) precisam ser corrigidos ou comprados.` : "Estoque sem alerta principal agora.",
      button: "Abrir estoque",
      screen: "stock",
      priority: calculatedLowStock > 0
    },
    {
      time: "Produção",
      title: "Registrar cada lote no mesmo dia",
      text: productionsToday ? `${productionsToday} produção(ões) registradas hoje.` : "Nenhuma produção registrada hoje.",
      button: "Nova produção",
      screen: "production"
    },
    {
      time: "Venda",
      title: "Registrar venda assim que vender",
      text: salesToday ? `${salesToday} venda(s) registradas hoje.` : "Nenhuma venda registrada hoje.",
      button: "Nova venda",
      screen: "sales"
    },
    {
      time: "Pagamento",
      title: "Marcar o que já foi pago",
      text: pendingSales ? `${pendingSales} venda(s) ainda estão pendentes.` : "Sem vendas pendentes agora.",
      button: "Ver vendas",
      screen: "sales",
      priority: pendingSales > 0
    },
    {
      time: "Fechamento",
      title: "Ver tarefas e mensagens antes de terminar",
      text: openTasks ? `${openTasks} tarefa(s) abertas para a equipe.` : "Nenhuma tarefa aberta.",
      button: "Ver tarefas",
      screen: "more",
      more: "tasks",
      priority: openTasks > 0
    }
  ];

  const section = element("section", "section daily-routine-card", `
    <div class="starter-heading">
      <div>
        <p class="eyebrow">Uso diário</p>
        <h2>Rotina simples para hoje</h2>
        <p class="meta">Abra esta tela, leia as linhas e toque no botão do que precisa registrar.</p>
      </div>
      <span class="badge">${escapeHTML(todayText)}</span>
    </div>
    <div class="daily-routine-list">
      ${routine.map((item, index) => `
        <button class="daily-routine-item ${item.priority ? "is-priority" : ""}" type="button" data-routine-index="${index}">
          <span>${escapeHTML(item.time)}</span>
          <strong>${escapeHTML(item.title)}</strong>
          <small>${escapeHTML(item.text)}</small>
          <em>${escapeHTML(item.button)}</em>
        </button>
      `).join("")}
    </div>
  `);
  section.querySelectorAll("[data-routine-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = routine[Number(button.dataset.routineIndex)];
      if (!item) return;
      if (item.more) moreScreen = item.more;
      setScreen(item.screen);
    });
  });
  return section;
}

function renderDataQualityPanel() {
  const issues = dataQualityIssues().slice(0, 8);
  if (!issues.length) {
    return element("section", "section data-quality-card is-ok", `
      <div class="starter-heading">
        <div>
          <p class="eyebrow">Controle de dados</p>
          <h2>Nenhum valor estranho agora</h2>
          <p class="meta">A app conferiu estoque, produção, compras, vendas, produtos e receitas.</p>
        </div>
        <span class="badge">OK</span>
      </div>
      <p class="data-quality-ok">Se alguma quantidade real estiver diferente, abra Estoque e toque em Corrigir.</p>
    `);
  }

  const section = element("section", "section data-quality-card has-issues", `
    <div class="starter-heading">
      <div>
        <p class="eyebrow">Controle de dados</p>
        <h2>Valores que precisam conferir</h2>
        <p class="meta">A app marca em vermelho quando algo parece errado ou impossível.</p>
      </div>
      <span class="badge danger">${issues.length} alerta(s)</span>
    </div>
    <div class="data-quality-list">
      ${issues.map((issue, index) => `
        <button class="data-quality-item ${issue.level === "warning" ? "is-warning" : "is-danger"}" type="button" data-issue-index="${index}">
          <span>${issue.level === "warning" ? "Atenção" : "Erro"}</span>
          <strong>${escapeHTML(issue.title)}</strong>
          <small>${escapeHTML(issue.text)}</small>
          <em>Corrigir</em>
        </button>
      `).join("")}
    </div>
  `);
  section.querySelectorAll("[data-issue-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const issue = issues[Number(button.dataset.issueIndex)];
      if (!issue) return;
      if (issue.more) moreScreen = issue.more;
      setScreen(issue.screen);
    });
  });
  return section;
}

function dataQualityIssues() {
  const issues = [];
  const add = (screen, title, text, more = "", level = "danger") => {
    issues.push({ screen, title, text, more, level });
  };
  const isInvalid = (value) => value !== "" && value !== null && value !== undefined && !Number.isFinite(Number(value));
  const number = (value) => Number(value || 0);

  state.stock.forEach((item) => {
    if (isInvalid(item.quantity)) add("stock", item.item || "Estoque", "Quantidade atual não é um número válido.");
    if (isInvalid(item.minimum)) add("stock", item.item || "Estoque", "Estoque mínimo não é um número válido.");
    if (number(item.quantity) < 0) add("stock", item.item || "Estoque", `Quantidade negativa: ${number(item.quantity)} ${item.unit || "un"}.`);
    if (number(item.minimum) < 0) add("stock", item.item || "Estoque", "Estoque mínimo não pode ser negativo.");
  });

  state.production.forEach((item) => {
    if (isInvalid(item.bottles)) add("production", item.batch || "Produção", "Quantidade de garrafas não é um número válido.");
    if (number(item.bottles) <= 0) add("production", item.batch || "Produção", "Produção precisa ter quantidade de garrafas maior que zero.");
  });

  state.sales.forEach((item) => {
    const title = item.customer || "Venda";
    if (isInvalid(item.quantity)) add("sales", title, "Quantidade vendida não é um número válido.");
    if (isInvalid(item.price)) add("sales", title, "Preço por unidade não é um número válido.");
    if (number(item.quantity) <= 0) add("sales", title, "Venda precisa ter quantidade maior que zero.");
    if (number(item.price) <= 0) add("sales", title, "Venda precisa ter preço por unidade maior que zero.");
    if (number(item.quantity) > 0 && number(item.price) > 0 && number(item.quantity) * number(item.price) > 50000) {
      add("sales", title, "Valor da venda ficou muito alto. Confira quantidade e preço.", "", "warning");
    }
  });

  state.purchases.forEach((item) => {
    const title = item.supplier || item.item || "Compra";
    const total = number(item.total) + number(item.transportCost);
    const paid = number(item.paidAmount);
    if (isInvalid(item.quantity)) add("purchases", title, "Quantidade comprada não é um número válido.");
    if (isInvalid(item.total)) add("purchases", title, "Valor total não é um número válido.");
    if (isInvalid(item.transportCost)) add("purchases", title, "Frete/transporte não é um número válido.");
    if (isInvalid(item.paidAmount)) add("purchases", title, "Valor pago não é um número válido.");
    if (number(item.quantity) <= 0) add("purchases", title, "Compra precisa ter quantidade maior que zero.");
    if (number(item.total) < 0 || number(item.transportCost) < 0 || paid < 0) add("purchases", title, "Compra tem valor negativo.");
    if (total > 0 && paid > total + 0.01) add("purchases", title, `Valor pago (${formatBRL(paid)}) está maior que o total (${formatBRL(total)}).`);
  });

  state.products.forEach((item) => {
    const title = item.name || "Produto";
    if (isInvalid(item.price)) add("more", title, "Preço de venda não é um número válido.", "products");
    if (isInvalid(item.unitCost)) add("more", title, "Custo unitário não é um número válido.", "products");
    if (number(item.price) <= 0) add("more", title, "Produto precisa ter preço de venda maior que zero.", "products");
    if (number(item.unitCost) < 0) add("more", title, "Custo unitário não pode ser negativo.", "products");
    if (number(item.price) > 0 && number(item.unitCost) > 0 && number(item.price) < number(item.unitCost)) {
      add("more", title, "Preço de venda está menor que o custo. Pode dar prejuízo.", "products");
    }
  });

  state.recipes.forEach((item) => {
    const title = item.name || "Receita";
    if (["alcohol", "peel", "sugar", "water"].some((key) => isInvalid(item[key]))) {
      add("more", title, "Receita tem ingrediente com número inválido.", "recipes");
    }
    if (["alcohol", "peel", "sugar", "water"].some((key) => number(item[key]) < 0)) {
      add("more", title, "Receita tem ingrediente negativo.", "recipes");
    }
    if (["alcohol", "peel", "sugar", "water"].every((key) => number(item[key]) === 0)) {
      add("more", title, "Receita está sem ingredientes calculáveis.", "recipes", "warning");
    }
  });

  return issues;
}

function renderHomeSmartIdeas({ calculatedLowStock, openTasks }) {
  const ideas = automaticIdeas({ calculatedLowStock, openTasks }).slice(0, 5);
  const section = element("section", "section smart-ideas-card", `
    <div class="starter-heading">
      <div>
        <p class="eyebrow">Sugestões automáticas</p>
        <h2>O que a app recomenda agora</h2>
        <p class="meta">A app olha estoque, vendas, tarefas e contatos para mostrar o próximo cuidado importante.</p>
      </div>
      <span class="badge ${ideas.some((idea) => idea.priority === "Alta") ? "warn" : ""}">${ideas.length} ideias</span>
    </div>
    <div class="smart-ideas-list">
      ${ideas.map((idea, index) => `
        <button class="smart-idea ${idea.priority === "Alta" ? "is-high" : ""}" type="button" data-idea-index="${index}">
          <span>${escapeHTML(idea.priority)}</span>
          <strong>${escapeHTML(idea.title)}</strong>
          <small>${escapeHTML(idea.text)}</small>
        </button>
      `).join("")}
    </div>
  `);
  section.querySelectorAll("[data-idea-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const idea = ideas[Number(button.dataset.ideaIndex)];
      if (!idea) return;
      if (idea.more) {
        moreScreen = idea.more;
        setScreen("more");
        return;
      }
      setScreen(idea.screen);
    });
  });
  return section;
}

function automaticIdeas({ calculatedLowStock, openTasks }) {
  const ideas = [];
  const lowStockItems = state.stock
    .filter((item) => Number(item.quantity || 0) <= Number(item.minimum || 0))
    .sort((a, b) => Number(a.quantity || 0) - Number(b.quantity || 0));
  const pendingSales = state.sales.filter((sale) => (sale.paymentStatus || "Pendente") !== "Pago");
  const openPurchases = state.purchases.filter((purchase) => (purchase.paymentStatus || "Pendente") !== "Pago");
  const hotCustomers = state.customers.filter((customer) => {
    const status = normalizeStockName(customer.status || "");
    return status.includes("novo") || status.includes("conversa") || status.includes("possivel");
  });
  const productsWithoutCost = state.products.filter((product) => !Number(product.unitCost || 0));
  const bestPlan = productionReadinessPlans().reduce((best, plan) => plan.possible > best.possible ? plan : best, { possible: 0 });

  if (lowStockItems.length) {
    const names = lowStockItems.slice(0, 3).map((item) => item.item).join(", ");
    ideas.push({
      priority: "Alta",
      title: "Corrigir ou comprar estoque",
      text: `${calculatedLowStock} item(ns) precisam de atenção: ${names}.`,
      screen: "stock"
    });
  }

  if (pendingSales.length) {
    const totalOpen = pendingSales.reduce((total, sale) => total + Number(sale.quantity || 0) * Number(sale.price || 0), 0);
    ideas.push({
      priority: "Alta",
      title: "Conferir pagamentos de vendas",
      text: `${pendingSales.length} venda(s) pendente(s), aproximadamente ${formatBRL(totalOpen)}.`,
      screen: "sales"
    });
  }

  if (openPurchases.length) {
    ideas.push({
      priority: "Média",
      title: "Ver fornecedores a pagar",
      text: `${openPurchases.length} compra(s) ainda não estão marcadas como pagas.`,
      screen: "purchases"
    });
  }

  if (openTasks > 0) {
    ideas.push({
      priority: "Média",
      title: "Resolver tarefas abertas",
      text: `${openTasks} tarefa(s) para Michele, Maria ou Bia.`,
      screen: "more",
      more: "tasks"
    });
  }

  if (hotCustomers.length) {
    ideas.push({
      priority: "Média",
      title: "Fazer follow-up com clientes",
      text: `${hotCustomers.length} contato(s) podem virar venda ou parceria.`,
      screen: "customers"
    });
  }

  if (bestPlan.possible > 0) {
    ideas.push({
      priority: "Boa",
      title: "Existe produção possível",
      text: `Dá para produzir até ${bestPlan.possible} garrafas de ${bestPlan.product} ${bestPlan.size}.`,
      screen: "production"
    });
  }

  if (productsWithoutCost.length) {
    ideas.push({
      priority: "Boa",
      title: "Completar custo dos produtos",
      text: `${productsWithoutCost.length} produto(s) ainda precisam de custo por unidade para lucro correto.`,
      screen: "more",
      more: "products"
    });
  }

  if (!ideas.length) {
    ideas.push({
      priority: "OK",
      title: "Tudo parece organizado",
      text: "Nenhum alerta importante agora. Continue registrando produção, compras e vendas.",
      screen: "home"
    });
  }

  return ideas;
}

function renderHomeNextAction({ calculatedLowStock, openTasks }) {
  let target = "production";
  let title = "Preparar o próximo lote";
  let text = "Calcule a receita, confira se tem material suficiente e registre a produção.";
  let button = "Começar produção";

  if (calculatedLowStock > 0) {
    target = "stock";
    title = "Conferir estoque agora";
    text = `${calculatedLowStock} item(ns) estão no mínimo ou abaixo do mínimo. Confira antes de produzir.`;
    button = "Abrir estoque";
  } else if (openTasks > 0) {
    target = "more:tasks";
    title = "Ver tarefas abertas";
    text = `Existem ${openTasks} tarefa(s) abertas para Michele, Maria ou Bia.`;
    button = "Abrir tarefas";
  }

  const section = element("section", "section next-action-card", `
    <div>
      <p class="eyebrow">Próximo passo</p>
      <h2>${escapeHTML(title)}</h2>
      <p class="meta">${escapeHTML(text)}</p>
    </div>
    <button class="button" type="button" id="next-action-button">${escapeHTML(button)}</button>
  `);
  section.querySelector("#next-action-button").addEventListener("click", () => {
    if (target.startsWith("more:")) {
      moreScreen = target.split(":")[1];
      setScreen("more");
      return;
    }
    setScreen(target);
  });
  return section;
}

function renderHomeReadinessMini() {
  const plans = productionReadinessPlans();
  const visiblePlans = plans
    .filter((plan) => plan.product === "Limoncello" || plan.product === "Arancello")
    .slice(0, 4);
  const bestPlan = plans.reduce((best, plan) => plan.possible > best.possible ? plan : best, plans[0] || { possible: 0 });
  const missing = plans
    .flatMap((plan) => plan.materials.filter((material) => material.missing > 0).map((material) => material.item))
    .filter((item, index, list) => list.indexOf(item) === index)
    .slice(0, 3);

  const section = element("section", "section readiness-mini-card", `
    <div class="starter-heading">
      <div>
        <p class="eyebrow">Produção rápida</p>
        <h2>O que dá para produzir</h2>
        <p class="meta">${bestPlan?.possible > 0
          ? `Melhor opção agora: ${escapeHTML(bestPlan.product)} ${escapeHTML(bestPlan.size)} com até ${bestPlan.possible} garrafas.`
          : `Ainda falta material antes de produzir. ${missing.length ? `Conferir: ${escapeHTML(missing.join(", "))}.` : "Confira o estoque."}`}</p>
      </div>
      <span class="badge ${bestPlan?.possible > 0 ? "" : "danger"}">${bestPlan?.possible > 0 ? "Pronto" : "Falta"}</span>
    </div>
    <div class="readiness-mini-grid">
      ${visiblePlans.map((plan) => `
        <button class="readiness-mini-item" type="button" data-more="ready">
          <span>${escapeHTML(plan.product)} ${escapeHTML(plan.size)}</span>
          <strong>${plan.possible} un</strong>
          <small>${plan.possible > 0 ? "Pode produzir" : "Ver faltas"}</small>
        </button>
      `).join("")}
    </div>
    <button class="button secondary readiness-mini-button" type="button" data-more="ready">Ver produção pronta?</button>
  `);
  section.querySelectorAll("[data-more='ready']").forEach((button) => {
    button.addEventListener("click", () => {
      moreScreen = "ready";
      setScreen("more");
    });
  });
  return section;
}

function renderHomeWorkflow() {
  const section = element("section", "section workflow-card", `
    <div class="starter-heading">
      <div>
        <p class="eyebrow">Fluxo da app</p>
        <h2>O que fazer agora</h2>
        <p class="meta">Siga esta ordem simples para manter produção, estoque e venda ligados.</p>
      </div>
      <span class="badge">App</span>
    </div>
    <div class="workflow-steps">
      <button class="workflow-step" type="button" data-more="calculator">
        <strong>1</strong>
        <span>Calcular receita</span>
        <small>Limoncello, Arancello, Creme ou Maçã com Canela (teste).</small>
      </button>
      <button class="workflow-step" type="button" data-screen="production">
        <strong>2</strong>
        <span>Registrar produção</span>
        <small>Cria lote e baixa materiais do estoque.</small>
      </button>
      <button class="workflow-step" type="button" data-screen="stock">
        <strong>3</strong>
        <span>Conferir estoque</span>
        <small>Garrafas, rótulos, tampas e ingredientes.</small>
      </button>
      <button class="workflow-step" type="button" data-screen="sales">
        <strong>4</strong>
        <span>Registrar venda</span>
        <small>Atualiza receita e saída de produto.</small>
      </button>
    </div>
  `);
  section.querySelectorAll("[data-screen]").forEach((button) => {
    button.addEventListener("click", () => setScreen(button.dataset.screen));
  });
  section.querySelectorAll("[data-more]").forEach((button) => {
    button.addEventListener("click", () => {
      moreScreen = button.dataset.more;
      setScreen("more");
    });
  });
  return section;
}

function renderHomeRecipeStarter() {
  const section = element("section", "form-card home-recipe-starter", `
    <div class="starter-heading">
      <div>
        <p class="eyebrow">Começar por aqui</p>
        <h2>Calculadora de receitas</h2>
        <p class="meta">Escolha a receita, coloque o álcool disponível e veja as quantidades sem procurar no menu.</p>
      </div>
      <span class="badge warn">Maria</span>
    </div>
    <div class="form-grid">
      <div class="field">
        <label for="home-calc-product">Receita</label>
        <select id="home-calc-product">
          <option value="limoncello">Limoncello</option>
          <option value="arancello">Arancello</option>
          <option value="creme-irlandesa">Creme Irlandesa tipo Baileys</option>
          <option value="maca-canela">Maçã com Canela — sem anis (teste)</option>
        </select>
      </div>
      <div class="field">
        <label for="home-calc-alcohol" id="home-calc-alcohol-label">Álcool de cereais (L)</label>
        <input id="home-calc-alcohol" type="text" inputmode="decimal" value="10">
      </div>
    </div>
    <div class="quick-actions starter-actions">
      <button class="button" type="button" id="home-run-recipe-calc">Calcular receita</button>
      <button class="button secondary" type="button" id="home-open-recipes">Receitas salvas</button>
      <button class="button secondary" type="button" id="home-open-costs">Custos</button>
      <button class="button secondary" type="button" id="home-open-full-calc">Calculadora completa</button>
    </div>
    <div id="home-recipe-result" class="result-box"></div>
  `);
  const productInput = section.querySelector("#home-calc-product");
  const alcoholInput = section.querySelector("#home-calc-alcohol");
  const alcoholLabel = section.querySelector("#home-calc-alcohol-label");
  const result = section.querySelector("#home-recipe-result");
  const run = () => {
    const profile = recipeProfile(productInput.value);
    const alcohol = parseOptionalNumberInput(alcoholInput.value);
    alcoholLabel.textContent = profile.inputLabel;
    if (alcohol === null) {
      result.innerHTML = `<div class="soft-message">Digite a quantidade de álcool para calcular a receita.</div>`;
      return;
    }
    if (alcohol <= 0) {
      result.innerHTML = `<div class="soft-message">Use uma quantidade maior que zero para calcular.</div>`;
      return;
    }
    const finalLiters = alcohol * profile.volume;
    const ingredients = profile.ingredients(alcohol);
    const shareText = recipeShareText(profile, alcohol, finalLiters, ingredients);
    result.innerHTML = `
      <div class="report-grid">
        ${reportTile("Produto", profile.name)}
        ${reportTile("Volume final estimado", `${roundStock(finalLiters)} L`)}
        ${reportTile("Garrafas 275 ml", bottleYield(finalLiters, 0.275))}
        ${reportTile("Garrafas 500 ml", bottleYield(finalLiters, 0.5))}
      </div>
      ${mixedBottlingPlan(finalLiters)}
      <div class="ingredients-card">
        <h3>Ingredientes</h3>
        ${ingredients.map((item) => `
          <div class="ingredient-row">
            <span>${escapeHTML(item.name)}</span>
            <strong>${escapeHTML(item.amount)}</strong>
          </div>
        `).join("")}
        <p class="meta">${escapeHTML(profile.note)}</p>
      </div>
      ${recipeShareCard(shareText)}
    `;
    result.querySelector("[data-copy-recipe]")?.addEventListener("click", (event) => copyRecipeText(event.currentTarget, shareText));
    result.querySelector("[data-save-recipe]")?.addEventListener("click", (event) => saveCalculatedRecipe(event.currentTarget, profile, alcohol, finalLiters, ingredients));
    result.querySelector("[data-production-size='275 ml']")?.addEventListener("click", () => prepareProductionFromRecipe(profile, finalLiters, ingredients, "275 ml"));
    result.querySelector("[data-production-size='500 ml']")?.addEventListener("click", () => prepareProductionFromRecipe(profile, finalLiters, ingredients, "500 ml"));
  };
  section.querySelector("#home-run-recipe-calc").addEventListener("click", run);
  productInput.addEventListener("change", () => {
    if (productInput.value === "maca-canela") alcoholInput.value = "0,6";
    run();
  });
  alcoholInput.addEventListener("input", run);
  section.querySelector("#home-open-recipes").addEventListener("click", () => {
    moreScreen = "recipes";
    setScreen("more");
  });
  section.querySelector("#home-open-costs").addEventListener("click", () => {
    moreScreen = "costs";
    setScreen("more");
  });
  section.querySelector("#home-open-full-calc").addEventListener("click", () => {
    moreScreen = "calculator";
    setScreen("more");
  });
  run();
  return section;
}

function renderHomeQuickStockEntry() {
  const presets = quickStockPresets().slice(0, 6);
  const section = element("section", "section quick-stock-card home-stock-starter", `
    <div class="starter-heading">
      <div>
        <p class="eyebrow">Chegou entrega?</p>
        <h2>Receber material rápido</h2>
        <p class="meta">Toque no item que chegou. A app registra a entrada e atualiza o estoque online.</p>
      </div>
      <span class="badge warn">Maria</span>
    </div>
    <div class="quick-stock-grid compact">
      ${presets.map((preset, index) => `
        <div class="quick-stock-item" data-home-stock-preset="${index}">
          <span>${escapeHTML(preset.label)}</span>
          <div class="quick-stock-entry-line">
            <input type="text" inputmode="decimal" autocomplete="off" value="" placeholder="${escapeHTML(preset.example)}" aria-label="Quantidade para ${escapeHTML(preset.label)}">
            <small>${escapeHTML(preset.unit)}</small>
          </div>
          <button class="button secondary" type="button">Receber</button>
        </div>
      `).join("")}
    </div>
    <button class="button secondary readiness-mini-button" type="button" id="home-open-stock">Abrir estoque completo</button>
  `);
  section.querySelectorAll("[data-home-stock-preset] button").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-home-stock-preset]");
      const preset = presets[Number(card.dataset.homeStockPreset)];
      registerQuickStockEntry(preset, card.querySelector("input")?.value);
    });
  });
  section.querySelector("#home-open-stock").addEventListener("click", () => setScreen("stock"));
  return section;
}

function renderTeamOverview() {
  const people = ["Michele", "Maria", "Bia"];
  const section = element("section", "section", `
    <h2>Equipe LIMONE</h2>
    <div class="team-grid">
      ${people.map((person) => teamCardHTML(person)).join("")}
    </div>
    <div class="quick-actions team-actions">
      <button class="button secondary" type="button" data-more-target="tasks">Ver tarefas</button>
      <button class="button secondary" type="button" data-more-target="messages">Ver mensagens</button>
      <button class="button secondary" type="button" data-more-target="access">Ver acessos</button>
    </div>
  `);
  section.querySelectorAll("[data-more-target]").forEach((button) => {
    button.addEventListener("click", () => {
      moreScreen = button.dataset.moreTarget;
      setScreen("more");
    });
  });
  return section;
}

function teamCardHTML(person) {
  const openTasks = state.tasks.filter((task) => !task.done && isAssignedTo(task.owner, person)).length;
  const unreadMessages = state.messages.filter((message) => isAssignedTo(message.to, person)).length;
  const latestAccess = latestAccessFor(person);
  const current = session?.user === person ? `<span class="badge">Agora</span>` : "";
  return `
    <article class="team-card">
      <div class="card-header">
        <div>
          <p class="card-title">${escapeHTML(person)}</p>
          <p class="meta">Último acesso: ${escapeHTML(latestAccess || "sem registro")}</p>
        </div>
        ${current}
      </div>
      <div class="team-metrics">
        <span><strong>${openTasks}</strong> tarefas abertas</span>
        <span><strong>${unreadMessages}</strong> mensagens</span>
      </div>
    </article>
  `;
}

function latestAccessFor(person) {
  return state.audit
    .slice()
    .reverse()
    .find((entry) => entry.action === "Entrada no sistema" && entry.user === person)?.date || "";
}

function isAssignedTo(value, person) {
  const text = normalizeStockName(value || "");
  const target = normalizeStockName(person);
  const mariaOrBia = ["Maria", "Bia"].includes(person) && text.includes("maria e bia");
  return text.includes(target) || text.includes("todos") || mariaOrBia;
}

function renderHomeSearch() {
  const section = element("section", "section home-search", `
    <h2>Buscar no sistema</h2>
    <div class="search-box">
      <label for="home-search-input">Pesquisar</label>
      <input id="home-search-input" type="search" autocomplete="off" placeholder="Cliente, fornecedor, lote, produto, tarefa..." value="${escapeHTML(homeSearchQuery)}">
    </div>
    <div class="search-results"></div>
  `);
  const input = section.querySelector("#home-search-input");
  const results = section.querySelector(".search-results");
  const update = () => {
    homeSearchQuery = input.value;
    renderSearchResults(results, homeSearchQuery);
  };
  input.addEventListener("input", update);
  update();
  return section;
}

function renderSearchResults(container, query) {
  const cleanQuery = String(query || "").trim();
  container.innerHTML = "";
  if (cleanQuery.length < 2) {
    container.append(searchHint("Digite pelo menos 2 letras para procurar em todo o sistema."));
    return;
  }
  const normalizedQuery = normalizeStockName(cleanQuery);
  const results = collectSearchEntries()
    .filter((entry) => entry.searchText.includes(normalizedQuery))
    .slice(0, 12);
  if (!results.length) {
    container.append(searchHint("Nenhum resultado encontrado."));
    return;
  }
  results.forEach((result) => {
    const button = element("button", "search-result", `
      <span>
        <strong>${escapeHTML(result.title)}</strong>
        <small>${escapeHTML(result.detail)}</small>
        <small>${escapeHTML(result.meta)}</small>
      </span>
      <em>${escapeHTML(result.badge)}</em>
    `);
    button.type = "button";
    button.addEventListener("click", () => {
      if (result.more) setMoreScreen(result.more);
      else setScreen(result.screen);
    });
    container.append(button);
  });
}

function searchHint(text) {
  return element("div", "search-hint", escapeHTML(text));
}

function collectSearchEntries() {
  const entries = [];
  const add = (screen, more, badge, title, detail = "", meta = "", extra = "") => {
    const searchText = normalizeStockName([title, detail, meta, extra, badge].join(" "));
    entries.push({ screen, more, badge, title, detail, meta, searchText });
  };

  state.production.forEach((item) => add("production", "", "Produção", item.batch, item.product, `${item.bottles} garrafas - ${item.date}`, item.responsible));
  state.purchases.forEach((item) => add("purchases", "", "Compra", item.item, item.supplier, `${item.quantity} ${item.unit} - ${formatBRL(item.total)}`, item.date));
  state.stock.forEach((item) => add("stock", "", "Estoque", item.item, `${item.quantity} ${item.unit}`, `Mínimo ${item.minimum} ${item.unit}`));
  state.sales.forEach((item) => add("sales", "", "Venda", item.customer, item.product, `${item.quantity} un - ${formatBRL(Number(item.quantity || 0) * Number(item.price || 0))}`, item.date));
  state.expenses.forEach((item) => add("more", "finance", "Despesa", item.description, item.category, formatBRL(item.amount), `${item.paymentStatus || ""} ${item.notes || ""}`));
  state.products.forEach((item) => add("more", "products", "Produto", item.name, `${item.category} - ${item.size}`, formatBRL(item.price), item.notes));
  state.customers.forEach((item) => add("more", "customers", "Cliente", item.name, item.company || item.group, `${item.phone || ""} ${item.city || ""}`, item.notes));
  state.suppliers.forEach((item) => add("more", "suppliers", "Fornecedor", item.name, item.type, `${item.phone || ""} ${item.address || ""}`, item.notes));
  state.stockMovements.forEach((item) => add("more", "movements", "Movimento", item.item, `${item.type} - ${item.quantity} ${item.unit}`, item.source || item.date, item.notes));
  state.documents.forEach((item) => add("more", "documents", "Documento", item.title, item.category, item.status, `${item.location || ""} ${item.notes || ""}`));
  state.recipes.forEach((item) => add("more", "recipes", "Receita", item.name, item.product, `${item.bottles275} x 275 ml / ${item.bottles500} x 500 ml`, item.notes));
  state.messages.forEach((item) => add("more", "messages", "Mensagem", item.title, `Para ${item.to}`, item.date, item.text));
  state.contacts.forEach((item) => add("more", "contacts", "Contato", item.name, item.type, item.phone || "", item.notes));
  state.tasks.forEach((item) => add("more", "tasks", "Tarefa", item.title, item.owner, `${item.due} ${item.done ? "Concluída" : "Aberta"}`));
  return entries;
}

function dashboardValue(key, fallback) {
  if (!state.dashboard) state.dashboard = structuredClone(initialData.dashboard);
  const value = state.dashboard[key];
  return value === "" || value === null || value === undefined ? fallback : Number(value);
}

function renderDashboardEditor(calculated) {
  if (!state.dashboard) state.dashboard = structuredClone(initialData.dashboard);
  const automaticActive = DASHBOARD_KEYS.every((key) => !state.dashboard[key]);
  const automaticText = `Automático ativo: ${calculated.calculatedBottles} garrafas, ${calculated.calculatedSales} vendas, ${formatBRL(calculated.calculatedRevenue)} e ${calculated.calculatedLowStock} alertas.`;
  const section = element("form", "form-card", `
    <h2>Editar início</h2>
    <p class="status-note ${automaticActive ? "ok" : ""}" id="dashboard-mode">
      ${automaticActive ? automaticText : "Manual ativo: estes números foram escritos à mão."}
    </p>
    <div class="form-grid">
      <div class="field">
        <label for="dashboard-bottles">Garrafas produzidas</label>
        <input id="dashboard-bottles" inputmode="numeric" type="text" value="${escapeHTML(state.dashboard.bottles)}" placeholder="${calculated.calculatedBottles}">
      </div>
      <div class="field">
        <label for="dashboard-sales">Vendas registradas</label>
        <input id="dashboard-sales" inputmode="numeric" type="text" value="${escapeHTML(state.dashboard.sales)}" placeholder="${calculated.calculatedSales}">
      </div>
      <div class="field">
        <label for="dashboard-revenue">Receita</label>
        <input id="dashboard-revenue" inputmode="decimal" type="text" value="${escapeHTML(state.dashboard.revenue)}" placeholder="${calculated.calculatedRevenue}">
      </div>
      <div class="field">
        <label for="dashboard-stock-alerts">Alertas de estoque</label>
        <input id="dashboard-stock-alerts" inputmode="numeric" type="text" value="${escapeHTML(state.dashboard.stockAlerts)}" placeholder="${calculated.calculatedLowStock}">
      </div>
    </div>
    <div class="actions">
      <button class="button" type="submit" id="save-dashboard">Salvar início</button>
      <button class="button secondary" type="button" id="reset-dashboard">Usar automático</button>
    </div>
    <p class="meta">Para usar os cálculos dos registros, toque em “Usar automático”.</p>
  `);
  section.addEventListener("submit", (event) => {
    event.preventDefault();
    state.dashboard = {
      bottles: section.querySelector("#dashboard-bottles").value,
      sales: section.querySelector("#dashboard-sales").value,
      revenue: section.querySelector("#dashboard-revenue").value,
      stockAlerts: section.querySelector("#dashboard-stock-alerts").value
    };
    saveState();
    render();
  });
  section.querySelector("#reset-dashboard").addEventListener("click", () => {
    DASHBOARD_KEYS.forEach((key) => {
      section.querySelector(`#dashboard-${key === "stockAlerts" ? "stock-alerts" : key}`).value = "";
    });
    state.dashboard = { bottles: "", sales: "", revenue: "", stockAlerts: "" };
    section.querySelector("#dashboard-mode").textContent = automaticText;
    section.querySelector("#dashboard-mode").classList.add("ok");
    saveState();
    render();
  });
  return section;
}

function renderProduction() {
  const draft = productionDraft || {};
  productionDraft = null;
  return screenWithListAndForm({
    listTitle: "Últimas produções",
    collection: "production",
    emptyText: "Nenhuma produção cadastrada.",
    itemRenderer: (item) => card(item.batch, `${finishedProductName(item.product, item.size)} - ${item.bottles} garrafas`, item.date, item.responsible),
    formTitle: "Nova produção",
    fields: [
      field("batch", "Número do lote", draft.batch || nextBatch()),
      field("date", "Data", draft.date || today(), "date"),
      field("product", "Produto", draft.product || "Limoncello", "select", false, false, "", "", ["Limoncello", "Arancello", "Creme Irlandesa", "Maçã com Canela"]),
      field("size", "Tamanho da garrafa", draft.size || "275 ml", "select", false, false, "", "", ["275 ml", "500 ml"]),
      field("bottles", "Quantidade de garrafas", draft.bottles || "", "number", true, false, "Digite aqui. Ex.: 24", "Toque no campo branco e escreva quantas garrafas foram produzidas."),
      field("responsible", "Responsável", draft.responsible || "Maria"),
      field("notes", "Observações", draft.notes || "", "textarea", true, true)
    ]
  });
}

function renderPurchases() {
  return screenWithListAndForm({
    listTitle: "Compras recentes",
    collection: "purchases",
    emptyText: "Nenhuma compra cadastrada.",
    itemRenderer: (item) => {
      const fullTotal = Number(item.total || 0) + Number(item.transportCost || 0);
      const paid = Number(item.paidAmount || 0);
      const open = Math.max(0, fullTotal - paid);
      return card(item.item, `${item.quantity} ${item.unit} - ${formatBRL(fullTotal)}`, `${item.date} - pago ${formatBRL(paid)} / aberto ${formatBRL(open)}`, item.supplier);
    },
    formTitle: "Nova compra",
    fields: [
      field("date", "Data", today(), "date"),
      field("supplier", "Fornecedor", ""),
      field("item", "Item", ""),
      field("quantity", "Quantidade", "", "number"),
      field("unit", "Unidade", "un"),
      field("total", "Valor total", "", "number"),
      field("costCategory", "Categoria de custo", "Insumos"),
      field("transportCost", "Frete / transporte R$", "0", "number"),
      field("paidAmount", "Valor pago fornecedor R$", "0", "number"),
      field("paymentStatus", "Pagamento fornecedor", "Pendente")
    ]
  });
}

function renderStock() {
  const fragment = document.createDocumentFragment();
  fragment.append(renderFinishedStockOverview());
  fragment.append(renderStockOverview());
  fragment.append(renderQuickStockEntry());
  fragment.append(screenWithListAndForm({
    listTitle: "Itens em estoque",
    collection: "stock",
    emptyText: "Nenhum item no estoque.",
    itemRenderer: (item) => {
      const low = Number(item.quantity) <= Number(item.minimum);
      return card(item.item, `${item.quantity} ${item.unit} disponíveis`, `Mínimo: ${item.minimum} ${item.unit}`, low ? "Comprar" : "OK", low ? "danger" : "");
    },
    formTitle: "Atualizar item",
    fields: [
      field("item", "Item", ""),
      field("quantity", "Quantidade atual", "", "number"),
      field("minimum", "Estoque mínimo", "", "number"),
      field("unit", "Unidade", "un")
    ]
  }));
  return fragment;
}

function renderFinishedStockOverview() {
  const finishedItems = calculateFinishedStockItems();
  const totalReady = finishedItems.reduce((total, item) => total + item.quantity, 0);
  const section = element("section", "section finished-stock-card", `
    <div class="starter-heading">
      <div>
        <p class="eyebrow">Produtos prontos</p>
        <h2>Garrafas já envasadas</h2>
        <p class="meta">Aqui Maria vê rapidamente o que já está pronto para vender ou entregar.</p>
      </div>
      <span class="badge ${totalReady ? "" : "warn"}">${roundStock(totalReady)} un</span>
    </div>
    <div class="finished-stock-grid">
      ${finishedItems.map((item) => `
        <article class="finished-stock-item ${item.quantity <= 0 ? "is-empty" : ""}">
          <span>${escapeHTML(item.name)}</span>
          <strong>${escapeHTML(String(roundStock(item.quantity)))} un</strong>
          <small>${item.source === "stock" ? "Estoque atual" : "Calculado por produção - vendas"}</small>
        </article>
      `).join("")}
    </div>
  `);
  return section;
}

function calculateFinishedStockItems() {
  const names = finishedProductNames();
  return names.map((name) => {
    const stockItem = findStockItem(state.stock, name, "un");
    if (stockItem) {
      return { name, quantity: roundStock(Number(stockItem.quantity || 0)), source: "stock" };
    }
    return { name, quantity: roundStock(calculatedFinishedQuantity(name)), source: "calculated" };
  });
}

function finishedProductNames() {
  const names = new Set([
    "Limoncello 275 ml",
    "Limoncello 500 ml",
    "Arancello 275 ml",
    "Arancello 500 ml",
    "Creme Irlandesa 275 ml",
    "Creme Irlandesa 500 ml"
  ]);
  [...state.products, ...state.production, ...state.sales, ...state.stock].forEach((item) => {
    const name = finishedProductNameFromRecord(item);
    if (name) names.add(name);
  });
  return [...names].sort((a, b) => a.localeCompare(b, "pt-BR"));
}

function finishedProductNameFromRecord(item) {
  const recordName = item?.name || item?.product || item?.item || "";
  const text = String(recordName).trim();
  if (!isFinishedProductName(text)) return "";
  return finishedProductName(text, item?.size || "");
}

function isFinishedProductName(name) {
  const normalized = normalizeStockName(name);
  return /(275|500)\s*ml/i.test(String(name || ""))
    && (normalized.includes("limoncello") || normalized.includes("arancello") || normalized.includes("creme irlandesa") || normalized.includes("maca com canela"));
}

function calculatedFinishedQuantity(name) {
  const normalizedName = normalizeStockName(name);
  const produced = state.production
    .filter((item) => normalizeStockName(finishedProductName(item.product, item.size)) === normalizedName)
    .reduce((total, item) => total + Number(item.bottles || 0), 0);
  const sold = state.sales
    .filter((item) => normalizeStockName(finishedProductName(item.product, "")) === normalizedName)
    .reduce((total, item) => total + Number(item.quantity || 0), 0);
  return Math.max(0, produced - sold);
}

function renderStockOverview() {
  const stockItems = [...state.stock]
    .filter((item) => Number(item.quantity || 0) !== 0 || Number(item.minimum || 0) !== 0)
    .sort((a, b) => String(a.item || "").localeCompare(String(b.item || ""), "pt-BR"));
  const totalItems = stockItems.length;
  const lowItems = stockItems.filter((item) => Number(item.quantity || 0) <= Number(item.minimum || 0)).length;
  const section = element("section", "section stock-overview-card", `
    <div class="starter-heading">
      <div>
        <p class="eyebrow">Estoque atual</p>
        <h2>O que tem no estoque</h2>
        <p class="meta">Aqui aparecem as quantidades que estão registradas agora no sistema online.</p>
      </div>
      <span class="badge ${lowItems ? "warn" : ""}">${totalItems} itens</span>
    </div>
    ${stockItems.length ? `
      <div class="stock-overview-grid">
        ${stockItems.map((item) => {
          const low = Number(item.quantity || 0) <= Number(item.minimum || 0);
          return `
            <article class="stock-overview-item ${low ? "is-low" : ""}">
              <span>${escapeHTML(item.item)}</span>
              <strong>${escapeHTML(String(roundStock(Number(item.quantity || 0))))} ${escapeHTML(item.unit || "un")}</strong>
              <small>${low ? "Comprar / conferir" : `Mínimo ${escapeHTML(String(item.minimum || 0))} ${escapeHTML(item.unit || "un")}`}</small>
              <div class="stock-correction-line" data-stock-id="${escapeHTML(item.id)}">
                <label>Corrigir</label>
                <input type="text" inputmode="decimal" value="${escapeHTML(String(roundStock(Number(item.quantity || 0))))}" aria-label="Corrigir quantidade de ${escapeHTML(item.item)}">
                <small>${escapeHTML(item.unit || "un")}</small>
                <button class="button secondary" type="button">Salvar</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    ` : `
      <div class="empty-state">
        <strong>Nenhum estoque registrado ainda.</strong>
        <span>Use “Entrada rápida” ou “Atualizar item” para cadastrar as primeiras quantidades.</span>
      </div>
    `}
  `);
  section.querySelectorAll("[data-stock-id] button").forEach((button) => {
    button.addEventListener("click", () => {
      const line = button.closest("[data-stock-id]");
      saveStockCorrection(line?.dataset.stockId, line?.querySelector("input")?.value);
    });
  });
  return section;
}

function saveStockCorrection(id, quantityValue) {
  const item = state.stock.find((entry) => entry.id === id);
  if (!item) return;
  const quantity = parseOptionalNumberInput(quantityValue);
  if (quantity === null) {
    showValidationError("Digite a quantidade atual do estoque antes de salvar.");
    return;
  }
  if (quantity < 0) {
    showValidationError("A quantidade do estoque não pode ser negativa.");
    return;
  }
  updateItem("stock", id, { ...item, quantity: roundStock(quantity) });
}

function renderQuickStockEntry() {
  const presets = quickStockPresets();
  const section = element("section", "section quick-stock-card", `
    <div class="starter-heading">
      <div>
        <p class="eyebrow">Entrada rápida</p>
        <h2>Receber material</h2>
        <p class="meta">Use quando chegar uma caixa de garrafas, rótulos, tampas ou frutas.</p>
      </div>
      <span class="badge">Estoque</span>
    </div>
    <div class="quick-stock-grid">
      ${presets.map((preset, index) => `
        <div class="quick-stock-item" data-stock-preset="${index}">
          <span>${escapeHTML(preset.label)}</span>
          <div class="quick-stock-entry-line">
            <input type="text" inputmode="decimal" value="" placeholder="${escapeHTML(preset.example)}" aria-label="Quantidade para ${escapeHTML(preset.label)}">
            <small>${escapeHTML(preset.unit)}</small>
          </div>
          <button class="button secondary" type="button">Receber</button>
        </div>
      `).join("")}
    </div>
  `);
  section.querySelectorAll("[data-stock-preset] button").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-stock-preset]");
      const preset = presets[Number(card.dataset.stockPreset)];
      registerQuickStockEntry(preset, card.querySelector("input")?.value);
    });
  });
  return section;
}

function quickStockPresets() {
  return [
    { label: "Garrafas 275 ml", item: "Garrafas 275 ml", unit: "un", example: "Ex.: 83, 100 ou 500" },
    { label: "Garrafas 500 ml", item: "Garrafas 500 ml", unit: "un", example: "Ex.: 12, 100 ou 500" },
    { label: "Rótulos 275 ml", item: "Rotulo ades metalizado 66x112mm 275ml", unit: "un", example: "Ex.: 500" },
    { label: "Rótulos 500 ml", item: "Rotulo ades metalizado 86x148mm 500ml", unit: "un", example: "Ex.: 500" },
    { label: "Tampas", item: "Tampa para garrafa", unit: "un", example: "Ex.: 100 ou 500" },
    { label: "Limão siciliano", item: "Limao siciliano", unit: "kg", example: "Ex.: 10" },
    { label: "Laranja", item: "Laranja para arancello", unit: "kg", example: "Ex.: 10" }
  ];
}

function registerQuickStockEntry(preset, quantityValue = "") {
  if (!preset) return;
  const quantity = parseNumberInput(quantityValue);
  if (quantity <= 0) {
    showValidationError("Digite uma quantidade maior que zero para receber no estoque.");
    return;
  }
  if (!confirm(`Registrar entrada de ${quantity} ${preset.unit} em ${preset.label}?`)) return;
  addItem("stockMovements", {
    id: crypto.randomUUID(),
    date: today(),
    type: "Entrada",
    item: preset.item,
    quantity,
    unit: preset.unit,
    source: "Entrada rápida",
    notes: "Registrado pela entrada rápida do estoque."
  });
}

function renderSales() {
  const section = screenWithListAndForm({
    listTitle: "Vendas",
    collection: "sales",
    emptyText: "Nenhuma venda cadastrada.",
    itemRenderer: (item) => card(item.customer, `${item.quantity} x ${item.product}`, `${item.date} - ${item.paymentStatus || "Pendente"}`, formatBRL(Number(item.quantity) * Number(item.price))),
    formTitle: "Nova venda",
    fields: [
      field("date", "Data", today(), "date"),
      field("customer", "Cliente", ""),
      field("product", "Produto", "Limoncello 275 ml", "select", false, false, "", "", salesProductOptions()),
      field("quantity", "Quantidade", "", "number"),
      field("price", "Preço por unidade", "", "number", false, false, "Preço sugerido aparece aqui"),
      field("channel", "Canal de venda", "Venda direta", "select", false, false, "", "", ["Venda direta", "Revenda", "Restaurante", "Hotel", "Evento", "Mercado Livre", "Degustação", "Outro"]),
      field("paymentStatus", "Pagamento", "Pendente", "select", false, false, "", "", ["Pendente", "Pago", "Parcial", "Cancelado"])
    ]
  });
  setupSalesPriceSuggestion(section);
  return section;
}

function salesProductOptions() {
  const baseOptions = [
    "Limoncello 275 ml",
    "Limoncello 500 ml",
    "Limoncello 5000 ml",
    "Arancello 275 ml",
    "Arancello 500 ml",
    "Arancello 5000 ml",
    "Creme Irlandesa 275 ml",
    "Creme Irlandesa 500 ml",
    "Creme Irlandesa 5000 ml"
  ];
  const productOptions = state.products.map((product) => product.name).filter(Boolean);
  return [...new Set([...baseOptions, ...productOptions])];
}

function setupSalesPriceSuggestion(section) {
  const productInput = section.querySelector("select[name='product']");
  const priceInput = section.querySelector("input[name='price']");
  if (!productInput || !priceInput) return;
  let settingSuggestedPrice = false;
  priceInput.addEventListener("input", () => {
    if (!settingSuggestedPrice) priceInput.dataset.manualPrice = "true";
  });
  const updateSuggestion = () => {
    const price = suggestedSalesPrice(productInput.value);
    priceInput.placeholder = price ? `Sugestão: ${formatBRL(price)}` : "Preço ainda não definido — informar";
    if (!price) {
      priceInput.value = "";
      delete priceInput.dataset.manualPrice;
      delete priceInput.dataset.suggestedPrice;
    }
    if (price && (!priceInput.value || priceInput.dataset.manualPrice !== "true")) {
      settingSuggestedPrice = true;
      priceInput.value = String(price).replace(".", ",");
      priceInput.dataset.suggestedPrice = String(price);
      settingSuggestedPrice = false;
    }
  };
  productInput.addEventListener("change", updateSuggestion);
  updateSuggestion();
}

function suggestedSalesPrice(productName) {
  const product = state.products.find((item) => normalizeStockName(item.name) === normalizeStockName(productName));
  if (product && Number(product.price || 0) > 0) return Number(product.price || 0);
  const text = normalizeStockName(productName);
  if (text.includes("maca com canela")) return 0;
  if (text.includes("5000")) return 890;
  if (text.includes("500")) return text.includes("creme") ? 98 : 89.5;
  if (text.includes("creme")) return 78;
  return 68;
}

function renderMore() {
  const fragment = document.createDocumentFragment();
  const sections = [
    ["reports", "Relatórios"],
    ["ready", "Produção pronta?"],
    ["finance", "Financeiro"],
    ["products", "Produtos"],
    ["customers", "Clientes"],
    ["recipes", "Receitas"],
    ["suppliers", "Fornecedores"],
    ["movements", "Movimentos"],
    ["documents", "Documentos"],
    ["calculator", "Calculadora"],
    ["costs", "Custos"],
    ["messages", "Mensagens"],
    ["contacts", "Contatos"],
    ["tasks", "Tarefas"],
    ["access", "Acessos"],
    ["rights", "Direitos"],
    ["backup", "Cópia"],
    ["audit", "Histórico"],
    ["account", "Conta"],
    ["data", "Dados"]
  ];
  const menu = element("section", "section", `
    <h2>Mais ferramentas</h2>
    <div class="quick-actions more-actions">
      ${sections.map(([key, label]) => `<button class="button ${moreScreen === key ? "" : "secondary"}" type="button" data-more="${key}">${label}</button>`).join("")}
    </div>
  `);
  menu.querySelectorAll("[data-more]").forEach((button) => {
    button.addEventListener("click", () => {
      setMoreScreen(button.dataset.more);
    });
  });
  fragment.append(menu);
  const renderers = {
    reports: renderReports,
    ready: renderProductionReadiness,
    finance: renderFinance,
    products: renderProducts,
    customers: renderCustomers,
    recipes: renderRecipes,
    suppliers: renderSuppliers,
    movements: renderStockMovements,
    documents: renderDocuments,
    calculator: renderCalculators,
    costs: renderCostCalculator,
    messages: renderMessages,
    contacts: renderContacts,
    tasks: renderTasks,
    access: renderAccess,
    rights: renderRights,
    backup: renderBackup,
    audit: renderAudit,
    account: renderAccount,
    data: renderDataTools
  };
  fragment.append(renderers[moreScreen]());
  return fragment;
}

function renderReports() {
  const monthKey = today().slice(0, 7);
  const finance = calculateFinance();
  const salesThisMonth = state.sales.filter((sale) => String(sale.date || "").slice(0, 7) === monthKey);
  const revenueThisMonth = salesThisMonth.reduce((total, sale) => total + Number(sale.quantity || 0) * Number(sale.price || 0), 0);
  const paidThisMonth = salesThisMonth
    .filter((sale) => normalizeStockName(sale.paymentStatus || "") === "pago")
    .reduce((total, sale) => total + Number(sale.quantity || 0) * Number(sale.price || 0), 0);
  const openReceivables = state.sales
    .filter((sale) => normalizeStockName(sale.paymentStatus || "Pendente") !== "pago")
    .reduce((total, sale) => total + Number(sale.quantity || 0) * Number(sale.price || 0), 0);
  const bottlesThisMonth = state.production
    .filter((entry) => String(entry.date || "").slice(0, 7) === monthKey)
    .reduce((total, entry) => total + Number(entry.bottles || 0), 0);
  const lowStock = state.stock.filter((item) => Number(item.quantity || 0) <= Number(item.minimum || 0));
  const openTasks = state.tasks.filter((task) => !task.done);
  const stockUnits = state.stock.reduce((total, item) => total + Number(item.quantity || 0), 0);
  const bestProduct = bestSellingProduct();

  const section = element("section", "section", `
    <h2>Relatórios</h2>
    <div class="report-grid">
      ${reportTile("Receita do mês", formatBRL(revenueThisMonth))}
      ${reportTile("Recebido no mês", formatBRL(paidThisMonth))}
      ${reportTile("A receber", formatBRL(openReceivables))}
      ${reportTile("Lucro estimado", formatBRL(finance.profit))}
      ${reportTile("Vendas do mês", sum(salesThisMonth, "quantity"))}
      ${reportTile("Produção do mês", bottlesThisMonth)}
      ${reportTile("Alertas de estoque", lowStock.length)}
      ${reportTile("Tarefas abertas", openTasks.length)}
      ${reportTile("Unidades em estoque", roundStock(stockUnits))}
      ${reportTile("Produtos", state.products.length)}
      ${reportTile("Clientes", state.customers.length)}
      ${reportTile("Fornecedores", state.suppliers.length)}
      ${reportTile("Movimentos", state.stockMovements.length)}
      ${reportTile("Documentos", state.documents.length)}
      ${reportTile("Receitas", state.recipes.length)}
    </div>
  `);

  const insights = element("div", "card report-card", `
    <h3>Resumo automático</h3>
    <p class="meta"><strong>Produto mais vendido:</strong> ${escapeHTML(bestProduct || "Sem vendas ainda")}</p>
    <p class="meta"><strong>Estoque baixo:</strong> ${escapeHTML(lowStock.map((item) => item.item).join(", ") || "Nenhum alerta")}</p>
    <p class="meta"><strong>Próxima ação:</strong> ${escapeHTML(openTasks[0]?.title || "Nenhuma tarefa aberta")}</p>
  `);
  section.append(insights);
  return section;
}

function renderProductionReadiness() {
  const plans = productionReadinessPlans();
  const section = element("section", "section", `
    <h2>Produção pronta?</h2>
    <p class="status-note">Cálculo automático pelo estoque atual. Mostra o gargalo antes de iniciar uma produção.</p>
  `);
  const grid = element("div", "readiness-grid", "");
  plans.forEach((plan) => {
    grid.append(element("article", `card readiness-card ${plan.possible > 0 ? "is-ready" : "is-blocked"}`, `
      <div class="card-header">
        <div>
          <p class="card-title">${escapeHTML(plan.product)} ${escapeHTML(plan.size)}</p>
          <p class="meta">Possível agora</p>
        </div>
        <span class="badge ${plan.possible > 0 ? "" : "danger"}">${plan.possible} un</span>
      </div>
      <div class="readiness-materials">
        ${plan.materials.map((material) => `
          <div class="readiness-row ${material.missing > 0 ? "is-missing" : ""}">
            <span>${escapeHTML(material.item)}</span>
            <small>${roundStock(material.available)} / ${roundStock(material.required)} ${escapeHTML(material.unit)}</small>
            <strong>${material.missing > 0 ? `Falta ${roundStock(material.missing)}` : "OK"}</strong>
          </div>
        `).join("")}
      </div>
    `));
  });
  section.append(grid);
  const missing = plans
    .flatMap((plan) => plan.materials.filter((material) => material.missing > 0).map((material) => `${material.item}: falta ${roundStock(material.missing)} ${material.unit}`));
  section.append(element("div", "card report-card", `
    <h3>Resumo</h3>
    <p class="meta">${escapeHTML(missing.length ? missing.slice(0, 8).join(" | ") : "Tudo pronto para pelo menos uma produção.")}</p>
  `));
  return section;
}

function productionReadinessPlans() {
  return ["Limoncello", "Arancello", "Creme Irlandesa", "Maçã com Canela"]
    .flatMap((product) => ["275 ml", "500 ml"].map((size) => productionReadinessPlan(product, size)));
}

function productionReadinessPlan(product, size) {
  const recipe = recipeForProduct(product);
  const bottlesPerRecipe = size === "500 ml" ? Number(recipe.bottles500 || 0) : Number(recipe.bottles275 || 0);
  const recipeFactor = bottlesPerRecipe > 0 ? 1 / bottlesPerRecipe : 0;
  const materials = readinessMaterials(product, size, recipe, recipeFactor);
  const possible = materials.reduce((lowest, material) => {
    if (material.perBottle <= 0) return lowest;
    return Math.min(lowest, Math.floor(Number(material.available || 0) / material.perBottle));
  }, 999999);
  return {
    product,
    size,
    possible: Number.isFinite(possible) && possible !== 999999 ? Math.max(0, possible) : 0,
    materials: materials.map((material) => ({
      ...material,
      required: material.perBottle,
      missing: Math.max(0, material.perBottle - Number(material.available || 0))
    }))
  };
}

function recipeForProduct(product) {
  const normalized = normalizeStockName(product);
  return state.recipes.find((recipe) => normalizeStockName(recipe.product) === normalized) || {};
}

function readinessMaterials(product, size, recipe, recipeFactor) {
  const base = [
    readinessMaterial(`Garrafas ${size}`, "un", 1),
    readinessMaterial(`Rótulos ${size}`, "un", 1),
    readinessMaterial("Tampas", "un", 1)
  ];
  if (product === "Maçã com Canela") {
    const factor = (size === "500 ml" ? 0.5 : 0.275) / 2.3;
    return [
      ...base,
      readinessMaterial("Álcool de cereais", "L", 0.6 * factor),
      readinessMaterial("Suco de maçã", "L", 1.5 * factor),
      readinessMaterial("Açúcar", "kg", 0.3 * factor),
      readinessMaterial("Canela em pau", "un", 3 * factor),
      readinessMaterial("Baunilha em fava", "un", 2 * factor),
      readinessMaterial("Cravo-da-índia", "un", 3 * factor)
    ];
  }
  if (product === "Creme Irlandesa") {
    return [
      ...base,
      readinessMaterial("Álcool de cereais", "L", Number(recipe.alcohol || 0) * recipeFactor),
      readinessMaterial("Leite condensado", "kg", 0.14),
      readinessMaterial("Creme de leite", "L", 0.11)
    ];
  }
  return [
    ...base,
    readinessMaterial("Álcool de cereais", "L", Number(recipe.alcohol || 0) * recipeFactor),
    readinessMaterial(product === "Arancello" ? "Laranjas" : "Limões sicilianos", "kg", Number(recipe.peel || 0) * recipeFactor / 1000),
    readinessMaterial("Açúcar", "kg", Number(recipe.sugar || 0) * recipeFactor)
  ];
}

function readinessMaterial(item, unit, perBottle) {
  return {
    item,
    unit,
    perBottle,
    available: stockQuantity(item, unit)
  };
}

function stockQuantity(itemName, unit) {
  const direct = findStockItem(state.stock, itemName, unit);
  if (direct) return Number(direct.quantity || 0);
  const normalized = normalizeStockName(itemName);
  const aliases = stockAliases(normalized);
  return state.stock
    .filter((item) => stockNameMatches(normalizeStockName(item.item), normalized, aliases) && String(item.unit || unit).toLowerCase() === String(unit || "un").toLowerCase())
    .reduce((total, item) => total + Number(item.quantity || 0), 0);
}

function stockAliases(normalizedName) {
  if (normalizedName.includes("tampa")) return ["tampa"];
  if (normalizedName.includes("lacre")) return ["lacre"];
  if (normalizedName.includes("rotulo") && normalizedName.includes("275")) return ["rotulo", "275"];
  if (normalizedName.includes("rotulo") && normalizedName.includes("500")) return ["rotulo", "500"];
  if (normalizedName.includes("garrafa") && normalizedName.includes("275")) return ["garrafa", "275"];
  if (normalizedName.includes("garrafa") && normalizedName.includes("500")) return ["garrafa", "500"];
  if (normalizedName.includes("alcool")) return ["alcool"];
  if (normalizedName.includes("limoes")) return ["limao"];
  if (normalizedName.includes("limao")) return ["limao"];
  if (normalizedName.includes("laranjas")) return ["laranja"];
  if (normalizedName.includes("laranja")) return ["laranja"];
  if (normalizedName.includes("acucar")) return ["acucar"];
  if (normalizedName.includes("leite condensado")) return ["leite condensado"];
  if (normalizedName.includes("creme de leite")) return ["creme de leite"];
  return [normalizedName];
}

function stockNameMatches(stockName, requestedName, aliases) {
  if (stockName === requestedName) return true;
  if (!aliases.length) return false;
  return aliases.every((alias) => stockName.includes(alias));
}

function renderFinance() {
  const finance = calculateFinance();
  const section = element("section", "section", `
    <h2>Financeiro</h2>
    <p class="meta">Maçã com Canela é um teste. Enquanto o custo unitário não estiver cadastrado em Produtos, os lucros que incluam essa variedade são provisórios e não descontam esse custo.</p>
    <p class="status-note">Controle interno para decisão. Não substitui contabilidade, impostos ou conferência com o Contador no Brasil.</p>
    <div class="report-grid">
      ${reportTile("Receita", formatBRL(finance.revenue))}
      ${reportTile("Pagamentos recebidos", formatBRL(finance.received))}
      ${reportTile("Contas a receber", formatBRL(finance.openReceivables))}
      ${reportTile("Custo dos produtos vendidos", formatBRL(finance.cogs))}
      ${reportTile("Compras de insumos", formatBRL(finance.inventoryPurchases))}
      ${reportTile("Custos de embalagem", formatBRL(finance.packaging))}
      ${reportTile("Custos de transporte", formatBRL(finance.transport))}
      ${reportTile("Custos de marketing", formatBRL(finance.marketing))}
      ${reportTile("Outros custos operacionais", formatBRL(finance.other))}
      ${reportTile("Contas a pagar fornecedores", formatBRL(finance.openSupplierInvoices))}
      ${reportTile("Lucro estimado", formatBRL(finance.profit))}
    </div>
  `);
  section.append(financeTable("Lucro por produto", finance.byProduct));
  section.append(financeTable("Lucro por cliente", finance.byCustomer));
  section.append(financeTable("Lucro por canal de venda", finance.byChannel));
  section.append(renderExpenses());
  return section;
}

function renderExpenses() {
  return screenWithListAndForm({
    listTitle: "Custos operacionais",
    collection: "expenses",
    emptyText: "Nenhuma despesa operacional cadastrada.",
    itemRenderer: (item) => card(item.description, `${item.category} - ${formatBRL(item.amount)}`, `${item.date} - ${item.paymentStatus || "Pendente"}`, item.notes),
    formTitle: "Nova despesa",
    fields: [
      field("date", "Data", today(), "date"),
      field("category", "Categoria", "Marketing"),
      field("description", "Descrição", ""),
      field("amount", "Valor R$", "", "number"),
      field("paymentStatus", "Pagamento", "Pendente"),
      field("notes", "Notas", "", "textarea", true, true)
    ],
    compact: true
  });
}

function financeTable(title, rows) {
  const table = element("div", "card finance-table", `<h3>${escapeHTML(title)}</h3>`);
  const entries = [...rows.entries()].sort((left, right) => right[1].profit - left[1].profit).slice(0, 8);
  if (!entries.length) {
    table.append(emptyState("Sem dados financeiros suficientes."));
    return table;
  }
  entries.forEach(([name, value]) => {
    table.append(element("div", "finance-row", `
      <span>${escapeHTML(name)}</span>
      <small>${escapeHTML(formatBRL(value.revenue))}</small>
      <strong>${escapeHTML(formatBRL(value.profit))}</strong>
    `));
  });
  return table;
}

function renderProducts() {
  return screenWithListAndForm({
    listTitle: "Produtos",
    collection: "products",
    emptyText: "Nenhum produto cadastrado.",
    itemRenderer: (item) => card(item.name, `${item.category} - ${item.size}`, formatBRL(Number(item.price || 0)), item.notes),
    formTitle: "Novo produto",
    fields: [
      field("name", "Produto", "Limoncello 275 ml"),
      field("category", "Categoria", "Limoncello"),
      field("size", "Tamanho", "275 ml"),
      field("price", "Preço de venda", "", "number"),
      field("unitCost", "Custo estimado por unidade", "", "number"),
      field("notes", "Notas", "", "textarea", true, true)
    ]
  });
}

function renderCustomers() {
  return screenWithListAndForm({
    listTitle: "Clientes",
    collection: "customers",
    emptyText: "Nenhum cliente cadastrado.",
    itemRenderer: (item) => card(item.name, `${item.group || "Cliente"} - ${item.status || "Novo contato"}`, item.phone || item.city || "Sem telefone", item.notes),
    actionsRenderer: (item) => {
      const phone = whatsappNumber(item.phone);
      if (!phone) return [];
      return [{
        label: "WhatsApp",
        className: "button secondary whatsapp",
        onClick: () => window.open(`https://wa.me/${phone}`, "_blank", "noopener")
      }];
    },
    formTitle: "Novo cliente",
    fields: [
      field("name", "Nome", ""),
      field("company", "Empresa", "", "text", false, true),
      field("group", "Grupo", "Interessente"),
      field("phone", "Telefone / WhatsApp", "55 ", "text", false, true),
      field("email", "E-mail", "", "email", false, true),
      field("city", "Cidade", "Gramado", "text", false, true),
      field("status", "Status do contato", "Novo contato"),
      field("notes", "Notas", "", "textarea", true, true)
    ],
    compact: true
  });
}

function renderSuppliers() {
  return screenWithListAndForm({
    listTitle: "Fornecedores",
    collection: "suppliers",
    emptyText: "Nenhum fornecedor cadastrado.",
    itemRenderer: (item) => card(item.name, item.type, item.phone || item.address, item.notes),
    actionsRenderer: (item) => {
      const phone = whatsappNumber(item.phone);
      if (!phone) return [];
      return [{
        label: "WhatsApp",
        className: "button secondary whatsapp",
        onClick: () => window.open(`https://wa.me/${phone}`, "_blank", "noopener")
      }];
    },
    formTitle: "Novo fornecedor",
    fields: [
      field("name", "Fornecedor", ""),
      field("type", "Tipo", "Fornecedor"),
      field("phone", "Telefone / WhatsApp", "55 ", "text", false, true),
      field("address", "Endereço", "", "textarea", true, true),
      field("notes", "Notas", "", "textarea", true, true)
    ],
    compact: true
  });
}

function renderStockMovements() {
  return screenWithListAndForm({
    listTitle: "Movimentos de estoque",
    collection: "stockMovements",
    emptyText: "Nenhum movimento cadastrado.",
    itemRenderer: (item) => card(item.item, `${item.type} - ${item.quantity} ${item.unit}`, item.date, item.source || item.notes),
    formTitle: "Novo movimento",
    fields: [
      field("date", "Data", today(), "date"),
      field("type", "Tipo", "Entrada"),
      field("item", "Item", ""),
      field("quantity", "Quantidade", "", "number"),
      field("unit", "Unidade", "un"),
      field("source", "Origem", "", "text", false, true),
      field("notes", "Notas", "", "textarea", true, true)
    ]
  });
}

function renderDocuments() {
  return screenWithListAndForm({
    listTitle: "Documentos e informações",
    collection: "documents",
    emptyText: "Nenhum documento cadastrado.",
    itemRenderer: (item) => card(item.title, `${item.category} - ${item.status}`, item.location, item.notes),
    formTitle: "Novo documento",
    fields: [
      field("title", "Titulo", ""),
      field("category", "Categoria", "Empresa"),
      field("responsible", "Responsável", "Michele"),
      field("status", "Status", "Ativo"),
      field("location", "Onde está / endereço / link", "", "textarea", true, true),
      field("notes", "Notas", "", "textarea", true, true)
    ],
    compact: true
  });
}

function renderRecipes() {
  return screenWithListAndForm({
    listTitle: "Receitas",
    collection: "recipes",
    emptyText: "Nenhuma receita cadastrada.",
    itemRenderer: (item) => card(item.name, `${item.alcohol} L alcool - ${item.peel} g cascas`, `${item.bottles275} x 275 ml / ${item.bottles500} x 500 ml`, item.product),
    formTitle: "Nova receita",
    fields: [
      field("name", "Nome da receita", "Limoncello clássico"),
      field("product", "Produto", "Limoncello"),
      field("alcohol", "Álcool de cereais (L)", "", "number"),
      field("peel", "Cascas (g)", "", "number"),
      field("sugar", "Açúcar (kg)", "", "number"),
      field("water", "Agua (L)", "", "number"),
      field("bottles275", "Garrafas 275 ml", "", "number"),
      field("bottles500", "Garrafas 500 ml", "", "number"),
      field("notes", "Notas", "", "textarea", true, true)
    ]
  });
}

function renderCalculators() {
  const section = element("section", "form-card", `
    <h2>Calculadora de receitas</h2>
    <p class="meta">Calcula Limoncello, Arancello, Creme Irlandesa e Maçã com Canela sem anis (teste), com estimativa de garrafas de 275 ml e 500 ml.</p>
    <div class="form-grid">
      <div class="field">
        <label for="calc-product">Produto</label>
        <select id="calc-product">
          <option value="limoncello">Limoncello</option>
          <option value="arancello">Arancello</option>
          <option value="creme-irlandesa">Creme Irlandesa tipo Baileys</option>
          <option value="maca-canela">Maçã com Canela — sem anis (teste)</option>
        </select>
      </div>
      <div class="field">
        <label for="calc-alcohol" id="calc-alcohol-label">Álcool de cereais (L)</label>
        <input id="calc-alcohol" type="text" inputmode="decimal" value="10">
      </div>
    </div>
    <div class="actions">
      <button class="button" type="button" id="run-recipe-calc">Calcular</button>
    </div>
    <div id="recipe-result" class="result-box"></div>
  `);
  const result = section.querySelector("#recipe-result");
  const productInput = section.querySelector("#calc-product");
  const alcoholLabel = section.querySelector("#calc-alcohol-label");
  const run = () => {
    const product = productInput.value;
    const profile = recipeProfile(product);
    const alcohol = parseOptionalNumberInput(section.querySelector("#calc-alcohol").value);
    alcoholLabel.textContent = profile.inputLabel;
    if (alcohol === null) {
      result.innerHTML = `<div class="soft-message">Digite a quantidade de álcool para calcular a receita.</div>`;
      return;
    }
    if (alcohol <= 0) {
      result.innerHTML = `<div class="soft-message">Use uma quantidade maior que zero para calcular.</div>`;
      return;
    }
    const finalLiters = alcohol * profile.volume;
    const ingredients = profile.ingredients(alcohol);
    const shareText = recipeShareText(profile, alcohol, finalLiters, ingredients);
    result.innerHTML = `
      <div class="report-grid">
        ${reportTile("Produto", profile.name)}
        ${reportTile("Volume final estimado", `${roundStock(finalLiters)} L`)}
        ${reportTile("Garrafas 275 ml", bottleYield(finalLiters, 0.275))}
        ${reportTile("Garrafas 500 ml", bottleYield(finalLiters, 0.5))}
      </div>
      ${mixedBottlingPlan(finalLiters)}
      <div class="ingredients-card">
        <h3>Lista de ingredientes</h3>
        ${ingredients.map((item) => `
          <div class="ingredient-row">
            <span>${escapeHTML(item.name)}</span>
            <strong>${escapeHTML(item.amount)}</strong>
          </div>
        `).join("")}
        <p class="meta">${escapeHTML(profile.note)}</p>
      </div>
      ${recipeShareCard(shareText)}
    `;
    result.querySelector("[data-copy-recipe]")?.addEventListener("click", (event) => copyRecipeText(event.currentTarget, shareText));
    result.querySelector("[data-save-recipe]")?.addEventListener("click", (event) => saveCalculatedRecipe(event.currentTarget, profile, alcohol, finalLiters, ingredients));
    result.querySelector("[data-production-size='275 ml']")?.addEventListener("click", () => prepareProductionFromRecipe(profile, finalLiters, ingredients, "275 ml"));
    result.querySelector("[data-production-size='500 ml']")?.addEventListener("click", () => prepareProductionFromRecipe(profile, finalLiters, ingredients, "500 ml"));
  };
  productInput.addEventListener("change", () => {
    if (productInput.value === "maca-canela") section.querySelector("#calc-alcohol").value = "0,6";
    run();
  });
  section.querySelector("#calc-alcohol").addEventListener("input", run);
  section.querySelector("#run-recipe-calc").addEventListener("click", run);
  run();
  return section;
}

function recipeProfile(product) {
  if (product === "maca-canela") {
    return {
      name: "Maçã com Canela — sem anis (teste)",
      product: "Maçã com Canela",
      inputLabel: "Álcool de cereais alimentício 96% vol. (L)",
      volume: 2.3 / 0.6,
      note: "LOTE DE TESTE, não validado para venda. Base: 0,6 L de álcool de cereais alimentício a 96% vol.; não usar estas quantidades com outra graduação. Sem anis-estrelado e sem água adicional. Rendimento e garrafas estimados, sujeitos à evaporação e filtração; medir o volume real antes de envasar. Cerca de 25% vol. é apenas estimativa, não medição. Validar teor alcoólico e validade antes de vender. Frações de especiarias são proporcionais; registrar os pesos usados para repetir o teste.",
      steps: [
        "Abrir as favas de baunilha e retirar as sementes.",
        "Misturar suco de maçã, açúcar, canela, cravos, sementes e favas. Ferver suavemente por 10–15 minutos. O álcool NÃO vai ao fogo.",
        "Deixar esfriar completamente até a temperatura ambiente e coar as especiarias.",
        "Só então misturar o álcool, longe de calor, faíscas e chamas. Usar exclusivamente álcool próprio para bebidas, não desnaturado.",
        "Envasar em garrafas limpas, fechar e identificar a data do teste. Guardar em local fresco e escuro e degustar após cerca de quatro semanas. Registrar o volume final real."
      ],
      source: "Adaptação sem anis: https://www.boente-shop.de/blogs/ratgeber/bratapfellikoer-selber-machen",
      ingredients: (alcohol) => {
        const factor = alcohol / 0.6;
        return [
          { name: "Álcool de cereais alimentício 96% vol.", amount: `${roundStock(alcohol)} L` },
          { name: "Suco de maçã", amount: `${roundStock(1.5 * factor)} L` },
          { name: "Açúcar", amount: `${roundStock(0.3 * factor)} kg` },
          { name: "Canela em pau", amount: `${roundStock(3 * factor)} unidades` },
          { name: "Baunilha em fava", amount: `${roundStock(2 * factor)} unidades` },
          { name: "Cravo-da-índia", amount: `${roundStock(3 * factor)} unidades` }
        ];
      }
    };
  }
  if (product === "arancello") {
    return {
      name: "Arancello",
      inputLabel: "Álcool de cereais (L)",
      volume: 3.08,
      note: "Base inicial para teste com laranja. Ajustar doçura e aroma depois do lote piloto.",
      ingredients: (alcohol) => [
        { name: "Álcool de cereais", amount: `${roundStock(alcohol)} L` },
        { name: "Cascas de laranja", amount: `${roundStock(alcohol * 90)} g` },
        { name: "Açúcar", amount: `${roundStock(alcohol * 0.72)} kg` },
        { name: "Água filtrada", amount: `${roundStock(alcohol * 1.78)} L` }
      ]
    };
  }
  if (product === "creme-irlandesa") {
    return {
      name: "Creme Irlandesa tipo Baileys",
      inputLabel: "Álcool de cereais 96% (L)",
      volume: 5.64,
      note: "Receita própria inspirada em creme irlandês. Usar somente álcool de cereais próprio para alimentos, diluir antes da mistura, fazer lote pequeno, manter refrigerado e validar textura, sabor e validade antes de vender.",
      ingredients: (alcohol) => {
        const base40 = alcohol * 2.4;
        return [
          { name: "Álcool de cereais 96%", amount: `${roundStock(alcohol)} L` },
          { name: "Água filtrada para base 40%", amount: `${roundStock(alcohol * 1.4)} L` },
          { name: "Base alcoólica pronta aprox. 40%", amount: `${roundStock(base40)} L` },
          { name: "Leite condensado", amount: `${roundStock(base40 * 0.8)} kg` },
          { name: "Creme de leite", amount: `${roundStock(base40 * 0.6)} L` },
          { name: "Café forte frio", amount: `${roundStock(base40 * 80)} ml` },
          { name: "Cacau ou chocolate em pó", amount: `${roundStock(base40 * 60)} g` },
          { name: "Baunilha", amount: `${roundStock(base40 * 15)} ml` },
          { name: "Opcional: açúcar", amount: `${roundStock(base40 * 0.1)} kg` }
        ];
      }
    };
  }
  return {
    name: "Limoncello",
    inputLabel: "Álcool de cereais (L)",
    volume: 3.2,
    note: "Base padrão para Limoncello clássico. Ajustar depois dos testes reais.",
    ingredients: (alcohol) => [
      { name: "Álcool de cereais", amount: `${roundStock(alcohol)} L` },
      { name: "Cascas de limão siciliano", amount: `${roundStock(alcohol * 80)} g` },
      { name: "Açúcar", amount: `${roundStock(alcohol * 0.9)} kg` },
      { name: "Água filtrada", amount: `${roundStock(alcohol * 1.19)} L` }
    ]
  };
}

function verifiedPurchaseUnitCost(itemText, fallback = 0) {
  const purchase = state.purchases.find((item) =>
    normalizeStockName(item.item || "").includes(normalizeStockName(itemText)) &&
    Number(item.quantity || 0) > 0 &&
    Number(item.total || 0) > 0
  );
  return purchase ? Number(purchase.total) / Number(purchase.quantity) : fallback;
}

function priceCalculatorProfile(size, product = "limoncello", channel = "turista") {
  const is500 = size === "500";
  const is275 = size === "275";
  const sizeMl = Number(size);
  const bottleFreight = verifiedPurchaseUnitCost("frete garrafaria", 80) / 105;
  const labelFreight = 107.45 / 1000;
  return {
    sizeMl,
    salePrice: window.LimonePriceCalculator.officialSalePrice(product, channel, sizeMl),
    bottle: is500 ? verifiedPurchaseUnitCost("garrafa 500ml", 5.6) : 0,
    cap: is500 || is275 ? verifiedPurchaseUnitCost("tampa 28mm", 0.8) : 0,
    seal: is500 || is275 ? verifiedPurchaseUnitCost("lacre 28/29mm", 0.24) : 0,
    frontLabel: is500 ? 1.32 : is275 ? 0.81 : 0,
    backLabel: is500 ? 1.05 : is275 ? 0.68 : 0,
    packagingFreight: (is500 ? bottleFreight : 0) + (is500 || is275 ? labelFreight : 0),
    alcoholPrice: verifiedPurchaseUnitCost("alcool extra fino", 19)
  };
}

function renderCostCalculator() {
  const initial = priceCalculatorProfile("500", "limoncello", "turista");
  const section = element("section", "form-card", `
    <h2>Calculadora de preço, custo e margem</h2>
    <p class="meta">Os preços conhecidos das notas fiscais já estão preenchidos. Complete açúcar, frutas, água, mão de obra e impostos para obter o custo final real.</p>

    <div class="cost-section">
      <h3>1. Produto e lote</h3>
      <div class="form-grid">
        <div class="field">
          <label for="price-product">Produto</label>
          <select id="price-product">
            <option value="limoncello">Limoncello</option>
            <option value="arancello">Arancello</option>
            <option value="maca-canela">Maçã com Canela — sem anis (teste, preço a definir)</option>
          </select>
        </div>
        <div class="field">
          <label for="price-channel">Tabela de venda</label>
          <select id="price-channel">
            <option value="turista">Turistas</option>
            <option value="revenda">Hotéis, restaurantes e revendedores</option>
          </select>
        </div>
        <div class="field">
          <label for="price-size">Tamanho da garrafa</label>
          <select id="price-size">
            <option value="500">500 ml - garrafa comprada</option>
            <option value="275">275 ml - preço da garrafa pendente</option>
            <option value="5000">5 litros - eventos, embalagem pendente</option>
          </select>
        </div>
        <div class="field">
          <label for="price-auto-volume">Volume final automático</label>
          <select id="price-auto-volume">
            <option value="sim">Sim - conforme a receita do produto</option>
            <option value="nao">Não - informar manualmente</option>
          </select>
        </div>
        <div class="field">
          <label for="price-final-liters">Volume final do lote (L)</label>
          <input id="price-final-liters" type="text" inputmode="decimal" value="16">
          <small class="field-hint" id="price-volume-hint">Limoncello: 5 L de álcool produzem aproximadamente 16 L.</small>
        </div>
        <div class="field">
          <label for="price-alcohol-liters">Álcool usado no lote (L)</label>
          <input id="price-alcohol-liters" type="text" inputmode="decimal" value="5">
        </div>
        <div class="field">
          <label for="price-alcohol-liter">Preço do álcool por litro</label>
          <input id="price-alcohol-liter" type="text" inputmode="decimal" value="${initial.alcoholPrice.toFixed(2)}">
          <small class="field-hint">NF-e AG Química: R$ 19,00/L, frete incluído.</small>
        </div>
        <div class="field">
          <label for="price-sugar-batch">Açúcar do lote R$</label>
          <input id="price-sugar-batch" type="text" inputmode="decimal" value="0">
        </div>
        <div class="field">
          <label for="price-fruit-batch">Frutas / suco de maçã do lote R$</label>
          <input id="price-fruit-batch" type="text" inputmode="decimal" value="0">
        </div>
        <div class="field">
          <label for="price-water-batch">Água do lote R$</label>
          <input id="price-water-batch" type="text" inputmode="decimal" value="0">
        </div>
        <div class="field">
          <label for="price-other-batch">Outros custos do lote R$</label>
          <input id="price-other-batch" type="text" inputmode="decimal" value="0">
        </div>
      </div>
    </div>

    <div class="cost-section">
      <h3>2. Embalagem por garrafa</h3>
      <div class="form-grid">
        <div class="field">
          <label for="price-bottle">Garrafa R$</label>
          <input id="price-bottle" type="text" inputmode="decimal" value="${initial.bottle.toFixed(2)}">
        </div>
        <div class="field">
          <label for="price-cap">Tampa R$</label>
          <input id="price-cap" type="text" inputmode="decimal" value="${initial.cap.toFixed(2)}">
        </div>
        <div class="field">
          <label for="price-seal">Lacre R$</label>
          <input id="price-seal" type="text" inputmode="decimal" value="${initial.seal.toFixed(2)}">
        </div>
        <div class="field">
          <label for="price-front-label">Etiqueta frente R$</label>
          <input id="price-front-label" type="text" inputmode="decimal" value="${initial.frontLabel.toFixed(2)}">
        </div>
        <div class="field">
          <label for="price-back-label">Etiqueta verso R$</label>
          <input id="price-back-label" type="text" inputmode="decimal" value="${initial.backLabel.toFixed(2)}">
        </div>
        <div class="field">
          <label for="price-pack-freight">Fretes rateados R$</label>
          <input id="price-pack-freight" type="text" inputmode="decimal" value="${initial.packagingFreight.toFixed(2)}">
          <small class="field-hint">Inclui o rateio do frete das garrafas e das etiquetas.</small>
        </div>
        <div class="field">
          <label for="price-labor">Mão de obra por garrafa R$</label>
          <input id="price-labor" type="text" inputmode="decimal" value="0">
        </div>
        <div class="field">
          <label for="price-overhead">Energia, caixa e outros por garrafa R$</label>
          <input id="price-overhead" type="text" inputmode="decimal" value="0">
        </div>
      </div>
    </div>

    <div class="cost-section">
      <h3>3. Venda e margem</h3>
      <div class="form-grid">
        <div class="field">
          <label for="price-loss">Perdas de produção (%)</label>
          <input id="price-loss" type="text" inputmode="decimal" value="5">
        </div>
        <div class="field">
          <label for="price-fees">Impostos e taxas sobre a venda (%)</label>
          <input id="price-fees" type="text" inputmode="decimal" value="0">
        </div>
        <div class="field field-important">
          <label for="price-sale">Preço de venda desejado R$</label>
          <input id="price-sale" type="text" inputmode="decimal" value="${initial.salePrice.toFixed(2)}">
        </div>
        <div class="field field-important">
          <label for="price-target-margin">Margem líquida desejada (%)</label>
          <input id="price-target-margin" type="text" inputmode="decimal" value="50">
        </div>
      </div>
    </div>

    <div class="actions">
      <button class="button" type="button" id="run-price-calc">Calcular preço e margem</button>
    </div>
    <div id="price-result" class="result-box"></div>
  `);

  const productInput = section.querySelector("#price-product");
  const channelInput = section.querySelector("#price-channel");
  const sizeInput = section.querySelector("#price-size");
  const autoVolumeInput = section.querySelector("#price-auto-volume");
  const alcoholInput = section.querySelector("#price-alcohol-liters");
  const finalVolumeInput = section.querySelector("#price-final-liters");
  const result = section.querySelector("#price-result");

  const setProfile = () => {
    const profile = priceCalculatorProfile(sizeInput.value, productInput.value, channelInput.value);
    section.querySelector("#price-bottle").value = profile.bottle.toFixed(2);
    section.querySelector("#price-cap").value = profile.cap.toFixed(2);
    section.querySelector("#price-seal").value = profile.seal.toFixed(2);
    section.querySelector("#price-front-label").value = profile.frontLabel.toFixed(2);
    section.querySelector("#price-back-label").value = profile.backLabel.toFixed(2);
    section.querySelector("#price-pack-freight").value = profile.packagingFreight.toFixed(2);
    section.querySelector("#price-sale").value = profile.salePrice.toFixed(2);
    run();
  };

  const updateAutomaticVolume = () => {
    const automatic = autoVolumeInput.value === "sim";
    finalVolumeInput.readOnly = automatic;
    finalVolumeInput.closest(".field")?.classList.toggle("is-readonly", automatic);
    if (automatic) {
      const alcoholLiters = valueOf(section, "#price-alcohol-liters");
      const product = productInput.value;
      const factor = window.LimonePriceCalculator.FINAL_VOLUME_FACTOR[product];
      const finalVolume = window.LimonePriceCalculator.finalVolumeFromAlcohol(alcoholLiters, product);
      finalVolumeInput.value = roundStock(finalVolume);
      autoVolumeInput.options[0].textContent = `Sim - ${roundStock(factor)} L finais por litro de álcool`;
      const productName = recipeProfile(product).name;
      section.querySelector("#price-volume-hint").textContent =
        `${productName}: ${roundStock(alcoholLiters)} L de álcool produzem aproximadamente ${roundStock(finalVolume)} L.`;
    }
  };

  const run = () => {
    updateAutomaticVolume();
    const profile = priceCalculatorProfile(sizeInput.value, productInput.value, channelInput.value);
    const finalLiters = valueOf(section, "#price-final-liters");
    const alcoholLiters = valueOf(section, "#price-alcohol-liters");
    const alcoholPrice = valueOf(section, "#price-alcohol-liter");
    const sugar = valueOf(section, "#price-sugar-batch");
    const fruit = valueOf(section, "#price-fruit-batch");
    const water = valueOf(section, "#price-water-batch");
    const otherBatch = valueOf(section, "#price-other-batch");
    const bottle = valueOf(section, "#price-bottle");
    const cap = valueOf(section, "#price-cap");
    const seal = valueOf(section, "#price-seal");
    const frontLabel = valueOf(section, "#price-front-label");
    const backLabel = valueOf(section, "#price-back-label");
    const freight = valueOf(section, "#price-pack-freight");
    const labor = valueOf(section, "#price-labor");
    const overhead = valueOf(section, "#price-overhead");
    const lossPercent = valueOf(section, "#price-loss");
    const feePercent = valueOf(section, "#price-fees");
    const salePrice = valueOf(section, "#price-sale");
    const targetMargin = valueOf(section, "#price-target-margin");

    let calculation;
    try {
      calculation = window.LimonePriceCalculator.calculate({
        finalLiters,
        alcoholLiters,
        alcoholPrice,
        sugar,
        fruit,
        water,
        otherBatch,
        sizeMl: profile.sizeMl,
        bottle,
        cap,
        seal,
        frontLabel,
        backLabel,
        freight,
        labor,
        overhead,
        lossPercent,
        feePercent,
        salePrice,
        targetMargin
      });
    } catch (error) {
      result.innerHTML = `<div class="soft-message">${escapeHTML(error.message || "Confira os valores informados.")}</div>`;
      return;
    }
    const pending = [];
    if (bottle <= 0) pending.push("preço da garrafa");
    if (sugar <= 0) pending.push("açúcar");
    if (fruit <= 0) pending.push(productInput.value === "maca-canela" ? "suco de maçã" : "limões/laranjas");
    if (productInput.value === "maca-canela") {
      if (otherBatch <= 0) pending.push("canela, baunilha e cravo em outros custos do lote");
      if (salePrice <= 0) pending.push("preço de venda (ainda não definido)");
      pending.push("validação do lote de teste: graduação 96% vol., volume real, teor final, validade e custo dos novos rótulos");
    } else if (water <= 0) pending.push("água");
    if (labor <= 0) pending.push("mão de obra");

    result.innerHTML = `
      ${pending.length ? `<div class="cost-warning"><strong>Atenção:</strong> ainda falta preencher ${escapeHTML(pending.join(", "))}. O resultado atual é provisório.</div>` : ""}
      <div class="report-grid cost-results-grid">
        ${reportTile("Custo por unidade", formatBRL(calculation.costWithLoss))}
        ${reportTile(`Preço para margem de ${roundStock(targetMargin)}%`, formatBRL(calculation.suggestedPrice))}
        ${reportTile("Lucro por unidade", formatBRL(calculation.profitPerBottle))}
        ${reportTile("Margem líquida atual", `${roundStock(calculation.actualMargin)}%`)}
        ${reportTile("Markup sobre o custo", `${roundStock(calculation.markup)}%`)}
        ${reportTile("Unidades completas no lote", calculation.fullBottles)}
        ${reportTile("Sobra do lote", `${calculation.remainderMl} ml`)}
        ${reportTile("Faturamento do lote", formatBRL(calculation.batchRevenue))}
        ${reportTile("Lucro estimado do lote", formatBRL(calculation.batchProfit))}
      </div>
      <div class="ingredients-card">
        <h3>Composição do custo por unidade</h3>
        <div class="ingredient-row"><span>Líquido: álcool + ingredientes</span><strong>${formatBRL(calculation.liquidCost)}</strong></div>
        <div class="ingredient-row"><span>Embalagem completa</span><strong>${formatBRL(calculation.packagingCost)}</strong></div>
        <div class="ingredient-row"><span>Mão de obra e outros por unidade</span><strong>${formatBRL(labor + overhead)}</strong></div>
        <div class="ingredient-row"><span>Perdas de ${roundStock(lossPercent)}%</span><strong>${formatBRL(calculation.costWithLoss - calculation.directCost)}</strong></div>
        <div class="ingredient-row"><span>Taxas sobre a venda</span><strong>${formatBRL(calculation.salesFee)}</strong></div>
      </div>
      <p class="meta cost-source-note"><strong>Preço oficial selecionado:</strong> ${formatBRL(salePrice)}. Preços conhecidos usados: álcool R$ 19,00/L; garrafa 500 ml R$ 5,60; tampa R$ 0,80; lacre R$ 0,24; etiquetas 500 ml R$ 2,37 o par; etiquetas 275 ml R$ 1,49 o par. Fretes rateados automaticamente.</p>
    `;
  };

  sizeInput.addEventListener("change", setProfile);
  productInput.addEventListener("change", setProfile);
  channelInput.addEventListener("change", setProfile);
  autoVolumeInput.addEventListener("change", run);
  alcoholInput.addEventListener("input", run);
  section.querySelectorAll("input").forEach((input) => {
    if (input !== alcoholInput) input.addEventListener("input", run);
  });
  section.querySelector("#run-price-calc").addEventListener("click", run);
  run();
  return section;
}

function renderMessages() {
  return screenWithListAndForm({
    listTitle: "Mensagens internas",
    collection: "messages",
    emptyText: "Nenhuma mensagem cadastrada.",
    itemRenderer: (item) => card(item.title, `Para: ${item.to}`, item.date, item.text),
    formTitle: "Nova mensagem",
    fields: [
      field("date", "Data", today(), "date"),
      field("to", "Para", "Maria e Bia"),
      field("title", "Assunto", ""),
      field("text", "Mensagem", "", "textarea", true)
    ],
    compact: true
  });
}

function renderBackup() {
  const section = element("section", "section", `
    <h2>Cópia de segurança</h2>
    <div class="card">
      <p class="meta">A cópia baixa todos os dados online desta Web-App em formato JSON.</p>
      <div class="actions">
        <button class="button" type="button" id="create-backup">Criar e baixar cópia</button>
      </div>
    </div>
  `);
  const list = element("div", "list", "");
  if (!state.backups.length) {
    list.append(emptyState("Nenhuma cópia registrada nesta Web-App."));
  } else {
    state.backups.slice().reverse().forEach((backup) => {
      list.append(card(backup.title, backup.date, backup.user, backup.notes));
    });
  }
  section.querySelector("#create-backup").addEventListener("click", () => {
    state.backups.push({
      id: crypto.randomUUID(),
      title: "Cópia JSON",
      date: new Date().toLocaleString("pt-BR"),
      user: session?.user || "Sistema",
      notes: "Arquivo baixado pelo navegador."
    });
    addAudit("backup", "Cópia de segurança criada");
    saveState();
    exportData();
  });
  section.append(list);
  return section;
}

function renderAudit() {
  const section = element("section", "section", "<h2>Histórico de alterações</h2>");
  const list = element("div", "list", "");
  if (!state.audit.length) {
    list.append(emptyState("Nenhum histórico registrado."));
  } else {
    state.audit.slice().reverse().forEach((entry) => {
      list.append(card(entry.action, `${entry.module} - ${entry.user}`, entry.date, entry.notes));
    });
  }
  section.append(list);
  return section;
}

function renderAccess() {
  const accessEntries = state.audit
    .filter((entry) => entry.action === "Entrada no sistema")
    .slice()
    .reverse();
  const section = element("section", "section", `
    <h2>Acessos ao sistema</h2>
    <p class="status-note">Mostra os logins online registrados a partir da ativação do histórico de acessos.</p>
  `);
  const summary = element("div", "report-grid", "");
  ["Michele", "Maria", "Bia"].forEach((person) => {
    const latest = accessEntries.find((entry) => entry.user === person);
    summary.append(reportTile(person, latest ? latest.date : "Sem acesso registrado"));
  });
  section.append(summary);
  const list = element("div", "list", "");
  if (!accessEntries.length) {
    list.append(emptyState("Nenhum acesso registrado ainda."));
  } else {
    accessEntries.slice(0, 30).forEach((entry) => {
      list.append(card(entry.user, entry.action, entry.date, entry.notes || "Login online confirmado."));
    });
  }
  section.append(list);
  return section;
}

function renderAccount() {
  return element("section", "section", `
    <h2>Minha conta</h2>
    <div class="card">
      <p class="card-title">${escapeHTML(session?.user || "Usuário")}</p>
      <p class="meta">Sistema protegido por PIN. Compartilhe o PIN somente com pessoas autorizadas.</p>
      <p class="meta"><strong>Sincronização:</strong> ${escapeHTML(syncStatus)}</p>
      <p class="meta"><strong>Autor:</strong> ${escapeHTML(SOFTWARE_RIGHTS.author)} | <strong>Titular:</strong> ${escapeHTML(SOFTWARE_RIGHTS.owner)}</p>
      <div class="actions">
        <button class="button secondary" type="button" onclick="window.location.reload()">Recarregar app</button>
      </div>
    </div>
  `);
}

function renderRights() {
  const section = element("section", "section", `
    <h2>Direitos do software</h2>
    <div class="card ownership-card">
      <p class="card-title">${escapeHTML(SOFTWARE_RIGHTS.software)}</p>
      <p class="meta"><strong>Autor e responsável:</strong> ${escapeHTML(SOFTWARE_RIGHTS.author)}</p>
      <p class="meta"><strong>Titular / empresa:</strong> ${escapeHTML(SOFTWARE_RIGHTS.owner)}</p>
      <p class="meta"><strong>Copyright:</strong> ${escapeHTML(SOFTWARE_RIGHTS.copyright)}</p>
      <p class="meta"><strong>Data do aviso:</strong> ${escapeHTML(SOFTWARE_RIGHTS.noticeDate)}</p>
      <p class="status-note warning">Codex/OpenAI foi usado somente como ferramenta de apoio. A autoria e a titularidade do sistema pertencem a Michele Costantino / LIMONE GRAMADO.</p>
      <p class="status-note warning">Não é autorizada a remoção, alteração ou ocultação deste aviso, dos créditos, da marca LIMONE GRAMADO ou da documentação de direitos sem autorização por escrito.</p>
      <div class="actions">
        <button class="button secondary" type="button" data-rights-file>Abrir aviso de direitos</button>
      </div>
    </div>
  `);
  section.querySelector("[data-rights-file]").addEventListener("click", () => {
    window.open(SOFTWARE_RIGHTS.rightsFile, "_blank", "noopener");
  });
  return section;
}

function renderContacts() {
  return screenWithListAndForm({
    listTitle: "Contatos",
    collection: "contacts",
    emptyText: "Nenhum contato cadastrado.",
    itemRenderer: (item) => card(item.name, item.type, item.phone || "Sem telefone", item.notes),
    actionsRenderer: (item) => {
      const phone = whatsappNumber(item.phone);
      if (!phone) return [];
      return [{
        label: "WhatsApp",
        className: "button secondary whatsapp",
        onClick: () => window.open(`https://wa.me/${phone}`, "_blank", "noopener")
      }];
    },
    formTitle: "Novo contato",
    fields: [
      field("name", "Nome", ""),
      field("type", "Tipo", "Cliente"),
      field("phone", "Telefone / WhatsApp", "55 ", "text", false, true),
      field("notes", "Notas", "", "textarea", true, true)
    ],
    compact: true
  });
}

function renderTasks() {
  const section = element("section", "section", "<h2>Tarefas</h2>");
  const list = element("div", "list", "");
  if (!state.tasks.length) list.append(emptyState("Nenhuma tarefa cadastrada."));
  state.tasks.forEach((task) => {
    const item = element("article", "card", `
      <div class="card-header">
        <div>
          <p class="card-title">${escapeHTML(task.title)}</p>
          <p class="meta">${escapeHTML(task.owner)} - prazo ${escapeHTML(task.due || "sem data")}</p>
        </div>
        <span class="badge ${task.done ? "" : "warn"}">${task.done ? "Feita" : "Aberta"}</span>
      </div>
      <div class="actions">
        <button class="button secondary" type="button">${task.done ? "Reabrir" : "Concluir"}</button>
        <button class="button danger" type="button">Excluir</button>
      </div>
    `);
    const [toggle, remove] = item.querySelectorAll("button");
    toggle.addEventListener("click", () => {
      task.done = !task.done;
      saveState();
      render();
    });
    remove.addEventListener("click", () => removeItem("tasks", task.id));
    list.append(item);
  });
  section.append(list);
  section.append(buildForm("Nova tarefa", [
    field("title", "Tarefa", ""),
    field("owner", "Responsável", "Bia"),
    field("due", "Prazo", today(), "date")
  ], (values) => addItem("tasks", { ...values, done: false })));
  return section;
}

function renderDataTools() {
  const section = element("section", "section", `
    <h2>Dados</h2>
    <div class="card">
      <p class="meta">${escapeHTML(syncStatus)}</p>
      <p class="meta">Os registros sincronizam com o servidor, ficam salvos neste aparelho como cópia e atualizam o estoque automaticamente.</p>
      <div class="actions">
        <button class="button secondary" type="button" id="refresh-data">Sincronizar</button>
        <button class="button secondary" type="button" id="export-data">Exportar JSON</button>
        <button class="button secondary" type="button" id="logout">Sair</button>
        <button class="button danger" type="button" id="clear-data">Limpar tudo</button>
      </div>
    </div>
  `);
  section.querySelector("#refresh-data").addEventListener("click", async () => {
    await loadFromServer();
    render();
  });
  section.querySelector("#export-data").addEventListener("click", exportData);
  section.querySelector("#logout").addEventListener("click", logout);
  section.querySelector("#clear-data").addEventListener("click", () => {
    if (!confirm("ATENÇÃO: isto apaga os dados compartilhados. Deseja continuar?")) return;
    if (!confirm("Confirme novamente: limpar todos os dados do sistema LIMONE?")) return;
    state = structuredClone(initialData);
    addAudit("Dados", "Sistema reiniciado", "Limpeza manual confirmada pelo usuário.");
    saveState();
    render();
  });
  return section;
}

function renderTaskPreview() {
  const section = element("section", "section", "<h2>Próximas tarefas</h2>");
  const list = element("div", "list", "");
  const tasks = state.tasks.filter((task) => !task.done).slice(0, 3);
  if (!tasks.length) {
    list.append(emptyState("Nenhuma tarefa aberta."));
  } else {
    tasks.forEach((task) => list.append(card(task.title, task.owner, task.due, "Aberta", "warn")));
  }
  section.append(list);
  return section;
}

function screenWithListAndForm(config) {
  const section = document.createDocumentFragment();
  const listSection = element("section", config.compact ? "section" : "", `<h2>${config.listTitle}</h2>`);
  const list = element("div", "list", "");
  const editedItem = editingItem?.collection === config.collection
    ? state[config.collection].find((item) => item.id === editingItem.id)
    : null;
  const items = [...state[config.collection]].reverse();
  if (!items.length) {
    list.append(emptyState(config.emptyText));
  } else {
    items.forEach((item) => {
      const node = config.itemRenderer(item);
      const actions = element("div", "actions", `
        <button class="button secondary edit" type="button">${editedItem?.id === item.id ? "Editando" : "Editar"}</button>
        <button class="button danger" type="button">Excluir</button>
      `);
      (config.actionsRenderer?.(item) || []).forEach((action) => {
        const button = document.createElement("button");
        button.className = action.className || "button secondary";
        button.type = "button";
        button.textContent = action.label;
        button.addEventListener("click", action.onClick);
        actions.prepend(button);
      });
      actions.querySelector(".button.edit").addEventListener("click", () => {
        editingItem = { collection: config.collection, id: item.id };
        render();
      });
      actions.querySelector(".button.danger").addEventListener("click", () => {
        if (!confirm("Tem certeza que deseja excluir este registro? A alteração ficará registrada no histórico.")) return;
        removeItem(config.collection, item.id);
      });
      node.append(actions);
      list.append(node);
    });
  }
  listSection.append(list);
  section.append(listSection);
  section.append(buildForm(
    editedItem ? `Editar ${config.formTitle.replace(/^Nov[ao] /, "").replace(/^Atualizar /, "")}` : config.formTitle,
    config.fields,
    (values) => {
      if (editedItem) {
        updateItem(config.collection, editedItem.id, values);
      } else {
        addItem(config.collection, values);
      }
    },
    editedItem,
    () => {
      editingItem = null;
      render();
    }
  ));
  return section;
}

function buildForm(title, fields, onSubmit, initialValues = null, onCancel = null) {
  const form = element("form", "form-card", `
    <h2>${title}</h2>
    <div class="form-grid"></div>
    <div class="actions">
      <button class="button" type="submit">${initialValues ? "Salvar alterações" : "Salvar"}</button>
      ${initialValues ? `<button class="button secondary" type="button" id="cancel-edit">Cancelar</button>` : ""}
    </div>
  `);
  const grid = form.querySelector(".form-grid");
  fields.forEach((fieldConfig) => {
    const fieldValue = initialValues ? initialValues[fieldConfig.name] : fieldConfig.value;
    grid.append(buildField({ ...fieldConfig, value: fieldValue ?? "" }));
  });
  const cancelButton = form.querySelector("#cancel-edit");
  if (cancelButton && onCancel) cancelButton.addEventListener("click", onCancel);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const values = { id: initialValues?.id || crypto.randomUUID() };
    fields.forEach((fieldConfig) => {
      const value = formData.get(fieldConfig.name);
      values[fieldConfig.name] = fieldConfig.type === "number" ? parseNumberInput(value) : String(value || "").trim();
    });
    onSubmit(values);
    form.reset();
  });
  return form;
}

function buildField(config) {
  const id = `${config.name}-${Math.random().toString(16).slice(2)}`;
  const classes = ["field"];
  if (config.full) classes.push("full");
  if (config.name === "bottles") classes.push("field-important");
  const wrapper = element("div", classes.join(" "), `<label for="${id}">${config.label}</label>`);
  const input = document.createElement(config.type === "textarea" ? "textarea" : config.type === "select" ? "select" : "input");
  input.id = id;
  input.name = config.name;
  if (config.placeholder) input.placeholder = config.placeholder;
  if (config.type === "select") {
    (config.options || []).forEach((optionValue) => {
      const option = document.createElement("option");
      option.value = optionValue;
      option.textContent = optionValue;
      input.append(option);
    });
  } else if (config.type !== "textarea") {
    input.type = config.type === "number" ? "text" : config.type || "text";
    if (config.type === "number") {
      input.inputMode = "decimal";
      input.dataset.numberInput = "true";
      input.autocomplete = "off";
      input.enterKeyHint = "next";
    }
  }
  input.value = config.value || "";
  input.required = !config.optional;
  wrapper.append(input);
  if (config.name === "bottles") {
    const controls = element("div", "quantity-buttons", `
      <button type="button" data-step="-10">-10</button>
      <button type="button" data-step="-1">-1</button>
      <button type="button" data-step="1">+1</button>
      <button type="button" data-step="10">+10</button>
      <button type="button" data-step="50">+50</button>
      <button type="button" data-step="100">+100</button>
    `);
    controls.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        const current = parseNumberInput(input.value);
        const next = Math.max(0, current + Number(button.dataset.step || 0));
        input.value = String(next);
        input.dispatchEvent(new Event("input", { bubbles: true }));
      });
    });
    wrapper.append(controls);
  }
  if (config.hint) {
    const hint = document.createElement("small");
    hint.className = "field-hint";
    hint.textContent = config.hint;
    wrapper.append(hint);
  }
  return wrapper;
}

function field(name, label, value = "", type = "text", full = false, optional = false, placeholder = "", hint = "", options = []) {
  return { name, label, value, type, full, optional, placeholder, hint, options };
}

function addItem(collection, values) {
  const validation = validateRecord(collection, values);
  if (!validation.ok) return showValidationError(validation.message);
  const stockPreview = previewStockAfterChange(collection, null, values);
  if (!stockPreview.ok) return showValidationError(stockPreview.message);
  state[collection].push(values);
  addAudit(collection, "Registro criado");
  if (stockPreview.stock) state.stock = stockPreview.stock;
  else applyAutomaticStockChanges(collection, values, 1);
  updateAutomaticStockTasks();
  saveState();
  render();
}

function updateItem(collection, id, values) {
  const index = state[collection].findIndex((item) => item.id === id);
  if (index < 0) return;
  const previous = state[collection][index];
  const merged = { ...previous, ...values, id };
  const validation = validateRecord(collection, merged, id);
  if (!validation.ok) return showValidationError(validation.message);
  const stockPreview = previewStockAfterChange(collection, previous, merged);
  if (!stockPreview.ok) return showValidationError(stockPreview.message);
  state[collection][index] = merged;
  addAudit(collection, "Registro alterado");
  if (stockPreview.stock) state.stock = stockPreview.stock;
  else if (["purchases", "production", "sales"].includes(collection)) applyAutomaticStockChanges(collection, state[collection][index], 1);
  updateAutomaticStockTasks();
  editingItem = null;
  saveState();
  render();
}

function removeItem(collection, id) {
  const item = state[collection].find((entry) => entry.id === id);
  if (!item) return;
  const stockPreview = previewStockAfterChange(collection, item, null);
  if (!stockPreview.ok) return showValidationError(stockPreview.message);
  state[collection] = state[collection].filter((entry) => entry.id !== id);
  addAudit(collection, "Registro excluído");
  if (stockPreview.stock) state.stock = stockPreview.stock;
  else applyAutomaticStockChanges(collection, item, -1);
  updateAutomaticStockTasks();
  saveState();
  render();
}

function showValidationError(message) {
  alert(message);
}

function validateRecord(collection, item, editingId = "") {
  const required = {
    production: [["batch", "Número do lote"], ["date", "Data"], ["product", "Produto"], ["size", "Tamanho da garrafa"], ["responsible", "Responsável"]],
    purchases: [["date", "Data"], ["supplier", "Fornecedor"], ["item", "Item"], ["unit", "Unidade"]],
    stock: [["item", "Item"], ["unit", "Unidade"]],
    sales: [["date", "Data"], ["customer", "Cliente"], ["product", "Produto"], ["paymentStatus", "Pagamento"]],
    products: [["name", "Produto"], ["category", "Categoria"], ["size", "Tamanho"]],
    customers: [["name", "Nome"], ["group", "Grupo"], ["status", "Status do contato"]],
    suppliers: [["name", "Fornecedor"], ["type", "Tipo"]],
    stockMovements: [["date", "Data"], ["type", "Tipo"], ["item", "Item"], ["unit", "Unidade"]],
    documents: [["title", "Titulo"], ["category", "Categoria"], ["responsible", "Responsável"], ["status", "Status"]],
    recipes: [["name", "Nome da receita"], ["product", "Produto"]],
    messages: [["date", "Data"], ["to", "Para"], ["title", "Assunto"]],
    expenses: [["date", "Data"], ["category", "Categoria"], ["description", "Descrição"], ["paymentStatus", "Pagamento"]],
    contacts: [["name", "Nome"], ["type", "Tipo"]],
    tasks: [["title", "Tarefa"], ["owner", "Responsável"], ["due", "Prazo"]]
  };
  for (const [key, label] of required[collection] || []) {
    if (!String(item[key] ?? "").trim()) return { ok: false, message: `Preencha o campo obrigatório: ${label}.` };
  }

  const numericFields = {
    production: [["bottles", "Garrafas"]],
    purchases: [["quantity", "Quantidade"], ["total", "Valor total"], ["transportCost", "Frete/transporte"], ["paidAmount", "Valor pago"]],
    stock: [["quantity", "Quantidade atual"], ["minimum", "Estoque mínimo"]],
    sales: [["quantity", "Quantidade"], ["price", "Preço por unidade"]],
    products: [["price", "Preço de venda"], ["unitCost", "Custo estimado por unidade"]],
    expenses: [["amount", "Valor"]],
    recipes: [["alcohol", "Álcool"], ["peel", "Cascas"], ["sugar", "Açúcar"], ["water", "Água"], ["bottles275", "Garrafas 275 ml"], ["bottles500", "Garrafas 500 ml"]],
    stockMovements: [["quantity", "Quantidade"]]
  };
  for (const [key, label] of numericFields[collection] || []) {
    const value = item[key];
    if (value !== "" && value !== null && value !== undefined && !Number.isFinite(Number(value))) {
      return { ok: false, message: `${label} precisa ser um número válido.` };
    }
  }

  const positiveRules = [
    ["production", "bottles", "Garrafas"],
    ["purchases", "quantity", "Quantidade"],
    ["sales", "quantity", "Quantidade"],
    ["sales", "price", "Preço por unidade"],
    ["stockMovements", "quantity", "Quantidade"]
  ];
  for (const [target, key, label] of positiveRules) {
    if (collection === target && Number(item[key] || 0) <= 0) return { ok: false, message: `${label} deve ser maior que zero.` };
  }

  const nonNegativeFields = {
    purchases: [["total", "Valor total"]],
    stock: [["quantity", "Quantidade atual"], ["minimum", "Estoque mínimo"]],
    sales: [["price", "Preço por unidade"]],
    products: [["price", "Preço de venda"], ["unitCost", "Custo estimado por unidade"]],
    expenses: [["amount", "Valor"]],
    recipes: [["alcohol", "Álcool"], ["peel", "Cascas"], ["sugar", "Açúcar"], ["water", "Agua"], ["bottles275", "Garrafas 275 ml"], ["bottles500", "Garrafas 500 ml"]]
  };
  for (const [key, label] of nonNegativeFields[collection] || []) {
    if (Number(item[key] || 0) < 0) return { ok: false, message: `${label} não pode ser negativo.` };
  }

  if (collection === "purchases") {
    const totalToPay = Number(item.total || 0) + Number(item.transportCost || 0);
    const paid = Number(item.paidAmount || 0);
    if (paid < 0) return { ok: false, message: "Valor pago não pode ser negativo." };
    if (Number(item.transportCost || 0) < 0) return { ok: false, message: "Frete/transporte não pode ser negativo." };
    if (totalToPay > 0 && paid > totalToPay + 0.01) {
      return { ok: false, message: "Valor pago está maior que o total da compra. Confira antes de salvar." };
    }
  }

  if (collection === "production") {
    const duplicated = state.production.some((entry) =>
      entry.id !== editingId && normalizeStockName(entry.batch) === normalizeStockName(item.batch)
    );
    if (duplicated) return { ok: false, message: "Esta numeração de lote já existe. Use uma numeração única." };
  }

  if (collection === "stock") {
    const duplicated = state.stock.some((entry) =>
      entry.id !== editingId
      && normalizeStockName(entry.item) === normalizeStockName(item.item)
      && String(entry.unit || "un").toLowerCase() === String(item.unit || "un").toLowerCase()
    );
    if (duplicated) return { ok: false, message: "Este item de estoque já existe com a mesma unidade. Edite o item existente." };
  }

  return { ok: true };
}

function previewStockAfterChange(collection, previous, next) {
  if (!["purchases", "production", "sales", "stockMovements"].includes(collection)) return { ok: true };
  const stock = state.stock.map((item) => ({ ...item }));
  if (previous) {
    const reverted = applyStockChangesToList(stock, collection, previous, -1);
    if (!reverted.ok) return reverted;
  }
  if (next) {
    const applied = applyStockChangesToList(stock, collection, next, 1);
    if (!applied.ok) return applied;
  }
  return { ok: true, stock };
}

function applyStockChangesToList(stock, collection, item, direction) {
  const change = (itemName, unit, delta) => adjustStockList(stock, itemName, unit, delta);
  if (collection === "purchases") return change(item.item, item.unit || "un", Number(item.quantity || 0) * direction);
  if (collection === "production") {
    const bottles = Number(item.bottles || 0) * direction;
    for (const material of productionMaterials(item.product, item.size, bottles)) {
      const result = change(material.item, material.unit, material.delta);
      if (!result.ok) return result;
    }
    return { ok: true };
  }
  if (collection === "sales") return change(item.product, "un", -Number(item.quantity || 0) * direction);
  if (collection === "stockMovements") {
    const type = normalizeStockName(item.type);
    if (type === "entrada") return change(item.item, item.unit || "un", Number(item.quantity || 0) * direction);
    if (type === "saida") return change(item.item, item.unit || "un", -Number(item.quantity || 0) * direction);
    if (type === "ajuste" && direction > 0) {
      const stockItem = findStockItem(stock, item.item, item.unit || "un") || createStockItem(stock, item.item, item.unit || "un");
      if (Number(item.quantity || 0) < 0) return { ok: false, message: "Ajuste de estoque não pode ser negativo." };
      stockItem.quantity = roundStock(Number(item.quantity || 0));
    }
  }
  return { ok: true };
}

function adjustStockList(stock, itemName, unit, delta) {
  const name = String(itemName || "").trim();
  if (!name || !delta) return { ok: true };
  const item = findStockItem(stock, name, unit) || createStockItem(stock, name, unit);
  const nextQuantity = roundStock(Number(item.quantity || 0) + delta);
  if (nextQuantity < 0) {
    return {
      ok: false,
      message: `Estoque insuficiente para ${name}. Disponível: ${roundStock(Number(item.quantity || 0))} ${item.unit || unit}.`
    };
  }
  item.quantity = nextQuantity;
  return { ok: true };
}

function findStockItem(stock, itemName, unit) {
  const normalized = normalizeStockName(itemName);
  const aliases = stockAliases(normalized);
  return stock.find((stockItem) =>
    stockNameMatches(normalizeStockName(stockItem.item), normalized, aliases)
    && String(stockItem.unit || "un").toLowerCase() === String(unit || "un").toLowerCase()
  );
}

function createStockItem(stock, itemName, unit) {
  const item = { id: crypto.randomUUID(), item: String(itemName || "").trim(), quantity: 0, minimum: 0, unit: unit || "un" };
  stock.push(item);
  return item;
}

function addAudit(module, action, notes = "") {
  if (!Array.isArray(state.audit)) state.audit = [];
  state.audit.push({
    id: crypto.randomUUID(),
    date: new Date().toLocaleString("pt-BR"),
    user: session?.user || "Sistema",
    action,
    module,
    notes
  });
  if (state.audit.length > 120) state.audit = state.audit.slice(-120);
}

function applyAutomaticStockChanges(collection, item, direction) {
  if (collection === "purchases") {
    adjustStock(item.item, item.unit || "un", Number(item.quantity || 0) * direction);
    return;
  }
  if (collection === "production") {
    const bottles = Number(item.bottles || 0) * direction;
    productionMaterials(item.product, item.size, bottles).forEach((material) => adjustStock(material.item, material.unit, material.delta));
    return;
  }
  if (collection === "sales") {
    adjustStock(item.product, "un", -Number(item.quantity || 0) * direction);
    return;
  }
  if (collection === "stockMovements") {
    const type = normalizeStockName(item.type);
    if (type === "entrada") {
      adjustStock(item.item, item.unit || "un", Number(item.quantity || 0) * direction);
      return;
    }
    if (type === "saida") {
      adjustStock(item.item, item.unit || "un", -Number(item.quantity || 0) * direction);
      return;
    }
    if (type === "ajuste" && direction > 0) {
      const name = String(item.item || "").trim();
      let stockItem = findStockItem(state.stock, name, item.unit || "un");
      if (!stockItem) {
        stockItem = { id: crypto.randomUUID(), item: name, quantity: 0, minimum: 0, unit: item.unit || "un" };
        state.stock.push(stockItem);
      }
      stockItem.quantity = roundStock(Number(item.quantity || 0));
    }
  }
}

function productionMaterials(product, size, bottles) {
  const bottleSize = bottleSizeFromProduct(product, size);
  const finished = finishedProductName(product, bottleSize);
  return [
    { item: finished, unit: "un", delta: bottles },
    { item: `Garrafas ${bottleSize}`, unit: "un", delta: -bottles },
    { item: `Rótulos ${bottleSize}`, unit: "un", delta: -bottles },
    { item: "Tampas", unit: "un", delta: -bottles }
  ];
}

function finishedProductName(product, size = "") {
  const name = String(product || "Limoncello").trim();
  return /\d+\s*ml/i.test(name) ? name : `${name} ${bottleSizeFromProduct(name, size)}`;
}

function bottleSizeFromProduct(product, size = "") {
  const text = `${product || ""} ${size || ""}`;
  const match = text.match(/(275|500)\s*ml/i);
  return match ? `${match[1]} ml` : "275 ml";
}

function adjustStock(itemName, unit, delta) {
  const name = String(itemName || "").trim();
  if (!name || !delta) return;
  let item = findStockItem(state.stock, name, unit);
  if (!item) {
    item = { id: crypto.randomUUID(), item: name, quantity: 0, minimum: 0, unit: unit || "un" };
    state.stock.push(item);
  }
  item.quantity = roundStock(Number(item.quantity || 0) + delta);
}

function updateAutomaticStockTasks() {
  state.stock.forEach((stockItem) => {
    const low = Number(stockItem.quantity) <= Number(stockItem.minimum);
    const title = `Comprar ${stockItem.item}`;
    const task = state.tasks.find((entry) => entry.autoStockItem === stockItem.item);
    if (low && !task) {
      state.tasks.push({
        id: crypto.randomUUID(),
        title,
        owner: "Bia",
        due: today(),
        done: false,
        autoStockItem: stockItem.item
      });
      return;
    }
    if (low && task) {
      task.title = title;
      task.owner = task.owner || "Bia";
      task.due = task.due || today();
      task.done = false;
      return;
    }
    if (!low && task) {
      task.done = true;
    }
  });
}

function whatsappNumber(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (digits.length < 10) return "";
  if (digits.startsWith("55")) return digits;
  return `55${digits}`;
}

function normalizeStockName(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function roundStock(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function bottleYield(liters, bottleLiters) {
  const totalMl = Math.max(0, Math.round(Number(liters || 0) * 1000));
  const bottleMl = Math.round(Number(bottleLiters || 0) * 1000);
  if (!bottleMl) return "0";
  const fullBottles = Math.floor(totalMl / bottleMl);
  const remainderMl = totalMl - fullBottles * bottleMl;
  if (!remainderMl) return `${fullBottles} cheias`;
  return `${fullBottles} cheias + ${remainderMl} ml`;
}

function mixedBottlingText(liters) {
  const totalMl = Math.max(0, Math.round(Number(liters || 0) * 1000));
  if (!totalMl) return "Informe a quantidade de álcool para calcular as garrafas.";
  let best = { bottles500: 0, bottles275: 0, remainder: totalMl };
  const max500 = Math.floor(totalMl / 500);
  for (let bottles500 = max500; bottles500 >= 0; bottles500 -= 1) {
    const after500 = totalMl - bottles500 * 500;
    const bottles275 = Math.floor(after500 / 275);
    const remainder = after500 - bottles275 * 275;
    if (
      remainder < best.remainder
      || (remainder === best.remainder && bottles500 > best.bottles500)
    ) {
      best = { bottles500, bottles275, remainder };
    }
  }
  return [
    best.bottles500 ? `${best.bottles500} garrafas de 500 ml` : "",
    best.bottles275 ? `${best.bottles275} garrafas de 275 ml` : "",
    best.remainder ? `${best.remainder} ml de sobra` : "sem sobra"
  ].filter(Boolean).join(" + ");
}

function mixedBottlingPlan(liters) {
  const plan = mixedBottlingText(liters);
  if (plan.startsWith("Informe")) {
    return `
      <div class="bottling-plan">
        <strong>Plano de envase</strong>
        <span>${escapeHTML(plan)}</span>
      </div>
    `;
  }
  return `
    <div class="bottling-plan">
      <strong>Plano misto recomendado</strong>
      <span>${escapeHTML(plan)}</span>
      <small>Combina 500 ml e 275 ml para aproveitar melhor o lote.</small>
    </div>
  `;
}

function recipeShareText(profile, alcohol, finalLiters, ingredients) {
  return [
    `Receita LIMONE GRAMADO - ${profile.name}`,
    "",
    `${profile.inputLabel}: ${roundStock(alcohol)} L`,
    `Volume final estimado: ${roundStock(finalLiters)} L`,
    `Garrafas 275 ml: ${bottleYield(finalLiters, 0.275)}`,
    `Garrafas 500 ml: ${bottleYield(finalLiters, 0.5)}`,
    `Plano misto recomendado: ${mixedBottlingText(finalLiters)}`,
    "",
    "Ingredientes:",
    ...ingredients.map((item) => `- ${item.name}: ${item.amount}`),
    "",
    profile.note,
    ...(profile.steps ? ["", "Modo de preparo:", ...profile.steps.map((step, index) => `${index + 1}. ${step}`)] : []),
    ...(profile.source ? ["", profile.source] : [])
  ].join("\n");
}

function recipeShareCard(text) {
  return `
    <div class="recipe-share-card">
      <div>
        <strong>Mensagem pronta</strong>
        <span>Texto para enviar para Maria, Bia ou guardar no grupo.</span>
      </div>
      <div class="recipe-share-actions">
        <button class="button secondary" type="button" data-copy-recipe>Copiar texto</button>
        <button class="button secondary" type="button" data-save-recipe>Salvar receita</button>
        <button class="button secondary" type="button" data-production-size="275 ml">Produção 275 ml</button>
        <button class="button secondary" type="button" data-production-size="500 ml">Produção 500 ml</button>
      </div>
      <pre>${escapeHTML(text)}</pre>
    </div>
  `;
}

async function copyRecipeText(button, text) {
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "Copiado";
  } catch {
    const box = document.createElement("textarea");
    box.value = text;
    document.body.append(box);
    box.select();
    document.execCommand("copy");
    box.remove();
    button.textContent = "Copiado";
  }
  window.setTimeout(() => {
    button.textContent = "Copiar texto";
  }, 1800);
}

function saveCalculatedRecipe(button, profile, alcohol, finalLiters, ingredients) {
  const ingredientValue = (pattern) => {
    const found = ingredients.find((item) => pattern.test(item.name));
    if (!found) return 0;
    return parseNumberInput(String(found.amount).replace(/[^\d,.-]/g, ""));
  };
  const recipe = {
    id: crypto.randomUUID(),
    name: `${profile.name} - ${roundStock(alcohol)} L - ${today()}`,
    product: profile.product || profile.name,
    alcohol: roundStock(alcohol),
    peel: ingredientValue(/cascas/i),
    sugar: ingredientValue(/açúcar|acucar/i),
    water: ingredientValue(/água filtrada|agua filtrada/i),
    bottles275: Math.floor(finalLiters / 0.275),
    bottles500: Math.floor(finalLiters / 0.5),
    notes: [
      `Volume final estimado: ${roundStock(finalLiters)} L.`,
      `Garrafas 275 ml: ${bottleYield(finalLiters, 0.275)}.`,
      `Garrafas 500 ml: ${bottleYield(finalLiters, 0.5)}.`,
      `Plano misto recomendado: ${mixedBottlingText(finalLiters)}.`,
      `Ingredientes: ${ingredients.map((item) => `${item.name} ${item.amount}`).join("; ")}.`,
      profile.note,
      ...(profile.steps || []),
      ...(profile.source ? [profile.source] : [])
    ].join(" ")
  };
  state.recipes.push(recipe);
  addAudit("Receitas", "Receita calculada salva", recipe.name);
  saveState();
  button.textContent = "Receita salva";
  button.disabled = true;
}

function prepareProductionFromRecipe(profile, finalLiters, ingredients, size) {
  const bottleLiters = size === "500 ml" ? 0.5 : 0.275;
  const bottles = Math.floor(Number(finalLiters || 0) / bottleLiters);
  if (!bottles) {
    showValidationError("Quantidade insuficiente para preparar produção neste tamanho de garrafa.");
    return;
  }
  productionDraft = {
    batch: nextBatch(),
    date: today(),
    product: profile.product || profile.name,
    size,
    bottles,
    responsible: "Maria",
    notes: [
      "Preparado pela calculadora de receitas.",
      `Volume final estimado: ${roundStock(finalLiters)} L.`,
      `Envase escolhido: ${bottles} garrafas de ${size}.`,
      `Plano misto recomendado: ${mixedBottlingText(finalLiters)}.`,
      `Ingredientes: ${ingredients.map((item) => `${item.name} ${item.amount}`).join("; ")}.`,
      profile.note,
      ...(profile.steps || []),
      ...(profile.source ? [profile.source] : [])
    ].join(" ")
  };
  setScreen("production");
}

function stat(label, value) {
  return `<article class="stat"><small>${label}</small><strong>${value}</strong></article>`;
}

function reportTile(label, value) {
  return `<article class="report-tile"><small>${label}</small><strong>${value}</strong></article>`;
}

function bestSellingProduct() {
  const totals = new Map();
  state.sales.forEach((sale) => {
    const product = String(sale.product || "Produto").trim();
    totals.set(product, (totals.get(product) || 0) + Number(sale.quantity || 0));
  });
  return [...totals.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || "";
}

function calculateFinance() {
  const finance = {
    revenue: 0,
    received: 0,
    openReceivables: 0,
    cogs: 0,
    inventoryPurchases: 0,
    packaging: 0,
    transport: 0,
    marketing: 0,
    other: 0,
    openSupplierInvoices: 0,
    profit: 0,
    byProduct: new Map(),
    byCustomer: new Map(),
    byChannel: new Map()
  };

  state.sales.forEach((sale) => {
    const quantity = Number(sale.quantity || 0);
    const revenue = quantity * Number(sale.price || 0);
    const cost = quantity * estimatedUnitCost(sale.product);
    const profit = revenue - cost;
    finance.revenue += revenue;
    finance.cogs += cost;
    if (normalizeStockName(sale.paymentStatus || "Pendente") === "pago") finance.received += revenue;
    else finance.openReceivables += revenue;
    addFinanceGroup(finance.byProduct, sale.product || "Produto", revenue, profit);
    addFinanceGroup(finance.byCustomer, sale.customer || "Cliente", revenue, profit);
    addFinanceGroup(finance.byChannel, sale.channel || "Venda direta", revenue, profit);
  });

  state.purchases.forEach((purchase) => {
    const total = Number(purchase.total || 0);
    const transport = Number(purchase.transportCost || 0);
    const category = normalizeStockName(purchase.costCategory || purchase.item || "");
    if (category.includes("embalagem") || category.includes("garrafa") || category.includes("rotulo") || category.includes("tampa") || category.includes("lacre")) finance.packaging += total;
    else if (category.includes("transporte") || category.includes("frete")) finance.transport += total;
    else finance.inventoryPurchases += total;
    finance.transport += transport;
    const paid = Number(purchase.paidAmount || 0);
    if (normalizeStockName(purchase.paymentStatus || "Pendente") !== "pago") {
      finance.openSupplierInvoices += Math.max(0, total + transport - paid);
    }
  });

  state.expenses.forEach((expense) => {
    const amount = Number(expense.amount || 0);
    const category = normalizeStockName(expense.category || "");
    if (category.includes("marketing")) finance.marketing += amount;
    else if (category.includes("transporte") || category.includes("frete")) finance.transport += amount;
    else finance.other += amount;
  });

  finance.profit = finance.revenue - finance.cogs - finance.packaging - finance.transport - finance.marketing - finance.other;
  return finance;
}

function addFinanceGroup(map, key, revenue, profit) {
  const name = String(key || "Sem nome").trim() || "Sem nome";
  const current = map.get(name) || { revenue: 0, profit: 0 };
  current.revenue += revenue;
  current.profit += profit;
  map.set(name, current);
}

function estimatedUnitCost(productName) {
  const product = state.products.find((item) => normalizeStockName(item.name) === normalizeStockName(productName));
  if (product && Number(product.unitCost || 0) > 0) return Number(product.unitCost || 0);
  const text = normalizeStockName(productName);
  if (text.includes("maca com canela")) return 0;
  if (text.includes("500")) return 32;
  if (text.includes("creme")) return 30;
  return 25;
}

function card(title, detail, meta, badgeText, badgeType = "") {
  return element("article", "card", `
    <div class="card-header">
      <div>
        <p class="card-title">${escapeHTML(title)}</p>
        <p class="meta">${escapeHTML(detail)}</p>
        <p class="meta">${escapeHTML(meta || "")}</p>
      </div>
      ${badgeText ? `<span class="badge ${badgeType}">${escapeHTML(badgeText)}</span>` : ""}
    </div>
  `);
}

function emptyState(text) {
  return element("div", "empty-state", `<strong>${text}</strong><span>Use o formulário para criar o primeiro registro.</span>`);
}

function element(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  node.innerHTML = html;
  return node;
}

function sum(items, key) {
  return items.reduce((total, item) => total + Number(item[key] || 0), 0);
}

function formatBRL(value) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

function valueOf(root, selector) {
  return parseNumberInput(root.querySelector(selector)?.value);
}

function parseNumberInput(value) {
  const text = String(value ?? "")
    .replace(/\s/g, "")
    .replace(/[R$]/gi, "")
    .replace(/\.(?=\d{3}(?:\D|$))/g, "")
    .replace(",", ".")
    .trim();
  if (!text) return 0;
  const parsed = Number(text);
  return Number.isFinite(parsed) ? parsed : 0;
}

function parseOptionalNumberInput(value) {
  const text = String(value ?? "")
    .replace(/\s/g, "")
    .replace(/[R$]/gi, "")
    .replace(/\.(?=\d{3}(?:\D|$))/g, "")
    .replace(",", ".")
    .trim();
  if (!text) return null;
  const parsed = Number(text);
  return Number.isFinite(parsed) ? parsed : null;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function nextBatch() {
  const year = new Date().getFullYear();
  const count = state.production.length + 1;
  return `LG-${year}-${String(count).padStart(3, "0")}`;
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `limone-gramado-${today()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
