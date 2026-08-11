import { Menu, X, MessageCircle, ChefHat } from "lucide-react";
import { CONFIG, NAV_LINKS, waLink, DEFAULT_MSG } from "../data/config.js";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#inicio" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><ChefHat className="w-5 h-5" strokeWidth={1.8} /></span>
          <span className="brand-text">
            <span className="brand-name">{CONFIG.name}</span>
            <span className="brand-sub">{CONFIG.tagline}</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            <MessageCircle className="w-4 h-4" strokeWidth={2} />
            Fazer pedido
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="nav-mobile" aria-label="Navegação mobile">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: "0.5rem" }}>
            <MessageCircle className="w-4 h-4" strokeWidth={2} /> Fazer pedido
          </a>
        </nav>
      )}
    </header>
  );
}
