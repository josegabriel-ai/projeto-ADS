/* ------------------------------------------------------------------ */
/* CONFIGURAÇÃO CENTRAL                                                */
/* Altere aqui: nome, WhatsApp, telefone, endereço, horário, Instagram */
/* Nenhum outro arquivo deve ter esses dados espalhados.                */
/* ------------------------------------------------------------------ */
const CONFIG = {
  name: "Marmitaria F&M",
  // Formato do WhatsApp: 55 + DDD + número, somente dígitos
  whatsapp: "5566996700604",
  phoneDisplay: "(66) 9 96700604",
  address: "Rua Everton denis da silva,04 - Mathias Neves 2, Rondonópolis - MT",
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
  { id: 1, name: "Marmita Tamanho P", category: "marmitas", price: 18.9, desc: "Arroz, feijão, carne, salada e acompanhamento.", image: "assets/marmita-p.jpg", icon: "soup", badge: "Mais pedido" },
  { id: 2, name: "Marmita Tamanho M", category: "marmitas", price: 24.9, desc: "Arroz, feijão, bife acebolado, batata frita e salada.", image: "assets/marmita-m.jpg", icon: "soup" },
  { id: 3, name: "Marmita Fit", category: "marmitas", price: 22.9, desc: "Arroz integral, frango grelhado, legumes no vapor e salada.", image: "assets/marmita-fit.jpg", icon: "salad", badge: "Leve" },
  { id: 4, name: "Marmita Tamanho G", category: "pratos", price: 21.9, desc: "Arroz, feijão, frango grelhado temperado e legumes salteados.", image: "assets/marmita-g.jpg", icon: "chef-hat" },
  { id: 8, name: "Suco Natural 500ml", category: "bebidas", price: 7.9, desc: "Feito na hora, sabores variados conforme a fruta do dia.", image: "assets/suco-natural.jpg", icon: "ice-cream" },
  { id: 9, name: "Refrigerante Lata", category: "bebidas", price: 6.0, desc: "Gelado, para acompanhar sua refeição.", image: "assets/refrigerante.jpg", icon: "ice-cream" },
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
  { label: "Marmita Tamanho P", image: "assets/marmita-p.jpg", icon: "soup", tone: "terracotta" },
  { label: "Marmita Tamanho M", image: "assets/marmita-m.jpg", icon: "soup", tone: "herb" },
  { label: "Marmita Fit", image: "assets/marmita-fit.jpg", icon: "salad", tone: "gold" },
  { label: "Marmita Tamanho G", image: "assets/marmita-g.jpg", icon: "chef-hat", tone: "terracotta" },
  { label: "Salada fresca do dia", image: "assets/salada-fresca.jpg", icon: "salad", tone: "herb" },
];

const TESTIMONIALS = [
  { name: "João", text: "Comida muito boa e chegou quentinha. O tempero é excelente!" },
  { name: "Mariana", text: "Uma das melhores marmitas da cidade. Sempre peço!" },
  { name: "Lucas", text: "Preço justo, comida saborosa e atendimento excelente." },
];
