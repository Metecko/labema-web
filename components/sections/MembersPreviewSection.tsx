import { ButtonLink } from "@/components/ui/ButtonLink";
import { MemberCard } from "@/components/ui/MemberCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LAB_MEMBERS } from "@/content/members";

export function MembersPreviewSection() {
  const preview = LAB_MEMBERS.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Equipo"
          title="Integrantes"
          description="Investigadores, tesistas y colaboradores que forman parte del laboratorio."
        />
        <ButtonLink href="/integrantes" variant="outline">
          Ver todo el equipo
        </ButtonLink>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((member) => (
          <MemberCard key={member.name} member={member} showBio={false} />
        ))}
      </div>
    </section>
  );
}
