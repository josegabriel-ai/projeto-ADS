/* ------------------------------------------------------------------ */
/* Bloco ilustrativo usado no lugar de fotos reais.                    */
/* TROQUE POR FOTOS REAIS: veja instruções no README.md ("Onde trocar  */
/* as imagens"). Basta substituir este componente por uma <img />.     */
/* ------------------------------------------------------------------ */
export default function PlaceholderArt({ Icon, className = "", tone = "terracotta" }) {
  return (
    <div
      className={`placeholder-art tone-${tone} ${className}`}
      role="img"
      aria-label="Foto ilustrativa — substitua por uma foto real do prato"
    >
      <Icon className="w-10 h-10" strokeWidth={1.6} />
      <span className="placeholder-tag">foto</span>
    </div>
  );
}
