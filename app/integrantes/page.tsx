import type { Metadata } from "next";
import { MemberCard } from "@/components/ui/MemberCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LAB_MEMBERS } from "@/content/members";

export const metadata: Metadata = {
  title: "Integrantes — LABEMA",
  description: "Investigadores, tesistas y colaboradores del Laboratorio de Biología y Ecología Marina Aplicada.",
};

export default function IntegrantesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Equipo"
        title="Integrantes"
        description="Investigadores, tesistas y colaboradores que forman parte del laboratorio."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {LAB_MEMBERS.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}
