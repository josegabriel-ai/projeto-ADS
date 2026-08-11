/* ------------------------------------------------------------------ */
/* CONTEÚDO ESTÁTICO — destaques, passos, galeria e depoimentos        */
/* ------------------------------------------------------------------ */
import { Sparkles, CookingPot, Truck, Wallet, Soup, ChefHat, Salad, IceCream, UtensilsCrossed, Flame } from "lucide-react";

export const HIGHLIGHTS = [
  { icon: Sparkles, title: "Comida fresquinha", desc: "Preparada diariamente com ingredientes selecionados." },
  { icon: CookingPot, title: "Tempero caseiro", desc: "Aquele sabor de comida feita em casa." },
  { icon: Truck, title: "Entrega rápida", desc: "Receba sua refeição com praticidade." },
  { icon: Wallet, title: "Preço justo", desc: "Qualidade e sabor por um preço que cabe no bolso." },
];

export const STEPS = [
  { n: 1, title: "Escolha sua marmita", desc: "Navegue pelo cardápio e veja fotos, descrições e preços." },
  { n: 2, title: "Clique em \"Pedir\"", desc: "Cada prato te leva direto para o WhatsApp já com a mensagem pronta." },
  { n: 3, title: "Envie seu pedido", desc: "Confirme os detalhes com a gente e combine a forma de pagamento." },
  { n: 4, title: "Receba ou retire", desc: "Sua marmita quentinha chega até você, ou é só passar para retirar." },
];

export const GALLERY = [
  { label: "Marmita tradicional", icon: Soup },
  { label: "Marmita especial servida", icon: ChefHat },
  { label: "Preparo na cozinha", icon: CookingPot },
  { label: "Ingredientes selecionados", icon: Salad },
  { label: "Pudim caseiro", icon: IceCream },
  { label: "Fachada da marmitaria", icon: UtensilsCrossed },
  { label: "Feijoada fumegante", icon: Flame },
  { label: "Salada fresca do dia", icon: Salad },
];

export const TESTIMONIALS = [
  { name: "João", text: "Comida muito boa e chegou quentinha. O tempero é excelente!" },
  { name: "Mariana", text: "Uma das melhores marmitas da cidade. Sempre peço!" },
  { name: "Lucas", text: "Preço justo, comida saborosa e atendimento excelente." },
];
