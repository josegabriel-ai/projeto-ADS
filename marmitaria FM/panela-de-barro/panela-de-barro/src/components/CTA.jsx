import { MessageCircle } from "lucide-react";
import { waLink, DEFAULT_MSG } from "../data/config.js";
import SteamIcon from "./ui/SteamIcon.jsx";

export default function CTA() {
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
