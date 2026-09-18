import { Product } from '../types';

export const products: Product[] = [
  {
    sku: 'PDL-GEL',
    name: 'Gel Douche Peau de Lune (Shower Gel)',
    frenchName: 'Gel Douche Peau de Lune — Plantes Naturelles',
    category: 'Body',
    size: '1000ml',
    retailPriceNgn: 8167,
    casePriceNgn: 80000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/product-shower-gel.jpg',
    keyActives: ['Botanical Plant Extracts', 'Gentle Purifying Cleansers'],
    benefitStatement: {
      en: 'Gently exfoliates and purifies. Restores natural radiance for a refreshed, healthy glow.',
      fr: 'Exfolie en douceur et purifie. Restaure l’éclat naturel pour une peau fraîche et rayonnante.',
    },
    whyYoullLoveIt: {
      en: [
        'Large 1000ml generous family format engineered for daily bath rituals',
        'Gentle micro-cleansing formula that respects the melanin skin barrier',
        'Refreshes skin exposed to Lagos heat, pollution, and high humidity',
        'Leaves skin silky, conditioned, and naturally luminous without dryness'
      ],
      fr: [
        'Format généreux de 1000ml pensé pour les rituels de soin quotidiens',
        'Nettoyage purifiant doux respectant la barrière cutanée mélanée',
        'Revitalise la peau confrontée à la chaleur, la pollution et l’humidité',
        'Laisse la peau douce, apaisée et éclatante de santé sans tiraillement'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Plantes Naturelles Complex', description: 'Selected botanical extracts that clarify and refresh the dermal surface.' },
        { active: 'Purifying Hydrators', description: 'Binds moisture during cleansing so the skin barrier remains supple.' }
      ],
      fr: [
        { active: 'Complexe Plantes Naturelles', description: 'Extraits botaniques sélectionnés pour clarifier et vivifier la peau.' },
        { active: 'Hydratants Purifiants', description: 'Maintiennent l’hydratation cutanée pendant le nettoyage sans agression.' }
      ]
    },
    variants: ['Plantes Naturelles (Vert)', 'Florale Plus (Rose)'],
    isBestSeller: true,
    routineStep: 'cleanse'
  },
  {
    sku: 'PDL-LAIT',
    name: 'Lait Peau de Lune (Body Lotion)',
    frenchName: 'Lait Corporel Peau de Lune — Hydratation Intense',
    category: 'Body',
    size: '550ml',
    retailPriceNgn: 7750,
    casePriceNgn: 75000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/product-body-lotion.jpg',
    keyActives: ['Botanical Lipids', 'Hydrating Plant Extracts'],
    benefitStatement: {
      en: 'Daily intense hydration with natural plant extracts. Lightweight in heat and humidity.',
      fr: 'Hydratation intense quotidienne aux extraits végétaux naturels. Formule légère adaptée à la chaleur et l’humidité.',
    },
    whyYoullLoveIt: {
      en: [
        'Deep hydration engineered specifically not to turn greasy or sticky in tropical climates',
        'Locks in essential moisture for 24-hour velvety smoothness',
        'Strengthens skin resilience against environmental dryness and sun exposure',
        'Sophisticated French cosmetic texture that absorbs rapidly'
      ],
      fr: [
        'Hydratation profonde formulée pour ne jamais coller sous les climats tropicaux',
        'Scelle l’hydratation essentielle pour une douceur veloutée durable 24h',
        'Renforce la barrière cutanée face à la chaleur et aux agressions extérieures',
        'Texture cosmétique française raffinée à pénétration rapide'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Vegetal Lipid Matrix', description: 'Nourishes the skin lipid mantle without clogging pores.' },
        { active: 'Botanical Moisture Factors', description: 'Maintains optimal intracellular water balance in humid conditions.' }
      ],
      fr: [
        { active: 'Matrice Lipidique Végétale', description: 'Nourrit intensément le manteau cutané sans obstruer les pores.' },
        { active: 'Facteurs d’Hydratation Botaniques', description: 'Préservent l’équilibre hydrique des cellules même en temps lourd.' }
      ]
    },
    variants: ['Plantes Naturelles (Teal)', 'Florale Plus (Rose)'],
    isBestSeller: true,
    routineStep: 'moisturize'
  },
  {
    sku: 'PDL-HUILE',
    name: 'Huile Peau de Lune (Body Oil)',
    frenchName: 'Huile Corporelle Peau de Lune — Vitamine B3',
    category: 'Body',
    size: '300ml',
    retailPriceNgn: 6500,
    casePriceNgn: 60000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/product-body-oil.jpg',
    keyActives: ['Vitamin B3 (Niacinamide)', 'Natural Plant-Based Oils'],
    benefitStatement: {
      en: 'Vitamin B3 luminous glowing oil. Nourishes deeply with a natural plant-based formula.',
      fr: 'Huile éclatante enrichie en Vitamine B3. Nourrit en profondeur grâce à une formulation végétale naturelle.',
    },
    whyYoullLoveIt: {
      en: [
        'Enriched with proven Vitamin B3 (Niacinamide) to support uniform skin tone',
        'Imparts an instant dewy, satin sheen without heavy residue',
        'Deeply replenishes dry knees, elbows, and sun-stressed body zones',
        'Pairs seamlessly over Lait Peau de Lune to seal in supreme glow'
      ],
      fr: [
        'Enrichie en Vitamine B3 (Niacinamide) reconnue pour harmoniser le grain de peau',
        'Apporte un éclat satiné immédiat sans film gras ni fini lourd',
        'Répare et adoucit les zones sèches (coudes, genoux, jambes)',
        'S’associe parfaitement avec le Lait Peau de Lune pour un rituel sublime'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Vitamin B3 (Niacinamide)', description: 'Clinically respected active that boosts skin clarity and strengthens the moisture barrier.' },
        { active: 'Botanical Nourishing Oils', description: 'Cold-pressed plant emollients that deliver vitamins and essential fatty acids.' }
      ],
      fr: [
        { active: 'Vitamine B3 (Niacinamide)', description: 'Actif dermatologique majeur favorisant l’homogénéité et la résistance cutanée.' },
        { active: 'Huiles Végétales Nourrissantes', description: 'Émollients naturels riches en vitamines et acides gras essentiels.' }
      ]
    },
    variants: ['Vitamine B3 / Plantes Naturelles (Vert)', 'Florale Plus (Rose Retinol & C)'],
    isBestSeller: true,
    routineStep: 'treat'
  },
  {
    sku: 'PDL-CREAM',
    name: 'Crème de Visage Peau de Lune (Face Cream)',
    frenchName: 'Crème de Visage Peau de Lune — Florale Plus',
    category: 'Face',
    size: '50ml',
    retailPriceNgn: 6917,
    casePriceNgn: 130000,
    caseQty: 24,
    status: 'clean image available',
    image: '/images/product-face-cream.jpg',
    keyActives: ['Botanical Bio-Complexes', 'Antioxidant Emollients'],
    benefitStatement: {
      en: 'Deeply hydrates and nourishes. Evens skin tone and softens the look of fine lines.',
      fr: 'Hydrate et nourrit en profondeur. Harmonise le teint et estompe délicatement l’apparence des ridules.',
    },
    whyYoullLoveIt: {
      en: [
        'Velvety, rich face cream formulated to nurture delicate facial skin barrier',
        'Non-comedogenic formulation suited for daily morning and evening wear',
        'Helps balance tone irregularities caused by sun exposure and hyperpigmentation',
        'Delivers a radiant, glass-like skin finish that glows naturally'
      ],
      fr: [
        'Crème soyeuse et fondante formulée pour protéger la barrière délicate du visage',
        'Non comédogène, adaptée pour le rituel du matin et du soir',
        'Aide à atténuer les irrégularités pigmentaires dues au soleil tropical',
        'Offre un fini lumineux et lisse qui respire la vitalité'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Botanical Bio-Complex', description: 'Concentrated plant extracts that refine texture and revive skin energy.' },
        { active: 'Barrier Protective Lipids', description: 'Reinforces intercellular cement against dehydration.' }
      ],
      fr: [
        { active: 'Bio-Complexe Botanique', description: 'Extraits végétaux précieux régénérants pour affiner le grain de peau.' },
        { active: 'Lipides Protecteurs de Barrière', description: 'Renforcent la cohésion cellulaire face à la déshydratation quotidienne.' }
      ]
    },
    variants: ['Florale Plus (Pot Ambre)', 'Florale Plus (Pot Rose)', 'Teal Collection'],
    isBestSeller: false,
    isNewArrival: true,
    routineStep: 'moisturize'
  },
  {
    sku: 'PDL-SNOWOIL',
    name: 'Huile Éclat Actifs Purs (Active Glow Oil)',
    frenchName: 'Huile Éclat Actifs Purs — Arbutine & Niacinamide',
    category: 'Body',
    size: '150ml',
    retailPriceNgn: 9500,
    casePriceNgn: 90000,
    caseQty: 12,
    status: 'clean image available',
    image: '/images/product-glow-oil.jpg',
    keyActives: ['Alpha Arbutin', 'Niacinamide (Vitamin B3)', 'Retinol', 'Vitamin C'],
    benefitStatement: {
      en: 'Arbutin and Niacinamide active glowing elixir. Concentrated botanicals to support skin clarity and radiant vitality.',
      fr: 'Élixir éclat enrichi en Arbutine et Niacinamide. Actifs botaniques concentrés pour favoriser la clarté et l’éclat de la peau.',
    },
    whyYoullLoveIt: {
      en: [
        'Targeted active synergy: Alpha Arbutin meets Niacinamide for visible tone clarity',
        'Contains delicate antioxidant Retinol & Vitamin C to smooth skin texture',
        'Zero harsh bleach, zero steroids — purely respected active cosmetic science',
        'Leaves the skin with an undeniable, illuminated, healthy glow'
      ],
      fr: [
        'Synergie ciblée d’actifs nobles : Arbutine et Niacinamide pour un teint net et rayonnant',
        'Contient du Rétinol et de la Vitamine C pour lisser le grain de peau',
        'Sans agents décapants, sans corticoïdes — formulation d’actifs nobles respectueuse',
        'Procure à la peau une luminosité saine et un éclat sans pareil'
      ]
    },
    whatsInside: {
      en: [
        { active: 'Alpha Arbutin', description: 'A safe, gentle botanical glucoside that helps fade the appearance of dark spots.' },
        { active: 'Niacinamide (Vitamin B3)', description: 'Calms redness, refines pores, and boosts the cutaneous moisture shield.' },
        { active: 'Retinol & Vitamin C', description: 'Time-tested antioxidants that accelerate healthy cellular renewal.' }
      ],
      fr: [
        { active: 'Alpha Arbutine', description: 'Glucoside végétal doux et sûr aidant à estomper les taches d’hyperpigmentation.' },
        { active: 'Niacinamide (Vitamine B3)', description: 'Apaise, affine les pores et consolide le bouclier hydrique cutané.' },
        { active: 'Rétinol & Vitamine C', description: 'Antioxydants de référence stimulant le renouvellement cellulaire naturel.' }
      ]
    },
    variants: ['Retinol + Vitamin C + Rose Bulgare'],
    isBestSeller: false,
    isNewArrival: true,
    routineStep: 'treat'
  },
  {
    sku: 'PDL-CLEANSER',
    name: 'Nettoyant Visage Peau de Lune (Face Cleanser)',
    frenchName: 'Nettoyant Visage Doux Peau de Lune',
    category: 'Face',
    size: '100ml',
    retailPriceNgn: 5250,
    casePriceNgn: 90000,
    caseQty: 24,
    status: 'no image yet',
    image: '',
    keyActives: ['Gentle Amino Surfactants'],
    benefitStatement: {
      en: 'Awaiting studio photography — coming soon to the live collection.',
      fr: 'En attente de visuel studio — prochainement disponible en boutique.',
    },
    whyYoullLoveIt: { en: [], fr: [] },
    whatsInside: { en: [], fr: [] }
  },
  {
    sku: 'PDL-SOAP',
    name: 'Molato Soap',
    frenchName: 'Savon Molato Peau de Lune',
    category: 'Body',
    size: 'Unspecified',
    retailPriceNgn: 12333,
    casePriceNgn: 130000,
    caseQty: 12,
    status: 'excluded',
    image: '',
    keyActives: [],
    benefitStatement: {
      en: 'Excluded from live grid pending photo and claims resolution.',
      fr: 'Exclu du catalogue en ligne en attente de conformité visuelle et réglementaire.',
    },
    whyYoullLoveIt: { en: [], fr: [] },
    whatsInside: { en: [], fr: [] }
  }
];

export const liveProducts = products.filter(p => p.status === 'clean image available');
