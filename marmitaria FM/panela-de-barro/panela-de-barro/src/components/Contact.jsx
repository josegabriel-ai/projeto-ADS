import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { CONFIG, waLink, DEFAULT_MSG } from "../data/config.js";
import SectionEyebrow from "./ui/SectionEyebrow.jsx";

const ITEMS = [
  { icon: MapPin, label: "Endereço", key: "address" },
  { icon: Phone, label: "Telefone", key: "phoneDisplay" },
  { icon: Clock, label: "Horário", key: "hours" },
  { icon: MessageCircle, label: "WhatsApp", key: "phoneDisplay" },
];

export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className="wrap contact-grid">
        <div>
          <SectionEyebrow>Fale com a gente</SectionEyebrow>
          <h2 className="section-title">Localização e contato</h2>
          <ul className="contact-list">
            {ITEMS.map((it, i) => (
              <li className="contact-item" key={it.label + i}>
                <span className="contact-icon"><it.icon className="w-5 h-5" strokeWidth={1.8} /></span>
                <span>
                  <strong>{it.label}</strong>
                  <br />
                  {CONFIG[it.key]}
                </span>
              </li>
            ))}
          </ul>
          <a href={waLink(DEFAULT_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
            <MessageCircle className="w-4 h-4" strokeWidth={2} /> Chamar no WhatsApp
          </a>
        </div>

        {/* Placeholder do mapa — veja no README como trocar por um iframe real do Google Maps */}
        <div className="map-placeholder" role="img" aria-label={`Mapa de localização — ${CONFIG.address}`}>
          <MapPin className="w-8 h-8" strokeWidth={1.6} />
          <p>Substitua por um mapa incorporado do Google Maps</p>
          <span className="map-address">{CONFIG.address}</span>
        </div>
      </div>
    </section>
  );
}
