import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/content.js";
import SectionEyebrow from "./ui/SectionEyebrow.jsx";

export default function Testimonials() {
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
