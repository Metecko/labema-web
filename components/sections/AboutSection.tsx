import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/content/site";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Quiénes somos" title={`Sobre ${SITE.shortName}`} />
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700">
        {SITE.shortName} — el {SITE.fullName} — es una unidad de investigación de la{" "}
        {SITE.institution} de la {SITE.university}, que tiene como objetivo estudiar los
        parámetros de la historia de vida de invertebrados y vertebrados acuáticos, en relación
        con procesos ecológicos, antrópicos y ambientales. Para este propósito, el laboratorio
        genera información principalmente en dos líneas de investigación.
      </p>
    </section>
  );
}
