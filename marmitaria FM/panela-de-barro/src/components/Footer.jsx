import { ChefHat, Instagram } from "lucide-react";
import { CONFIG, NAV_LINKS } from "../data/config.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <div className="brand" style={{ marginBottom: "0.75rem" }}>
            <span className="brand-mark brand-mark-footer"><ChefHat className="w-5 h-5" strokeWidth={1.8} /></span>
            <span className="brand-name footer-brand-name">{CONFIG.name}</span>
          </div>
          <p className="footer-desc">Comida caseira feita com carinho, todos os dias.</p>
        </div>
        <div>
          <h4 className="footer-heading">Links rápidos</h4>
          <ul className="footer-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="footer-heading">Contato</h4>
          <ul className="footer-links">
            <li>{CONFIG.address}</li>
            <li>{CONFIG.phoneDisplay}</li>
            <li>{CONFIG.hours}</li>
            <li className="footer-social">
              <Instagram className="w-4 h-4" strokeWidth={1.8} /> {CONFIG.instagram}
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© 2026 {CONFIG.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
