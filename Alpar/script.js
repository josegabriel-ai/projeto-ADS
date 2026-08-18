// ALPAR — interações do site
document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Menu mobile ---------- */
  const hamburger = document.querySelector(".hamburger");
  const navMobile = document.querySelector(".nav-mobile");
  const navLinks = document.querySelectorAll(".nav-mobile a");

  hamburger?.addEventListener("click", () => {
    navMobile.classList.toggle("open");
    hamburger.classList.toggle("active");
  });
  navLinks.forEach(link => {
    link.addEventListener("click", () => navMobile.classList.remove("open"));
  });

  /* ---------- Revelar seções ao rolar ---------- */
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

  /* ---------- Botões "Tenho interesse" preenchem a categoria no formulário ---------- */
  document.querySelectorAll("[data-interest]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const categoria = btn.getAttribute("data-interest");
      const select = document.getElementById("categoria-interesse");
      if (select) select.value = categoria;
      document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------- Formulário de inscrição -> WhatsApp ---------- */
  // Número provisório — ATUALIZAR com o WhatsApp oficial da ALPAR
  const WHATSAPP_NUMERO = "5566000000000"; // [INSERIR NÚMERO OFICIAL]

  const form = document.getElementById("form-inscricao");
  const successBox = document.getElementById("form-success");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const categoria = document.getElementById("categoria-interesse").value;
    const posicao = document.getElementById("posicao").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const texto =
      `Olá, ALPAR! Quero me inscrever para avaliação.%0A%0A` +
      `*Nome:* ${nome}%0A` +
      `*Idade:* ${idade}%0A` +
      `*Cidade:* ${cidade}%0A` +
      `*WhatsApp:* ${whatsapp}%0A` +
      `*Categoria de interesse:* ${categoria}%0A` +
      (posicao ? `*Posição:* ${posicao}%0A` : "") +
      (mensagem ? `*Sobre mim:* ${mensagem}` : "");

    const link = `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`;

    // Número de inscrição simples, apenas para referência visual do candidato
    const numero = "ALP-" + Math.floor(100000 + Math.random() * 900000);
    document.getElementById("numero-inscricao").textContent = numero;

    form.classList.add("hide");
    form.style.display = "none";
    successBox.classList.add("show");

    const whatsappBtn = document.getElementById("btn-whatsapp-envio");
    if (whatsappBtn) whatsappBtn.href = link;
  });

  /* ---------- Ano dinâmico no rodapé ---------- */
  const yearEl = document.getElementById("ano-atual");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header muda de leve ao rolar ---------- */
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) header.style.background = "rgba(10,12,20,.92)";
    else header.style.background = "rgba(10,12,20,.72)";
  });
});
