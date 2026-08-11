import { useState } from "react";
import { CATEGORIES, PRODUCTS } from "../data/products.js";
import SectionEyebrow from "./ui/SectionEyebrow.jsx";
import ProductCard from "./ProductCard.jsx";

export default function Menu() {
  const [active, setActive] = useState("todos");
  const filtered = active === "todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="cardapio" className="section section-cream">
      <div className="wrap">
        <div className="section-head">
          <SectionEyebrow>Nosso cardápio</SectionEyebrow>
          <h2 className="section-title">Feito na hora, do jeito que você gosta</h2>
        </div>

        <div className="filter-row" role="tablist" aria-label="Categorias do cardápio">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              role="tab"
              aria-selected={active === c.key}
              className={`filter-chip ${active === c.key ? "is-active" : ""}`}
              onClick={() => setActive(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filtered.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
