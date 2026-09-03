import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SITE } from "@/content/site";

export function HeroSection() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24 lg:px-8">
        <div>
          <p className="text-sm font-semibold tracking-wide text-brand-aqua uppercase">
            {SITE.institution} · {SITE.university}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {SITE.shortName}
          </h1>
          <p className="mt-2 text-xl text-slate-200">{SITE.fullName}</p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300">
            Estudiamos la historia de vida de invertebrados y vertebrados acuáticos y su relación
            con procesos ecológicos, antrópicos y ambientales.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/investigacion" variant="primary" size="lg">
              Conoce la investigación
            </ButtonLink>
            <Link
              href="/#contacto"
              className="inline-flex h-10 items-center justify-center rounded-3xl border border-white/30 px-4 text-sm font-medium text-white transition-colors hover:bg-white/10 md:h-9"
            >
              Contacto
            </Link>
          </div>
        </div>

        <ImagePlaceholder
          label="Aquí puede ir una imagen (fotografía del laboratorio o de terreno)"
          className="aspect-[4/3] w-full"
        />
      </div>
    </section>
  );
}
