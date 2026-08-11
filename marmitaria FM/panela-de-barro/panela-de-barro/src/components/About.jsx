import { CookingPot } from "lucide-react";
import { CONFIG } from "../data/config.js";
import SectionEyebrow from "./ui/SectionEyebrow.jsx";
import PlaceholderArt from "./ui/PlaceholderArt.jsx";

const STATS = [
  { value: "+5.000", label: "Marmitas vendidas" },
  { value: "+500", label: "Clientes satisfeitos" },
  { value: "4.9/5", label: "Avaliação média" },
];

export default function About() {
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
            {STATS.map((s) => (
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
