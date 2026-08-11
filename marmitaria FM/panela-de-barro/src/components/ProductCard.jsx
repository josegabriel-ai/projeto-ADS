import { waLink, fmtPrice } from "../data/config.js";
import PlaceholderArt from "./ui/PlaceholderArt.jsx";

export default function ProductCard({ product }) {
  const Icon = product.icon;
  const message = `Olá! Gostaria de pedir a ${product.name} por ${fmtPrice(product.price)}.`;

  return (
    <article className="product-card">
      <div className="product-media">
        <PlaceholderArt Icon={Icon} tone="terracotta" />
        {product.badge && <span className="product-badge">{product.badge}</span>}
      </div>
      <div className="ticket-perforation" aria-hidden="true" />
      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.desc}</p>
        <div className="product-footer">
          <span className="product-price">{fmtPrice(product.price)}</span>
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            aria-label={`Pedir ${product.name} pelo WhatsApp`}
          >
            Pedir
          </a>
        </div>
      </div>
    </article>
  );
}
