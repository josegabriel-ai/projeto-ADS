import { MessageCircle } from "lucide-react";
import { waLink, DEFAULT_MSG } from "../data/config.js";

export default function FloatingWhatsApp() {
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
