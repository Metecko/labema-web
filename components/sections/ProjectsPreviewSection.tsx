import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RESEARCH_PROJECTS } from "@/content/projects";

export function ProjectsPreviewSection() {
  const preview = RESEARCH_PROJECTS.slice(0, 2);

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Actividad científica"
            title="Proyectos"
            description="Proyectos de investigación desarrollados en colaboración con otras instituciones y universidades."
          />
          <ButtonLink href="/proyectos" variant="outline">
            Ver todos los proyectos
          </ButtonLink>
        </div>

        <div className="mt-8 grid gap-6">
          {preview.map((project) => (
            <ProjectCard key={project.title} project={project} showDescription={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
