/* ------------------------------------------------------------------ */
/* LÓGICA DO SITE — renderização das listas e interatividade           */
/* ------------------------------------------------------------------ */

function placeholderArt(iconName, tone = "terracotta", extraClass = "") {
  return `
    <div class="placeholder-art tone-${tone} ${extraClass}" role="img" aria-label="Foto ilustrativa — substitua por uma foto real">
      <i class="icon" data-icon="${iconName}"></i>
      <span class="placeholder-tag">foto</span>
    </div>`;
}

/* ---------- links padrão do WhatsApp ---------- */
function setupWhatsAppLinks() {
  document.querySelectorAll(".js-wa-default").forEach((a) => {
    a.href = waLink(DEFAULT_MSG);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
}

/* ---------- header / menu mobile ---------- */
function setupHeader() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-mobile");
  const icon = document.getElementById("menu-icon");

  const closeMenu = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    icon.setAttribute("data-icon", "menu");
    icon.dataset.iconMounted = "";
    mountIcons(icon.parentElement);
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    icon.setAttribute("data-icon", isOpen ? "x" : "menu");
    icon.dataset.iconMounted = "";
    mountIcons(icon.parentElement);
  });

  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
}

/* ---------- destaques ---------- */
function renderHighlights() {
  const grid = document.getElementById("highlights-grid");
  grid.innerHTML = HIGHLIGHTS.map((h) => `
    <div class="highlight-card">
      <span class="highlight-icon"><i class="icon" data-icon="${h.icon}"></i></span>
      <h3 class="highlight-title">${h.title}</h3>
      <p class="highlight-desc">${h.desc}</p>
    </div>
  `).join("");
}

/* ---------- cardápio + filtros ---------- */
function productCardHTML(p) {
  const message = `Olá! Gostaria de pedir a ${p.name} por ${fmtPrice(p.price)}.`;
  return `
    <article class="product-card">
      <div class="product-media">
        ${placeholderArt(p.icon, "terracotta")}
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
      </div>
      <div class="ticket-perforation" aria-hidden="true"></div>
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-footer">
          <span class="product-price">${fmtPrice(p.price)}</span>
          <a href="${waLink(message)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" aria-label="Pedir ${p.name} pelo WhatsApp">Pedir</a>
        </div>
      </div>
    </article>`;
}

function renderMenu(activeCategory = "todos") {
  const grid = document.getElementById("menu-grid");
  const list = activeCategory === "todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory);
  grid.innerHTML = list.map(productCardHTML).join("");
}

function setupMenuFilters() {
  const row = document.getElementById("filter-row");
  row.innerHTML = CATEGORIES.map((c, i) => `
    <button role="tab" aria-selected="${i === 0}" class="filter-chip ${i === 0 ? "is-active" : ""}" data-cat="${c.key}">
      ${c.label}
    </button>
  `).join("");

  row.querySelectorAll(".filter-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      row.querySelectorAll(".filter-chip").forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      renderMenu(btn.dataset.cat);
    });
  });

  renderMenu("todos");
}

/* ---------- como pedir ---------- */
function renderSteps() {
  const grid = document.getElementById("steps-grid");
  grid.innerHTML = STEPS.map((s) => `
    <div class="step-card">
      <span class="step-number">${String(s.n).padStart(2, "0")}</span>
      <h3 class="step-title">${s.title}</h3>
      <p class="step-desc">${s.desc}</p>
    </div>
  `).join("");
}

/* ---------- galeria + lightbox ---------- */
function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  grid.innerHTML = GALLERY.map((g, i) => `
    <button class="gallery-item" data-index="${i}" aria-label="Ampliar foto: ${g.label}">
      ${placeholderArt(g.icon, g.tone)}
      <span class="gallery-caption">${g.label}</span>
    </button>
  `).join("");

  const lightbox = document.getElementById("lightbox");
  const artWrap = document.getElementById("lightbox-art");
  const caption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");

  const openAt = (i) => {
    const item = GALLERY[i];
    artWrap.className = `placeholder-art tone-${item.tone} lightbox-art`;
    artWrap.innerHTML = `<i class="icon" data-icon="${item.icon}"></i><span class="placeholder-tag">foto</span>`;
    mountIcons(artWrap);
    caption.textContent = item.label;
    lightbox.classList.add("is-open");
  };
  const close = () => lightbox.classList.remove("is-open");

  grid.querySelectorAll(".gallery-item").forEach((btn) => {
    btn.addEventListener("click", () => openAt(Number(btn.dataset.index)));
  });
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* ---------- depoimentos ---------- */
function renderTestimonials() {
  const grid = document.getElementById("testimonials-grid");
  grid.innerHTML = TESTIMONIALS.map((t) => `
    <div class="testimonial-card">
      <div class="stars" aria-hidden="true">${"<i class=\"icon\" data-icon=\"star\"></i>".repeat(5)}</div>
      <p class="testimonial-text">&ldquo;${t.text}&rdquo;</p>
      <span class="testimonial-name">— ${t.name}</span>
    </div>
  `).join("");
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.style.scrollBehavior = "smooth";

  setupWhatsAppLinks();
  setupHeader();
  renderHighlights();
  setupMenuFilters();
  renderSteps();
  renderGallery();
  renderTestimonials();

  mountIcons(document);
});
