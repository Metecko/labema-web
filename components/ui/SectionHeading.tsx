interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

/** Encabezado estándar para secciones de página: kicker + título + bajada. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-brand-teal uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
