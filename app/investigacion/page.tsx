import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ESCLEROCRONOLOGIA_SECTIONS, RESEARCH_AREAS } from "@/content/research";

export const metadata: Metadata = {
  title: "Investigación — LABEMA",
  description:
    "Líneas de investigación de LABEMA: esclero-cronología de organismos acuáticos y biología y ecología de la reproducción de peces.",
};

export default function InvestigacionPage() {
  const [esclerocronologia, biologiaReproductiva] = RESEARCH_AREAS;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Investigación"
        title="Líneas de investigación"
        description="El laboratorio genera información principalmente a través de dos líneas de trabajo."
      />

      <div className="mt-12 space-y-16">
        <article>
          <h3 className="text-xl font-semibold text-slate-900">
            {esclerocronologia.title}
          </h3>
          <div className="mt-6 space-y-16">
            {ESCLEROCRONOLOGIA_SECTIONS.map((section) => (
              <section key={section.heading}>
                <h4 className="text-lg font-semibold text-slate-900">
                  {section.heading}
                </h4>
                <div className="mt-3 space-y-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base leading-relaxed text-slate-700"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        <article className="border-t border-slate-200 pt-12">
          <h3 className="text-xl font-semibold text-slate-900">
            {biologiaReproductiva.title}
          </h3>
          <p className="mt-3 text-base text-slate-500 italic">
            {biologiaReproductiva.summary}
          </p>
        </article>
      </div>
    </div>
  );
}
