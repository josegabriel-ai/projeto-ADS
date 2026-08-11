import { MessageCircle, Star, Salad, CookingPot, Soup } from "lucide-react";
import { waLink, DEFAULT_MSG } from "../data/config.js";
import SectionEyebrow from "./ui/SectionEyebrow.jsx";
import PlaceholderArt from "./ui/PlaceholderArt.jsx";
import SteamIcon from "./ui/SteamIcon.jsx";

export default function Hero() {
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
