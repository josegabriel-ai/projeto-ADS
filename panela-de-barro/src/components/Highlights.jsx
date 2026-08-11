import { HIGHLIGHTS } from "../data/content.js";

export default function Highlights() {
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
