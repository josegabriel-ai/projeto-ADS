/* ------------------------------------------------------------------ */
/* PRODUTOS DO CARDÁPIO                                               */
/* Edite nome, categoria, preço, descrição e ícone aqui.               */
/* Ícones disponíveis: qualquer ícone de "lucide-react"                */
/* ------------------------------------------------------------------ */
import {
  Soup, Salad, ChefHat, Flame, UtensilsCrossed, IceCream,
} from "lucide-react";

export const CATEGORIES = [
  { key: "todos", label: "Todos" },
  { key: "marmitas", label: "Marmitas" },
  { key: "pratos", label: "Pratos" },
  { key: "acompanhamentos", label: "Acompanhamentos" },
  { key: "bebidas", label: "Bebidas" },
  { key: "sobremesas", label: "Sobremesas" },
];

export const PRODUCTS = [
  { id: 1, name: "Marmita Tradicional", category: "marmitas", price: 18.9, desc: "Arroz, feijão, carne, salada e acompanhamento.", icon: Soup, badge: "Mais pedido" },
  { id: 2, name: "Marmita Especial", category: "marmitas", price: 24.9, desc: "Arroz, feijão, bife acebolado, batata frita e salada.", icon: Soup },
  { id: 3, name: "Marmita Fit", category: "marmitas", price: 22.9, desc: "Arroz integral, frango grelhado, legumes no vapor e salada.", icon: Salad, badge: "Leve" },
  { id: 4, name: "Frango Grelhado", category: "pratos", price: 21.9, desc: "Arroz, feijão, frango grelhado temperado e legumes salteados.", icon: ChefHat },
  { id: 5, name: "Feijoada Completa", category: "pratos", price: 26.9, desc: "Feijoada tradicional com arroz, couve, farofa e laranja.", icon: Flame, badge: "Sexta é dia de" },
  { id: 6, name: "Arroz e Feijão (porção)", category: "acompanhamentos", price: 8.9, desc: "Porção generosa do nosso arroz soltinho com feijão caseiro.", icon: UtensilsCrossed },
  { id: 7, name: "Farofa Especial", category: "acompanhamentos", price: 6.9, desc: "Farofa crocante com bacon, ovo e temperinhos da casa.", icon: UtensilsCrossed },
  { id: 8, name: "Suco Natural 500ml", category: "bebidas", price: 7.9, desc: "Feito na hora, sabores variados conforme a fruta do dia.", icon: IceCream },
  { id: 9, name: "Refrigerante Lata", category: "bebidas", price: 6.0, desc: "Gelado, para acompanhar sua refeição.", icon: IceCream },
  { id: 10, name: "Pudim de Leite", category: "sobremesas", price: 9.9, desc: "Cremoso, feito artesanalmente todos os dias.", icon: IceCream, badge: "Feito em casa" },
  { id: 11, name: "Brigadeiro (unidade)", category: "sobremesas", price: 3.5, desc: "O clássico docinho caseiro, na medida certa.", icon: IceCream },
];
