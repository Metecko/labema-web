import { Avatar, Card } from "@heroui/react";
import type { LabMember } from "@/content/members";

interface MemberCardProps {
  member: LabMember;
  /** Si es false, no se muestra la reseña completa (usado en la vista previa de Inicio). */
  showBio?: boolean;
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function MemberCard({ member, showBio = true }: MemberCardProps) {
  return (
    <Card className="flex h-full flex-col gap-4 p-5">
      <div className="flex items-center gap-4">
        <Avatar size="lg" className="shrink-0">
          <Avatar.Fallback>{initials(member.name)}</Avatar.Fallback>
        </Avatar>
        <div>
          <Card.Title className="text-base font-semibold text-slate-900">
            {member.name}
          </Card.Title>
          <Card.Description className="text-sm text-brand-teal">
            {member.role}
          </Card.Description>
        </div>
      </div>
      {showBio ? (
        <p className="text-sm leading-relaxed text-slate-600">
          {member.bio}
        </p>
      ) : null}
    </Card>
  );
}
