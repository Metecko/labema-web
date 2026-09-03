import type { Publication } from "@/content/publications";

export function PublicationItem({ publication }: { publication: Publication }) {
  return (
    <li className="border-b border-slate-200 py-4 last:border-b-0">
      <p className="text-sm text-slate-500">
        {publication.authors} ({publication.year})
      </p>
      <p className="mt-1 font-medium text-slate-900">{publication.title}</p>
      <p className="mt-1 text-sm text-slate-600 italic">
        {publication.journal}
      </p>
    </li>
  );
}
