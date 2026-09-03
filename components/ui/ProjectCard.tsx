import { Card, Chip } from "@heroui/react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { ResearchProject } from "@/content/projects";

interface ProjectCardProps {
  project: ResearchProject;
  /** En la vista previa de Inicio no mostramos la descripción completa. */
  showDescription?: boolean;
}

export function ProjectCard({ project, showDescription = true }: ProjectCardProps) {
  return (
    <Card className="flex flex-col gap-4 p-5 sm:flex-row">
      <ImagePlaceholder
        label="Aquí puede ir una imagen"
        className="aspect-square w-full shrink-0 sm:w-40"
      />
      <div className="flex flex-col gap-2">
        <Card.Title className="text-base font-semibold text-slate-900">
          {project.title}
        </Card.Title>
        <div className="flex flex-wrap gap-2">
          <Chip variant="soft" color="accent" size="sm">
            <Chip.Label>{project.fund}</Chip.Label>
          </Chip>
        </div>
        <p className="text-sm text-slate-600">
          <span className="font-medium text-slate-700">Instituciones: </span>
          {project.institutions}
        </p>
        <p className="text-sm text-slate-600">
          <span className="font-medium text-slate-700">Investigadores: </span>
          {project.researchers}
        </p>
        {showDescription ? (
          <Card.Description className="mt-1 text-sm leading-relaxed text-slate-600">
            {project.description}
          </Card.Description>
        ) : null}
      </div>
    </Card>
  );
}
