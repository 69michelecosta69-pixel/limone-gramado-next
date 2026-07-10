const STORAGE_KEY = "limone-gramado-v1";
const SESSION_KEY = "limone-gramado-session";
const API_BASE = "";
const OFFLINE_ONLY = false;
const AUTO_REFRESH_MS = 10000;

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
      total: 96
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
      price: 49
    }
  ],
  contacts: [
    {
      id: crypto.randomUUID(),
      name: "Restaurante exemplo",
      type: "Restaurante",
      phone: "",
      notes: "Contato para apresentação"
    }
  ],
  tasks: [
    {
      id: crypto.randomUUID(),
      title: "Conferir estoque de garrafas",
      owner: "Bia",
      due: "2026-07-12",
      done: false
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
let currentScreen = "home";
let deferredInstallPrompt = null;
let session = loadSession();
let syncStatus = session ? "Conectando..." : "Faça login para sincronizar.";
let autoRefreshTimer = null;

const app = document.getElementById("app");
const screenTitle = document.getElementById("screen-title");
const installButton = document.getElementById("install-button");
const userPill = document.getElementById("user-pill");
const switchUserButton = document.getElementById("switch-user-button");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  installButton.hidden = true;
});

switchUserButton.addEventListener("click", () => renderLogin("", true));

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    setScreen(button.dataset.screen);
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

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
    return JSON.parse(saved);
  } catch {
    return null;
  }
}

async function initApp() {
  updateUserPill();
  if (!session) {
    renderLogin();
    return;
  }
  await loadFromServer();
  startAutoRefresh();
  setScreen("home");
}

function updateUserPill() {
  if (!session) {
    userPill.hidden = true;
    userPill.textContent = "";
    switchUserButton.hidden = true;
    return;
  }
  userPill.hidden = false;
  userPill.textContent = session.user;
  switchUserButton.hidden = false;
}

function renderLogin(error = "", canCancel = false) {
  screenTitle.textContent = "Login";
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
        <input id="login-pin" name="pin" inputmode="numeric" autocomplete="current-password" required>
      </div>
      <div class="actions field full">
        <button class="button" type="submit">Entrar</button>
        ${canCancel ? `<button class="button secondary" type="button" id="cancel-login">Cancelar</button>` : ""}
      </div>
    </form>
    <p class="sync-line">PIN inicial do protótipo: <strong>0427</strong></p>
  `);
  login.querySelector("#login-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await loginWithPin(String(formData.get("user")), String(formData.get("pin")));
  });
  const cancelButton = login.querySelector("#cancel-login");
  if (cancelButton) {
    cancelButton.addEventListener("click", () => setScreen(currentScreen));
  }
  app.append(login);
}

async function loginWithPin(user, pin) {
  if (OFFLINE_ONLY) {
    if (pin !== "0427") {
      renderLogin("PIN incorreto.");
      return;
    }
    const names = { maria: "Maria", bia: "Bia", michele: "Michele" };
    session = { token: "offline", user: names[user] || "LIMONE" };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    syncStatus = `Modo offline: dados salvos no celular de ${session.user}.`;
    updateUserPill();
    setScreen("home");
    return;
  }
  try {
    const response = await fetch(`${API_BASE}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, pin })
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
    return "Não conectou ao servidor. Verifique Wi-Fi e servidor LIMONE.";
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    syncStatus = `Sincronizado como ${payload.user}`;
  } catch (error) {
    syncStatus = "Sem conexão com o servidor. Mostrando dados deste aparelho.";
  }
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
        body: JSON.stringify({ data: state })
      });
      syncStatus = `Sincronizado ${new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`;
      render();
    } catch (error) {
      syncStatus = "Não foi possível sincronizar. Os dados ficaram salvos neste aparelho.";
      render();
    }
  }, 250);
}

