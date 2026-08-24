export interface MedicalGuideChapter {
  id: string;
  pageNumber: number;
  title: string;
  shortTitle: string;
  subtitle: string;
  badge: string;
  category: 'inicio' | 'nutricion' | 'seguridad' | 'preparacion' | 'triada' | 'despedida';
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  summary: string;
  content: {
    intro?: string;
    sections: {
      subtitle?: string;
      text?: string;
      bullets?: string[];
      numberedList?: string[];
      highlightBox?: {
        type: 'info' | 'alert' | 'success' | 'doctor';
        title?: string;
        content: string;
      };
      table?: {
        headers: string[];
        rows: string[][];
      };
    }[];
  };
}

export const DOCTOR_PROFILE = {
  name: 'Dr. Roberto R. Hernández Rodríguez',
  title: 'Médico Pediatra Intensivista',
  social: '@intensivistapediatra',
  group: '@somos.pediatras',
  avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&auto=format&fit=crop&q=80',
  description: 'Especialista en pediatría y cuidados intensivos pediátricos, enfocado en guiar a los padres en una alimentación complementaria segura, basada en evidencia científica y respetuosa.',
  coverBadge: 'Manual para Padres · Alimentación Complementaria'
};

export const MEDICAL_GUIDE_CHAPTERS: MedicalGuideChapter[] = [
  // ==========================================
  // PÁGINA 1-2: INTRODUCCIÓN & ¿QUÉ HA CAMBIADO?
  // ==========================================
  {
    id: 'intro-cambios',
    pageNumber: 2,
    title: 'Introducción: ¿Qué ha cambiado en los últimos 50 años?',
    shortTitle: 'Introducción',
    subtitle: 'La nueva evidencia en nutrición infantil y por qué empezar a los 6 meses.',
    badge: 'Lectura Inicial',
    category: 'inicio',
    icon: 'BookOpen',
    color: 'text-rose-700',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    summary: 'Las guías mundiales han evolucionado: hoy sabemos que esperar a los 6 meses e introducir alérgenos y carnes tempranamente previene enfermedades y alergias.',
    content: {
      intro: 'Este manual está hecho para ayudarte a ti y a tu bebé a iniciar la alimentación complementaria y hacer que éste sea un proceso divertido. Pero además de la diversión es importante que tu bebé aproveche todos los nutrientes que le podemos dar y así lograr que su desarrollo sea óptimo.',
      sections: [
        {
          subtitle: 'Una evolución basada en evidencia científica',
          text: 'En los últimos 50 años han cambiado mucho las guías de nutrición dictadas por las autoridades mundiales de salud. Si tienes hijos más grandes o consejos de generaciones anteriores, es muy probable que este proceso haya sido muy diferente.'
        },
        {
          subtitle: '¿Qué ha cambiado radicalmente?',
          bullets: [
            '🗓️ El momento exacto de inicio: Actualmente se recomienda de manera unánime iniciar exactamente a los 6 meses cumplidos (180 días de vida).',
            '🥩 Introducción temprana de carnes: Ya no se espera a los 8 o 9 meses para dar carne. Se introduce desde el primer día para aportar hierro hemo vital.',
            '🍊 Cítricos y frutas ácidas: Ya no están prohibidos al inicio.',
            '🥜 Introducción temprana de alérgenos: Huevo, pescado, cacahuate y gluten se introducen tempranamente porque disminuye drásticamente la probabilidad de desarrollar alergias a largo plazo.'
          ]
        },
        {
          highlightBox: {
            type: 'doctor',
            title: 'Tranquilidad para Mamá y Papá',
            content: 'No te preocupes: todos estos cambios son 100% seguros y han sido probados durante años por la ciencia médica antes de emitir estas recomendaciones. El campo de la nutrición pediátrica avanza para proteger a tu bebé.'
          }
        }
      ]
    }
  },

  // ==========================================
  // PÁGINA 3: ¡EMPECEMOS! ¿CÓMO SABER SI ESTÁ LISTO?
  // ==========================================
  {
    id: 'senales-listo',
    pageNumber: 3,
    title: '¡Empecemos! ¿Cómo saber que mi bebé está listo?',
    shortTitle: '5 Señales Clave',
    subtitle: 'Los 5 requisitos neuromotores indispensables antes de dar el primer bocado.',
    badge: 'Checklist Obligatorio',
    category: 'seguridad',
    icon: 'CheckCircle2',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    summary: 'Antes de iniciar, evalúa estas 5 señales neuromotoras. Recuerda: al principio es 10% nutrición y 90% diversión.',
    content: {
      intro: 'Antes de empezar, es fundamental verificar si el cuerpo y sistema nervioso de tu bebé están maduros para recibir alimentos diferentes a la leche.',
      sections: [
        {
          subtitle: 'Las 5 Señales de Madurez Neuromotora:',
          numberedList: [
            'Tiene 6 meses cumplidos (180 días de vida).',
            'Sostiene su cabeza con firmeza cuando lo sientas.',
            'Se mantiene sentado con mínima ayuda (no se desploma hacia los costados).',
            'Muestra interés activo y voluntario por la comida (sigue los cubiertos, abre la boca).',
            'No empuja la comida con la lengua hacia afuera (ha perdido el reflejo de extrusión).'
          ]
        },
        {
          highlightBox: {
            type: 'info',
            title: 'El ritmo de cada bebé es único',
            content: 'Cuando observas estas señales, es muy probable que tu bebé esté listo. Si necesita unos días o semanas más, no te preocupes: no tiene ninguna relevancia negativa en su desarrollo futuro.'
          }
        },
        {
          highlightBox: {
            type: 'success',
            title: 'Regla de Oro Inicial',
            content: 'Al principio, la alimentación complementaria es 10% nutrición y 90% diversión y exploración. Su principal fuente de calorías y nutrientes seguirá siendo la leche materna o de fórmula.'
          }
        }
      ]
    }
  },

  // ==========================================
  // PÁGINA 4: ESCOGE UN MOMENTO FELIZ
  // ==========================================
  {
    id: 'momento-feliz',
    pageNumber: 4,
    title: 'Escoge un Momento Feliz',
    shortTitle: 'El Ritual Feliz',
    subtitle: 'El ambiente emocional y cómo evitar que el hambre frustre la experiencia.',
    badge: 'Ambiente Positivo',
    category: 'inicio',
    icon: 'Smile',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    summary: 'Nunca sientes a un bebé hambriento o irritado a comer. Ofrécele 1/4 de su toma de leche o inicia 30-40 min después de su toma.',
    content: {
      intro: 'Parte del éxito de la alimentación complementaria radica en que tu bebé tenga curiosidad y ganas de comer, pero no lo vamos a lograr si está rugiendo de hambre o irritado.',
      sections: [
        {
          subtitle: 'El Ritual de Inicio con Plena Atención',
          text: 'A este ritual de inicio le tienes que dedicar tiempo, paciencia y toda tu atención sin pantallas, prisas ni distracciones.'
        },
        {
          subtitle: '¿Cómo coordinar con las tomas de leche?',
          bullets: [
            '🥛 Opción 1 (Antes de la toma): Empieza cuando le toque su siguiente toma, pero antes ofrécele un poco de leche (más o menos 1/4 de lo que normalmente toma) para que se calme y no esté desesperado.',
            '⏰ Opción 2 (Después de la toma): Ofrécele los sólidos entre 30 y 40 minutos después de haber terminado su toma de leche habitual.'
          ]
        },
        {
          highlightBox: {
            type: 'doctor',
            title: 'El Primer Bocado',
            content: 'Ya que estamos preparados en un ambiente alegre y relajado, ofrezcamos el primer bocado... ¿Y qué le doy?'
          }
        }
      ]
    }
  },

  // ==========================================
  // PÁGINA 5: ¿CON QUÉ EMPEZAR?
  // ==========================================
  {
    id: 'con-que-empezar',
    pageNumber: 5,
    title: '¿Con qué Empezar? El Hierro como Prioridad',
    shortTitle: '¿Con qué Empezar?',
    subtitle: 'Por qué la leche materna a los 6 meses necesita el refuerzo urgente de hierro.',
    badge: 'Nutrición Crítica',
    category: 'nutricion',
    icon: 'Sparkles',
    color: 'text-rose-700',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    summary: 'Puedes comenzar con cualquier grupo, pero si tienes lactancia materna exclusiva, la carne roja y los alimentos ricos en hierro deben entrar desde el primer día.',
    content: {
      intro: 'Ya no se restringen tantos alimentos como antes: puedes comenzar con cualquier grupo (frutas, verduras o carne), ¡tú decides!',
      sections: [
        {
          subtitle: 'La realidad del Hierro a los 6 meses',
          text: 'La leche materna a los 6 meses ya no alcanza a cubrir por sí sola los requerimientos diarios de hierro de tu bebé, ya que las reservas con las que nació se han ido agotando. Si estás con lactancia materna exclusiva, te recomiendo comenzar con algún alimento rico en hierro lo antes posible.'
        },
        {
          subtitle: 'Carne Roja desde el Primer Día',
          text: 'El alimento que mayor cantidad y mejor calidad de hierro absorbible aporta es la carne roja. Si estás con lactancia materna exclusiva, te recomiendo introducirla sin miedo, incluso el primer día.'
        },
        {
          subtitle: '¿Y si mi bebé toma fórmula infantil?',
          text: 'Si tu bebé toma fórmula, asegúrate de que esté enriquecida con hierro. Si lo está, no es tan urgente iniciar con carnes el día uno (aunque sigue siendo ideal). Recuerda que la fórmula nunca es superior a la leche materna, y esto NO es motivo para suspender la lactancia materna.'
        },
        {
          highlightBox: {
            type: 'info',
            title: 'La División en 3 Grandes Grupos',
            content: 'Para simplificar y asegurar el éxito, dividimos los alimentos en 3 grupos: 1) Ricos en hierro, 2) Ricos en vitamina C y 3) Ricos en energía.'
          }
        }
      ]
    }
  },

  // ==========================================
  // PÁGINA 6: LOS TRES GRANDES GRUPOS DE ALIMENTOS
  // ==========================================
  {
    id: 'tres-grupos-alimentos',
    pageNumber: 6,
    title: 'Los Tres Grandes Grupos de Alimentos',
    shortTitle: '3 Grandes Grupos',
    subtitle: 'Hierro para la sangre, Vitamina C para absorber y Alimentos Energéticos.',
    badge: 'Tríada Pediátrica',
    category: 'triada',
    icon: 'Layers',
    color: 'text-teal-700',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    summary: '1. Hierro (evita anemia) + 2. Vitamina C (multiplica absorción) + 3. Energía (procesos metabólicos y crecimiento).',
    content: {
      intro: 'Para iniciar la alimentación complementaria, la basamos en estos tres grandes pilares nutricionales:',
      sections: [
        {
          subtitle: '1. Alimentos con Hierro y Proteínas 🥩',
          text: 'Los requerimientos de hierro de tu bebé son muy altos y la leche materna no da el aporte suficiente a esta edad. Buscamos dar alimentos ricos en hierro para prevenir la anemia del lactante. La carne roja es la reina del hierro, pero el pollo, pescado, legumbres, hojas verdes y la yema de huevo también ofrecen un aporte excelente.'
        },
        {
          subtitle: '2. Alimentos ricos en Vitamina C 🥦🍊',
          text: 'La vitamina C ayuda al sistema inmune, pero en alimentación complementaria cumple un papel mágico: multiplica la absorción del hierro vegetal y no hemo a nivel intestinal.'
        },
        {
          subtitle: '3. Alimentos Energéticos 🥑🥔',
          text: 'Todos necesitamos energía para llevar a cabo los procesos bioquímicos corporales y el rápido crecimiento del lactante. Esta energía se obtiene de azúcares complejos y grasas saludables insaturadas.'
        }
      ]
    }
  },

  // ==========================================
  // PÁGINA 7: ¿CÓMO EMPIEZO? REGLA DE 3 DÍAS Y ALERGIAS
  // ==========================================
  {
    id: 'como-empiezo-alergias',
    pageNumber: 7,
    title: '¿Cómo Empiezo? Regla de los 3 Días y Alergias',
    shortTitle: 'Regla 3 Días & Alergias',
    subtitle: 'Cómo introducir alimentos nuevos y saber identificar reacciones alérgicas a tiempo.',
    badge: 'Seguridad Médica',
    category: 'seguridad',
    icon: 'ShieldAlert',
    color: 'text-rose-700',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    summary: 'Introduce un alimento nuevo cada 1 a 3 días. Aprende a distinguir síntomas leves de una urgencia por anafilaxia.',
    content: {
      intro: 'Empieza con un alimento, el que hayas escogido, y vas agregando un alimento nuevo cada 1 hasta cada 3 días. Esto se hace para que, si tu bebé presenta alguna reacción alérgica, puedas identificar con certeza qué alimento la ocasionó.',
      sections: [
        {
          subtitle: '¿Cuáles son los síntomas de una reacción alérgica?',
          bullets: [
            '🔴 Ronchas / urticaria en la piel (suelen aparecer entre 1 y 2 horas tras comer).',
            '🤮 Reflujo severo o vómitos repetidos.',
            '💩 Diarrea o mucosidad repentina.',
            '👄 Inflamación de labios, lengua o rostro.',
            '🫁 Sibilancias (silbidos en el pecho) o dificultad para respirar.',
            '🚨 Anafilaxia (reacción alérgica generalizada grave).'
          ]
        },
        {
          highlightBox: {
            type: 'alert',
            title: 'Protocolo ante Sospecha de Alergia',
            content: 'Si tu bebé presenta ronchas o vómitos, suspende de inmediato el alimento. Si presenta inflamación en la cara, silbidos en el pecho o dificultad respiratoria, LLAMA DE INMEDIATO A URGENCIAS MÉDICAS. Si en tu familia hay antecedentes severos de alergias, consulta con tu pediatra antes de iniciar.'
          }
        }
      ]
    }
  },

  // ==========================================
  // PÁGINA 8: ¿CÓMO PREPARAR LOS ALIMENTOS?
  // ==========================================
  {
    id: 'como-preparar-alimentos',
    pageNumber: 8,
    title: '¿Cómo Preparar los Alimentos? Papillas, BLW y BLIS',
    shortTitle: 'Preparación & Texturas',
    subtitle: 'Reglas de cocción: Cero sal, cero azúcar, y la prueba del dedo meñique para BLW.',
    badge: 'Técnica en Cocina',
    category: 'preparacion',
    icon: 'Utensils',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    summary: 'Sin sal ni azúcares. En BLW/BLIS: piezas del tamaño del dedo meñique que se deshagan al presionarlas entre los dedos índice y pulgar.',
    content: {
      intro: 'Depende de cómo quieras empezar: si eliges papillas tradicionales, Baby Led Weaning (BLW) o Baby Led Introduction to Solids (BLIS), adaptarás la textura y preparación.',
      sections: [
        {
          subtitle: 'Reglas de Oro Generales en la Cocina',
          bullets: [
            '🧂 CERO SAL: No utilices sal ni sazonadores con sodio durante todo el primer año.',
            '🧈 CERO MANTEQUILLA con sal o grasas trans.',
            '🍯 CERO AZÚCARES SIMPLES: Prohibido azúcar, miel de abeja (riesgo de botulismo), miel de agave o jarabe de maple.',
            '🔥 Métodos saludables: Cuece al vapor, hierve o haz a la plancha para triturar o servir en trozos seguros.',
            '🥑 Alimentos suaves por naturaleza: El aguacate y el plátano ya tienen una textura suave natural que se puede ofrecer sin cocción.'
          ]
        },
        {
          subtitle: 'Si vas a hacer BLW o BLIS (Alimentación autorregulada):',
          bullets: [
            '👌 Prueba de presión: El alimento debe tener consistencia firme pero que se deshaga fácilmente con la presión de tus dedos (índice y pulgar).',
            '🖐️ Tamaño meñique: El alimento debe tener la longitud de tu dedo meñique para que el bebé pueda agarrarlo con la palma de la mano y sobresalga un extremo para morder.',
            '📈 Progresión natural: A medida que el bebé crezca y desarrolle la pinza fina (9-10 meses), podrás ofrecer trocitos más pequeños.'
          ]
        }
      ]
    }
  },

  // ==========================================
  // PÁGINA 9: ¿QUÉ SIGUE? COMBINACIONES Y PROGRESIÓN
  // ==========================================
  {
    id: 'que-sigue-combinaciones',
    pageNumber: 9,
    title: '¿Qué Sigue? Combinaciones y Progresión',
    shortTitle: 'Progresión y Mezclas',
    subtitle: 'Cómo perder el miedo, sumar alimentos y construir repertorios variados.',
    badge: 'Avance Diario',
    category: 'nutricion',
    icon: 'TrendingUp',
    color: 'text-indigo-700',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    summary: 'Mientras antes pruebe alimentos y texturas seguras, mejor los aceptará en el futuro. Avanza: Día 1 (A) ➡️ Día 2 (A+B) ➡️ Día 3 (A+B+C).',
    content: {
      intro: 'Si tu bebé ya lleva unos días con la alimentación complementaria, continúa agregando alimentos al repertorio y haz combinaciones para que vaya experimentando diferentes texturas.',
      sections: [
        {
          subtitle: 'No temas a los alimentos',
          text: 'Si tu bebé no ha tenido reacciones alérgicas, ve sumando una amplia variedad: cítricos, pollo, huevo, pescado, crema de cacahuate 100% natural, etc. Recuerda: mientras más temprano pruebe los alimentos en un marco seguro, mayor será la aceptación y menor el riesgo de selectividad alimentaria futura.'
        },
        {
          subtitle: 'Esquema de Progresión Combinada',
          bullets: [
            'Día 1: Alimento A (ej. Zanahoria al vapor)',
            'Día 2: Alimento A + Alimento B (ej. Zanahoria + Ternera deshebrada suave)',
            'Día 3: Alimento A + Alimento B + Alimento C (ej. Zanahoria + Ternera + Aguacate)'
          ]
        },
        {
          highlightBox: {
            type: 'doctor',
            title: '¡Diviértanse en el proceso!',
            content: 'Juega con las texturas, los colores y las presentaciones. La comida debe ser una experiencia sensorial alegre y libre de presiones.'
          }
        }
      ]
    }
  },

  // ==========================================
  // PÁGINA 10: JUEGA PARA EL HIERRO (LA TRÍADA COMPLETA)
  // ==========================================
  {
    id: 'juega-para-el-hierro',
    pageNumber: 10,
    title: 'Juega para el Hierro: La Tríada Nutricional',
    shortTitle: 'Tabla de la Tríada',
    subtitle: 'El juego no es solo dar hierro, sino MAXIMIZAR su absorción con la Tríada.',
    badge: 'Tabla de Alimentos',
    category: 'triada',
    icon: 'Table',
    color: 'text-rose-700',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    summary: 'La fórmula infalible: En cada comida combina 1 Alimento con Hierro 🔴 + 1 Rico en Vitamina C 🟢 + 1 Alimento Energético 🟠.',
    content: {
      intro: 'En esta etapa la reserva de hierro de tu bebé se está agotando, y es crucial maximizar su absorción en cada plato. No se trata solo de dar hierro, sino de combinarlo con Vitamina C para que el intestino absorba hasta 3 veces más.',
      sections: [
        {
          subtitle: 'Los 3 Grupos de la Tríada Pediátrica:',
          bullets: [
            '🔴 GRUPO 1: Alimentos Ricos en Hierro y Proteínas (Carne roja, Pescado, Pollo, Pavo, Huevo, Frijoles, Lentejas, Legumbres, Ajonjolí, Chía, Linaza).',
            '🟢 GRUPO 2: Alimentos Ricos en Vitamina C (Brócoli, Pimientos rojos, Camote, Tomate, Espárragos, Ejotes, Fresas, Kiwi, Sandía, Mango, Naranja, Mandarina).',
            '🟠 GRUPO 3: Alimentos Energéticos (Tortilla de maíz, Papa, Hotcakes saludables de avena/plátano, Aguacate, Nueces molidas, Yoghurt natural sin azúcar, Queso bajo en sodio pasteurizado, Avena, Arroz).'
          ]
        },
        {
          highlightBox: {
            type: 'info',
            title: 'Sin Estrés: La Regla de los 3 Colores',
            content: 'No te estreses calculando gramos. Asegúrate de que en el plato haya un representante de cada uno de los tres colores (Rojo + Verde + Naranja).'
          }
        }
      ]
    }
  },

  // ==========================================
  // PÁGINA 11: COMBINA EJEMPLOS & CREA TU MENÚ
  // ==========================================
  {
    id: 'combina-ejemplos-menu',
    pageNumber: 11,
    title: 'Combina Ejemplos: Desayuno, Comida y Cena',
    shortTitle: 'Ejemplos de Menús',
    subtitle: 'Cómo aplicar la Tríada con platos sencillos y deliciosos de la vida real.',
    badge: 'Ideas Prácticas',
    category: 'triada',
    icon: 'UtensilsCrossed',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    summary: '6 combinaciones reales creadas por el Dr. Roberto para el día a día combinando Hierro, Vit C y Energía.',
    content: {
      intro: 'Mira estos ejemplos prácticos donde cada tiempo de comida tiene sus 3 colores:',
      sections: [
        {
          subtitle: '☀️ Desayunos con Tríada',
          bullets: [
            'Ejemplo 1: Huevo cocido (🔴 Hierro) + Dedos de mango (🟢 Vit C) + Hot cakes de plátano y avena (🟠 Energía).',
            'Ejemplo 2: Tostada Francesa con huevo (🔴 Hierro / 🟠 Energía) + Fresas en gajos (🟢 Vit C) + Yoghurt natural (🟠 Energía).'
          ]
        },
        {
          subtitle: '🍲 Comidas / Almuerzos con Tríada',
          bullets: [
            'Ejemplo 1: Albóndigas de carne de res (🔴 Hierro) + Espárragos al vapor (🟢 Vit C) + Tortilla de maíz (🟠 Energía).',
            'Ejemplo 2: Salmón horneado (🔴 Hierro) + Brócoli al vapor (🟢 Vit C) + Pan tostado integral (🟠 Energía).'
          ]
        },
        {
          subtitle: '🌙 Cenas con Tríada',
          bullets: [
            'Ejemplo 1: Deditos de lentejas (🔴 Hierro) + Tomate en gajos (🟢 Vit C) + Sobre un pan con guacamole suave (🟠 Energía).',
            'Ejemplo 2: Tortitas de pavo caseras (🔴 Hierro) + Dedos de camote al horno (🟢 Vit C) + Pan tostado (🟠 Energía).'
          ]
        }
      ]
    }
  },

  // ==========================================
  // PÁGINA 12-13: MENSAJE FINAL DEL PEDIATRA
  // ==========================================
  {
    id: 'mensaje-final-pediatra',
    pageNumber: 13,
    title: 'Carta Final del Dr. Roberto R. Hernández',
    shortTitle: 'Carta del Doctor',
    subtitle: 'Un recordatorio con amor para disfrutar cada bocado y cada etapa.',
    badge: 'Despedida & Contacto',
    category: 'despedida',
    icon: 'Heart',
    color: 'text-rose-700',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    summary: '“Los bebés exploran el mundo con la boca y tú estás ahí para mostrárselo. Esta etapa es única e irrepetible.”',
    content: {
      intro: 'Los bebés exploran el mundo con la boca y tú estás ahí para mostrárselo. Recuerda que esta etapa es única e irrepetible y se pasa en un instante, así que no pierdas ninguna oportunidad para crear recuerdos y memorias.',
      sections: [
        {
          subtitle: 'Disfruta cada bocado',
          text: 'Disfruta cada bocado que le das a tu bebé y sigue mostrándole el mundo en cada etapa de su vida.'
        },
        {
          highlightBox: {
            type: 'doctor',
            title: '¡Gracias por confiar en mí!',
            content: 'Roberto — Dr. Roberto R. Hernández Rodríguez (@intensivistapediatra / @somos.pediatras)'
          }
        }
      ]
    }
  }
];

