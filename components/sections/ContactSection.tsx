import { Link as HeroLink } from "@heroui/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT, SITE } from "@/content/site";

export function ContactSection() {
  const hasContactInfo = CONTACT.email || CONTACT.phone || CONTACT.address;

  return (
    <section id="contacto" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contacto"
        title="Escríbenos"
        description="¿Tienes una consulta sobre nuestra investigación o quieres colaborar con el laboratorio?"
      />

      <div className="mt-6 max-w-lg rounded-xl border border-slate-200 p-6">
        {hasContactInfo ? (
          <ul className="space-y-2 text-sm text-slate-700">
            {CONTACT.email ? <li>Correo: {CONTACT.email}</li> : null}
            {CONTACT.phone ? <li>Teléfono: {CONTACT.phone}</li> : null}
            {CONTACT.address ? <li>Dirección: {CONTACT.address}</li> : null}
          </ul>
        ) : (
          <p className="text-sm text-slate-500 italic">
            Datos de contacto (correo, teléfono, dirección) pendientes de confirmación por el
            laboratorio.
          </p>
        )}

        <p className="mt-4 text-sm text-slate-600">
          {SITE.shortName} depende de la {SITE.institution} de la {SITE.university}.{" "}
          <HeroLink href="https://www.ecm.ucv.cl" target="_blank" rel="noopener noreferrer">
            Conoce la Escuela de Ciencias del Mar
          </HeroLink>
          .
        </p>
      </div>
    </section>
  );
}