function startAutoRefresh() {
  stopAutoRefresh();
  autoRefreshTimer = setInterval(async () => {
    if (!session || document.hidden) return;
    await loadFromServer();
    if (session && !isEditing()) {
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
    throw new Error(payload.error || "Erro de sincronização");
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
  currentScreen = screen;
  screenTitle.textContent = titles[screen];
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.screen === screen);
  });
  render();
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

  fragment.append(element("section", "grid", `
    ${stat("Garrafas produzidas", totalBottles)}
    ${stat("Vendas registradas", monthSales)}
    ${stat("Receita", formatBRL(revenue))}
    ${stat("Alertas de estoque", lowStock)}
  `));

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

  fragment.append(renderDashboardEditor({
    calculatedBottles,
    calculatedSales,
    calculatedRevenue,
    calculatedLowStock
  }));
  fragment.append(renderTaskPreview());
  return fragment;
}

function dashboardValue(key, fallback) {
  if (!state.dashboard) state.dashboard = structuredClone(initialData.dashboard);
  const value = state.dashboard[key];
  return value === "" || value === null || value === undefined ? fallback : Number(value);
}

function renderDashboardEditor(calculated) {
  if (!state.dashboard) state.dashboard = structuredClone(initialData.dashboard);
  const section = element("form", "form-card", `
    <h2>Editar início</h2>
    <div class="form-grid">
      <div class="field">
        <label for="dashboard-bottles">Garrafas produzidas</label>
        <input id="dashboard-bottles" inputmode="numeric" type="number" value="${escapeHTML(state.dashboard.bottles)}" placeholder="${calculated.calculatedBottles}">
      </div>
      <div class="field">
        <label for="dashboard-sales">Vendas registradas</label>
        <input id="dashboard-sales" inputmode="numeric" type="number" value="${escapeHTML(state.dashboard.sales)}" placeholder="${calculated.calculatedSales}">
      </div>
      <div class="field">
        <label for="dashboard-revenue">Receita</label>
        <input id="dashboard-revenue" inputmode="decimal" type="number" step="0.01" value="${escapeHTML(state.dashboard.revenue)}" placeholder="${calculated.calculatedRevenue}">
      </div>
      <div class="field">
        <label for="dashboard-stock-alerts">Alertas de estoque</label>
        <input id="dashboard-stock-alerts" inputmode="numeric" type="number" value="${escapeHTML(state.dashboard.stockAlerts)}" placeholder="${calculated.calculatedLowStock}">
      </div>
    </div>
    <div class="actions">
      <button class="button" type="submit" id="save-dashboard">Salvar início</button>
      <button class="button secondary" type="button" id="reset-dashboard">Automático</button>
    </div>
    <p class="meta">Campos vazios usam o cálculo automático dos registros.</p>
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
    state.dashboard = structuredClone(initialData.dashboard);
    saveState();
    render();
  });
  return section;
}

function renderProduction() {
  return screenWithListAndForm({
    listTitle: "Últimas produções",
    collection: "production",
    emptyText: "Nenhuma produção cadastrada.",
    itemRenderer: (item) => card(item.batch, `${item.product} - ${item.bottles} garrafas`, item.date, item.responsible),
    formTitle: "Nova produção",
    fields: [
      field("batch", "Número do lote", nextBatch()),
      field("date", "Data", today(), "date"),
      field("product", "Produto", "Limoncello"),
      field("bottles", "Garrafas", "", "number"),
      field("responsible", "Responsável", "Maria"),
      field("notes", "Observações", "", "textarea", true, true)
    ]
  });
}

function renderPurchases() {
  return screenWithListAndForm({
    listTitle: "Compras recentes",
    collection: "purchases",
    emptyText: "Nenhuma compra cadastrada.",
    itemRenderer: (item) => card(item.item, `${item.quantity} ${item.unit} - ${formatBRL(item.total)}`, item.date, item.supplier),
    formTitle: "Nova compra",
    fields: [
      field("date", "Data", today(), "date"),
      field("supplier", "Fornecedor", ""),
      field("item", "Item", ""),
      field("quantity", "Quantidade", "", "number"),
      field("unit", "Unidade", "un"),
      field("total", "Valor total", "", "number")
    ]
  });
}

function renderStock() {
  return screenWithListAndForm({
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
  });
}

function renderSales() {
  return screenWithListAndForm({
    listTitle: "Vendas",
    collection: "sales",
    emptyText: "Nenhuma venda cadastrada.",
    itemRenderer: (item) => card(item.customer, `${item.quantity} x ${item.product}`, item.date, formatBRL(Number(item.quantity) * Number(item.price))),
    formTitle: "Nova venda",
    fields: [
      field("date", "Data", today(), "date"),
      field("customer", "Cliente", ""),
      field("product", "Produto", "Limoncello 275 ml"),
      field("quantity", "Quantidade", "", "number"),
      field("price", "Preço por unidade", "", "number")
    ]
  });
}

function renderMore() {
  const fragment = document.createDocumentFragment();
  fragment.append(renderContacts());
  fragment.append(renderTasks());
  fragment.append(renderDataTools());
  return fragment;
}

function renderContacts() {
  return screenWithListAndForm({
    listTitle: "Contatos",
    collection: "contacts",
    emptyText: "Nenhum contato cadastrado.",
    itemRenderer: (item) => card(item.name, item.type, item.phone || "Sem telefone", item.notes),
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
      <p class="meta">Os registros sincronizam com o servidor e também ficam salvos neste aparelho como cópia.</p>
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
    if (!confirm("Apagar todos os dados compartilhados?")) return;
    state = structuredClone(initialData);
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
  const items = [...state[config.collection]].reverse();
  if (!items.length) {
    list.append(emptyState(config.emptyText));
  } else {
    items.forEach((item) => {
      const node = config.itemRenderer(item);
      const actions = element("div", "actions", `<button class="button danger" type="button">Excluir</button>`);
      actions.querySelector("button").addEventListener("click", () => removeItem(config.collection, item.id));
      node.append(actions);
      list.append(node);
    });
  }
  listSection.append(list);
  section.append(listSection);
  section.append(buildForm(config.formTitle, config.fields, (values) => addItem(config.collection, values)));
  return section;
}

function buildForm(title, fields, onSubmit) {
  const form = element("form", "form-card", `<h2>${title}</h2><div class="form-grid"></div><div class="actions"><button class="button" type="submit">Salvar</button></div>`);
  const grid = form.querySelector(".form-grid");
  fields.forEach((fieldConfig) => grid.append(buildField(fieldConfig)));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const values = { id: crypto.randomUUID() };
    fields.forEach((fieldConfig) => {
      const value = formData.get(fieldConfig.name);
      values[fieldConfig.name] = fieldConfig.type === "number" ? Number(value || 0) : String(value || "").trim();
    });
    onSubmit(values);
    form.reset();
  });
  return form;
}

function buildField(config) {
  const id = `${config.name}-${Math.random().toString(16).slice(2)}`;
  const wrapper = element("div", `field ${config.full ? "full" : ""}`, `<label for="${id}">${config.label}</label>`);
  const input = document.createElement(config.type === "textarea" ? "textarea" : "input");
  input.id = id;
  input.name = config.name;
  if (config.type !== "textarea") input.type = config.type || "text";
  input.value = config.value || "";
  input.required = !config.optional;
  wrapper.append(input);
  return wrapper;
}

function field(name, label, value = "", type = "text", full = false, optional = false) {
  return { name, label, value, type, full, optional };
}

function addItem(collection, values) {
  state[collection].push(values);
  saveState();
  render();
}

function removeItem(collection, id) {
  state[collection] = state[collection].filter((item) => item.id !== id);
  saveState();
  render();
}

function stat(label, value) {
  return `<article class="stat"><small>${label}</small><strong>${value}</strong></article>`;
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
