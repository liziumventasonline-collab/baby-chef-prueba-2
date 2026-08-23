export interface RegionalSynonym {
  standard: string;
  regionalNames: { countryOrRegion: string; name: string }[];
  category: string;
  notes?: string;
}

export const REGIONAL_GLOSSARY: RegionalSynonym[] = [
  {
    standard: 'Cacahuate / Maní',
    category: 'Frutos secos / Legumbres',
    regionalNames: [
      { countryOrRegion: 'México, Centroamérica, España', name: 'Cacahuate / Cacahuete' },
      { countryOrRegion: 'Argentina, Chile, Colombia, Perú, Uruguay, Brasil', name: 'Maní / Amendoim' }
    ],
    notes: 'Alérgeno común. Ofrecer siempre en crema 100% pura diluida o en polvo, NUNCA entero.'
  },
  {
    standard: 'Fresa / Frutilla',
    category: 'Frutas',
    regionalNames: [
      { countryOrRegion: 'México, Colombia, España, Caribe, Centroamérica', name: 'Fresa' },
      { countryOrRegion: 'Argentina, Chile, Uruguay, Paraguay, Bolivia', name: 'Frutilla' },
      { countryOrRegion: 'Brasil', name: 'Morango' }
    ],
    notes: 'Lavar con abundante agua. Ofrecer en rodajas finas o cuartos seguros.'
  },
  {
    standard: 'Frijol / Poroto / Habichuela / Caraota',
    category: 'Legumbres',
    regionalNames: [
      { countryOrRegion: 'México, Centroamérica, Colombia', name: 'Frijol / Fréjol' },
      { countryOrRegion: 'Argentina, Chile, Uruguay, Paraguay', name: 'Poroto' },
      { countryOrRegion: 'Venezuela', name: 'Caraota' },
      { countryOrRegion: 'España, Caribe', name: 'Alubia / Habichuela / Guandul' },
      { countryOrRegion: 'Brasil', name: 'Feijão' }
    ],
    notes: 'Remojar 12-24 horas para reducir fitatos y facilitar la digestión infantil.'
  },
  {
    standard: 'Maíz / Elote / Choclo',
    category: 'Cereales',
    regionalNames: [
      { countryOrRegion: 'México, Centroamérica', name: 'Elote / Maíz' },
      { countryOrRegion: 'Argentina, Chile, Perú, Bolivia, Ecuador', name: 'Choclo' },
      { countryOrRegion: 'Colombia, Venezuela, Caribe', name: 'Mazorca / Maíz tierno / Jojoto' },
      { countryOrRegion: 'Brasil', name: 'Milho' }
    ],
    notes: 'Cocer hasta que esté muy blando o en forma de polenta/harina precocida.'
  },
  {
    standard: 'Aguacate / Palta',
    category: 'Grasas saludables / Frutas',
    regionalNames: [
      { countryOrRegion: 'México, Centroamérica, Colombia, Venezuela, España', name: 'Aguacate' },
      { countryOrRegion: 'Argentina, Chile, Perú, Uruguay, Bolivia', name: 'Palta' },
      { countryOrRegion: 'Brasil', name: 'Abacate' }
    ],
    notes: 'Excelente fuente de ácidos grasos monoinsaturados esenciales para el cerebro.'
  },
  {
    standard: 'Melocotón / Durazno',
    category: 'Frutas',
    regionalNames: [
      { countryOrRegion: 'España, México (a veces)', name: 'Melocotón' },
      { countryOrRegion: 'Latinoamérica general (Argentina, Chile, Colombia, Perú, México)', name: 'Durazno' },
      { countryOrRegion: 'Brasil', name: 'Pêssego' }
    ],
    notes: 'Ofrecer muy maduro y suave en gajos longitudinales.'
  },
  {
    standard: 'Camote / Boniato / Batata / Papa amarilla',
    category: 'Tubérculos',
    regionalNames: [
      { countryOrRegion: 'México, Centroamérica, Perú', name: 'Camote' },
      { countryOrRegion: 'España, Uruguay', name: 'Boniato' },
      { countryOrRegion: 'Argentina, Colombia, Venezuela, Caribe', name: 'Batata / Papa dulce' },
      { countryOrRegion: 'Brasil', name: 'Batata-doce' }
    ],
    notes: 'Rico en betacarotenos y dulzor natural. Ideal para bastones al vapor BLW.'
  },
  {
    standard: 'Yuca / Mandioca / Casava',
    category: 'Tubérculos',
    regionalNames: [
      { countryOrRegion: 'Colombia, Venezuela, Centroamérica, México, Caribe, Perú', name: 'Yuca' },
      { countryOrRegion: 'Argentina, Paraguay, Uruguay, Brasil', name: 'Mandioca / Macaxeira / Aipim' },
      { countryOrRegion: 'África, Caribe anglófono', name: 'Cassava' }
    ],
    notes: 'Retirar siempre la fibra leñosa del corazón antes de servir.'
  },
  {
    standard: 'Calabaza / Zapallo / Auyama / Abóbora',
    category: 'Verduras',
    regionalNames: [
      { countryOrRegion: 'España, México', name: 'Calabaza' },
      { countryOrRegion: 'Argentina, Chile, Perú, Uruguay, Bolivia, Ecuador', name: 'Zapallo' },
      { countryOrRegion: 'Colombia, Venezuela, República Dominicana', name: 'Auyama / Ahuyama' },
      { countryOrRegion: 'Brasil', name: 'Abóbora' }
    ],
    notes: 'Suave, dulce y muy digerible desde el primer día de AC.'
  },
  {
    standard: 'Calabacín / Zapallito / Zucchini',
    category: 'Verduras',
    regionalNames: [
      { countryOrRegion: 'España, Colombia, México', name: 'Calabacín / Calabacita' },
      { countryOrRegion: 'Argentina, Uruguay, Chile', name: 'Zapallito / Zucchini' },
      { countryOrRegion: 'Perú, Venezuela', name: 'Zucchini / Calabacín' },
      { countryOrRegion: 'Brasil', name: 'Abobrinha' }
    ],
    notes: 'Al vapor con piel ayuda al agarre de las manos del bebé.'
  }
];
