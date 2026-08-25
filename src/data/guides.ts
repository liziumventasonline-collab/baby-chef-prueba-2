import { PedagogicalGuide } from '../types';

export const PEDIATRIC_GUIDES: PedagogicalGuide[] = [
  // ========================================================
  // GUÍA 1: SEÑALES DE PREPARACIÓN
  // ========================================================
  {
    id: 'guia-preparacion',
    title: 'Señales de Preparación: ¿Tu Bebé Está Listo?',
    shortDesc: 'Las 7 señales neuromotoras y fisiológicas indispensables antes del primer bocado.',
    icon: 'CheckCircle2',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    badge: 'Fundamental',
    contentSections: [
      {
        heading: '¿Por qué esperar a los 6 meses cumplidos?',
        bodyText: 'Antes de los 6 meses, el sistema digestivo del bebé aún presenta uniones celulares abiertas ("gut closure" incompleto) y los riñones no están maduros para filtrar la carga de solutos de los alimentos sólidos. Además, la leche materna o de fórmula aporta el 100% de la nutrición e hidratación necesaria durante los primeros 180 días de vida.'
      },
      {
        heading: 'Las 7 Señales de Madurez Neuromotora (Checklist)',
        actionChecklist: [
          '1. Control de cabeza y cuello: Mantiene la cabeza erguida, firme y sin tambalear.',
          '2. Se mantiene sentado con apoyo mínimo en su trona con la espalda recta (no se desploma hacia los lados).',
          '3. Pérdida del reflejo de extrusión: Ya no empuja automáticamente la cuchara o el alimento hacia afuera con la lengua.',
          '4. Coordinación ojo-mano-boca: Ve un objeto, lo agarra con la mano y se lo lleva directamente a la boca con precisión.',
          '5. Cierre de labios: Cierra activamente los labios sobre la cuchara para tomar el puré.',
          '6. Movimientos masticatorios: Hace movimientos laterales y verticales con las mandíbulas al explorar objetos.',
          '7. Interés activo por la comida: Sigue con la mirada la comida de los adultos, abre la boca o intenta alcanzarla.'
        ],
        calloutType: 'info',
        calloutText: 'Importante: Las señales deben cumplirse TODAS en conjunto, no solo una o dos.'
      },
      {
        heading: 'Los 4 Falsos Mitos sobre estar "Listo"',
        bulletPoints: [
          '❌ "Se despierta más por la noche": El sueño del bebé es madurativo y depende de ciclos circadianos, no de "llenar la barriga". Dar sólidos antes de tiempo empeora los cólicos nocturnos.',
          '❌ "Se chupa las manos todo el tiempo": A los 3-4 meses llevarse las manos a la boca es un hito de exploración sensorial normal, no señal de hambre.',
          '❌ "Nos mira comer con deseo": La curiosidad por los adultos es normal a partir de los 4 meses, pero su intestino aún no está maduro.',
          '❌ "Tiene bajo peso / percentil": La leche tiene más calorías y densidad nutricional por mililitro que las verduras iniciales.'
        ],
        calloutType: 'warning',
        calloutText: 'Nunca inicies antes de la semana 24 de vida sin indicación médica personalizada.'
      }
    ]
  },

  // ========================================================
  // GUÍA 2: MANUAL ATRAGANTAMIENTO VS GAG
  // ========================================================
  {
    id: 'guia-gag-atragantamiento',
    title: 'Manual Atragantamiento vs. Reflejo de Gag (Arcada)',
    shortDesc: 'Diferencias clave, qué hacer, qué NUNCA hacer y maniobra de primeros auxilios.',
    icon: 'ShieldAlert',
    color: 'text-rose-700',
    bgColor: 'bg-rose-50',
    badge: 'Seguridad Vital',
    contentSections: [
      {
        heading: 'Fisiología del Reflejo de Arcada (Gag Reflex)',
        bodyText: 'El reflejo de gag es un mecanismo de defensa protector y totalmente normal. En los bebés de 6 a 8 meses, el sensor del reflejo está ubicado mucho más adelante en la lengua (a mitad de camino) que en los adultos. Cuando un trozo toca ese punto, la lengua empuja el alimento hacia adelante para evitar que pase a la garganta sin masticar. ¡Es señal de que el sistema funciona bien!'
      },
      {
        heading: 'Tabla Comparativa: Gag vs. Atragantamiento Real',
        tableData: {
          headers: ['Característica', 'Reflejo de Gag (Arcada)', 'Atragantamiento Real (Asfixia)'],
          rows: [
            ['Sonido', 'Ruidoso: tose, hace ruidos de arcada o carraspeo', 'Completamente SILENCIOSO (no entra ni sale aire)'],
            ['Respiración', 'Respira con normalidad entre arcadas', 'Incapaz de llorar, toser o respirar'],
            ['Color de piel', 'Rostro rojizo por el esfuerzo de toser', 'Piel pálida o labios y uñas azulados (cianosis)'],
            ['Reacción del bebé', 'Empuja con la lengua hacia afuera y sigue tranquilo', 'Expresión de pánico, ojos desorbitados, angustia'],
            ['Acción requerida', 'Calma, esperar que resuelva solo, NO intervenir', '🚨 ACTUAR DE INMEDIATO: Maniobra de primeros auxilios']
          ]
        }
      },
      {
        heading: 'Protocolo de Actuación ante el Reflejo de Gag',
        bulletPoints: [
          '1. Mantén la calma y transmite seguridad con tu rostro sonriente ("¡Muy bien, escúpelo mi amor!").',
          '2. NUNCA metas el dedo a ciegas en la boca: empujarías el alimento hacia la laringe convirtiendo una arcada normal en un atragantamiento real.',
          '3. Deja que el bebé tosa con fuerza. La tos es el mecanismo más potente del cuerpo para despejar la vía aérea.',
          '4. No le des golpes en la espalda mientras esté sentado tosiendo normalmente.'
        ]
      },
      {
        heading: '🚨 Maniobra de Primeros Auxilios en Lactantes (< 1 año)',
        bodyText: 'Si el bebé está en silencio, no respira o cambia de color a azul/morado, inicia de inmediato la maniobra:',
        bulletPoints: [
          '1. Coloca al bebé boca abajo sobre tu antebrazo, con la cabeza más baja que el pecho, sujetando firmemente su mandíbula con tus dedos sin tapar la boca.',
          '2. Aplica 5 GOLPES FIRMES en la espalda con el talón de tu mano entre los dos omóplatos.',
          '3. Gira al bebé boca arriba sobre tu otro antebrazo (cabeza aún hacia abajo) y realiza 5 COMPRESIONES TORÁCICAS en el centro del pecho (con 2 dedos justo debajo de la línea imaginaria de los pezones).',
          '4. Alterna 5 golpes de espalda + 5 compresiones en el pecho hasta que el objeto sea expulsado o el bebé comience a llorar.',
          '5. Llama de inmediato al número de emergencias médicas de tu país (911 / 112 / 061).'
        ],
        calloutType: 'alert',
        calloutText: 'Memoriza estos pasos. La rapidez y serenidad de los cuidadores salva vidas.'
      },
      {
        heading: 'Alimentos de Alto Riesgo de Asfixia (Prohibidos o Adaptados)',
        bulletPoints: [
          '⛔ Uvas, tomates cherry, aceitunas y cerezas: NUNCA enteros redondos. Siempre cortar en 4 a lo largo.',
          '⛔ Salchichas redondas: NUNCA en rodajas. Cortar a lo largo en tiras finas.',
          '⛔ Frutos secos enteros, palomitas de maíz, caramelos duros: PROHIBIDOS enteros hasta los 4-5 años.',
          '⛔ Zanahoria o manzana cruda en trozo duro: NUNCA crudas. Siempre al vapor hasta que estén blandas o ralladas extrafinas.'
        ]
      }
    ]
  },

  // ========================================================
  // GUÍA 3: VENTANA INMUNOLÓGICA Y ALÉRGENOS
  // ========================================================
  {
    id: 'guia-alergenos',
    title: 'Ventana Inmunológica y Prevención de Alergias',
    shortDesc: 'La revolución científica de los estudios LEAP y PETIT para la introducción temprana de alérgenos.',
    icon: 'ShieldCheck',
    color: 'text-sky-700',
    bgColor: 'bg-sky-50',
    badge: 'Evidencia 2026',
    contentSections: [
      {
        heading: 'El Gran Cambio de Paradigma Científico',
        bodyText: 'Durante décadas se recomendaba retrasar los alimentos alergénicos hasta los 1, 2 o 3 años. Hoy la ciencia ha demostrado exactamente lo contrario: los estudios LEAP (New England Journal of Medicine) demostraron que la introducción temprana de cacahuate entre los 4 y 11 meses REDUCE en un 81% la incidencia de alergia. Retrasar los alimentos aumenta el riesgo de desarrollar alergia.'
      },
      {
        heading: 'Los 9 Principales Alérgenos y Cómo Ofrecerlos',
        bulletPoints: [
          '🥜 Cacahuate / Maní: Ofrecer a partir de los 6 meses en forma de crema 100% pura diluida con agua tibia, puré o leche. NUNCA el fruto seco entero.',
          '🥚 Huevo: Ofrecer tanto la yema como la clara bien cocidas (huevo duro cocido 10 minutos o tortilla muy cuajada).',
          '🐟 Pescado: Pescado blanco (merluza, lenguado, bacalao) bien desmenuzado sin ninguna espina.',
          '🌾 Gluten / Trigo: Introducir entre los 6 y los 12 meses en cantidades progresivas (fideos tiernos, sémola, pan integral sin sal).',
          '🥛 Lácteos: Yogur natural pasteurizado entero sin azúcar y queso pasteurizado bajo en sal a partir de los 9-12 meses.',
          '🌱 Soya: Tofu blando en dados cocidos o harina de soya.',
          '🌰 Frutos secos (Nuez, Almendra, Avellana): En mantequillas 100% puras diluidas o molidos muy finos como harina en papillas.',
          '🌱 Sésamo / Ajonjolí: En forma de pasta tahini diluida o espolvoreado molido.',
          '🦐 Mariscos: Cocidos muy blandos bien picados a partir de los 9-10 meses.'
        ]
      },
      {
        heading: 'Protocolo Seguro de Introducción de Alérgenos',
        bulletPoints: [
          '1. Ofrece el alérgeno a media mañana o en el almuerzo (nunca de noche) para poder observar al bebé durante las 3-4 horas posteriores.',
          '2. Empieza con una cantidad diminuta (la punta de una cucharilla) el primer día, aumentando al segundo y tercer día.',
          '3. No introduzcas otro alimento nuevo durante esos 3 días.',
          '4. Una vez tolerado, MANTÉN el alimento de forma regular en su dieta semanal (al menos 1-2 veces por semana) para sostener la tolerancia inmunológica activa.'
        ],
        calloutType: 'success',
        calloutText: 'La tolerancia se mantiene con el consumo continuo. Si se suspende durante meses, el sistema inmune puede perder la memoria de tolerancia.'
      }
    ]
  },

  // ========================================================
  // GUÍA 4: MANUAL APLV (ALERGIA A LA PROTEÍNA DE LECHE)
  // ========================================================
  {
    id: 'guia-aplv',
    title: 'Manual APLV: Alergia a la Proteína de Leche de Vaca',
    shortDesc: 'Diferencia con la intolerancia a la lactosa, síntomas, prueba de exclusión y etiquetas.',
    icon: 'AlertTriangle',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    badge: 'Especializado',
    contentSections: [
      {
        heading: '¿Qué es APLV vs. Intolerancia a la Lactosa?',
        bodyText: 'La APLV es una reacción inmunológica contra las proteínas de la leche de vaca (caseína, betalactoglobulina, alfalactoalbúmina). La Intolerancia a la Lactosa es un déficit de la enzima lactasa en el intestino (prácticamente inexistente en lactantes menores de 2 años). Los bebés con APLV NO son intolerantes a la lactosa: su sistema inmune reacciona a la proteína.'
      },
      {
        heading: 'Síntomas Clínicos en 3 Áreas Principales',
        bulletPoints: [
          '🩺 Digestivos: Reflujo severo, vómitos repetidos, heces con moco o hilos de sangre visible, diarrea crónica, cólicos inconsolables, estreñimiento rebelde.',
          '🩺 Cutáneos: Eczema atópico severo que no cede, urticaria repentina, hinchazón de párpados o labios tras el contacto.',
          '🩺 Respiratorios: Rinitis persistente, sibilancias recurrentes o dificultad para respirar.'
        ]
      },
      {
        heading: 'Diagnóstico: El Estándar de Oro (Prueba de Exclusión)',
        bodyText: 'No existe un análisis de sangre único concluyente para APLV no mediada por IgE. El diagnóstico se confirma mediante la DIETA DE EXCLUSIÓN estricta de leche y derivados (en la madre que amamanta o con fórmula extensamente hidrolizada/aminoácidos) durante 2 a 4 semanas, seguida de una prueba de provocación supervisada por el pediatra o alergólogo infantil.'
      },
      {
        heading: 'Detección de Leche Oculta en Etiquetas de Alimentos',
        bulletPoints: [
          '⚠️ Nombres ocultos que son derivados lácteos: Caseína, caseinatos (de calcio, sodio, potasio), suero de leche, suero lácteo en polvo, lactoalbúmina, lactoglobulina, grasa de mantequilla, cuajada.',
          '⚠️ La advertencia "Puede contener trazas de leche" debe evitarse en casos de APLV mediada por IgE severa.',
          '⚠️ Evitar contaminación cruzada en la cocina: usar tablas de picar, cuchillos y sartenes limpios.'
        ],
        calloutType: 'warning',
        calloutText: 'El 80-90% de los niños con APLV superan la alergia de forma espontánea entre los 2 y los 5 años.'
      }
    ]
  },

  // ========================================================
  // GUÍA 5: MÉTODO BLISS Y CORTES SEGUROS BLW
  // ========================================================
  {
    id: 'guia-bliss-cortes',
    title: 'Método BLISS y Cortes Seguros BLW',
    shortDesc: 'La versión mejorada del Baby-Led Weaning respaldada por la ciencia médica.',
    icon: 'Sparkles',
    color: 'text-purple-700',
    bgColor: 'bg-purple-50',
    badge: 'Práctico & Visual',
    contentSections: [
      {
        heading: '¿Qué es el Método BLISS?',
        bodyText: 'BLISS (Baby-Led Introduction to SolidS) es una adaptación científica del BLW desarrollada por investigadoras de la Universidad de Otago (Nueva Zelanda) para solucionar las dos dudas principales del BLW tradicional: el aporte adecuado de hierro/energía y la seguridad contra asfixia.'
      },
      {
        heading: 'Los 3 Pilares No Negociables del Plato BLISS',
        bulletPoints: [
          '1. Garantizar Hierro en cada comida: Ofrecer siempre un alimento rico en hierro de alta absorción (carne de res magra, pollo, yema de huevo, lentejas, garbanzos).',
          '2. Asegurar Densidad Energética: Incluir siempre una fuente de grasa saludable (aguacate, aceite de oliva virgen extra) para que el plato no sea solo agua y fibra.',
          '3. Minimizar Riesgo de Asfixia: Cortes adaptados en bastones blandos de 5-6 cm que el bebé pueda aplastar con sus encías.'
        ]
      },
      {
        heading: 'Guía Anatómica del Agarre Palmar (6 a 9 meses)',
        bulletPoints: [
          '📏 Tamaño: Grosor de 1.5 a 2 cm (el grosor del dedo meñique de un adulto) y longitud de 5 a 6 cm.',
          '👌 Porción visible: El alimento debe sobresalir al menos 2 cm por encima del puño cerrado del bebé para que pueda morder sin tener que abrir la mano.',
          '🥦 Arbolitos con mango: El brócoli se corta dejando 4 cm de tallo para que funcione como agarradera natural.',
          '🍌 Mango y plátano antideslizante: Espolvorear avena molida o dejar media cáscara limpia para evitar que se resbale.',
          '🍚 Bolitas de arroz con legumbres: Arroz glutinoso o integral prensado en bolitas suaves fáciles de agarrar.'
        ],
        calloutType: 'success',
        calloutText: 'Prueba del dedo: Antes de poner el plato frente al bebé, aprieta el alimento entre tu índice y pulgar. Si se aplasta con facilidad, está listo.'
      }
    ]
  },

  // ========================================================
  // GUÍA 6: ESTIMULACIÓN DEL HABLA (6 A 12 MESES)
  // ========================================================
  {
    id: 'guia-lenguaje',
    title: 'Estimulación del Habla y Comunicación Temprana',
    shortDesc: 'Del balbuceo canónico a las primeras palabras: técnicas del parentés y turnos conversacionales.',
    icon: 'MessageSquare',
    color: 'text-indigo-700',
    bgColor: 'bg-indigo-50',
    badge: 'Desarrollo Cognitivo',
    contentSections: [
      {
        heading: 'Línea de Tiempo del Desarrollo del Lenguaje',
        bulletPoints: [
          '🗣️ 4-6 meses: Gorjeos, risas sonoras y primeras cadenas vocálicas ("aaaa", "eeee").',
          '🗣️ 7-9 meses: Balbuceo canónico o reduplicado ("ba-ba-ba", "ma-ma-ma", "da-da-da"). Muestra intención comunicativa.',
          '🗣️ 10-12 meses: Balbuceo variado ("ba-da-ma"), imitación de entonaciones, responde a su nombre y aparecen las primeras protopalabras.'
        ]
      },
      {
        heading: 'El Secreto de los Turnos de Conversación (Conversational Turns)',
        bodyText: 'Investigaciones neurológicas demuestran que lo que realmente estimula las conexiones del área de Broca no es cuántas palabras escucha el bebé de fondo, sino el número de INTERCAMBIOS DE IDA Y VUELTA (turnos conversacionales) que tiene con sus cuidadores.'
      },
      {
        heading: 'La Regla de los 3 Tiempos y la Técnica del Parentés',
        bulletPoints: [
          '1. Habla: Usa entonación melódica, ojos abiertos y frases cortas bien articuladas ("¡Mira el zapallo dulce!").',
          '2. Espera 3 a 5 segundos en silencio mirando a sus ojos: Dale tiempo a su cerebro para procesar y responder con un sonido, gesto o sonrisa.',
          '3. Responde como si hubiera dicho una frase completa: Si dice "¡ba!", responde: "¡Sí, es una banana muy rica!" validando su turno comunicativo.',
          '🚫 Cero pantallas antes del año: La televisión o tablets reducen drásticamente las interacciones verbales y retrasan el habla.'
        ],
        calloutType: 'info',
        calloutText: 'Nombra cada ingrediente y textura durante las comidas: la mesa es el laboratorio lingüístico más rico del hogar.'
      }
    ]
  },

  // ========================================================
  // GUÍA 7: KIT PRIMEROS DIENTES (6 A 12 MESES)
  // ========================================================
  {
    id: 'guia-dientes',
    title: 'Kit Primeros Dientes e Higiene Bucal Infantil',
    shortDesc: 'Cronología dental, qué SÍ y qué NUNCA hacer para aliviar encías y cepillado correcto.',
    icon: 'Sparkle',
    color: 'text-teal-700',
    bgColor: 'bg-teal-50',
    badge: 'Odontopediatría',
    contentSections: [
      {
        heading: 'Cronología Habitual de Erupción Dental',
        bodyText: 'Los primeros en aparecer suelen ser los incisivos centrales inferiores (entre los 6 y 10 meses), seguidos de los incisivos centrales superiores (8 a 12 meses). Cada bebé tiene su propio ritmo genético.'
      },
      {
        heading: 'Qué SÍ es de los dientes vs. Mitos Médicos',
        bulletPoints: [
          '✅ SÍ es síntoma: Babeo abundante, encías inflamadas o rojas, necesidad de morder objetos duros, irritabilidad leve, sueño más inquieto.',
          '❌ NO es de los dientes: Fiebre alta (> 38°C), diarrea líquida abundante o vómitos. Estos síntomas corresponden a infecciones virales coincidentes que requieren evaluación médica.'
        ]
      },
      {
        heading: 'Qué SÍ Alivia las Molestias de Encías',
        bulletPoints: [
          '❄️ Frío de la nevera: Mordedores de silicona enfriados en el refrigerador (NUNCA en el congelador, ya que el hielo quema las encías).',
          '💆 Masaje suave: Masajear la encía con tu dedo limpio envuelto en una gasa húmeda estéril fría.',
          '🥕 Alimentos fríos grandes: Bastones de pepino o zanahoria bien fríos de la nevera bajo supervisión continua.'
        ]
      },
      {
        heading: '⛔ Qué NUNCA Debes Usar (Peligro de Muerte o Toxicidad)',
        bulletPoints: [
          '🚫 NUNCA geles anestésicos con benzocaína o lidocaína: Prohibidos por la FDA y la AEP por riesgo de metahemoglobinemia (asfixia celular en la sangre).',
          '🚫 NUNCA collares o pulseras de ámbar: Riesgo de estrangulamiento y asfixia por perlas sueltas.',
          '🚫 NUNCA pastillas homeopáticas con belladona sin control farmacéutico.'
        ],
        calloutType: 'alert',
        calloutText: 'El mejor alivio es el frío natural, el masaje con gasa limpia y el consuelo con apego.'
      },
      {
        heading: 'Higiene Bucal: Cepillado desde el Primer Diente',
        bulletPoints: [
          '🪥 Cepillo con cabezal pequeño y cerdas ultrasuaves desde que asoma la primera punta de esmalte.',
          '🦷 Pasta dental con 1000 ppm de flúor: Cantidad del tamaño de un GRANO DE ARROZ crudo.',
          '⏰ Frecuencia: 2 veces al día (mañana y noche antes de dormir). No es necesario enjuagar con agua.'
        ]
      }
    ]
  },

  // ========================================================
  // GUÍA 8: JUEGOS Y ESTIMULACIÓN MES A MES (6 A 12M)
  // ========================================================
  {
    id: 'guia-juegos',
    title: 'Juegos y Estimulación Temprana Mes a Mes',
    shortDesc: 'Actividades sensoriales, motrices y cognitivas respaldadas por la OMS.',
    icon: 'Gamepad2',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    badge: 'Desarrollo Integral',
    contentSections: [
      {
        heading: 'Las 3 Reglas de Oro de la OMS para el Primer Año',
        bulletPoints: [
          '1. Tiempo boca abajo (Tummy Time): Al menos 30 minutos acumulados al día durante la vigilia.',
          '2. Cero pantallas: Nada de móviles, tablets ni televisores.',
          '3. Máximo 1 hora seguida sujeto en cochecitos, tronas o sillitas de paseo.'
        ]
      },
      {
        heading: 'Juegos Estrella por Mes',
        bulletPoints: [
          '👶 Mes 6: El Espejo Mágico (reconocimiento propio), Sonajeros con agarre, Tummy Time con juguetes frente a él.',
          '👶 Mes 7: ¿Dónde está el bebé? (permanencia del objeto con pañuelo), Exploración de texturas seguras (esponja suave, silicona).',
          '👶 Mes 8: La Orquesta de Cocina (golpear cucharas de madera y tapas de plástico), Pasar objetos de una mano a la otra.',
          '👶 Mes 9: La Caja de Tesoros (sacar y meter pelotas blandas en recipientes), Gateo con túneles de cojines.',
          '👶 Mes 10: Señalar y Nombrar en libros de tela o cartón grueso, El Teléfono divertido ("¡Ring ring!").',
          '👶 Mes 11-12: Torres de cubos para derribar, Canciones con coreografías de manos ("Cinco lobitos", "Palmas palmitas").'
        ],
        calloutType: 'success',
        calloutText: 'El juego libre en el suelo sobre una alfombra firme es el mejor gimnasio neurológico para tu bebé.'
      }
    ]
  },

  // ========================================================
  // GUÍA 9: GUÍA OFICIAL AEPED RESUMIDA
  // ========================================================
  {
    id: 'guia-aeped',
    title: 'Guía Oficial de Alimentación Complementaria AEPED',
    shortDesc: 'Pautas oficiales del Comité de Nutrición y Lactancia Materna de la Asociación Española de Pediatría.',
    icon: 'BookOpen',
    color: 'text-sky-700',
    bgColor: 'bg-sky-50',
    badge: 'Comité Oficial',
    contentSections: [
      {
        heading: 'Principios Fundamentales de la AEPED',
        bulletPoints: [
          '🥛 Mantener la lactancia materna o fórmula a demanda como alimento principal durante todo el primer año.',
          '⏰ Inicio a los 6 meses cumplidos una vez cumplidas todas las señales de madurez psicomotora.',
          '🧂 Cero sal añadida, cero azúcar y cero miel antes de los 12 meses (prevenir sobrecarga renal y botulismo).',
          '🥩 Ofrecer alimentos ricos en hierro y zinc (carnes magras, legumbres, pescado, huevos) desde el inicio.',
          '🔄 Introducir los alimentos de uno en uno, con intervalos de 2 a 3 días para observar tolerancia.',
          '🥑 Permitir la autorregulación: el bebé decide cuánto come; los padres deciden qué alimentos saludables ofrecer.'
        ],
        calloutType: 'info',
        calloutText: 'La alimentación complementaria no sustituye las tomas de leche, las complementa progresivamente.'
      },
      {
        heading: 'Alimentos a Evitar durante el Primer Año',
        bulletPoints: [
          '🚫 Miel (riesgo de botulismo infantil grave).',
          '🚫 Verduras de hoja verde con alto contenido en nitratos (espinacas y acelgas) en grandes cantidades.',
          '🚫 Pescados grandes con alto contenido en mercurio (pez espada, atún rojo, cazón, lucio).',
          '🚫 Frutos secos enteros, uvas enteras o salchichas en rodajas (riesgo máximo de atragantamiento).',
          '🚫 Alimentos ultraprocesados, zumos de frutas y bebidas azucaradas.'
        ],
        calloutType: 'alert',
        calloutText: 'La seguridad y el respeto por el ritmo del bebé son la clave del éxito alimentario.'
      }
    ]
  },

  // ========================================================
  // GUÍA 10: SOPORTE Y COMUNIDAD BABY CHEF
  // ========================================================
  {
    id: 'guia-soporte',
    title: 'Atención y Orientación Nutricional Baby Chef',
    shortDesc: 'Canales oficiales de asistencia, preguntas frecuentes y soporte al usuario.',
    icon: 'HelpCircle',
    color: 'text-teal-700',
    bgColor: 'bg-teal-50',
    badge: 'Soporte Directo',
    contentSections: [
      {
        heading: 'Canales de Comunicación y Dudas',
        bulletPoints: [
          '📧 Correo de soporte técnico y pedagógico: gftsenterprise@outlook.com',
          '💬 Respuestas habituales en menos de 24 horas laborables.',
          '📱 App 100% offline: Todos los datos de tu bebé se guardan de forma privada en tu dispositivo.'
        ],
        calloutType: 'success',
        calloutText: 'Estamos comprometidos con acompañarte con amor y rigor científico en la alimentación de tu bebé.'
      },
      {
        heading: 'Preguntas Frecuentes',
        bulletPoints: [
          '❓ ¿Cómo recuperar mis datos?: La app almacena las mediciones y favoritos en la memoria local de tu navegador/PWA.',
          '❓ ¿Las recetas son aptas desde los 6 meses?: Sí, el recetario principal está categorizado por mes de inicio (6m, 7m, 8m, 9m, 12m, 18m).',
          '❓ ¿Cómo consultar equivalencias de ingredientes?: Usa el Glosario Regional en la sección de Recursos.'
        ]
      }
    ]
  }
];
