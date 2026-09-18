import { Product } from '../types';

export const products: Product[] = [
  // ==========================================
  // 1. PINK LINE: Retinol + Vitamin C Line
  // ==========================================
  {
    sku: 'PDL-LOTION-PINK',
    name: 'Lait Peau de Lune — Florale Plus (Pink)',
    frenchName: 'Lait Corporel Peau de Lune — Florale Plus (Rose)',
    category: 'Body Lotion',
    colorLine: 'pink',
    colorLabel: 'Retinol + Vitamin C Line',
    size: '550ml',
    retailPriceNgn: 7750,
    casePriceNgn: 75000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/product-body-lotion.jpg',
    keyActives: ['Retinol', 'Vitamin C'],
    benefitStatement: {
      en: 'Smoothing antioxidant body lotion with Retinol and Vitamin C for radiant, firm skin in warm climates.',
      fr: 'Lait corporel antioxydant lissant au Rétinol et Vitamine C pour une peau ferme et lumineuse.',
    },
    whyYoullLoveIt: {
      en: [
        'Time-released Retinol smooths uneven texture and accelerates cellular renewal',
        'Vitamin C protects against free radical exposure and tropical sunlight',
        'Deep hydration in a fast-absorbing formula that never feels greasy',
        'Leaves the body silky, firm, and radiant throughout the day'
      ],
      fr: [
        'Le Rétinol affine le grain de peau et favorise le renouvellement cellulaire',
        'La Vitamine C protège des radicaux libres et du soleil tropical',
        'Hydratation profonde sans sensation grasse ni collante',
        'Laisse le corps soyeux, tonifié et éclatant'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Retinol (Vitamin A)', description: 'Boosts epidermal renewal and refines surface skin texture.' },
        { active: 'Vitamin C', description: 'Antioxidant shield that enhances natural radiance.' }
      ],
      fr: [
        { active: 'Rétinol (Vitamine A)', description: 'Stimule le renouvellement cellulaire et lisse le grain.' },
        { active: 'Vitamine C', description: 'Bouclier antioxydant décuplant l’éclat naturel.' }
      ]
    },
    variants: ['Florale Plus (Rose)'],
    isBestSeller: true,
    routineStep: 'moisturize'
  },
  {
    sku: 'PDL-OIL-PINK',
    name: 'Huile Peau de Lune — Florale Plus (Pink)',
    frenchName: 'Huile Corporelle Peau de Lune — Florale Plus (Rose)',
    category: 'Body Oil',
    colorLine: 'pink',
    colorLabel: 'Retinol + Vitamin C Line',
    size: '300ml',
    retailPriceNgn: 6500,
    casePriceNgn: 60000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/oil-pink-bottle.jpg',
    keyActives: ['Retinol', 'Vitamin C'],
    benefitStatement: {
      en: 'Nourishing radiance elixir with active Retinol, Vitamin C, and Bulgarian Rose botanical oil.',
      fr: 'Élixir nourrissant d’éclat au Rétinol actif, Vitamine C et huile de Rose Bulgare.',
    },
    whyYoullLoveIt: {
      en: [
        'Enriched with Bulgarian Rose and gentle Retinol for dewy, luminous hydration',
        'Seals in moisture over lotion for 24-hour glow without heavy buildup',
        'Helps fade dry patches and sun-stressed unevenness',
        'Velvety satin finish formulated specifically for tropical heat'
      ],
      fr: [
        'Enrichie en Rose Bulgare et Rétinol doux pour un éclat satiné immédiat',
        'Scelle l’hydratation par-dessus le lait pour un confort 24h',
        'Adoucit les zones sèches et atténue les tiraillements',
        'Fini velouté pensé pour le climat chaud'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Retinol Complex', description: 'Smoothes dermal texture and encourages suppleness.' },
        { active: 'Stabilized Vitamin C', description: 'Illuminates dull areas and supports even clarity.' }
      ],
      fr: [
        { active: 'Complexe Rétinol', description: 'Lisse la texture cutanée et apporte de la souplesse.' },
        { active: 'Vitamine C Stabilisée', description: 'Illumine les zones ternes et unifie délicatement.' }
      ]
    },
    isBestSeller: true,
    routineStep: 'treat'
  },
  {
    sku: 'PDL-CREAM-PINK',
    name: 'Crème de Visage Peau de Lune — Florale Plus (Pink)',
    frenchName: 'Crème de Visage Peau de Lune — Florale Plus (Pot Rose)',
    category: 'Face Cream',
    colorLine: 'pink',
    colorLabel: 'Retinol + Vitamin C Line',
    size: '50ml',
    retailPriceNgn: 6917,
    casePriceNgn: 130000,
    caseQty: 24,
    status: 'clean image available',
    image: '/images/cream-pink-jar.jpg',
    keyActives: ['Retinol', 'Vitamin C'],
    benefitStatement: {
      en: 'Age-defying facial cream with micro-dosed Retinol and Vitamin C to refine pores and soften fine lines.',
      fr: 'Crème visage anti-âge au Rétinol micro-dosé et Vitamine C pour resserrer les pores et lisser le teint.',
    },
    whyYoullLoveIt: {
      en: [
        'Non-comedogenic luxury cream designed for daily morning and evening facial rituals',
        'Gently refines rough skin texture and diminishes post-blemish shadows',
        'Deep nourishing comfort without clogging pores under tropical humidity',
        'Imparts a glass-skin, dewy French cosmetic finish'
      ],
      fr: [
        'Crème fine non comédogène pour le rituel visage du matin et du soir',
        'Affine en douceur le grain de peau et atténue les marques',
        'Nutrition intense qui ne bouche pas les pores sous l’humidité',
        'Fini soyeux digne des plus grands soins de beauté français'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Retinol Palmitate', description: 'Safe, gentle active that refines pores and smooths facial texture.' },
        { active: 'Ascorbyl Glucoside', description: 'Brightens and revitalizes tired complexion.' }
      ],
      fr: [
        { active: 'Palmitate de Rétinol', description: 'Actif doux qui resserre les pores et affine le grain.' },
        { active: 'Ascorbyl Glucoside', description: 'Ravive l’éclat et illumine le teint fatigué.' }
      ]
    },
    isNewArrival: true,
    routineStep: 'moisturize'
  },
  {
    sku: 'PDL-GEL-PINK',
    name: 'Gel Douche Peau de Lune — Florale Plus (Pink)',
    frenchName: 'Gel Douche Peau de Lune — Florale Plus (Rose)',
    category: 'Shower Gel',
    colorLine: 'pink',
    colorLabel: 'Retinol + Vitamin C Line',
    size: '1000ml',
    retailPriceNgn: 8167,
    casePriceNgn: 80000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/product-shower-gel.jpg',
    keyActives: ['Retinol', 'Vitamin C'],
    benefitStatement: {
      en: 'Purifying, radiance-boosting shower gel with botanical cleansing factors and antioxidant vitamins.',
      fr: 'Gel douche purifiant booster d’éclat aux facteurs nettoyants végétaux et vitamines antioxydantes.',
    },
    whyYoullLoveIt: {
      en: [
        'Generous 1000ml family-sized pump bottle for daily bath rituals',
        'Micro-exfoliates dead surface buildup without disrupting moisture barrier',
        'Subtle floral scent with rejuvenating skin feel',
        'Prepares skin perfectly to absorb lotion and oil'
      ],
      fr: [
        'Format généreux de 1000ml avec pompe pour le bain quotidien',
        'Micro-exfolie sans agresser le film protecteur de la mélanine',
        'Parfum floral délicat apportant une fraîcheur vivifiante',
        'Prépare la peau à recevoir les soins hydratants'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Vitamin C & Antioxidants', description: 'Neutralizes tap water impurities and restores freshness.' },
        { active: 'Gentle Purifying Base', description: 'Cleanses thoroughly without stripping natural oils.' }
      ],
      fr: [
        { active: 'Vitamine C & Antioxydants', description: 'Neutralise le calcaire de l’eau et revigore la peau.' },
        { active: 'Base Lavante Douce', description: 'Nettoie en profondeur sans assécher la peau.' }
      ]
    },
    routineStep: 'cleanse'
  },
  {
    sku: 'PDL-SET-PINK',
    name: 'Coffret Complet Florale Plus (Pink Line Set)',
    frenchName: 'Coffret Rituel Complet Florale Plus (Ligne Rose)',
    category: 'Complete Routine Set',
    colorLine: 'pink',
    colorLabel: 'Retinol + Vitamin C Line',
    size: '3-Piece Set (Lotion 550ml + Oil 300ml + Cream 50ml)',
    retailPriceNgn: 19500,
    casePriceNgn: 190000,
    caseQty: 10,
    status: 'clean image available',
    image: '/images/cream-pink-jar.jpg',
    imageFlag: 'Matching 3-product photo pending studio supply',
    isMatchingSetShot: false,
    keyActives: ['Retinol', 'Vitamin C'],
    benefitStatement: {
      en: 'Complete 3-step active smoothing ritual: Lotion, Radiant Glow Oil, and Face Cream.',
      fr: 'Rituel complet en 3 étapes : Lait corporel, Huile précieuse et Crème de visage.',
    },
    whyYoullLoveIt: {
      en: [
        'Curated synergistic routine that delivers maximum cellular smoothing',
        'Saves ₦1,667 compared to purchasing products individually',
        'Total face and body care engineered for African heat and humidity',
        'Presented in signature luxury Proxima packaging'
      ],
      fr: [
        'Rituel synergique pour une peau rayonnante de la tête aux pieds',
        'Économie avantageuse par rapport à l’achat individuel',
        'Conçu pour résister au climat chaud d’Afrique de l’Ouest',
        'Idéal pour un rituel complet ou pour offrir'
      ]
    },
    whatsInside: {
      en: [
        { active: '3 Full-Sized Formulations', description: 'Lotion (550ml), Body Oil (300ml), and Face Cream (50ml).' }
      ],
      fr: [
        { active: '3 Soins Grand Format', description: 'Lait (550ml), Huile (300ml) et Crème visage (50ml).' }
      ]
    },
    isBestSeller: true,
    routineStep: 'treat'
  },

  // ==========================================
  // 2. BROWN LINE: Arbutin + Niacinamide Line
  // ==========================================
  {
    sku: 'PDL-LOTION-BROWN',
    name: 'Lait Peau de Lune — Éclaircissant Actif (Brown)',
    frenchName: 'Lait Corporel Peau de Lune — Éclaircissant Actif (Marron)',
    category: 'Body Lotion',
    colorLine: 'brown',
    colorLabel: 'Arbutin + Niacinamide Line',
    size: '550ml',
    retailPriceNgn: 7750,
    casePriceNgn: 75000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/product-body-lotion.jpg',
    keyActives: ['Alpha-Arbutin', 'Niacinamide'],
    benefitStatement: {
      en: 'Targeted clarifying body lotion with Alpha-Arbutin and Niacinamide to restore uniform skin clarity.',
      fr: 'Lait corporel clarifiant ciblé à l’Alpha-Arbutine et Niacinamide pour unifier le teint.',
    },
    whyYoullLoveIt: {
      en: [
        'Alpha-Arbutin gently targets dark marks and post-sun discoloration',
        'Niacinamide calms inflammation, regulates sebum, and strengthens barrier',
        'Lightweight moisturizing milk that absorbs quickly in Lagos heat',
        'Zero bleaching chemicals — safe, even tone enhancement'
      ],
      fr: [
        'L’Alpha-Arbutine estompe les taches sombres et l’hyperpigmentation',
        'La Niacinamide apaise la peau et renforce le film hydrolipidique',
        'Lait fluide qui pénètre instantanément sans coller sous la chaleur',
        'Sans agents décapants — clarté et éclat en toute sécurité'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Alpha-Arbutin', description: 'Naturally derived active that inhibits excess melanin formation.' },
        { active: 'Niacinamide (Vitamin B3)', description: 'Restores skin barrier cohesion and balances moisture.' }
      ],
      fr: [
        { active: 'Alpha-Arbutine', description: 'Actif végétal doux régulant la production de mélanine localisée.' },
        { active: 'Niacinamide (Vitamine B3)', description: 'Restaure le film protecteur et régule l’hydratation.' }
      ]
    },
    isBestSeller: true,
    routineStep: 'moisturize'
  },
  {
    sku: 'PDL-OIL-BROWN',
    name: 'Huile Peau de Lune — Arbutine Pure (Brown)',
    frenchName: 'Huile Corporelle Peau de Lune — Arbutine Pure (Marron)',
    category: 'Body Oil',
    colorLine: 'brown',
    colorLabel: 'Arbutin + Niacinamide Line',
    size: '300ml',
    retailPriceNgn: 6500,
    casePriceNgn: 60000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/product-glow-oil.jpg',
    keyActives: ['Alpha-Arbutin', 'Niacinamide'],
    benefitStatement: {
      en: 'Intense active glow oil powered by Alpha-Arbutin and Niacinamide to boost overall radiance.',
      fr: 'Huile éclat suprême concentrée en Alpha-Arbutine et Niacinamide pour un teint harmonieux.',
    },
    whyYoullLoveIt: {
      en: [
        'Concentrated glow drops that nourish deep dermal layers',
        'Assists in brightening persistent dark knees, elbows, and knuckles',
        'Non-greasy dry-oil finish that feels luxurious on melanin skin',
        'Layer over Lait Peau de Lune for an illuminated, uniform finish'
      ],
      fr: [
        'Gouttes concentrées nourrissant l’épiderme en profondeur',
        'Aide à clarifier les zones rebelles (coudes, genoux, jointures)',
        'Fini huile sèche ultra-luxueux qui sublime le grain de peau',
        'S’applique sur le lait pour sceller un éclat harmonieux'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Alpha-Arbutin Extract', description: 'Helps balance uneven pigmentation safely.' },
        { active: 'Bio-Niacinamide', description: 'Soothes dermal inflammation and boosts skin vitality.' }
      ],
      fr: [
        { active: 'Extrait d’Alpha-Arbutine', description: 'Harmonise les irrégularités pigmentaires en douceur.' },
        { active: 'Bio-Niacinamide', description: 'Calme les inflammations et stimule la vitalité cutanée.' }
      ]
    },
    routineStep: 'treat'
  },
  {
    sku: 'PDL-CREAM-BROWN',
    name: 'Crème de Visage Peau de Lune — Éclat Actif (Brown)',
    frenchName: 'Crème de Visage Peau de Lune — Éclat Actif (Pot Marron)',
    category: 'Face Cream',
    colorLine: 'brown',
    colorLabel: 'Arbutin + Niacinamide Line',
    size: '50ml',
    retailPriceNgn: 6917,
    casePriceNgn: 130000,
    caseQty: 24,
    status: 'clean image available',
    image: '/images/product-face-cream.jpg',
    keyActives: ['Alpha-Arbutin', 'Niacinamide'],
    benefitStatement: {
      en: 'Rich restorative face cream targeting hyperpigmentation, sun marks, and tone irregularities.',
      fr: 'Crème visage réparatrice ciblant l’hyperpigmentation, les taches et les irrégularités.',
    },
    whyYoullLoveIt: {
      en: [
        'Formulated specifically to counteract dark spots from sun exposure and blemishes',
        'Infuses moisture without clogging pores or triggering midday greasiness',
        'Gentle enough for both morning and evening application',
        'Tested for safety on sensitive melanin-rich skin'
      ],
      fr: [
        'Formulée pour estomper les taches liées au soleil et aux imperfections',
        'Hydrate intensément sans provoquer de brillance en milieu de journée',
        'Texture fondante agréable matin et soir',
        'Haute tolérance pour toutes les carnations mélanées'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Alpha-Arbutin Bio-Complex', description: 'Visibly reduces the look of dark patches.' },
        { active: 'Purified Niacinamide', description: 'Refines dermal texture and restores moisture barrier.' }
      ],
      fr: [
        { active: 'Bio-Complexe Alpha-Arbutine', description: 'Atténue visiblement les marques pigmentaires.' },
        { active: 'Niacinamide Purifiée', description: 'Affine le grain de peau et consolide la barrière cutanée.' }
      ]
    },
    routineStep: 'moisturize'
  },
  {
    sku: 'PDL-GEL-BROWN',
    name: 'Savon Noir & Gel Douche Actif (Brown)',
    frenchName: 'Savon Noir & Gel Douche Actif Peau de Lune (Marron)',
    category: 'Shower Gel',
    colorLine: 'brown',
    colorLabel: 'Arbutin + Niacinamide Line',
    size: '1000ml',
    retailPriceNgn: 8167,
    casePriceNgn: 80000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/wash-brown-savon-noir.jpg',
    keyActives: ['Alpha-Arbutin', 'Niacinamide'],
    benefitStatement: {
      en: 'Traditional black soap botanicals infused with French Alpha-Arbutin for deep clarifying cleansing.',
      fr: 'Savon noir traditionnel enrichi en Alpha-Arbutine pour un nettoyage clarifiant profond.',
    },
    whyYoullLoveIt: {
      en: [
        'Combines African black soap heritage with French laboratory actives',
        'Cleanses pores thoroughly without leaving skin tight or parched',
        'Promotes an even, refreshed, and clarified skin complexion',
        '1000ml bottle with ergonomic pump dispenser'
      ],
      fr: [
        'Alliance du savon noir africain et des actifs de laboratoire français',
        'Désincruste les pores sans tirailler ni dessécher',
        'Révèle un teint net, frais et unifié',
        'Flacon généreux 1000ml avec pompe pratique'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Natural Black Soap Base', description: 'Traditional plant ash cleansers that purify gently.' },
        { active: 'Alpha-Arbutin & Niacinamide', description: 'Active clarifying duo for radiant skin clarity.' }
      ],
      fr: [
        { active: 'Base Savon Noir Végétal', description: 'Cendres végétales traditionnelles purifiant en douceur.' },
        { active: 'Alpha-Arbutine & Niacinamide', description: 'Duo clarifiant favorisant l’éclat de la peau.' }
      ]
    },
    routineStep: 'cleanse'
  },
  {
    sku: 'PDL-SET-BROWN',
    name: 'Coffret Complet Arbutine & Niacinamide (Brown Line Set)',
    frenchName: 'Coffret Rituel Complet Arbutine & Niacinamide (Ligne Marron)',
    category: 'Complete Routine Set',
    colorLine: 'brown',
    colorLabel: 'Arbutin + Niacinamide Line',
    size: '3-Piece Set (Lotion 550ml + Oil 300ml + Cream 50ml)',
    retailPriceNgn: 19500,
    casePriceNgn: 190000,
    caseQty: 10,
    status: 'clean image available',
    image: '/images/product-face-cream.jpg',
    imageFlag: 'Matching 3-product photo pending studio supply',
    isMatchingSetShot: false,
    keyActives: ['Alpha-Arbutin', 'Niacinamide'],
    benefitStatement: {
      en: 'The definitive clarifying routine: Body Lotion, Arbutin Glow Oil, and Restorative Face Cream.',
      fr: 'Le rituel clarifiant de référence : Lait corporel, Huile précieuse et Crème de visage.',
    },
    whyYoullLoveIt: {
      en: [
        'Complete synergistic regimen that tackles uneven skin tone from head to toe',
        'Saves ₦1,667 compared to individual retail purchases',
        'Safe, natural alternative to harsh bleaching concoctions',
        'Engineered to withstand intense tropical humidity'
      ],
      fr: [
        'Rituel unifiant complet pour harmoniser tout le corps',
        'Économie avantageuse par rapport à l’achat séparé',
        'Alternative saine et sûre aux produits de dépigmentation décapants',
        'Résiste parfaitement à la chaleur et à l’humidité'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Full Arbutin & Niacinamide Trio', description: 'Lotion (550ml), Glow Oil (300ml), Face Cream (50ml).' }
      ],
      fr: [
        { active: 'Trio Arbutine & Niacinamide', description: 'Lait (550ml), Huile (300ml) et Crème visage (50ml).' }
      ]
    },
    isBestSeller: true,
    routineStep: 'treat'
  },

  // ==========================================
  // 3. GREEN LINE: Vitamin B3 Line
  // ==========================================
  {
    sku: 'PDL-LOTION-GREEN',
    name: 'Lait Peau de Lune — Plantes Naturelles (Green)',
    frenchName: 'Lait Corporel Peau de Lune — Plantes Naturelles (Vert)',
    category: 'Body Lotion',
    colorLine: 'green',
    colorLabel: 'Vitamin B3 Line',
    size: '550ml',
    retailPriceNgn: 7750,
    casePriceNgn: 75000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/product-body-lotion.jpg',
    keyActives: ['Vitamin B3'],
    benefitStatement: {
      en: 'Refreshing herbal body lotion with Vitamin B3 and natural plant extracts for intense daily hydration.',
      fr: 'Lait corporel végétal rafraîchissant à la Vitamine B3 et extraits naturels de plantes.',
    },
    whyYoullLoveIt: {
      en: [
        'Infused with pure Vitamin B3 to balance skin barrier moisture',
        'Light, cooling herbal formulation engineered for high humidity',
        'Locks in essential water for 24 hours of supple comfort',
        'Absorbs quickly without sticky residue or excess shine'
      ],
      fr: [
        'Enrichi en Vitamine B3 pour fortifier la barrière épidermique',
        'Formule végétale fraîche et légère pensée pour le climat tropical',
        'Scelle l’hydratation pour 24 heures de confort',
        'Pénétration rapide sans film gras ni brillance'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Vitamin B3 (Niacinamide)', description: 'Strengthens cellular lipid layers and boosts hydration.' },
        { active: 'Plantes Naturelles Matrix', description: 'Calming botanical extracts that soothe environmental stress.' }
      ],
      fr: [
        { active: 'Vitamine B3 (Niacinamide)', description: 'Renforce les lipides cellulaires et optimise l’hydratation.' },
        { active: 'Matrice Plantes Naturelles', description: 'Extraits végétaux apaisant les agressions extérieures.' }
      ]
    },
    isBestSeller: true,
    routineStep: 'moisturize'
  },
  {
    sku: 'PDL-OIL-GREEN',
    name: 'Huile Peau de Lune — Plantes Naturelles (Green)',
    frenchName: 'Huile Corporelle Peau de Lune — Plantes Naturelles (Vert)',
    category: 'Body Oil',
    colorLine: 'green',
    colorLabel: 'Vitamin B3 Line',
    size: '300ml',
    retailPriceNgn: 6500,
    casePriceNgn: 60000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/product-body-oil.jpg',
    keyActives: ['Vitamin B3'],
    benefitStatement: {
      en: 'Luminous herbal body oil with Vitamin B3 in an emerald bottle. Nourishes deeply with pure plant oils.',
      fr: 'Huile corporelle lumineuse à la Vitamine B3. Nourrit en profondeur grâce aux huiles végétales.',
    },
    whyYoullLoveIt: {
      en: [
        'Signature Vitamin B3 herbal formula in correctly spelled PROXIMA packaging',
        'Imparts an instant dewy, satin sheen without heavy residue',
        'Deeply restores dry legs, elbows, and knees',
        'Pairs seamlessly over green body lotion to seal in radiant glow'
      ],
      fr: [
        'Formule signature à la Vitamine B3 dans son flacon vert emblématique',
        'Apporte un éclat satiné immédiat sans sensation lourde',
        'Nourrit les zones sèches et répare l’épiderme',
        'Idéale en superposition avec le lait pour un éclat sublime'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Vitamin B3 (Niacinamide)', description: 'Repairs barrier and imparts a natural, healthy sheen.' },
        { active: 'Cold-Pressed Plant Lipids', description: 'Nutrient-rich emollients that absorb smoothly.' }
      ],
      fr: [
        { active: 'Vitamine B3 (Niacinamide)', description: 'Répare la barrière et sublime l’éclat naturel.' },
        { active: 'Lipides Végétaux Pressés à Froid', description: 'Émollients riches en nutriments à absorption rapide.' }
      ]
    },
    isBestSeller: true,
    routineStep: 'treat'
  },
  {
    sku: 'PDL-CREAM-GREEN',
    name: 'Crème de Visage Peau de Lune — Plantes Naturelles (Green)',
    frenchName: 'Crème de Visage Peau de Lune — Plantes Naturelles (Pot Vert/Teal)',
    category: 'Face Cream',
    colorLine: 'green',
    colorLabel: 'Vitamin B3 Line',
    size: '50ml',
    retailPriceNgn: 6917,
    casePriceNgn: 130000,
    caseQty: 24,
    status: 'clean image available',
    image: '/images/product-face-cream.jpg',
    keyActives: ['Vitamin B3'],
    benefitStatement: {
      en: 'Botanical moisture cream with Vitamin B3 to balance sebum and deliver a radiant, matte-glow finish.',
      fr: 'Crème hydratante botanique à la Vitamine B3 pour équilibrer le sébum et apporter un éclat frais.',
    },
    whyYoullLoveIt: {
      en: [
        'Non-greasy facial hydrator specifically calibrated for humid weather',
        'Regulates excess shine on the T-zone while nourishing dry cheek areas',
        'Helps minimize the appearance of enlarged pores',
        'Provides an effortless velvety base for daily wear'
      ],
      fr: [
        'Hydratant visage non gras spécialement calibré pour le climat humide',
        'Régule l’excès de sébum sur la zone T tout en nourrissant les joues',
        'Aide à resserrer les pores dilatés',
        'Offre une base veloutée parfaite pour toute la journée'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Dermal Vitamin B3', description: 'Minimizes pore size and regulates cutaneous shine.' },
        { active: 'Purifying Herbal Extract', description: 'Refreshes and clarifies skin under tropical heat.' }
      ],
      fr: [
        { active: 'Vitamine B3 Dermatologique', description: 'Resserre les pores et équilibre les brillances.' },
        { active: 'Extraits Végétaux Purifiants', description: 'Vivifient et clarifient la peau exposée à la chaleur.' }
      ]
    },
    routineStep: 'moisturize'
  },
  {
    sku: 'PDL-GEL-GREEN',
    name: 'Gel Douche Peau de Lune — Plantes Naturelles (Green)',
    frenchName: 'Gel Douche Peau de Lune — Plantes Naturelles (Vert)',
    category: 'Shower Gel',
    colorLine: 'green',
    colorLabel: 'Vitamin B3 Line',
    size: '1000ml',
    retailPriceNgn: 8167,
    casePriceNgn: 80000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/product-shower-gel.jpg',
    keyActives: ['Vitamin B3'],
    benefitStatement: {
      en: 'Invigorating green herbal shower gel that purifies, exfoliates gently, and refreshes the body.',
      fr: 'Gel douche vivifiant aux plantes naturelles qui purifie, exfolie en douceur et rafraîchit le corps.',
    },
    whyYoullLoveIt: {
      en: [
        'Generous 1000ml format designed for the entire family daily ritual',
        'Lifts away sweat, dust, and environmental pollution from Lagos streets',
        'Leaves skin refreshed with a botanical clean feeling',
        'Gentle surfactants that never leave melanin skin looking dry or ashy'
      ],
      fr: [
        'Format généreux de 1000ml avec pompe pour toute la famille',
        'Élimine la sueur, la poussière et la pollution urbaine',
        'Procure une sensation de fraîcheur végétale immédiate',
        'Ne laisse aucun voile grisâtre ou sensation de tiraillement'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Plantes Naturelles Extracts', description: 'Cooling, purifying botanical cleansing agents.' },
        { active: 'Hydration Preservation Factors', description: 'Locks moisture into outer skin layers during washing.' }
      ],
      fr: [
        { active: 'Extraits de Plantes Naturelles', description: 'Agents nettoyants végétaux purifiants et rafraîchissants.' },
        { active: 'Facteurs de Préservation Hydrique', description: 'Maintiennent l’eau cellulaire durant la douche.' }
      ]
    },
    isBestSeller: true,
    routineStep: 'cleanse'
  },
  {
    sku: 'PDL-SET-GREEN',
    name: 'Coffret Complet Plantes Naturelles (Green Line Set)',
    frenchName: 'Coffret Rituel Complet Plantes Naturelles (Ligne Verte)',
    category: 'Complete Routine Set',
    colorLine: 'green',
    colorLabel: 'Vitamin B3 Line',
    size: '3-Piece Set (Lotion 550ml + Oil 300ml + Cream 50ml)',
    retailPriceNgn: 19500,
    casePriceNgn: 190000,
    caseQty: 10,
    status: 'clean image available',
    image: '/images/set-green-bundle.jpg',
    isMatchingSetShot: true,
    keyActives: ['Vitamin B3'],
    benefitStatement: {
      en: 'The complete daily herbal routine: Body Lotion, Vitamin B3 Glow Oil, and Face Cream in one matching bundle.',
      fr: 'Le rituel végétal quotidien complet : Lait corporel, Huile Vitamine B3 et Crème visage.',
    },
    whyYoullLoveIt: {
      en: [
        'Matching 3-piece green collection photographed together as a cohesive set',
        'Saves ₦1,667 compared to individual retail purchases',
        'Daily hydrating foundation built around African skin resilience',
        'Lightweight, non-comedogenic comfort all year round'
      ],
      fr: [
        'Coffret de 3 soins verts réunis pour une routine complète',
        'Économie avantageuse par rapport à l’achat individuel',
        'Base hydratante quotidienne pensée pour la peau mélanée',
        'Formules légères et confortables toute l’année'
      ]
    },
    whatsInside: {
      en: [
        { active: '3 Matching Green Essentials', description: 'Lotion (550ml), Body Oil (300ml), and Face Cream (50ml).' }
      ],
      fr: [
        { active: '3 Soins Verts Coordonnés', description: 'Lait (550ml), Huile (300ml) et Crème visage (50ml).' }
      ]
    },
    isBestSeller: true,
    routineStep: 'treat'
  },

  // ==========================================
  // 4. SPECIALTY & LUXE STANDALONE ITEMS
  // ==========================================
  {
    sku: 'PDL-SOAP-MULATTO',
    name: 'Mulatto Soap (Molato Soap)',
    frenchName: 'Savon Mulatto Peau de Lune (Molato Soap)',
    category: 'Specialty',
    colorLine: 'specialty',
    colorLabel: 'Specialty Formulations',
    size: '500g Jar',
    retailPriceNgn: 12333,
    casePriceNgn: 130000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/soap-mulatto.jpg',
    keyActives: ['Botanical Soap Base', 'Fruit Actives'],
    benefitStatement: {
      en: 'Deeply purifying, rich African clarifying paste soap for thorough body bathing rituals.',
      fr: 'Pâte de savon purifiante traditionnelle africaine pour un gommage corporel vivifiant.',
    },
    whyYoullLoveIt: {
      en: [
        'Whipped paste soap texture engineered for thorough lathering with bath nets',
        'Helps lift persistent dead dermal buildup across knees, heels, and elbows',
        'Leaves skin exceptionally fresh, squeaky clean, and receptive to oils',
        'Formulated with trusted botanical extracts'
      ],
      fr: [
        'Texture pâte onctueuse idéale pour le filet de bain',
        'Aide à décoller les cellules mortes sur les coudes, talons et genoux',
        'Laisse la peau exceptionnellement fraîche et douce',
        'Formulé avec des extraits botaniques sélectionnés'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Botanical Paste Soap', description: 'Traditional purifying saponified oils.' },
        { active: 'Clarifying Plant Actives', description: 'Enhances surface skin luminosity naturally.' }
      ],
      fr: [
        { active: 'Pâte de Savon Végétale', description: 'Huiles saponifiées purifiantes traditionnelles.' },
        { active: 'Actifs Végétaux Clarifiants', description: 'Révèlent l’éclat naturel de la peau.' }
      ]
    },
    isNewArrival: true,
    routineStep: 'cleanse'
  },
  {
    sku: 'PDL-OIL-SNOWWHITE',
    name: 'Snow White Oil (Huile Éclat Luxe)',
    frenchName: 'Huile Éclat Luxe Snow White — Actifs Purs',
    category: 'Specialty',
    colorLine: 'specialty',
    colorLabel: 'Specialty Formulations',
    size: '150ml Dropper Bottle',
    retailPriceNgn: 9500,
    casePriceNgn: 90000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/oil-snow-white.jpg',
    keyActives: ['Alpha-Arbutin', 'Niacinamide'],
    benefitStatement: {
      en: 'Ultra-concentrated botanical radiance elixir described by its pure actives: Arbutin + Niacinamide.',
      fr: 'Élixir éclat ultra-concentré formulé avec ses actifs purs : Arbutine + Niacinamide.',
    },
    whyYoullLoveIt: {
      en: [
        'Highest concentration of active Alpha-Arbutin and Niacinamide in the collection',
        'Targeted dropper application for body areas needing focused luminous support',
        'Luxurious amber cosmetic glass bottle with precision pipette dispenser',
        '100% free from harsh bleaching agents, steroids, or mercury'
      ],
      fr: [
        'La plus haute concentration en Alpha-Arbutine et Niacinamide de la gamme',
        'Application ciblée à la pipette pour un éclat intense et maîtrisé',
        'Flacon en verre ambré de prestige avec compte-gouttes de précision',
        'Garanti sans agents décapants, sans corticoïdes, sans mercure'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Pure Alpha-Arbutin', description: 'Concentrated active that balances tone safely.' },
        { active: 'Niacinamide (Vitamin B3)', description: 'Calms redness and refines skin texture.' }
      ],
      fr: [
        { active: 'Alpha-Arbutine Pure', description: 'Actif concentré pour unifier le teint sans danger.' },
        { active: 'Niacinamide (Vitamine B3)', description: 'Apaise et renforce la résilience cutanée.' }
      ]
    },
    isNewArrival: true,
    routineStep: 'treat'
  }
];

export const liveProducts = products.filter(p => p.status === 'clean image available');
