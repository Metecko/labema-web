export const SITE = {
  shortName: "LABEMA",
  fullName: "Laboratorio de Biología y Ecología Marina Aplicada",
  institution: "Escuela de Ciencias del Mar",
  university: "Pontificia Universidad Católica de Valparaíso",
  universityAcronym: "PUCV",
  domain: "labema.cl",
};

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Investigación", href: "/investigacion" },
  { label: "Integrantes", href: "/integrantes" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Publicaciones", href: "/publicaciones" },
  { label: "Contacto", href: "/#contacto" },
];

/**
 * Datos de contacto institucional.
 *
 * El sitio anterior (bajo el nombre "Laboratorio de Esclero-cronología")
 * mostraba un teléfono de contacto, pero como LABEMA es una nueva marca no
 * asumimos que siga siendo válido. Mientras el cliente no lo confirme,
 * dejamos los campos marcados como pendientes en vez de inventarlos.
 */
export const CONTACT = {
  email: null as string | null,
  phone: null as string | null,
  address: null as string | null,
};
