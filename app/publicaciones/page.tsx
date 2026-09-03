import type { Metadata } from "next";
import { PublicationItem } from "@/components/ui/PublicationItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PUBLICATIONS } from "@/content/publications";

export const metadata: Metadata = {
  title: "Publicaciones — LABEMA",
  description:
    "Publicaciones científicas del Laboratorio de Biología y Ecología Marina Aplicada, resultado de investigación interdisciplinaria con otros investigadores.",
};

export default function PublicacionesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Divulgación científica"
        title="Publicaciones"
        description="El quehacer del laboratorio se divulga principalmente a través de publicaciones científicas con procedimientos de revisión de pares, resultado de investigación interdisciplinaria con otros investigadores."
      />

      <ul className="mt-10">
        {PUBLICATIONS.map((publication) => (
          <PublicationItem key={publication.title} publication={publication} />
        ))}
      </ul>

      <p className="mt-6 text-sm text-slate-500 italic">
        Listado parcial: pendiente de completar con el resto de publicaciones del laboratorio.
      </p>
    </div>
  );
}
