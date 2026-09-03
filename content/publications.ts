export interface Publication {
  authors: string;
  year: number;
  title: string;
  journal: string;
}

/**
 * Publicaciones visibles en las capturas del sitio anterior. Es una lista
 * PARCIAL: en el sitio antiguo continuaba hacia abajo con más entradas que
 * no llegaron a fotografiarse completas, así que no se inventan ni se
 * completan aquí. Falta que el cliente entregue el listado completo.
 */
export const PUBLICATIONS: Publication[] = [
  {
    authors: "Queirolo D., Montenegro I., Gaete E., Plaza G.",
    year: 2010,
    title:
      "Direct observation of Chilean hake (Merluccius gayi gayi) behaviour in response to trawling in a South Central Chilean fishery",
    journal: "Fisheries Research 102: 327-329",
  },
  {
    authors: "Plaza G., Katayama S., Omori M.",
    year: 2010,
    title:
      "Daily patterns of settlement and individual growth rates of young-of-the-year of the rockfish Sebastes inermis in a Sargassum bed",
    journal: "Fisheries Research 103: 48-55",
  },
  {
    authors: "Hitoshi H., Plaza G., Sakaji H.",
    year: 2009,
    title:
      "Reproductive biology in relation to ovarian allometry and reserve allocation in the round herring Etrumeus teres",
    journal: "Proceedings of the 5th World Fisheries Congress (formato CD)",
  },
];
