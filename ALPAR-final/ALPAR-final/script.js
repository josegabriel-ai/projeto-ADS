// ALPAR — Associação Esportiva, Cultural e Social
// Interações do site
document.addEventListener("DOMContentLoaded", () => {

  /* ============================================================
     WhatsApp — configuração central
     ============================================================ */
  // ALTERAR PARA O WHATSAPP OFICIAL DA ALPAR
  const WHATSAPP_NUMERO = "5566996578970";

  // Gera o link do WhatsApp a partir de um número (opcional) e uma mensagem
  function whatsappLink(mensagem, numero) {
    const alvo = numero || WHATSAPP_NUMERO;
    return `https://wa.me/${alvo}?text=${encodeURIComponent(mensagem)}`;
  }

  // Qualquer elemento com [data-whatsapp-msg] vira um link para o WhatsApp
  document.querySelectorAll("[data-whatsapp-msg]").forEach(el => {
    const msg = el.getAttribute("data-whatsapp-msg");
    el.setAttribute("href", whatsappLink(msg));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  /* ============================================================
     Menu mobile
     ============================================================ */
  const hamburger = document.querySelector(".hamburger");
  const navMobile = document.querySelector(".nav-mobile");
  const navLinks = document.querySelectorAll(".nav-mobile a");

  hamburger?.addEventListener("click", () => {
    const isOpen = navMobile.classList.toggle("open");
    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    document.body.classList.toggle("menu-open", isOpen);
  });
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("open");
      hamburger?.classList.remove("active");
      hamburger?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMobile?.classList.contains("open")) {
      navMobile.classList.remove("open");
      hamburger?.classList.remove("active");
      hamburger?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980 && navMobile?.classList.contains("open")) {
      navMobile.classList.remove("open");
      hamburger?.classList.remove("active");
      hamburger?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    }
  });

  /* ============================================================
     Revelar seções ao rolar
     ============================================================ */
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  /* ============================================================
     Tabs (Esporte / Ação Social / Cultura)
     ============================================================ */
  document.querySelectorAll(".tabs").forEach(tabGroup => {
    const buttons = tabGroup.querySelectorAll(".tab-btn");
    const panels = tabGroup.querySelectorAll(".tab-panel");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-tab-target");

        buttons.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");

        panels.forEach(panel => {
          panel.classList.toggle("active", panel.id === targetId);
        });
      });
    });
  });

  /* ============================================================
     Galeria — filtros e lightbox
     ============================================================ */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      galleryItems.forEach(item => {
        const show = filter === "todos" || item.getAttribute("data-category") === filter;
        item.classList.toggle("hide", !show);
      });
    });
  });

  // Cria o lightbox uma única vez e injeta no final do body
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <div class="lightbox-box">
      <button class="lightbox-close" aria-label="Fechar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
      <svg class="lightbox-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M21 16l-4.5-4.5L9 19"/></svg>
      <p class="lightbox-caption"></p>
    </div>`;
  document.body.appendChild(lightbox);

  const lightboxCaption = lightbox.querySelector(".lightbox-caption");
  const lightboxClose = lightbox.querySelector(".lightbox-close");

  function openLightbox(caption) {
    lightboxCaption.textContent = caption || "";
    lightbox.classList.add("open");
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
  }

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      openLightbox(item.getAttribute("data-caption"));
    });
  });
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
  });

  /* ============================================================
     Botões "Tenho interesse" / CTAs de voleibol preenchem o formulário
     ============================================================ */
  document.querySelectorAll("[data-interest]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const categoria = btn.getAttribute("data-interest");

      const tipoSelect = document.getElementById("tipo-interesse");
      if (tipoSelect) tipoSelect.value = "Atleta";
      toggleAtletaFields();

      const catSelect = document.getElementById("categoria-interesse");
      if (catSelect && categoria !== "Voleibol") catSelect.value = categoria;

      document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ============================================================
     Formulário "Faça parte" -> WhatsApp
     ============================================================ */
  const tipoInteresseSelect = document.getElementById("tipo-interesse");
  const atletaFields = document.getElementById("atleta-fields");

  function toggleAtletaFields() {
    if (!tipoInteresseSelect || !atletaFields) return;
    const isAtleta = tipoInteresseSelect.value === "Atleta";
    atletaFields.style.display = isAtleta ? "block" : "none";
  }
  tipoInteresseSelect?.addEventListener("change", toggleAtletaFields);
  toggleAtletaFields();

  const form = document.getElementById("form-inscricao");
  const successBox = document.getElementById("form-success");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const tipo = document.getElementById("tipo-interesse").value;
    const nome = document.getElementById("nome").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const categoria = document.getElementById("categoria-interesse")?.value || "";
    const posicao = document.getElementById("posicao")?.value.trim() || "";
    const mensagem = document.getElementById("mensagem").value.trim();

    let texto =
      `Olá, ALPAR! Quero participar como *${tipo}*.%0A%0A` +
      `*Nome:* ${nome}%0A` +
      `*Idade:* ${idade}%0A` +
      `*Cidade:* ${cidade}%0A` +
      `*WhatsApp:* ${whatsapp}%0A`;

    if (tipo === "Atleta") {
      if (categoria) texto += `*Categoria de interesse:* ${categoria}%0A`;
      if (posicao) texto += `*Posição:* ${posicao}%0A`;
    }
    if (mensagem) texto += `*Mensagem:* ${mensagem}`;

    const link = `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`;

    // Número de referência simples, apenas para referência visual de quem enviou
    const numero = "ALP-" + Math.floor(100000 + Math.random() * 900000);
    document.getElementById("numero-inscricao").textContent = numero;

    form.classList.add("hide");
    form.style.display = "none";
    successBox.classList.add("show");

    const whatsappBtn = document.getElementById("btn-whatsapp-envio");
    if (whatsappBtn) whatsappBtn.href = link;
  });

  /* ============================================================
     Ano dinâmico no rodapé
     ============================================================ */
  const yearEl = document.getElementById("ano-atual");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ============================================================
     Header muda de leve ao rolar
     ============================================================ */
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) header.style.background = "rgba(10,12,20,.92)";
    else header.style.background = "rgba(10,12,20,.72)";
  });
});
