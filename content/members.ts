export interface LabMember {
  name: string;
  role: string;
  bio: string;
}

/**
 * Reseñas reales de los integrantes, tal como fueron entregadas por el
 * cliente en "RSEÑAS INTEGRANTES.docx". El campo `role` es un resumen breve
 * que extraemos de la primera línea de cada reseña para usarlo como
 * subtítulo de tarjeta; el `bio` es el texto completo entregado.
 */
export const LAB_MEMBERS: LabMember[] = [
  {
    name: "Guido Plaza Pastén",
    role: "Director de LABEMA · Profesor Titular, Escuela de Ciencias del Mar (PUCV)",
    bio: "Biólogo Marino (Universidad Arturo Prat), Master & PhD (Facultad de Agricultura, Universidad de Tohoku, Japón). Actualmente es Profesor Titular de la Escuela de Ciencias del Mar de la Pontificia Universidad Católica de Valparaíso (PUCV), y está a cargo del Laboratorio de Biología y Ecología Marina Aplicada (LABEMA). Su interés en investigación se centra en la esclero-cronología, disciplina que estudia los patrones físicos y químicos registrados en bandas de crecimiento de estructuras calcificadas, tales como exoesqueletos de corales, conchas de moluscos, otolitos, estatolitos, escamas, huesos operculares, vértebras, entre otras. También su interés en investigación se orienta al estudio de estrategias reproductivas de peces, particularmente aquellas vinculadas a sus ciclos de vida en condiciones naturales.",
  },
  {
    name: "Pablo Mejías Muñoz",
    role: "Oceanógrafo (PUCV) · Magíster en Oceanografía (PUCV-UV)",
    bio: 'Titulado en Oceanografía (PUCV). Se incorporó al LABEMA durante el año 2024 con el fin de realizar su Trabajo Final de Grado (TFG), denominado "Long-term sea surface temperature (SST) changes between 2003 to 2023, influenced the body size of commercial fishes in the coastal Southeast Pacific", en el Magíster en Oceanografía (PUCV-UV). El TFG está orientado a evaluar la hipótesis "Temperature Size-Rule (TSR)", la cual sugiere la existencia de una reducción en el tamaño corporal de ectotermos producida por aumentos sostenidos en la temperatura. La TSR se abordará a través de dos hipótesis de trabajo: los aumentos de temperatura pueden generar aumentos de los tamaños medios en la fase juvenil (H1) y disminuciones en los tamaños medios en la fase adulta (H2), de cuatro especies comerciales: anchoveta (Engraulis ringens), sardina común (Strangomera bentincki), merluza común (Merluccius gayi gayi) y merluza de tres aletas (Micromesistius australis).',
  },
  {
    name: "José Ágreda Arango",
    role: "Biólogo · Magíster en Oceanografía (UV-PUCV)",
    bio: "Biólogo con Magíster en Oceanografía (UV-PUCV). Se incorpora al LABEMA a fines del año 2023, con el fin de realizar parte de su proyecto de trabajo de grado en el estudio de edad y crecimiento de juveniles de un pez criptobentónico (Helcogrammoides chilensis) al norte de la bahía de Valparaíso, mediante el análisis de las trayectorias de crecimiento en cohortes estacionales. Actualmente desarrolla actividades técnico-analíticas en el LECOA, realizando la preparación, montaje, corte y pulido de otolitos de peces litorales, el recuento de anillos y análisis de la información obtenida, y apoyo adicional en las labores requeridas del laboratorio.",
  },
  {
    name: "Valentina Palta Morales",
    role: "Oceanógrafa (PUCV) · Magíster en Oceanografía (PUCV-UV, en curso)",
    bio: 'Oceanógrafa de la Pontificia Universidad Católica de Valparaíso (PUCV, 2023). Su tesis de pregrado se tituló "Efecto de la Temperatura Superficial del Océano y la Clorofila sobre las Fluctuaciones Interanuales del Tamaño y Forma de Otolitos Sagitales de la Anchoveta Engraulis ringens". Actualmente cursa el Magíster en Oceanografía PUCV-UV, donde desarrolla su tesis sobre variaciones interdecadales de la morfometría de otolitos sagitales en la sardina española (Sardinops sagax) en el norte de Chile, en relación con los cambios de la PDO, la productividad y la temperatura del Pacífico suroriental. Además, realiza labores de técnico del proyecto Fondecyt N.º 1242024.',
  },
  {
    name: "Paulina González Martínez",
    role: "Oceanógrafa (PUCV) · Magíster en Oceanografía (PUCV-UV, en curso)",
    bio: 'Oceanógrafa de la Pontificia Universidad Católica de Valparaíso (PUCV). Desde 2023 forma parte del LABEMA, donde participa en estudios de historia de vida de peces pelágicos mediante el análisis de otolitos. Su tesis de pregrado se tituló "Reconstrucción del nivel trófico de la anchoveta (Engraulis ringens) usando isótopos estables de nitrógeno en sus otolitos, durante eventos ENOS en el norte de Chile". Actualmente desarrolla labores técnicas y analíticas en proyectos vinculados a ecología trófica y crecimiento de peces. En marzo de 2025 inició el Magíster en Oceanografía dictado por la PUCV y la Universidad de Valparaíso.',
  },
  {
    name: "Osneider Palomino Bolaños",
    role: "Ingeniero Pesquero (Universidad del Magdalena, Colombia) · Magíster en Oceanografía (PUCV)",
    bio: "Ingeniero Pesquero de la Universidad del Magdalena (Colombia). En 2019 desarrolló su trabajo de grado en el LABEMA de la PUCV, enfocado en la aplicación de técnicas esclerocronológicas para la reconstrucción de patrones de historia de vida en peces japoneses, mediante análisis elíptico de Fourier. Posteriormente, en 2021, inició el Magíster en Oceanografía en la misma institución y laboratorio, en asociación con el Núcleo Milenio UPWELL. Su tesis de magíster se orientó a la comparación entre poblaciones modernas y del Holoceno medio del recurso roncacho (Sciaena deliciosa), con el fin de establecer diferencias mediante la integración de técnicas de morfología, morfometría geométrica y edad y crecimiento, y su relación con factores oceanográficos. Actualmente desarrolla labores técnico-analíticas en el proyecto FONDECYT 1242024, como asistente de investigación en análisis morfométrico de otolitos de sardina española y anchoveta.",
  },
  {
    name: "Claudeth Asencio",
    role: "Ingeniero Pesquero (Universidad del Magdalena, Colombia) · Magíster en Oceanografía (PUCV-UV)",
    bio: 'Ingeniero Pesquero de la Universidad del Magdalena (Colombia); realizó su trabajo de graduación en el LECOA, de la Escuela de Ciencias del Mar de la PUCV. Ingresó al LABEMA en 2019, donde ha participado en diversos proyectos vinculados al estudio de la dinámica poblacional de recursos pesqueros. Su trabajo se centra en el análisis de otolitos, con diversos propósitos biológicos y ecológicos. El año 2024 obtuvo el grado de Magíster en Oceanografía de la PUCV y la Universidad de Valparaíso, con la tesis "Influence of environmental drivers on the interannual variability of somatic growth of the southern blue whiting (Micromesistius australis) in the Southeastern Pacific Ocean". Actualmente forma parte del proyecto FONDECYT N.º 1242024, donde desarrolla labores de asistente de investigación en edad y crecimiento de sardina española y anchoveta.',
  },
];
