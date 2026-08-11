import { Send } from "lucide-react";
import { waLink, DEFAULT_MSG } from "../data/config.js";
import { STEPS } from "../data/content.js";
import SectionEyebrow from "./ui/SectionEyebrow.jsx";

export default function HowToOrder() {
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