// Food classification items for the interactive triad builder in the guide
export const TRIAD_FOODS_DATABASE = {
  hierroProteinas: [
    { name: 'Carne roja (res/ternera)', icon: '🥩', type: 'hierro_hemo', desc: 'Máxima absorción de hierro' },
    { name: 'Pescado blanco o azul', icon: '🐟', type: 'hierro_hemo', desc: 'Omega-3 y proteínas' },
    { name: 'Pollo deshebrado suave', icon: '🍗', type: 'hierro_hemo', desc: 'Fácil digestión' },
    { name: 'Pavo magro', icon: '🦃', type: 'hierro_hemo', desc: 'Bajo en grasa' },
    { name: 'Huevo (yema/clara)', icon: '🥚', type: 'hierro_proteina', desc: 'Nutrición cerebral completa' },
    { name: 'Frijoles cocidos / machacados', icon: '🫘', type: 'hierro_vegetal', desc: 'Legumbre rica en fibra' },
    { name: 'Lentejas cocidas', icon: '🍲', type: 'hierro_vegetal', desc: 'Hierro vegetal excelente' },
    { name: 'Semillas de Chía molidas', icon: '🌱', type: 'semilla', desc: 'Omega 3 y calcio' },
    { name: 'Ajonjolí / Sésamo molido', icon: '🌾', type: 'semilla', desc: 'Calcio y hierro' },
    { name: 'Semillas de Linaza molidas', icon: '✨', type: 'semilla', desc: 'Fibra soluble y energía' }
  ],
  vitaminaC: [
    { name: 'Brócoli al vapor', icon: '🥦', type: 'vit_c', desc: 'Potenciador #1 del hierro' },
    { name: 'Pimientos rojos cocidos', icon: '🫑', type: 'vit_c', desc: 'Doble de vit C que la naranja' },
    { name: 'Camote / Batata al horno', icon: '🍠', type: 'vit_c_energia', desc: 'Dulzor natural y betacarotenos' },
    { name: 'Tomate en gajos sin piel', icon: '🍅', type: 'vit_c', desc: 'Licopeno y agua' },
    { name: 'Espárragos suaves', icon: '🌱', type: 'vit_c', desc: 'Fácil agarre para BLW' },
    { name: 'Ejotes / Judías verdes', icon: '🥬', type: 'vit_c', desc: 'Textura crujiente tierna' },
    { name: 'Fresas en láminas/gajos', icon: '🍓', type: 'vit_c', desc: 'Antioxidantes y sabor' },
    { name: 'Kiwi maduro en gajos', icon: '🥝', type: 'vit_c', desc: 'Altísima vitamina C' },
    { name: 'Sandía en rebanadas', icon: '🍉', type: 'vit_c', desc: 'Hidratación pura' },
    { name: 'Mango maduro en bastón', icon: '🥭', type: 'vit_c', desc: 'Textura suave y cremosa' },
    { name: 'Naranja en gajos limpios', icon: '🍊', type: 'citrico', desc: 'Cítrico clásico' },
    { name: 'Mandarina en gajos sin semillas', icon: '🍊', type: 'citrico', desc: 'Sabor suave y dulce' }
  ],
  energeticos: [
    { name: 'Tortilla de maíz', icon: '🫓', type: 'carbohidrato', desc: 'Calcio y carbohidratos complejos' },
    { name: 'Papa cocida / Puré con aceite de oliva', icon: '🥔', type: 'carbohidrato', desc: 'Energía suave estomacal' },
    { name: 'Hotcakes de avena y plátano (sin azúcar)', icon: '🥞', type: 'carbohidrato_saludable', desc: 'Favorito del desayuno' },
    { name: 'Aguacate maduro en gajos', icon: '🥑', type: 'grasa_saludable', desc: 'Grasas monoinsaturadas vitales' },
    { name: 'Crema de cacahuate / nueces (100% pura)', icon: '🥜', type: 'grasa_proteina', desc: 'Densidad calórica y alérgeno precoz' },
    { name: 'Yoghurt Natural sin azúcar ni endulzante', icon: '🥛', type: 'lacteo_fermentado', desc: 'Probióticos y calcio' },
    { name: 'Queso fresco bajo en sodio y pasteurizado', icon: '🧀', type: 'lacteo', desc: 'Proteína y calcio' },
    { name: 'Cereal de Avena en hojuelas cocidas', icon: '🥣', type: 'cereal', desc: 'Fibra prebiótica' },
    { name: 'Arroz cocido suave', icon: '🍚', type: 'cereal', desc: 'Hipoalergénico y suave' }
  ]
};
