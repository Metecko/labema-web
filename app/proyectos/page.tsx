import type { Metadata } from "next";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RESEARCH_PROJECTS } from "@/content/projects";

export const metadata: Metadata = {
  title: "Proyectos — LABEMA",
  description:
    "Proyectos de investigación del Laboratorio de Biología y Ecología Marina Aplicada, desarrollados en colaboración con otras instituciones y universidades.",
};

export default function ProyectosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Actividad científica"
        title="Proyectos"
        description="Proyectos de investigación desarrollados en colaboración con otras instituciones y universidades."
      />

      <div className="mt-10 grid gap-6">
        {RESEARCH_PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
