interface ImagePlaceholderProps {
  /** Texto descriptivo de qué imagen debería ir aquí. */
  label?: string;
  className?: string;
  /** Variante compacta (solo ícono, sin texto) para espacios chicos como un logo en el header. */
  iconOnly?: boolean;
}

/**
 * Marcador de espacio para material visual que el cliente aún debe
 * entregar (fotografías del laboratorio, del equipo, terreno, logos, etc.).
 * Deliberadamente identificable como placeholder: no debe confundirse
 * con contenido real (ver AGENTS.md, sección "Imágenes y assets").
 */
export function ImagePlaceholder({
  label = "Aquí puede ir una imagen",
  className = "",
  iconOnly = false,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      title={label}
      className={`flex items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 text-slate-400 ${
        iconOnly ? "p-1.5" : "flex-col gap-2 p-6 text-center"
      } ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={iconOnly ? "h-full w-full shrink-0" : "h-8 w-8 shrink-0"}
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 16l-5.5-5.5a2 2 0 0 0-2.8 0L3 20" />
      </svg>
      {iconOnly ? null : <span className="text-sm font-medium">{label}</span>}
    </div>
  );
}
