import React, { useState, useEffect, useCallback } from "react";
import {
  Menu, X, MessageCircle, Star, MapPin, Phone, Clock, Instagram,
  ChefHat, UtensilsCrossed, Salad, Soup, IceCream, Truck, Wallet,
  Flame, Send, ShoppingBag, Sparkles, CookingPot
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* CONFIGURAÇÃO CENTRAL — altere aqui nome, telefone, endereço, etc.  */
/* ------------------------------------------------------------------ */
const CONFIG = {
  name: "Panela de Barro",
  tagline: "Marmitaria & Comida Caseira",
  whatsapp: "5562999999999", // formato: 55 + DDD + número, só dígitos
  phoneDisplay: "(62) 9 9999-9999",
  address: "Rua Exemplo, 123 — Setor Centro, Goiânia - GO",
  hours: "Segunda a sábado — 11h às 14h",
  instagram: "@paneladebarro",
  mapsQuery: "Rua Exemplo, 123, Centro, Goiânia - GO",
};

const waLink = (message) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

const DEFAULT_MSG = `Olá! Vim pelo site da ${CONFIG.name} e gostaria de fazer um pedido.`;

/* ------------------------------------------------------------------ */
/* DADOS DO CARDÁPIO — edite produtos, preços e descrições aqui       */
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

const HIGHLIGHTS = [
  { icon: Sparkles, title: "Comida fresquinha", desc: "Preparada diariamente com ingredientes selecionados." },
  { icon: CookingPot, title: "Tempero caseiro", desc: "Aquele sabor de comida feita em casa." },
  { icon: Truck, title: "Entrega rápida", desc: "Receba sua refeição com praticidade." },
  { icon: Wallet, title: "Preço justo", desc: "Qualidade e sabor por um preço que cabe no bolso." },
];

const STEPS = [
  { n: 1, title: "Escolha sua marmita", desc: "Navegue pelo cardápio e veja fotos, descrições e preços." },
  { n: 2, title: "Clique em \"Pedir\"", desc: "Cada prato te leva direto para o WhatsApp já com a mensagem pronta." },
  { n: 3, title: "Envie seu pedido", desc: "Confirme os detalhes com a gente e combine a forma de pagamento." },
  { n: 4, title: "Receba ou retire", desc: "Sua marmita quentinha chega até você, ou é só passar para retirar." },
];

const GALLERY = [
  { label: "Marmita tradicional", icon: Soup },
  { label: "Marmita especial servida", icon: ChefHat },
  { label: "Preparo na cozinha", icon: CookingPot },
  { label: "Ingredientes selecionados", icon: Salad },
  { label: "Pudim caseiro", icon: IceCream },
  { label: "Fachada da marmitaria", icon: UtensilsCrossed },
  { label: "Feijoada fumegante", icon: Flame },
  { label: "Salada fresca do dia", icon: Salad },
];

const TESTIMONIALS = [
  { name: "João", text: "Comida muito boa e chegou quentinha. O tempero é excelente!" },
  { name: "Mariana", text: "Uma das melhores marmitas da cidade. Sempre peço!" },
  { name: "Lucas", text: "Preço justo, comida saborosa e atendimento excelente." },
];

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

const fmtPrice = (n) => `R$ ${n.toFixed(2).replace(".", ",")}`;

/* ------------------------------------------------------------------ */
/* Componentes auxiliares                                             */
/* ------------------------------------------------------------------ */

function SteamIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 60 40" className={className} fill="none" aria-hidden="true">
      <path className="steam steam-1" d="M10 38C10 30 4 28 4 20C4 12 10 10 10 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path className="steam steam-2" d="M30 38C30 30 24 28 24 20C24 12 30 10 30 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path className="steam steam-3" d="M50 38C50 30 44 28 44 20C44 12 50 10 50 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function PlaceholderArt({ Icon, className = "", tone = "terracotta" }) {
  return (
    <div className={`placeholder-art tone-${tone} ${className}`} role="img" aria-label="Foto ilustrativa — substitua por uma foto real do prato">
      <Icon className="w-10 h-10" strokeWidth={1.6} />
      <span className="placeholder-tag">foto</span>
    </div>
  );
}

function SectionEyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */
function Header({ menuOpen, setMenuOpen }) {
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

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <SectionEyebrow>Feito todos os dias, com carinho</SectionEyebrow>
          <h1 className="hero-title">
            Comida caseira <span className="hero-title-accent">feita com carinho</span>
          </h1>
          <p className="hero-sub">
            Sabores deliciosos, ingredientes frescos e aquele gostinho de comida feita em casa —
            direto para a sua mesa.
          </p>
          <div className="hero-buttons">
            <a href="#cardapio" className="btn btn-primary">Ver cardápio</a>
            <a href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <MessageCircle className="w-4 h-4" strokeWidth={2} /> Pedir pelo WhatsApp
            </a>
          </div>

          <div className="hero-badges">
            <div className="hero-badge">
              <Star className="w-4 h-4" strokeWidth={2} fill="currentColor" />
              <span>4.9/5 avaliação dos clientes</span>
            </div>
            <div className="hero-badge">
              <Salad className="w-4 h-4" strokeWidth={2} />
              <span>Comida fresca</span>
            </div>
            <div className="hero-badge">
              <CookingPot className="w-4 h-4" strokeWidth={2} />
              <span>Feita diariamente</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-plate">
            <PlaceholderArt Icon={Soup} tone="cream" className="hero-plate-art" />
            <SteamIcon className="hero-steam" />
          </div>
          <div className="hero-seal">
            <span>feito<br />em casa</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Destaques                                                          */
/* ------------------------------------------------------------------ */
function Highlights() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="highlights-grid">
          {HIGHLIGHTS.map((h) => (
            <div className="highlight-card" key={h.title}>
              <span className="highlight-icon"><h.icon className="w-6 h-6" strokeWidth={1.7} /></span>
              <h3 className="highlight-title">{h.title}</h3>
              <p className="highlight-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Cardápio                                                            */
/* ------------------------------------------------------------------ */
function ProductCard({ product }) {
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

function MenuSection() {
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

/* ------------------------------------------------------------------ */
/* Como pedir                                                          */
/* ------------------------------------------------------------------ */
function HowToOrder() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <SectionEyebrow>É simples</SectionEyebrow>
          <h2 className="section-title">Como pedir</h2>
        </div>
        <div className="steps-grid">
          {STEPS.map((s) => (
            <div className="step-card" key={s.n}>
              <span className="step-number">{String(s.n).padStart(2, "0")}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="steps-cta">
          <a href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
            <Send className="w-4 h-4" strokeWidth={2} /> Fazer meu pedido
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sobre                                                              */
/* ------------------------------------------------------------------ */
function About() {
  const stats = [
    { value: "+5.000", label: "Marmitas vendidas" },
    { value: "+500", label: "Clientes satisfeitos" },
    { value: "4.9/5", label: "Avaliação média" },
  ];
  return (
    <section id="sobre" className="section section-cream">
      <div className="wrap about-grid">
        <div className="about-visual">
          <PlaceholderArt Icon={CookingPot} tone="herb" className="about-art" />
        </div>
        <div className="about-copy">
          <SectionEyebrow>Sobre a {CONFIG.name}</SectionEyebrow>
          <h2 className="section-title">Uma história de sabor e carinho</h2>
          <p className="about-text">
            Há anos levando comida caseira e saborosa para a mesa dos nossos clientes. Nosso objetivo
            é oferecer refeições preparadas com carinho, ingredientes de qualidade e aquele sabor que
            lembra comida de casa.
          </p>
          <div className="stats-grid">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Galeria                                                            */
/* ------------------------------------------------------------------ */
function Gallery() {
  const [selected, setSelected] = useState(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, close]);

  return (
    <section id="galeria" className="section">
      <div className="wrap">
        <div className="section-head">
          <SectionEyebrow>Um gostinho visual</SectionEyebrow>
          <h2 className="section-title">Galeria</h2>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((g, i) => (
            <button className="gallery-item" key={g.label} onClick={() => setSelected(i)} aria-label={`Ampliar foto: ${g.label}`}>
              <PlaceholderArt Icon={g.icon} tone={i % 3 === 0 ? "terracotta" : i % 3 === 1 ? "herb" : "gold"} />
              <span className="gallery-caption">{g.label}</span>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="lightbox" onClick={close}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={close} aria-label="Fechar">
              <X className="w-5 h-5" />
            </button>
            <PlaceholderArt Icon={GALLERY[selected].icon} tone="terracotta" className="lightbox-art" />
            <p className="lightbox-caption">{GALLERY[selected].label}</p>
          </div>
        </div>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Avaliações                                                          */
/* ------------------------------------------------------------------ */
function Testimonials() {
  return (
    <section className="section section-cream">
      <div className="wrap">
        <div className="section-head">
          <SectionEyebrow>Quem prova, aprova</SectionEyebrow>
          <h2 className="section-title">O que dizem nossos clientes</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <span className="testimonial-name">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contato / Localização                                              */
/* ------------------------------------------------------------------ */
function ContactLocation() {
  const items = [
    { icon: MapPin, label: "Endereço", value: CONFIG.address },
    { icon: Phone, label: "Telefone", value: CONFIG.phoneDisplay },
    { icon: Clock, label: "Horário", value: CONFIG.hours },
    { icon: MessageCircle, label: "WhatsApp", value: CONFIG.phoneDisplay },
  ];
  return (
    <section id="contato" className="section">
      <div className="wrap contact-grid">
        <div>
          <SectionEyebrow>Fale com a gente</SectionEyebrow>
          <h2 className="section-title">Localização e contato</h2>
          <ul className="contact-list">
            {items.map((it) => (
              <li className="contact-item" key={it.label}>
                <span className="contact-icon"><it.icon className="w-5 h-5" strokeWidth={1.8} /></span>
                <span>
                  <strong>{it.label}</strong>
                  <br />
                  {it.value}
                </span>
              </li>
            ))}
          </ul>
          <a href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
            <MessageCircle className="w-4 h-4" strokeWidth={2} /> Chamar no WhatsApp
          </a>
        </div>
        <div className="map-placeholder" role="img" aria-label={`Mapa de localização — ${CONFIG.address}`}>
          <MapPin className="w-8 h-8" strokeWidth={1.6} />
          <p>Substitua por um mapa incorporado do Google Maps</p>
          <span className="map-address">{CONFIG.address}</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA final                                                          */
/* ------------------------------------------------------------------ */
function CTAFinal() {
  return (
    <section className="cta-final">
      <div className="wrap cta-final-inner">
        <SteamIcon className="cta-steam" />
        <h2 className="cta-title">Tá esperando o quê?</h2>
        <p className="cta-sub">Peça sua marmita agora e receba o sabor de comida caseira onde estiver.</p>
        <a href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-lg">
          <MessageCircle className="w-4 h-4" strokeWidth={2} /> Fazer pedido pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
function Footer() {
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

/* ------------------------------------------------------------------ */
/* Botão flutuante do WhatsApp                                        */
/* ------------------------------------------------------------------ */
function FloatingWhatsApp() {
  return (
    <a
      href={waLink(DEFAULT_MSG)}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      aria-label="Fazer pedido pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6" strokeWidth={2} fill="currentColor" />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="site-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Manrope:wght@400;500;600;700;800&display=swap');

        .site-root {
          --terracotta: #C1502E;
          --terracotta-dark: #96371E;
          --cream: #FBF1E1;
          --cream-2: #FFFBF3;
          --ink: #2B1B10;
          --ink-soft: #6B5644;
          --herb: #5F7A3D;
          --herb-dark: #435928;
          --gold: #E4A72E;
          --line: rgba(43,27,16,0.1);
          font-family: 'Manrope', ui-sans-serif, system-ui, sans-serif;
          color: var(--ink);
          background: var(--cream-2);
          -webkit-font-smoothing: antialiased;
        }
        .site-root * { box-sizing: border-box; }
        .site-root h1, .site-root h2, .site-root h3 { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .wrap { max-width: 1160px; margin: 0 auto; padding: 0 1.25rem; }
        .section { padding: 4.5rem 0; }
        .section-cream { background: var(--cream); }
        .section-head { max-width: 640px; margin-bottom: 2.5rem; }
        .eyebrow {
          font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--terracotta); margin: 0 0 0.6rem;
        }
        .section-title { font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 600; line-height: 1.2; margin: 0; color: var(--ink); }

        .btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
          font-weight: 700; font-size: 0.95rem; padding: 0.85rem 1.5rem; border-radius: 999px;
          text-decoration: none; transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
          border: 1.5px solid transparent; cursor: pointer; white-space: nowrap;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn:active { transform: translateY(0); }
        .btn-primary { background: var(--terracotta); color: #fff; box-shadow: 0 6px 16px rgba(193,80,46,0.28); }
        .btn-primary:hover { background: var(--terracotta-dark); }
        .btn-outline { background: transparent; color: var(--ink); border-color: var(--line); }
        .btn-outline:hover { border-color: var(--terracotta); color: var(--terracotta); }
        .btn-light { background: var(--cream-2); color: var(--terracotta-dark); }
        .btn-light:hover { background: #fff; }
        .btn-sm { padding: 0.55rem 1.1rem; font-size: 0.85rem; }
        .btn-lg { padding: 1rem 2rem; font-size: 1rem; }

        /* Header */
        .site-header { position: sticky; top: 0; z-index: 50; background: rgba(251,241,225,0.9); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line); }
        .header-inner { display: flex; align-items: center; justify-content: space-between; height: 76px; gap: 1rem; }
        .brand { display: flex; align-items: center; gap: 0.65rem; text-decoration: none; color: var(--ink); }
        .brand-mark { width: 40px; height: 40px; border-radius: 50%; background: var(--terracotta); color: #fff; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .brand-mark-footer { background: var(--gold); color: var(--ink); }
        .brand-text { display: flex; flex-direction: column; line-height: 1.15; }
        .brand-name { font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.15rem; }
        .brand-sub { font-size: 0.7rem; color: var(--ink-soft); letter-spacing: 0.03em; }
        .nav-desktop { display: none; align-items: center; gap: 1.75rem; }
        .nav-link { color: var(--ink-soft); text-decoration: none; font-weight: 600; font-size: 0.92rem; transition: color 0.15s ease; }
        .nav-link:hover { color: var(--terracotta); }
        .header-actions { display: flex; align-items: center; gap: 0.75rem; }
        .menu-toggle { display: inline-flex; background: none; border: none; color: var(--ink); cursor: pointer; padding: 0.3rem; }
        .nav-mobile { display: flex; flex-direction: column; padding: 1rem 1.25rem 1.5rem; border-top: 1px solid var(--line); gap: 0.85rem; background: var(--cream-2); }
        .nav-mobile-link { color: var(--ink); text-decoration: none; font-weight: 600; padding: 0.35rem 0; }

        @media (min-width: 900px) {
          .nav-desktop { display: flex; }
          .menu-toggle { display: none; }
        }

        /* Hero */
        .hero { padding: 3.5rem 0 4rem; overflow: hidden; }
        .hero-grid { display: grid; gap: 2.5rem; align-items: center; }
        .hero-title { font-size: clamp(2.1rem, 5vw, 3.4rem); font-weight: 600; line-height: 1.08; margin: 0 0 1.1rem; }
        .hero-title-accent { color: var(--terracotta); font-style: italic; font-weight: 500; }
        .hero-sub { font-size: 1.05rem; color: var(--ink-soft); max-width: 480px; margin: 0 0 1.75rem; line-height: 1.6; }
        .hero-buttons { display: flex; flex-wrap: wrap; gap: 0.85rem; margin-bottom: 2rem; }
        .hero-badges { display: flex; flex-wrap: wrap; gap: 0.65rem 1.4rem; }
        .hero-badge { display: flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 600; color: var(--ink-soft); }
        .hero-badge svg { color: var(--gold); }

        .hero-visual { position: relative; display: flex; justify-content: center; }
        .hero-plate {
          position: relative; width: 100%; max-width: 380px; aspect-ratio: 1/1; border-radius: 32px;
          background: linear-gradient(160deg, var(--terracotta) 0%, var(--terracotta-dark) 100%);
          display: flex; align-items: center; justify-content: center; padding: 2rem;
          box-shadow: 0 24px 48px -12px rgba(150,55,30,0.4);
        }
        .hero-plate-art { width: 100%; height: 100%; }
        .hero-steam { position: absolute; top: -28px; left: 50%; transform: translateX(-50%); width: 60px; height: 40px; color: rgba(255,255,255,0.85); }
        .hero-seal {
          position: absolute; bottom: -14px; right: 4%; width: 92px; height: 92px; border-radius: 50%;
          background: var(--gold); color: var(--ink); display: flex; align-items: center; justify-content: center;
          text-align: center; font-family: 'Fraunces', serif; font-weight: 600; font-size: 0.8rem; line-height: 1.15;
          transform: rotate(-8deg); border: 3px dashed rgba(43,27,16,0.25); box-shadow: 0 10px 20px rgba(228,167,46,0.35);
        }

        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1.05fr 0.95fr; }
        }

        /* Placeholder art */
        .placeholder-art {
          width: 100%; height: 100%; min-height: 140px; border-radius: 18px; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 0.4rem; position: relative; color: #fff;
        }
        .placeholder-art.tone-terracotta { background: linear-gradient(150deg, #E08A5F, var(--terracotta)); }
        .placeholder-art.tone-cream { background: linear-gradient(150deg, rgba(255,255,255,0.16), rgba(255,255,255,0.04)); }
        .placeholder-art.tone-herb { background: linear-gradient(150deg, #8AA968, var(--herb-dark)); }
        .placeholder-art.tone-gold { background: linear-gradient(150deg, #F0C868, #C98A1E); }
        .placeholder-tag {
          position: absolute; top: 8px; right: 8px; font-size: 0.62rem; text-transform: uppercase; letter-spacing: 0.06em;
          background: rgba(0,0,0,0.28); padding: 2px 8px; border-radius: 999px; font-weight: 700;
        }

        /* Highlights */
        .highlights-grid { display: grid; gap: 1.25rem; grid-template-columns: repeat(2, 1fr); }
        .highlight-card { background: var(--cream); border: 1px solid var(--line); border-radius: 18px; padding: 1.75rem 1.5rem; }
        .highlight-icon { display: inline-flex; width: 48px; height: 48px; border-radius: 14px; background: rgba(193,80,46,0.1); color: var(--terracotta); align-items: center; justify-content: center; margin-bottom: 1rem; }
        .highlight-title { font-size: 1.05rem; font-weight: 600; margin: 0 0 0.4rem; }
        .highlight-desc { font-size: 0.9rem; color: var(--ink-soft); margin: 0; line-height: 1.55; }
        @media (min-width: 700px) { .highlights-grid { grid-template-columns: repeat(4, 1fr); } }

        /* Menu / filtros */
        .filter-row { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 2.25rem; }
        .filter-chip {
          border: 1.5px solid var(--line); background: var(--cream-2); color: var(--ink-soft); font-weight: 700;
          font-size: 0.85rem; padding: 0.55rem 1.1rem; border-radius: 999px; cursor: pointer; transition: all 0.15s ease;
        }
        .filter-chip:hover { border-color: var(--terracotta); color: var(--terracotta); }
        .filter-chip.is-active { background: var(--terracotta); border-color: var(--terracotta); color: #fff; }

        .menu-grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
        .product-card { background: var(--cream-2); border-radius: 20px; overflow: hidden; border: 1px solid var(--line); transition: transform 0.18s ease, box-shadow 0.18s ease; }
        .product-card:hover { transform: translateY(-4px); box-shadow: 0 16px 30px -10px rgba(43,27,16,0.18); }
        .product-media { position: relative; padding: 1.1rem; padding-bottom: 0; }
        .product-badge {
          position: absolute; top: 1.5rem; left: 1.5rem; background: var(--gold); color: var(--ink); font-size: 0.68rem;
          font-weight: 800; text-transform: uppercase; letter-spacing: 0.03em; padding: 3px 10px; border-radius: 999px;
        }
        .ticket-perforation {
          height: 14px; margin: 0.6rem 0 0;
          background-image: radial-gradient(circle, var(--cream-2) 3.5px, transparent 3.6px);
          background-size: 16px 16px; background-position: center;
          border-top: 1px dashed var(--line); border-bottom: 1px dashed var(--line);
        }
        .product-body { padding: 1.1rem 1.4rem 1.4rem; }
        .product-name { font-size: 1.05rem; font-weight: 600; margin: 0 0 0.4rem; }
        .product-desc { font-size: 0.87rem; color: var(--ink-soft); line-height: 1.5; margin: 0 0 1.1rem; min-height: 2.6em; }
        .product-footer { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; }
        .product-price { font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.15rem; color: var(--terracotta-dark); }

        /* Como pedir */
        .steps-grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(2, 1fr); margin-bottom: 2.5rem; }
        .step-card { background: var(--cream-2); border: 1px solid var(--line); border-radius: 18px; padding: 1.75rem 1.5rem; }
        .step-number { font-family: 'Fraunces', serif; font-size: 1.6rem; font-weight: 600; color: var(--terracotta); opacity: 0.55; }
        .step-title { font-size: 1.02rem; font-weight: 600; margin: 0.5rem 0 0.4rem; }
        .step-desc { font-size: 0.88rem; color: var(--ink-soft); margin: 0; line-height: 1.55; }
        .steps-cta { display: flex; justify-content: center; }
        @media (min-width: 800px) { .steps-grid { grid-template-columns: repeat(4, 1fr); } }

        /* Sobre */
        .about-grid { display: grid; gap: 2.5rem; align-items: center; }
        .about-art { min-height: 260px; }
        .about-text { color: var(--ink-soft); line-height: 1.65; margin: 1.1rem 0 1.75rem; max-width: 520px; }
        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; max-width: 480px; }
        .stat-card { background: var(--cream-2); border: 1px solid var(--line); border-radius: 16px; padding: 1.1rem 0.75rem; text-align: center; }
        .stat-value { display: block; font-family: 'Fraunces', serif; font-weight: 700; font-size: 1.35rem; color: var(--terracotta); }
        .stat-label { display: block; font-size: 0.72rem; color: var(--ink-soft); margin-top: 0.25rem; line-height: 1.3; }
        @media (min-width: 900px) { .about-grid { grid-template-columns: 0.85fr 1.15fr; } }

        /* Galeria */
        .gallery-grid { display: grid; gap: 1rem; grid-template-columns: repeat(2, 1fr); }
        .gallery-item { background: none; border: none; padding: 0; cursor: pointer; text-align: left; border-radius: 16px; overflow: hidden; }
        .gallery-item .placeholder-art { aspect-ratio: 4/3; min-height: 0; border-radius: 16px; }
        .gallery-caption { display: block; font-size: 0.8rem; font-weight: 600; color: var(--ink-soft); margin-top: 0.5rem; }
        @media (min-width: 700px) { .gallery-grid { grid-template-columns: repeat(4, 1fr); } }

        .lightbox { position: fixed; inset: 0; background: rgba(43,27,16,0.72); display: flex; align-items: center; justify-content: center; z-index: 100; padding: 1.5rem; }
        .lightbox-inner { background: var(--cream-2); border-radius: 20px; padding: 1.5rem; max-width: 420px; width: 100%; position: relative; }
        .lightbox-close { position: absolute; top: 0.9rem; right: 0.9rem; background: var(--cream); border: none; border-radius: 50%; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
        .lightbox-art { aspect-ratio: 4/3; }
        .lightbox-caption { text-align: center; font-weight: 700; margin: 1rem 0 0; }

        /* Avaliações */
        .testimonials-grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
        .testimonial-card { background: var(--cream-2); border: 1px solid var(--line); border-radius: 18px; padding: 1.75rem; }
        .stars { display: flex; gap: 2px; color: var(--gold); margin-bottom: 0.85rem; }
        .testimonial-text { font-size: 0.95rem; color: var(--ink); line-height: 1.6; margin: 0 0 1rem; }
        .testimonial-name { font-weight: 700; color: var(--terracotta-dark); font-size: 0.88rem; }

        /* Contato */
        .contact-grid { display: grid; gap: 2.5rem; align-items: start; }
        .contact-list { list-style: none; padding: 0; margin: 1.5rem 0 0; display: flex; flex-direction: column; gap: 1.1rem; }
        .contact-item { display: flex; align-items: flex-start; gap: 0.85rem; font-size: 0.92rem; color: var(--ink-soft); line-height: 1.5; }
        .contact-icon { width: 40px; height: 40px; flex-shrink: 0; border-radius: 12px; background: rgba(193,80,46,0.1); color: var(--terracotta); display: flex; align-items: center; justify-content: center; }
        .contact-item strong { color: var(--ink); }
        .map-placeholder {
          min-height: 280px; border-radius: 20px; background: var(--cream); border: 1.5px dashed var(--line);
          display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;
          gap: 0.6rem; color: var(--ink-soft); padding: 2rem;
        }
        .map-placeholder svg { color: var(--terracotta); }
        .map-address { font-weight: 700; color: var(--ink); font-size: 0.85rem; }
        @media (min-width: 900px) { .contact-grid { grid-template-columns: 1fr 1fr; } }

        /* CTA final */
        .cta-final { background: linear-gradient(150deg, var(--terracotta) 0%, var(--terracotta-dark) 100%); color: #fff; padding: 4.5rem 0; text-align: center; position: relative; overflow: hidden; }
        .cta-final-inner { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .cta-steam { width: 60px; height: 40px; color: rgba(255,255,255,0.55); margin-bottom: 0.5rem; }
        .cta-title { font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 600; margin: 0; }
        .cta-sub { max-width: 480px; opacity: 0.92; margin: 0.5rem 0 1.75rem; line-height: 1.55; }

        /* Footer */
        .site-footer { background: var(--ink); color: #EFE6DA; padding: 3.5rem 0 1.5rem; }
        .footer-grid { display: grid; gap: 2.25rem; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
        .footer-brand-name { color: #fff; }
        .footer-desc { font-size: 0.85rem; color: #C9BBAA; line-height: 1.55; max-width: 240px; }
        .footer-heading { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.06em; color: #C9BBAA; margin: 0 0 1rem; }
        .footer-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.88rem; color: #DCD1C3; }
        .footer-links a { color: #DCD1C3; text-decoration: none; }
        .footer-links a:hover { color: var(--gold); }
        .footer-social { display: flex; align-items: center; gap: 0.4rem; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); margin-top: 2.5rem; padding-top: 1.5rem; font-size: 0.78rem; color: #A8998A; text-align: center; }

        /* Botão flutuante */
        .floating-wa {
          position: fixed; bottom: 22px; right: 22px; width: 58px; height: 58px; border-radius: 50%;
          background: #25D366; color: #fff; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 24px rgba(37,211,102,0.45); z-index: 60; animation: pulseWa 2.4s ease-in-out infinite;
        }
        @keyframes pulseWa { 0%,100% { box-shadow: 0 10px 24px rgba(37,211,102,0.45); } 50% { box-shadow: 0 10px 24px rgba(37,211,102,0.7), 0 0 0 8px rgba(37,211,102,0.12); } }

        /* Steam animation */
        .steam { transform-origin: bottom center; animation: rise 3s ease-in-out infinite; opacity: 0.85; }
        .steam-2 { animation-delay: 0.5s; }
        .steam-3 { animation-delay: 1s; }
        @keyframes rise { 0% { transform: translateY(0); opacity: 0.15; } 50% { transform: translateY(-6px); opacity: 0.9; } 100% { transform: translateY(0); opacity: 0.15; } }

        @media (prefers-reduced-motion: reduce) {
          .steam, .floating-wa { animation: none; }
          .btn:hover { transform: none; }
        }

        a:focus-visible, button:focus-visible {
          outline: 2.5px solid var(--terracotta); outline-offset: 2px;
        }
      `}</style>

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <Highlights />
      <MenuSection />
      <HowToOrder />
      <About />
      <Gallery />
      <Testimonials />
      <ContactLocation />
      <CTAFinal />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
