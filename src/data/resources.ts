import { ResourceItem } from '../types';

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'res-guia-1',
    title: 'Señales de Preparación (¿Listo para comer?)',
    subtitle: '7 señales neuromotoras, mitos y checklist interactivo',
    organization: 'Manual Baby Chef & Pautas AEPED',
    category: 'guia',
    iconName: 'CheckCircle2',
    description: 'Aprende a identificar con certeza si tu bebé ha alcanzado la madurez para iniciar la alimentación complementaria.',
    badge: 'Imprescindible',
    internalGuideId: 'guia-preparacion'
  },
  {
    id: 'res-guia-2',
    title: 'Manual Atragantamiento vs. Reflejo de Gag',
    subtitle: 'Fisiología, diferencias sonoras y maniobra de primeros auxilios',
    organization: 'Guía de Urgencias Pediátricas (AAP)',
    category: 'primeros_auxilios',
    iconName: 'ShieldAlert',
    description: 'Distingue una arcada normal de una emergencia real y aprende paso a paso la maniobra en lactantes.',
    badge: 'Seguridad Vital',
    internalGuideId: 'guia-gag-atragantamiento'
  },
  {
    id: 'res-guia-3',
    title: 'Ventana Inmunológica y Alérgenos Tempranos',
    subtitle: 'Evidencia científica LEAP / PETIT para prevenir alergias',
    organization: 'Sociedad Española de Inmunología (SEICAP)',
    category: 'alergias',
    iconName: 'ShieldCheck',
    description: 'Protocolo de introducción precoz de cacahuate, huevo, pescado, gluten y lácteos entre los 6 y 12 meses.',
    badge: 'Evidencia 2026',
    internalGuideId: 'guia-alergenos'
  },
  {
    id: 'res-guia-4',
    title: 'Manual APLV (Alergia a la Leche de Vaca)',
    subtitle: 'Síntomas, prueba de exclusión y detección de leche oculta',
    organization: 'Gastroenterología Pediátrica (ESPGHAN)',
    category: 'alergias',
    iconName: 'AlertTriangle',
    description: 'Guía completa sobre APLV mediada y no mediada por IgE, fórmulas especiales y lectura de etiquetas.',
    badge: 'Especializado',
    internalGuideId: 'guia-aplv'
  },
  {
    id: 'res-guia-5',
    title: 'Método BLISS y Cortes Seguros BLW',
    subtitle: 'Pilar de hierro, energía y anatomía del agarre palmar',
    organization: 'Estudio BLISS (Univ. de Otago)',
    category: 'blw',
    iconName: 'Sparkles',
    description: 'Técnicas de corte en bastones de 5-6 cm, arbolitos de brócoli con mango y alimentos antideslizantes.',
    badge: 'BLW Seguro',
    internalGuideId: 'guia-bliss-cortes'
  },
  {
    id: 'res-guia-6',
    title: 'Estimulación del Habla (6 a 12 meses)',
    subtitle: 'Balbuceo, técnica parentés y turnos conversacionales',
    organization: 'Neuropediatría & Logopedia Infantil',
    category: 'lenguaje',
    iconName: 'MessageSquare',
    description: 'Cómo multiplicar el vocabulario de tu bebé en la mesa usando la regla de los 3 tiempos y cero pantallas.',
    badge: 'Habla y Lenguaje',
    internalGuideId: 'guia-lenguaje'
  },
  {
    id: 'res-guia-7',
    title: 'Kit Primeros Dientes e Higiene Bucal',
    subtitle: 'Alivio de encías, qué NUNCA usar y pasta con flúor',
    organization: 'Sociedad Española de Odontopediatría (SEOP)',
    category: 'dental',
    iconName: 'Sparkle',
    description: 'Mitos de la dentición, peligros de los geles de benzocaína/ámbar y cepillado desde el primer diente.',
    badge: 'Odontopediatría',
    internalGuideId: 'guia-dientes'
  },
  {
    id: 'res-guia-8',
    title: 'Juegos y Estimulación Temprana Mes a Mes',
    subtitle: 'Hitos psicomotores y 3 juegos clave de 6 a 12 meses',
    organization: 'Pautas de Desarrollo Infantil OMS',
    category: 'estimulo',
    iconName: 'Gamepad2',
    description: 'Actividades sensoriales, tummy time y desarrollo psicomotor sobre el suelo libre de pantallas.',
    badge: 'Desarrollo',
    internalGuideId: 'guia-juegos'
  },
  {
    id: 'res-guia-9',
    title: 'Guía Oficial de Alimentación Complementaria',
    subtitle: 'Comité de Nutrición y Lactancia Materna',
    organization: 'Asociación Española de Pediatría (AEPED)',
    category: 'pediatria',
    url: 'https://www.aeped.es/comite-nutricion-y-lactancia-materna/nutricion-infantil/documentos/guia-alimentacion-complementaria',
    iconName: 'BookOpen',
    description: 'Documento científico oficial sobre inicio, orden de alimentos, prevención de anemia y requerimientos del primer año.',
    badge: 'Enlace Oficial'
  },
  {
    id: 'res-guia-10',
    title: 'Atención y Soporte Nutricional Baby Chef',
    subtitle: 'Equipo de soporte y contacto nutricional',
    organization: 'Equipo Baby Chef (Nutr. Carla Castilho)',
    category: 'guia',
    url: 'mailto:gftsenterprise@outlook.com',
    iconName: 'HelpCircle',
    description: 'Contacto directo de soporte técnico y orientaciones de la comunidad Baby Chef: gftsenterprise@outlook.com',
    badge: 'Soporte'
  }
];
