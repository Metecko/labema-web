import { Card } from "@heroui/react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { ResearchArea } from "@/content/research";

export function ResearchAreaCard({ area }: { area: ResearchArea }) {
  return (
    <Card className="flex h-full flex-col gap-4 p-5">
      <ImagePlaceholder label="Aquí puede ir una imagen" className="aspect-video w-full" />
      <div>
        <Card.Title className="text-lg font-semibold text-slate-900">
          {area.title}
        </Card.Title>
        <Card.Description className="mt-2 text-sm leading-relaxed text-slate-600">
          {area.summary}
        </Card.Description>
      </div>
    </Card>
  );
}
