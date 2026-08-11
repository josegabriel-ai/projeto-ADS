/* ------------------------------------------------------------------ */
/* CONFIGURAÇÃO CENTRAL                                                */
/* Altere aqui: nome, WhatsApp, telefone, endereço, horário, Instagram */
/* Nenhum outro arquivo deve ter esses dados espalhados.                */
/* ------------------------------------------------------------------ */
const CONFIG = {
  name: "Panela de Barro",
  // Formato do WhatsApp: 55 + DDD + número, somente dígitos
  whatsapp: "5562999999999",
  phoneDisplay: "(62) 9 9999-9999",
  address: "Rua Exemplo, 123 — Setor Centro, Goiânia - GO",
  hours: "Segunda a sábado — 11h às 14h",
};

const DEFAULT_MSG = `Olá! Vim pelo site da ${CONFIG.name} e gostaria de fazer um pedido.`;

function waLink(message) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

function fmtPrice(n) {
  return `R$ ${n.toFixed(2).replace(".", ",")}`;
}

/* ------------------------------------------------------------------ */
/* CARDÁPIO — edite produtos, categorias, preços e descrições aqui.    */
/* "icon" usa os nomes definidos em js/icons.js                        */
/* ------------------------------------------------------------------ */
const CATEGORIES = [
  { key: "todos", label: "Todos" },
  { key: "marmitas", label: "Marmitas" },
  { key: "pratos", label: "Pratos" },
  { key: "acompanhamentos", label: "Acompanhamentos" },
  { key: "bebidas", label: "Bebidas" },
  { key: "sobremesas", label: "Sobremesas" },
];

const PRODUCTS = [
  { id: 1, name: "Marmita Tradicional", category: "marmitas", price: 18.9, desc: "Arroz, feijão, carne, salada e acompanhamento.", icon: "soup", badge: "Mais pedido" },
  { id: 2, name: "Marmita Especial", category: "marmitas", price: 24.9, desc: "Arroz, feijão, bife acebolado, batata frita e salada.", icon: "soup" },
  { id: 3, name: "Marmita Fit", category: "marmitas", price: 22.9, desc: "Arroz integral, frango grelhado, legumes no vapor e salada.", icon: "salad", badge: "Leve" },
  { id: 4, name: "Frango Grelhado", category: "pratos", price: 21.9, desc: "Arroz, feijão, frango grelhado temperado e legumes salteados.", icon: "chef-hat" },
  { id: 5, name: "Feijoada Completa", category: "pratos", price: 26.9, desc: "Feijoada tradicional com arroz, couve, farofa e laranja.", icon: "flame", badge: "Sexta é dia de" },
  { id: 6, name: "Arroz e Feijão (porção)", category: "acompanhamentos", price: 8.9, desc: "Porção generosa do nosso arroz soltinho com feijão caseiro.", icon: "utensils" },
  { id: 7, name: "Farofa Especial", category: "acompanhamentos", price: 6.9, desc: "Farofa crocante com bacon, ovo e temperinhos da casa.", icon: "utensils" },
  { id: 8, name: "Suco Natural 500ml", category: "bebidas", price: 7.9, desc: "Feito na hora, sabores variados conforme a fruta do dia.", icon: "ice-cream" },
  { id: 9, name: "Refrigerante Lata", category: "bebidas", price: 6.0, desc: "Gelado, para acompanhar sua refeição.", icon: "ice-cream" },
  { id: 10, name: "Pudim de Leite", category: "sobremesas", price: 9.9, desc: "Cremoso, feito artesanalmente todos os dias.", icon: "ice-cream", badge: "Feito em casa" },
  { id: 11, name: "Brigadeiro (unidade)", category: "sobremesas", price: 3.5, desc: "O clássico docinho caseiro, na medida certa.", icon: "ice-cream" },
];

/* ------------------------------------------------------------------ */
/* CONTEÚDO ESTÁTICO — destaques, passos, galeria, depoimentos         */
/* ------------------------------------------------------------------ */
const HIGHLIGHTS = [
  { icon: "sparkles", title: "Comida fresquinha", desc: "Preparada diariamente com ingredientes selecionados." },
  { icon: "cooking-pot", title: "Tempero caseiro", desc: "Aquele sabor de comida feita em casa." },
  { icon: "truck", title: "Entrega rápida", desc: "Receba sua refeição com praticidade." },
  { icon: "wallet", title: "Preço justo", desc: "Qualidade e sabor por um preço que cabe no bolso." },
];

const STEPS = [
  { n: 1, title: "Escolha sua marmita", desc: "Navegue pelo cardápio e veja fotos, descrições e preços." },
  { n: 2, title: "Clique em \u201cPedir\u201d", desc: "Cada prato te leva direto para o WhatsApp já com a mensagem pronta." },
  { n: 3, title: "Envie seu pedido", desc: "Confirme os detalhes com a gente e combine a forma de pagamento." },
  { n: 4, title: "Receba ou retire", desc: "Sua marmita quentinha chega até você, ou é só passar para retirar." },
];

const GALLERY = [
  { label: "Marmita tradicional", icon: "soup", tone: "terracotta" },
  { label: "Marmita especial servida", icon: "chef-hat", tone: "herb" },
  { label: "Preparo na cozinha", icon: "cooking-pot", tone: "gold" },
  { label: "Ingredientes selecionados", icon: "salad", tone: "terracotta" },
  { label: "Pudim caseiro", icon: "ice-cream", tone: "herb" },
  { label: "Fachada da marmitaria", icon: "utensils", tone: "gold" },
  { label: "Feijoada fumegante", icon: "flame", tone: "terracotta" },
  { label: "Salada fresca do dia", icon: "salad", tone: "herb" },
];

const TESTIMONIALS = [
  { name: "João", text: "Comida muito boa e chegou quentinha. O tempero é excelente!" },
  { name: "Mariana", text: "Uma das melhores marmitas da cidade. Sempre peço!" },
  { name: "Lucas", text: "Preço justo, comida saborosa e atendimento excelente." },
];
