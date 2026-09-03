export interface ResearchProject {
  title: string;
  fund: string;
  institutions: string;
  researchers: string;
  description: string;
}

/**
 * Proyectos de investigación reales, recuperados del código fuente de la
 * página "Investigación" del sitio anterior del laboratorio
 * (ESCLERO_CODIGO FUENTE PROYECTOS.txt). Se transcriben tal cual, solo
 * reordenados de más a menos reciente.
 */
export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    title:
      "A holistic approach for age and growth determination based on otolith micro-structure methods, in five anchovy species as a contribution for their fishery management",
    fund: "FONDECYT Regular 2014",
    institutions:
      "Pontificia Universidad Católica de Valparaíso; Instituto de Fomento Pesquero",
    researchers: "Guido Plaza (Principal; PUCV); Francisco Cerna (Co-investigador; IFOP)",
    description:
      "Estudios recientes han evidenciado la necesidad de estandarizar criterios de interpretación de micro-incrementos diarios en otolitos sagitales en miembros de la familia Engraulidae, debido a la existencia de anillos dobles, particularmente asociados a la transición de larva a juvenil. La existencia de estas estructuras impacta la precisión en la determinación de edad y, consecuentemente, las estimaciones de los parámetros de crecimiento en las fases tempranas de desarrollo en integrantes de esta familia. Para contribuir a dilucidar esta disyuntiva, el proyecto propone efectuar un análisis comparativo de la microestructura de otolitos sagitales en algunas especies de engráulidos de importancia comercial.",
  },
  {
    title: "Revisión experta de la estimación y asignación de edad de la anchoveta XV-II región",
    fund: "Fondo de Investigación Pesquera (FIP 2014-31)",
    institutions:
      "Pontificia Universidad Católica de Valparaíso; Instituto de Fomento Pesquero",
    researchers: "Guido Plaza (Principal; PUCV); Francisco Cerna (Co-investigador; IFOP)",
    description:
      'Los resultados derivados de dos proyectos de investigación financiados por la Subsecretaría de Pesca y Acuicultura y el Fondo de Investigación Pesquera, orientados a la revisión de los criterios para la determinación y asignación de la edad en anchoveta utilizando micro-incrementos diarios, demostraron la existencia de un elevado crecimiento durante el primer año de vida de la anchoveta Engraulis ringens. Con los resultados obtenidos se realizaron nuevas estimaciones de "K" para la anchoveta del norte, cuyos valores son sustantivamente mayores que las estimaciones efectuadas utilizando la determinación de edad clásica mediante lectura de ánulos. Para contribuir a resolver esta controversia, el presente proyecto pretende efectuar una revisión experta de los criterios de interpretación de micro y macro-anillos en otolitos sagitales de esta especie, mediante la participación de expertos internacionales, conjuntamente con un estudio de campo orientado a obtener nueva información del crecimiento de pre-reclutas en áreas de crianza.',
  },
  {
    title:
      "Caracterización de la historia de vida de anchoveta, sardina común y sardina austral de la zona centro sur",
    fund: "Fondo de Investigación Pesquera (FIP 2013-19)",
    institutions:
      "Instituto de Fomento Pesquero; Pontificia Universidad Católica de Valparaíso",
    researchers: "Francisco Cerna (Principal; IFOP); Guido Plaza (Co-investigador; PUCV)",
    description:
      "La anchoveta (Engraulis ringens), sardina común (Strangomera bentincki) y sardina austral (Sprattus fuegensis) son especies de gran importancia comercial para la pesquería pelágica de la zona centro sur de Chile. A pesar de ello, todavía existe un gran desconocimiento de aspectos de su historia de vida, particularmente durante sus estadios tempranos de desarrollo. En este contexto, el presente proyecto se focaliza en la determinación de edad y crecimiento somático, y fechas de nacimiento, mediante análisis de la micro-estructura de sus otolitos, para ejemplares inmaduros correspondientes a la fracción pre-recluta y recluta de las tres especies.",
  },
  {
    title:
      "Validación de formación de anillos primarios y macro-anillos de crecimiento en otolitos de anchoveta de la zona norte",
    fund: "Proyecto Subsecretaría de Pesca 2011",
    institutions:
      "Pontificia Universidad Católica de Valparaíso; Instituto de Fomento Pesquero",
    researchers:
      "Guido Plaza (Principal; PUCV); Francisco Cerna (Co-investigador; IFOP); Germán Bueno (Co-investigador; UNAP)",
    description:
      "La validación de la periodicidad de formación de los micro-incrementos primarios es crucial para la determinación de edad, no solo de larvas y juveniles de peces teleósteos, sino también para validar la periodicidad de formación de bandas anuales de crecimiento, contribuyendo así a optimizar los criterios de determinación de edad para fines de manejo. En este proyecto se desarrollaron protocolos de validación de micro y macro anillos de crecimiento en otolitos sagitales de la anchoveta del norte en condiciones de confinamiento.",
  },
  {
    title:
      "Estructura de stock de la merluza de tres aletas (Micromesistius australis): contrastando topografía de Moiré, patrón de speckle, análisis de forma y micro-estructura de otolitos",
    fund: "FONDECYT Regular 2010",
    institutions:
      "Pontificia Universidad Católica de Valparaíso; Instituto de Fomento Pesquero",
    researchers: "Guido Plaza (Principal); Darío Pérez (Co-investigador)",
    description:
      "Actualmente, el enfoque recomendado para determinar la estructura de stock de un determinado recurso es desarrollar un enfoque holístico, en el cual varias técnicas son utilizadas simultáneamente para deducir variabilidad y aumentar la potencia discriminatoria. Cuando la metodología deriva de una misma estructura (i.e., otolitos) existen dos ventajas adicionales: (i) optimización de recursos asociados a la recolección del material y (ii) reducción en el costo asociado a los procedimientos de laboratorio asociados al levantamiento de información de la variable de interés. En este contexto, el proyecto evaluó la potencia discriminatoria de la rugosidad, el volumen, la forma del otolito y su micro-estructura en la merluza de tres aletas (Micromesistius australis) entre las poblaciones de los océanos Atlántico y Pacífico.",
  },
  {
    title:
      "Historia de vida de juveniles menores de un año de peces intermareales de Chile Central, revelada mediante análisis de la micro-estructura de sus otolitos",
    fund: "FONDECYT Regular 2010",
    institutions:
      "Pontificia Universidad Católica de Chile; Pontificia Universidad Católica de Valparaíso; Universidad de Valparaíso",
    researchers:
      "Patricio Ojeda (Principal; PUC); Guido Plaza (Co-investigador; PUCV); Mauricio Landaeta (Co-investigador; UV)",
    description:
      "El análisis de la micro-estructura de otolitos (MO), además de registrar los patrones de edad y crecimiento, proporciona información relevante sobre la historia de vida de juveniles de peces teleósteos, como por ejemplo la duración de la vida planctónica y los periodos de asentamiento. Por consiguiente, en este proyecto se efectuó una caracterización acuciosa de la MO en siete especies (Gobiesox marmoratus y Sicyases sanguineus (Gobiesocidae); Auchenionchus microcirrhis (Labrisomidae); Helcogrammoides chilensis (Tripterygiidae); Graus nigra y Girella laevifrons (Kyphosidae); Scartichthys viridis (Blenniidae)) de juveniles que habitan pozas intermareales en la costa central de Chile, para revelar la duración planctónica y sus patrones de asentamiento.",
  },
  {
    title: "Revisión de la asignación por grupo de edad en la anchoveta de la zona norte",
    fund: "Fondo de Investigación Pesquera (FIP 2009-17)",
    institutions:
      "Instituto de Fomento Pesquero; Pontificia Universidad Católica de Valparaíso",
    researchers: "Francisco Cerna (Principal; IFOP); Guido Plaza (Co-investigador; PUCV)",
    description:
      "En este proyecto se caracterizaron los patrones de edad y crecimiento en juveniles menores de un año de la anchoveta (Engraulis ringens) en el norte de Chile, mediante análisis de la micro-estructura de otolitos. El propósito fue reconstruir las distribuciones de frecuencia de nacimientos a través de un ciclo anual, para posteriormente determinar las fluctuaciones del crecimiento sobre una base mensual. E. ringens es una especie de gran importancia económica que posee una extensa época de desove que se extiende durante todo el año. Este extenso proceso reproductivo se traduce en un proceso de reclutamiento continuo a la pesquería, caracterizado por la presencia de ejemplares menores de 11,5 cm de longitud total, con edades de reclutamiento de aproximadamente 4 meses de vida.",
  },
  {
    title:
      "Alternativas de carnada en la pesquería de langosta de Juan Fernández, para disminuir el impacto sobre especies ícticas del archipiélago",
    fund: "Fondo de Investigación Pesquera (FIP 2009-17)",
    institutions: "Pontificia Universidad Católica de Valparaíso",
    researchers:
      "Dante Queirolo (Principal); Mauricio Ahumada (Co-investigador); Guido Plaza (Co-investigador)",
    description:
      "En este proyecto se levantó información sobre características de la historia de vida (ojiva de madurez, patrón de desove, edad y crecimiento) de peces utilizados como carnada en la pesquería de langosta de Juan Fernández, particularmente de la breca (Nemadactylus gayi) y del jurel (Pseudocaranx chilensis). Estos aspectos eran completamente desconocidos para estas especies y pueden ser útiles para generar medidas preliminares de manejo en el marco de una potencial actividad pesquera artesanal sobre estos recursos.",
  },
];
