/* =========================================================
   DADOS — edite aqui para trocar habilidades, projetos e trajetória
   ========================================================= */

const SKILLS = [
  {
    category: "Programação",
    items: [
      { name: "Python", status: "estudando" },
      { name: "SQL", status: "estudando" },
      { name: "JavaScript", status: "estudando" },
    ],
  },
  {
    category: "Front-end",
    items: [
      { name: "HTML5", status: "conhecimento" },
      { name: "CSS3", status: "conhecimento" },
    ],
  },
  {
    category: "Ferramentas",
    items: [
      { name: "Git & GitHub", status: "conhecimento" },
      { name: "VS Code", status: "conhecimento" },
      { name: "Excel / Pacote Office", status: "conhecimento" },
      { name: "SAP", status: "conhecimento" },
    ],
  },
  {
    category: "Em desenvolvimento",
    items: [
      { name: "Inteligência Artificial", status: "explorando" },
      { name: "Automação com Python", status: "explorando" },
      { name: "Inglês técnico", status: "estudando" },
    ],
  },
];

const STATUS_LABEL = {
  estudando: "estudando",
  conhecimento: "conhecimento",
  explorando: "explorando",
};

const PROJECTS = [
  {
    name: "Sistema de Gerenciamento Acadêmico",
    desc: "Placeholder de projeto — CRUD para cadastro de alunos, turmas e notas, pensado como exercício típico de ADS.",
    tags: ["React", "Node.js", "PostgreSQL"],
    demoUrl: "#",
    codeUrl: "#",
    icon: "grid",
  },
  {
    name: "Dashboard de Análise de Dados",
    desc: "Placeholder de projeto — painel para visualizar métricas e gráficos a partir de uma base de dados de exemplo.",
    tags: ["Python", "Pandas", "TypeScript"],
    demoUrl: "#",
    codeUrl: "#",
    icon: "chart",
  },
  {
    name: "Assistente de Automação com IA",
    desc: "Placeholder de projeto — script que automatiza uma tarefa repetitiva usando uma API de IA.",
    tags: ["Python", "API de IA", "Automação"],
    demoUrl: "#",
    codeUrl: "#",
    icon: "spark",
  },
];

const TIMELINE = [
  {
    eyebrow: "concluído",
    title: "Técnico em Informática — IFMT",
    desc: "Formação técnica com contato com informática, lógica de programação, sistemas e fundamentos de tecnologia.",
    current: false,
  },
  {
    eyebrow: "experiência atual",
    title: "Jovem Aprendiz — Bunge",
    desc: "Atuação no almoxarifado ligado à manutenção, trabalhando com recebimento e entrega de materiais, organização de estoque, planilhas, sistemas, compras e conferência de notas fiscais.",
    current: true,
  },
  {
    eyebrow: "em andamento",
    title: "Análise e Desenvolvimento de Sistemas",
    desc: "Graduação focada no desenvolvimento das minhas competências em programação, banco de dados, sistemas e desenvolvimento de software.",
    current: true,
  },
  {
    eyebrow: "em desenvolvimento",
    title: "Projetos pessoais em tecnologia",
    desc: "Desenvolvimento de projetos utilizando HTML, CSS, JavaScript, Git, GitHub, Python e outras tecnologias que estou estudando.",
    current: true,
  },
  {
    eyebrow: "objetivo",
    title: "Estágio em Tecnologia",
    desc: "Busco uma oportunidade para aplicar meus conhecimentos, desenvolver projetos reais e avançar profissionalmente nas áreas de desenvolvimento, dados e Inteligência Artificial.",
    current: true,
  },
];
const ICONS = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 20V10M12 20V4M20 20v-7" stroke-linecap="round"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" stroke-linecap="round"/></svg>',
};

/* =========================================================
   RENDER — habilidades
   ========================================================= */
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(
    (group) => `
    <div class="skill-category reveal">
      <h3 class="skill-category-title">${group.category}</h3>
      <div class="skill-list">
        ${group.items
          .map(
            (item) => `
          <div class="skill-item">
            <span class="skill-name">${item.name}</span>
            <span class="skill-badge badge-${item.status}">${STATUS_LABEL[item.status]}</span>
          </div>`
          )
          .join("")}
      </div>
    </div>`
  ).join("");
}

/* =========================================================
   RENDER — projetos
   ========================================================= */
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <article class="project-card reveal">
      <div class="project-preview">
        <span class="project-placeholder-tag">exemplo — substitua</span>
        ${ICONS[p.icon]}
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.name}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
        </div>
        <div class="project-actions">
          <a class="btn btn-outline" href="${p.demoUrl}" target="_blank" rel="noopener noreferrer">Ver projeto</a>
          <a class="btn btn-outline" href="${p.codeUrl}" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </article>`
  ).join("");
}

/* =========================================================
   RENDER — timeline
   ========================================================= */
function renderTimeline() {
  const list = document.getElementById("timeline");
  list.innerHTML = TIMELINE.map(
    (t) => `
    <li class="timeline-item reveal ${t.current ? "is-current" : ""}">
      <span class="timeline-dot"></span>
      <span class="timeline-eyebrow">${t.eyebrow}</span>
      <h3 class="timeline-title">${t.title}</h3>
      <p class="timeline-desc">${t.desc}</p>
    </li>`
  ).join("");
}

/* =========================================================
   NAV — scroll state, mobile menu, active link
   ========================================================= */
function initNav() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initActiveSection() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const statusEl = document.getElementById("statusSection");

  const fileNames = {
    sobre: "sobre-mim.md",
    habilidades: "habilidades.ts",
    projetos: "projetos.tsx",
    trajetoria: "trajetoria.log",
    objetivo: "objetivo.env",
    contato: "contato.sh",
    hero: "hero.tsx",
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.dataset.section === id);
        });

        if (statusEl && fileNames[id]) {
          statusEl.textContent = fileNames[id];
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  items.forEach((item) => observer.observe(item));
}

/* =========================================================
   BACK TO TOP
   ========================================================= */
function initToTop() {
  const btn = document.getElementById("toTop");
  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("visible", window.scrollY > 480);
    },
    { passive: true }
  );
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =========================================================
   HERO TYPING EFFECT
   ========================================================= */
function initTyping() {
  const el = document.getElementById("typedCmd");
  if (!el) return;
  const text = "./iniciar-carreira.sh";
  let i = 0;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = text;
    return;
  }

  function tick() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(tick, 55);
    }
  }
  tick();
}

/* =========================================================
   FOOTER YEAR
   ========================================================= */
function initYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* =========================================================
   PLACEHOLDER LINK GUARD
   Avoids dead "#" navigation surprising the user; keeps behavior
   obvious while GitHub/LinkedIn/email haven't been set yet.
   ========================================================= */
function initPlaceholderGuards() {
  document.querySelectorAll("[data-placeholder]").forEach((el) => {
    el.addEventListener("click", (e) => {
      if (el.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderTimeline();
  initNav();
  initActiveSection();
  initReveal();
  initToTop();
  initTyping();
  initYear();
  initPlaceholderGuards();
});
