/* ------------------------------------------------------------------ */
/* ÍCONES — SVGs próprios (linha, 24x24), sem dependência externa.     */
/* Para usar um ícone em qualquer lugar do HTML:                       */
/*   <i class="icon" data-icon="star"></i>                             */
/* A lista de nomes disponíveis é a chave do objeto ICONS abaixo.      */
/* ------------------------------------------------------------------ */
const ICON_ATTRS = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';

const ICONS = {
  "chef-hat": `<circle cx="8" cy="8" r="3.6"/><circle cx="12" cy="6" r="4"/><circle cx="16" cy="8" r="3.6"/><path d="M6 11h12v2H6z"/><path d="M7 13v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6"/>`,
  "message-circle": `<path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4 8.3 8.3 0 0 1-3.8-.9L3 21l1.9-5.8a8.3 8.3 0 0 1-.9-3.8A8.4 8.4 0 0 1 12.6 3h.1a8.4 8.4 0 0 1 8.3 8.4z"/>`,
  "menu": `<line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/>`,
  "x": `<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>`,
  "star": `<path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9z"/>`,
  "salad": `<path d="M12 21c-4.4-2-7.5-6.3-7.5-10.5A7.5 7.5 0 0 1 12 3a7.5 7.5 0 0 1 7.5 7.5C19.5 14.7 16.4 19 12 21z"/><path d="M12 8v9"/>`,
  "cooking-pot": `<path d="M4 10h16v2.5A6.5 6.5 0 0 1 13.5 19h-3A6.5 6.5 0 0 1 4 12.5V10z"/><path d="M2 10h20"/><path d="M8 10V7.5A1.5 1.5 0 0 1 9.5 6"/><path d="M16 10V7.5A1.5 1.5 0 0 0 14.5 6"/><line x1="12" y1="2" x2="12" y2="5"/>`,
  "send": `<path d="M22 2L11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/>`,
  "map-pin": `<path d="M12 22s7.5-7.6 7.5-13a7.5 7.5 0 1 0-15 0C4.5 14.4 12 22 12 22z"/><circle cx="12" cy="9" r="2.6"/>`,
  "phone": `<path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.7 21 3 12.3 3 2.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1z"/>`,
  "clock": `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>`,
  "instagram": `<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/>`,
  "soup": `<path d="M3 11h18a9 6.2 0 0 1-18 0z"/><path d="M6 11V9a2 2 0 0 1 2-2"/><path d="M18 11V9a2 2 0 0 0-2-2"/><line x1="12" y1="3" x2="12" y2="5.5"/>`,
  "sparkles": `<path d="M12 3l1.4 4.2L18 8.7l-4.6 1.5L12 14.4l-1.4-4.2L6 8.7l4.6-1.5z"/><path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z"/>`,
  "truck": `<rect x="1" y="7" width="13" height="9" rx="1"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="6" cy="18.5" r="1.4"/><circle cx="17.5" cy="18.5" r="1.4"/>`,
  "wallet": `<rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20"/><circle cx="17" cy="14.5" r="1" fill="currentColor" stroke="none"/>`,
  "ice-cream": `<path d="M9 13a3 3 0 0 1-1-5.8A5 5 0 0 1 12 3a5 5 0 0 1 4 2.2A3 3 0 0 1 15 13z"/><path d="M9 13l3 8 3-8"/>`,
  "flame": `<path d="M12 2c1 3-3 4.2-3 8.3a3 3 0 0 0 6 0c0-1.8-1-2-1-3.5 2 1.2 4 3.8 4 6.7a6 6 0 0 1-12 0C6 8.4 9.2 6 12 2z"/>`,
  "utensils": `<path d="M6 2v7a2 2 0 0 0 4 0V2"/><path d="M8 9v13"/><path d="M17 2c-1.7 0-3 2.2-3 5v3h3v11"/>`,
  "chevron-down": `<path d="M6 9l6 6 6-6"/>`,
};

function renderIcon(name) {
  const body = ICONS[name] || ICONS["star"];
  return `<svg ${ICON_ATTRS}>${body}</svg>`;
}

function mountIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((el) => {
    if (!el.dataset.iconMounted) {
      el.innerHTML = renderIcon(el.getAttribute("data-icon"));
      el.dataset.iconMounted = "1";
    }
  });
}
