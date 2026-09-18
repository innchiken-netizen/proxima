import { ActiveIngredient } from '../types';

export const ingredients: ActiveIngredient[] = [
  {
    id: 'niacinamide',
    name: 'Niacinamide (Vitamin B3)',
    chemicalName: 'Pyridine-3-carboxamide',
    benefit: {
      en: 'Strengthens the skin barrier, calms inflammation, and regulates sebum in high humidity.',
      fr: 'Renforce la barrière cutanée, apaise les inflammations et régule le sébum sous forte humidité.',
    },
    whatItDoes: {
      en: 'Niacinamide is a water-soluble vitamin that works with the natural substances in your skin to visibly minimize enlarged pores, improve uneven skin tone, soften fine lines, and strengthen a weakened moisture barrier against tropical environmental stressors.',
      fr: 'La Niacinamide est une vitamine hydrosoluble essentielle qui agit en harmonie avec la biologie cutanée pour resserrer les pores dilatés, unifier le grain de peau et restaurer le film lipidique protecteur face aux agressions climatiques.',
    },
    whoItsFor: {
      en: 'All skin types, particularly melanin-rich skin prone to post-inflammatory hyperpigmentation or excess shine in warm weather.',
      fr: 'Tous types de peaux, particulièrement les peaux mélanées sujettes aux marques post-inflammatoires ou aux excès de brillance en climat chaud.',
    },
    howToUse: {
      en: 'Gentle enough for daily morning and evening use. Integrates smoothly before moisturizers or blended into body oils.',
      fr: 'Doux pour un usage biquotidien matin et soir. S’applique idéalement avant la crème ou en synergie dans une huile corporelle.',
    },
    featuredInSkus: ['PDL-HUILE', 'PDL-SNOWOIL']
  },
  {
    id: 'alpha-arbutin',
    name: 'Alpha Arbutin',
    chemicalName: '4-Hydroxyphenyl-α-D-glucopyranoside',
    benefit: {
      en: 'Gently clarifies dark marks and sunspots without altering your natural, healthy melanin undertones.',
      fr: 'Atténue en douceur les taches brunes et solaires sans altérer la carnation naturelle et saine de la peau.',
    },
    whatItDoes: {
      en: 'A biosynthesized derivative of bearberry plant, Alpha Arbutin acts by slowly releasing hydroquinone equivalents via enzymatic hydrolysis, safely inhibiting tyrosinase activity without cytotoxic side effects or rebound pigmentation.',
      fr: 'Dérivé végétal noble issu de la busserole, l’Alpha Arbutine régule en douceur l’enzyme tyrosinase responsable de l’hyperpigmentation localisée, sans effet rebond ni agression pour les mélanocytes.',
    },
    whoItsFor: {
      en: 'Individuals seeking to even out sun patches, blemish marks, and dullness while prioritizing dermal barrier integrity.',
      fr: 'Les peaux présentant des taches solaires, des cicatrices d’acné ou un manque de régularité du teint, soucieuses de préserver leur intégrité épidermique.',
    },
    howToUse: {
      en: 'Apply to cleansed skin. Always protect with sunscreen during daytime exposure for optimal skin wellness.',
      fr: 'Appliquer sur peau propre. Toujours accompagner d’une protection solaire le jour pour préserver la netteté du teint.',
    },
    featuredInSkus: ['PDL-SNOWOIL']
  },
  {
    id: 'retinol',
    name: 'Retinol (Vitamin A)',
    chemicalName: 'All-trans-retinol',
    benefit: {
      en: 'Accelerates cellular turnover to smooth rough texture and maintain firm, youthful skin elasticity.',
      fr: 'Accélère le renouvellement cellulaire pour lisser la texture et maintenir l’élasticité et la fermeté cutanées.',
    },
    whatItDoes: {
      en: 'Retinol stimulates epidermal renewal and promotes collagen synthesis deep within the dermis, gently buffing away dead surface buildup and softening texture.',
      fr: 'Le Rétinol stimule la régénération épidermique et participe au maintien du collagène, aidant à lisser les rugosités et à préserver l’élasticité de la peau.',
    },
    whoItsFor: {
      en: 'Skin experiencing uneven texture, dullness, or early signs of environmental photoaging.',
      fr: 'Les peaux sujettes au grain irrégulier, au teint terne ou aux premiers signes de vieillissement lié au soleil.',
    },
    howToUse: {
      en: 'Best utilized in evening routines. Start with 2–3 applications per week, gradually increasing as tolerance builds.',
      fr: 'À privilégier lors du rituel du soir. Commencer par 2 à 3 applications par semaine pour laisser la peau s’habituer en douceur.',
    },
    featuredInSkus: ['PDL-SNOWOIL', 'PDL-HUILE']
  },
  {
    id: 'vitamin-c',
    name: 'Vitamin C',
    chemicalName: 'L-Ascorbic Acid Derivative',
    benefit: {
      en: 'Potent antioxidant defense against urban pollution and free radicals, enhancing radiant skin glow.',
      fr: 'Défense antioxydante puissante contre la pollution et les radicaux libres, décuplant l’éclat naturel.',
    },
    whatItDoes: {
      en: 'Neutralizes oxidative stress from sunlight and urban dust while revitalizing tired skin cells, bestowing a natural morning radiance.',
      fr: 'Neutralise le stress oxydatif provoqué par les rayons UV et la pollution urbaine, tout en réveillant la fraîcheur et la vitalité cutanée.',
    },
    whoItsFor: {
      en: 'Tired, sun-stressed, or city-exposed skin looking for a vibrant boost of healthy luminosity.',
      fr: 'Les peaux citadines fatiguées ou exposées au soleil cherchant un regain d’éclat et de luminosité.',
    },
    howToUse: {
      en: 'Ideal for morning application beneath your daily lotion or face cream to shield your skin throughout the day.',
      fr: 'Parfait pour le rituel du matin, avant votre crème ou lotion protectrice.',
    },
    featuredInSkus: ['PDL-SNOWOIL']
  },
  {
    id: 'botanical-lipids',
    name: 'Plant Botanical Lipids',
    chemicalName: 'Phytosterol & Triglyceride Complex',
    benefit: {
      en: 'Replenishes the intercellular cement of the skin without heavy occlusive waxes.',
      fr: 'Restaure le ciment intercellulaire de la peau sans sensation cireuse ou occlusive.',
    },
    whatItDoes: {
      en: 'Provides essential omega fatty acids that melt naturally into the skin, preventing transepidermal water loss (TEWL) in air-conditioned interiors or direct heat.',
      fr: 'Apporte des acides gras essentiels qui fusionnent avec la peau, empêchant l’évaporation de l’eau que ce soit sous la climatisation ou la chaleur extérieure.',
    },
    whoItsFor: {
      en: 'Anyone prone to dryness, tight skin sensations, or dull ashy tones after bathing.',
      fr: 'Idéal pour toute personne sujette aux tiraillements ou au voile grisâtre après la douche.',
    },
    howToUse: {
      en: 'Massage generously onto clean damp skin immediately after bathing to lock in supreme hydration.',
      fr: 'Masser généreusement sur peau encore humide après le bain pour sceller l’hydratation.',
    },
    featuredInSkus: ['PDL-GEL', 'PDL-LAIT', 'PDL-CREAM', 'PDL-HUILE']
  }
];
