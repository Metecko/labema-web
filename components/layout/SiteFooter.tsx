import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <Image
              src="/logo-ecm-pucv.jpg"
              alt="Escuela de Ciencias del Mar, Pontificia Universidad Católica de Valparaíso"
              width={66}
              height={66}
              className="h-[66px] w-[66px] shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-bold text-white">{SITE.shortName}</p>
              <p className="mt-1 max-w-xs text-sm text-slate-300">{SITE.fullName}</p>
              <p className="mt-1 text-sm text-slate-400">
                {SITE.institution}, {SITE.university}
              </p>
            </div>
          </div>

          <nav aria-label="Navegación de pie de página">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 hover:text-brand-aqua"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="text-xs text-slate-500">
          © {year} {SITE.shortName} — {SITE.fullName}.
        </p>
      </div>
    </footer>
  );
}
