import { ButtonLink } from "@/components/ui/ButtonLink";
import { ResearchAreaCard } from "@/components/ui/ResearchAreaCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RESEARCH_AREAS } from "@/content/research";

export function ResearchSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Investigación"
            title="Líneas de investigación"
            description="El laboratorio genera información principalmente a través de dos líneas de trabajo."
          />
          <ButtonLink href="/investigacion" variant="outline">
            Ver investigación completa
          </ButtonLink>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {RESEARCH_AREAS.map((area) => (
            <ResearchAreaCard key={area.slug} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
