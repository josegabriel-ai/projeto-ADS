import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { GALLERY } from "../data/content.js";
import SectionEyebrow from "./ui/SectionEyebrow.jsx";
import PlaceholderArt from "./ui/PlaceholderArt.jsx";

export default function Gallery() {
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
