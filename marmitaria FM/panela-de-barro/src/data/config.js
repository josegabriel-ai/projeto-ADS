/* ------------------------------------------------------------------ */
/* CONFIGURAÇÃO CENTRAL                                               */
/* Altere aqui: nome, WhatsApp, telefone, endereço, horário, Instagram */
/* Nenhum outro arquivo deve ter esses dados "hardcoded".              */
/* ------------------------------------------------------------------ */
export const CONFIG = {
  name: "Panela de Barro",
  tagline: "Marmitaria & Comida Caseira",
  // Formato do WhatsApp: 55 + DDD + número, somente dígitos
  whatsapp: "5562999999999",
  phoneDisplay: "(62) 9 9999-9999",
  address: "Rua Exemplo, 123 — Setor Centro, Goiânia - GO",
  hours: "Segunda a sábado — 11h às 14h",
  instagram: "@paneladebarro",
  mapsQuery: "Rua Exemplo, 123, Centro, Goiânia - GO",
};

export const waLink = (message) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

export const DEFAULT_MSG = `Olá! Vim pelo site da ${CONFIG.name} e gostaria de fazer um pedido.`;

export const fmtPrice = (n) => `R$ ${n.toFixed(2).replace(".", ",")}`;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];
