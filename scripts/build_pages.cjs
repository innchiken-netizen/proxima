const fs = require('fs');
const path = require('path');

const products = [
  // 1. PINK LINE: Retinol + Vitamin C
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
    image: '/images/proxima-lotion-pink.jpg',
    images: ['/images/proxima-lotion-pink.jpg', '/images/lifestyle-glow.jpg', '/images/proxima-packaging-angle.jpg'],
    keyActives: ['Retinol', 'Vitamin C'],
    benefit: 'Smoothing antioxidant body lotion with Retinol and Vitamin C for radiant, firm skin in warm climates.',
    isBestSeller: true
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
    image: '/images/proxima-oil-pink.jpg',
    images: ['/images/proxima-oil-pink.jpg', '/images/proxima-oil-dropper-fit.jpg', '/images/lifestyle-outdoor.jpg'],
    keyActives: ['Retinol', 'Vitamin C'],
    benefit: 'Nourishing radiance elixir with active Retinol, Vitamin C, and Bulgarian Rose botanical oil.',
    isBestSeller: true
  },
  {
    sku: 'PDL-CREAM-PINK',
    name: 'Crème de Visage Peau de Lune — Florale Plus (Pink)',
    frenchName: 'Crème Visage Peau de Lune — Florale Plus (Rose)',
    category: 'Face Cream',
    colorLine: 'pink',
    colorLabel: 'Retinol + Vitamin C Line',
    size: '50ml',
    retailPriceNgn: 6917,
    casePriceNgn: 70000,
    caseQty: 12,
    image: '/images/proxima-cream-pink.jpg',
    images: ['/images/proxima-cream-pink.jpg', '/images/proxima-cream-texture-fit.jpg', '/images/lifestyle-wellness.jpg', '/images/lifestyle-routine.jpg'],
    keyActives: ['Retinol', 'Vitamin C'],
    benefit: 'Velvety cellular renewal face cream to refine texture and boost natural collagen vitality in warm weather.',
    isBestSeller: false
  },
  {
    sku: 'PDL-GEL-PINK',
    name: 'Gel Douche Gommant Peau de Lune — Florale Plus (Pink)',
    frenchName: 'Gel Douche Gommant Peau de Lune — Florale Plus (Rose)',
    category: 'Shower Gel',
    colorLine: 'pink',
    colorLabel: 'Retinol + Vitamin C Line',
    size: '1000ml',
    retailPriceNgn: 8167,
    casePriceNgn: 85000,
    caseQty: 12,
    image: '/images/proxima-gel-pink.jpg',
    images: ['/images/proxima-gel-pink.jpg', '/images/proxima-soap-lather-fit.jpg', '/images/lifestyle-scrub.jpg'],
    keyActives: ['Retinol', 'Vitamin C'],
    benefit: 'Exfoliating radiance body wash with micro-beads, Retinol, and Vitamin C for silky-smooth skin.',
    isBestSeller: false
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
    image: '/images/proxima-set-pink.jpg',
    images: ['/images/proxima-set-pink.jpg', '/images/proxima-cream-texture-fit.jpg', '/images/proxima-oil-dropper-fit.jpg', '/images/lifestyle-bundle.jpg'],
    imageFlag: 'Matching 3-piece set photo pending studio supply',
    isMatchingSetShot: false,
    keyActives: ['Retinol', 'Vitamin C'],
    benefit: 'Complete 3-step active smoothing ritual: Lotion, Radiant Glow Oil, and Face Cream.',
    isBestSeller: true
  },

  // 2. BROWN LINE: Alpha-Arbutin + Niacinamide
  {
    sku: 'PDL-LOTION-BROWN',
    name: 'Lait Peau de Lune — Clarifiant Intense (Brown)',
    frenchName: 'Lait Corporel Peau de Lune — Clarifiant Intense (Marron)',
    category: 'Body Lotion',
    colorLine: 'brown',
    colorLabel: 'Arbutin + Niacinamide Line',
    size: '550ml',
    retailPriceNgn: 7750,
    casePriceNgn: 75000,
    caseQty: 12,
    image: '/images/proxima-lotion-brown.jpg',
    images: ['/images/proxima-lotion-brown.jpg', '/images/lifestyle-glow.jpg', '/images/proxima-packaging-angle.jpg'],
    keyActives: ['Alpha-Arbutin', 'Niacinamide'],
    benefit: 'Advanced clarifying body milk with Alpha-Arbutin and Niacinamide for even-toned, luminous clarity.',
    isBestSeller: true
  },
  {
    sku: 'PDL-OIL-BROWN',
    name: 'Huile Peau de Lune — Clarifiante Intense (Brown)',
    frenchName: 'Huile Corporelle Peau de Lune — Clarifiante Intense (Marron)',
    category: 'Body Oil',
    colorLine: 'brown',
    colorLabel: 'Arbutin + Niacinamide Line',
    size: '300ml',
    retailPriceNgn: 6500,
    casePriceNgn: 60000,
    caseQty: 12,
    image: '/images/proxima-oil-brown.jpg',
    images: ['/images/proxima-oil-brown.jpg', '/images/proxima-oil-dropper-fit.jpg', '/images/lifestyle-outdoor.jpg'],
    keyActives: ['Alpha-Arbutin', 'Niacinamide'],
    benefit: 'Silky tone-correcting body oil that locks in hydration and diminishes stubborn hyperpigmentation marks.',
    isBestSeller: true
  },
  {
    sku: 'PDL-CREAM-BROWN',
    name: 'Crème de Visage Peau de Lune — Clarifiante Intense (Brown)',
    frenchName: 'Crème Visage Peau de Lune — Clarifiante Intense (Marron)',
    category: 'Face Cream',
    colorLine: 'brown',
    colorLabel: 'Arbutin + Niacinamide Line',
    size: '50ml',
    retailPriceNgn: 6917,
    casePriceNgn: 70000,
    caseQty: 12,
    image: '/images/proxima-cream-brown.jpg',
    images: ['/images/proxima-cream-brown.jpg', '/images/proxima-cream-texture-fit.jpg', '/images/lifestyle-wellness.jpg'],
    keyActives: ['Alpha-Arbutin', 'Niacinamide'],
    benefit: 'Targeted dark-spot balancing cream formulated with pharmaceutical-grade Niacinamide and pure Arbutin.',
    isBestSeller: false
  },
  {
    sku: 'PDL-GEL-BROWN',
    name: 'Savon Noir Douche Peau de Lune — Clarifiant Intense (Brown)',
    frenchName: 'Gel Douche Savon Noir Peau de Lune — Clarifiant Intense (Marron)',
    category: 'Shower Gel',
    colorLine: 'brown',
    colorLabel: 'Arbutin + Niacinamide Line',
    size: '1000ml',
    retailPriceNgn: 8167,
    casePriceNgn: 85000,
    caseQty: 12,
    image: '/images/proxima-gel-brown.jpg',
    images: ['/images/proxima-gel-brown.jpg', '/images/proxima-soap-lather-fit.jpg', '/images/lifestyle-scrub.jpg'],
    keyActives: ['Alpha-Arbutin', 'Niacinamide'],
    benefit: 'Traditional West African Savon Noir infused with Alpha-Arbutin and Niacinamide for a purifying clarifying bath ritual.',
    isBestSeller: false
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
    image: '/images/proxima-set-brown.jpg',
    images: ['/images/proxima-set-brown.jpg', '/images/proxima-gel-brown.jpg', '/images/proxima-cream-texture-fit.jpg', '/images/lifestyle-bundle.jpg'],
    imageFlag: 'Matching 3-piece set photo pending studio supply',
    isMatchingSetShot: false,
    keyActives: ['Alpha-Arbutin', 'Niacinamide'],
    benefit: 'Synergistic 3-step clarifying routine for comprehensive tone correction and deep skin nourishment.',
    isBestSeller: true
  },

  // 3. GREEN LINE: Vitamin B3
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
    image: '/images/proxima-lotion-green.jpg',
    images: ['/images/proxima-lotion-green.jpg', '/images/proxima-set-green.jpg', '/images/proxima-packaging-angle.jpg'],
    keyActives: ['Vitamin B3'],
    benefit: 'Soothing botanical herbal body milk enriched with Vitamin B3 to comfort and hydrate skin in hot weather.',
    isBestSeller: false
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
    image: '/images/proxima-oil-green.jpg',
    images: ['/images/proxima-oil-green.jpg', '/images/proxima-oil-dropper-fit.jpg', '/images/proxima-set-green.jpg'],
    keyActives: ['Vitamin B3'],
    benefit: 'Lightweight dry botanical body oil with pure plant extracts and Vitamin B3 for supple, conditioned skin.',
    isBestSeller: false
  },
  {
    sku: 'PDL-CREAM-GREEN',
    name: 'Crème de Visage Peau de Lune — Plantes Naturelles (Green)',
    frenchName: 'Crème Visage Peau de Lune — Plantes Naturelles (Vert)',
    category: 'Face Cream',
    colorLine: 'green',
    colorLabel: 'Vitamin B3 Line',
    size: '50ml',
    retailPriceNgn: 6917,
    casePriceNgn: 70000,
    caseQty: 12,
    image: '/images/proxima-cream-green.jpg',
    images: ['/images/proxima-cream-green.jpg', '/images/proxima-cream-texture-fit.jpg', '/images/proxima-set-green.jpg'],
    keyActives: ['Vitamin B3'],
    benefit: 'Calming natural plant moisturiser with Vitamin B3 to balance sebum and fortify the delicate facial skin barrier.',
    isBestSeller: false
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
    casePriceNgn: 85000,
    caseQty: 12,
    image: '/images/proxima-gel-green.jpg',
    images: ['/images/proxima-gel-green.jpg', '/images/proxima-soap-lather-fit.jpg', '/images/proxima-set-green.jpg'],
    keyActives: ['Vitamin B3'],
    benefit: 'Refreshing botanical shower bath gel with natural plant extracts and Vitamin B3 for everyday skin comfort.',
    isBestSeller: false
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
    image: '/images/proxima-set-green.jpg',
    images: ['/images/proxima-set-green.jpg', '/images/set-green-bundle.jpg', '/images/proxima-cream-texture-fit.jpg', '/images/proxima-oil-dropper-fit.jpg'],
    isMatchingSetShot: true,
    keyActives: ['Vitamin B3'],
    benefit: 'The complete daily herbal routine: Body Lotion, Vitamin B3 Glow Oil, and Face Cream photographed together in one cohesive matching bundle.',
    isBestSeller: true
  },

  // 4. SPECIALTY FORMULATIONS
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
    image: '/images/proxima-soap-mulatto.jpg',
    images: ['/images/proxima-soap-mulatto.jpg', '/images/proxima-soap-mulatto-angle.jpg', '/images/proxima-soap-lather-fit.jpg', '/images/lifestyle-scrub.jpg'],
    keyActives: ['Botanical Soap Base', 'Fruit Actives'],
    benefit: 'Deeply purifying, rich African clarifying paste soap for thorough body bathing rituals.',
    isNewArrival: true
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
    image: '/images/proxima-oil-snowwhite.jpg',
    images: ['/images/proxima-oil-snowwhite.jpg', '/images/proxima-oil-dropper-fit.jpg', '/images/lifestyle-outdoor.jpg'],
    keyActives: ['Alpha-Arbutin', 'Niacinamide'],
    benefit: 'Ultra-concentrated botanical radiance elixir described by its pure actives: Arbutin + Niacinamide.',
    isNewArrival: true
  }
];

const colorLines = [
  {
    id: 'pink',
    name: 'Pink Line · Retinol + Vitamin C',
    badge: 'Retinol + Vitamin C',
    description: 'Cellular renewal and antioxidant protection formulated for radiant, firm skin in tropical heat.',
    accent: 'bg-rose-100 text-rose-800 border-rose-200'
  },
  {
    id: 'brown',
    name: 'Brown Line · Arbutin + Niacinamide',
    badge: 'Alpha-Arbutin + Niacinamide',
    description: 'Clarifying precision without toxic bleaching agents. Fades dark marks and unifies tone safely.',
    accent: 'bg-amber-100 text-amber-900 border-amber-200'
  },
  {
    id: 'green',
    name: 'Green Line · Vitamin B3',
    badge: 'Vitamin B3 Line',
    description: 'Daily herbal hydration and soothing barrier reinforcement engineered for warm weather comfort.',
    accent: 'bg-emerald-100 text-emerald-900 border-emerald-200'
  },
  {
    id: 'specialty',
    name: 'Specialty Formulations',
    badge: 'Specialty Line',
    description: 'Concentrated specialty treatments: Traditional African whipped paste soap and pure active Snow White oil.',
    accent: 'bg-purple-100 text-purple-900 border-purple-200'
  }
];

function renderProductCard(p) {
  const lineBadge = (() => {
    switch (p.colorLine) {
      case 'pink': return '<span class="text-[8px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border shadow-xs bg-rose-100 text-rose-800 border-rose-200">Pink Line · Retinol + Vit C</span>';
      case 'brown': return '<span class="text-[8px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border shadow-xs bg-amber-100 text-amber-900 border-amber-200">Brown Line · Arbutin + Niacinamide</span>';
      case 'green': return '<span class="text-[8px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border shadow-xs bg-emerald-100 text-emerald-900 border-emerald-200">Green Line · Vitamin B3</span>';
      case 'specialty': return '<span class="text-[8px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border shadow-xs bg-purple-100 text-purple-900 border-purple-200">Specialty Line</span>';
      default: return '';
    }
  })();

  const flagNotice = p.imageFlag
    ? `<div class="image-flag-notice absolute bottom-2 inset-x-2 bg-[#251409]/90 backdrop-blur-xs text-[#EADCC8] text-[9px] font-medium px-2 py-1 rounded-lg text-center shadow-xs z-10">
        <span>📷 ${p.imageFlag}</span>
      </div>`
    : '';

  const activesHtml = p.keyActives.map(a => `
    <span class="product-active-tag text-[9px] font-semibold text-[#603B1F] bg-[#FAF2E6] px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#E8DFC8]/60">
      <svg class="w-2.5 h-2.5 text-[#C9A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
      ${a}
    </span>
  `).join('');

  return `
    <div class="product-card group relative bg-[#F7F3EC] rounded-3xl overflow-hidden border border-[#E8DFC8]/70 hover:border-[#C9A87C] transition-all duration-300 flex flex-col justify-between hover:shadow-lg" data-sku="${p.sku}" data-line="${p.colorLine}" data-category="${p.category}">
      
      <!-- Media Box -->
      <div class="relative aspect-square bg-[#EFE9DF]/80 flex items-center justify-center p-6 overflow-hidden cursor-pointer" onclick="openProductModal('${p.sku}')">
        <!-- Interactive Wishlist Heart Button -->
        <button type="button" onclick="event.stopPropagation(); toggleWishlist('${p.sku}')" id="heart-btn-${p.sku}" class="wishlist-heart-btn absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#251409]/60 hover:text-[#A32B1E] hover:bg-white transition-all shadow-xs cursor-pointer" aria-label="Add to favorites" title="Add to favorites">
          <svg class="w-4 h-4 heart-icon transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </button>

        <!-- Badges -->
        <div class="absolute top-4 right-4 z-10 flex flex-col gap-1 items-end">
          ${lineBadge}
          ${p.isBestSeller ? '<span class="bg-[#251409] text-[#EADCC8] text-[9px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">Best Seller</span>' : ''}
          ${p.isNewArrival ? '<span class="bg-[#A32B1E] text-white text-[9px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">New</span>' : ''}
        </div>

        <!-- Product Image (Uncropped fit) -->
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out" loading="lazy" />

        <!-- Flag Notice if photo pending -->
        ${flagNotice}

        <!-- Hover Quick View Pill -->
        <div class="absolute bottom-3 inset-x-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2 z-20">
          <button type="button" onclick="event.stopPropagation(); openProductModal('${p.sku}')" class="flex-1 py-2 bg-white/95 text-[#251409] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-md hover:bg-[#251409] hover:text-white transition-colors">
            <svg class="w-3.5 h-3.5 text-[#C9A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            <span>Quick View</span>
          </button>
        </div>
      </div>

      <!-- Card Info -->
      <div class="p-5 flex flex-col flex-grow justify-between bg-white rounded-b-3xl">
        <div>
          <!-- Key Actives Tags -->
          <div class="product-actives-tags flex flex-wrap gap-1 mb-2 items-center">
            ${activesHtml}
            <span class="text-[10px] text-[#8C6D4F] font-medium ml-auto">${p.size}</span>
          </div>

          <!-- Title -->
          <h3 onclick="openProductModal('${p.sku}')" class="font-serif text-base font-bold text-[#251409] hover:text-[#A32B1E] transition-colors cursor-pointer line-clamp-1">
            ${p.name}
          </h3>

          <!-- Benefit -->
          <p class="text-xs text-[#6B5E51] mt-1 line-clamp-2 leading-relaxed">
            ${p.benefit}
          </p>
        </div>

        <!-- Price & Action Buttons -->
        <div class="pt-4 mt-4 border-t border-[#F2ECE4] flex items-center justify-between gap-2">
          <div>
            <span class="product-price font-serif text-lg font-bold text-[#251409]">
              ₦${p.retailPriceNgn.toLocaleString()}
            </span>
          </div>

          <div class="flex items-center gap-2">
            <button type="button" onclick="openProductModal('${p.sku}')" class="details-btn px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold text-[#251409] bg-[#EFE9DF] hover:bg-[#E2D8C7] transition-colors flex items-center gap-1 cursor-pointer" aria-label="Details for ${p.name}">
              <svg class="w-3.5 h-3.5 text-[#8C6D4F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              <span>Details</span>
            </button>

            <button type="button" onclick="addToBag('${p.sku}')" class="add-to-bag-btn bg-[#251409] hover:bg-[#A32B1E] text-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs active:scale-95 cursor-pointer" aria-label="Add ${p.name} to bag">
              <svg class="w-3.5 h-3.5 text-[#EADCC8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              <span>Add to Bag</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  `;
}

function renderCatalogSection() {
  return `
    <div id="catalog-container" class="space-y-14">
      ${colorLines.map(line => {
        const lineProducts = products.filter(p => p.colorLine === line.id);
        if (lineProducts.length === 0) return '';
        return `
          <section id="section-${line.id}" class="color-line-section space-y-5" data-line="${line.id}">
            <!-- Line Header Banner -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E8DFC8]">
              <div class="flex items-center gap-3">
                <h2 class="font-serif text-xl sm:text-2xl font-bold text-[#251409]">
                  ${line.name}
                </h2>
                <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-xs ${line.accent}">
                  ${line.badge}
                </span>
              </div>
              <p class="text-xs text-[#6B5E51] max-w-md leading-relaxed">
                ${line.description}
              </p>
            </div>

            <!-- Product Cards Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              ${lineProducts.map(renderProductCard).join('\n')}
            </div>
          </section>
        `;
      }).join('\n')}
    </div>
  `;
}

function renderWholesaleTable() {
  return `
    <section id="wholesale-table-section" class="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFC8]/80 shadow-md space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8DFC8] pb-6">
        <div>
          <span class="text-[10px] uppercase font-bold tracking-widest text-[#A32B1E]">Direct Factory Pricing</span>
          <h2 class="font-serif text-2xl sm:text-3xl font-bold text-[#251409] mt-1">Wholesale Case Pricing Guide</h2>
          <p class="text-xs sm:text-sm text-[#5A4D41] mt-1">Direct from our Trade Fair Complex flagship, Imo Plaza D02/19, BBA Lagos.</p>
        </div>
        <a href="https://wa.me/2349044943580?text=Hello%20Proxima%20I%20want%20to%20order%20wholesale%20cases" target="_blank" rel="noopener noreferrer" class="bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors shadow-xs self-start sm:self-auto">
          <span>Order Wholesale on WhatsApp</span>
        </a>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-[#E8DFC8] text-[#8C6D4F] font-serif uppercase tracking-wider text-[11px]">
              <th class="py-3 px-3">Product Name</th>
              <th class="py-3 px-3">Category & Line</th>
              <th class="py-3 px-3">Case Qty</th>
              <th class="py-3 px-3">Unit Price</th>
              <th class="py-3 px-3">Case Price</th>
              <th class="py-3 px-3 text-emerald-800">Per-Case Margin / Saving</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#F2ECE4] text-[#251409]">
            ${products.map(p => {
              const fullRetailVal = p.retailPriceNgn * p.caseQty;
              const savings = fullRetailVal - p.casePriceNgn;
              return `
                <tr class="hover:bg-[#FAF6F0] transition-colors">
                  <td class="py-3.5 px-3 font-semibold">${p.name}</td>
                  <td class="py-3.5 px-3 text-[#5A4D41]">${p.category} (${p.colorLabel})</td>
                  <td class="py-3.5 px-3">${p.caseQty} units / carton</td>
                  <td class="py-3.5 px-3 font-medium">₦${p.retailPriceNgn.toLocaleString()}</td>
                  <td class="py-3.5 px-3 font-bold font-serif text-[#A32B1E]">₦${p.casePriceNgn.toLocaleString()}</td>
                  <td class="py-3.5 px-3 font-semibold text-emerald-700">+₦${savings.toLocaleString()} profit buffer</td>
                </tr>
              `;
            }).join('\n')}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderHeader() {
  return `
    <header class="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFC8]/60">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <!-- Logo -->
        <a href="/" class="flex flex-col group">
          <span class="font-serif text-2xl font-bold tracking-tight text-[#251409] group-hover:text-[#A32B1E] transition-colors">
            PROXIMA
          </span>
          <span class="text-[9px] uppercase tracking-[0.25em] text-[#8C6D4F] -mt-1 font-medium">
            Peau de Lune · Paris & Lagos
          </span>
        </a>

        <!-- Navigation Links -->
        <nav class="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#251409]">
          <a href="/shop.html" class="text-[#A32B1E] hover:text-[#A32B1E] transition-colors">Shop</a>
          <a href="/#routines" class="hover:text-[#A32B1E] transition-colors">Routines</a>
          <a href="/#story" class="hover:text-[#A32B1E] transition-colors">Our Story</a>
          <a href="/#wholesale" class="hover:text-[#A32B1E] transition-colors">Wholesale</a>
          <a href="/#contact" class="hover:text-[#A32B1E] transition-colors">Contact</a>
        </nav>

        <!-- Right Action Icons -->
        <div class="flex items-center gap-3 sm:gap-4">
          <!-- WhatsApp Quick Contact -->
          <a href="https://wa.me/2349044943580" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full hover:bg-emerald-100 transition-colors" title="Chat on WhatsApp">
            <span>+234 904 494 3580</span>
          </a>

          <!-- Header Wishlist Button -->
          <button type="button" onclick="openWishlistDrawer()" class="relative p-2.5 rounded-full bg-white border border-[#E8DFC8] text-[#251409] hover:text-[#A32B1E] hover:border-[#A32B1E] transition-colors shadow-xs" aria-label="Favorites" title="My Favorites">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            <span id="wishlist-counter-badge" class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#A32B1E] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">0</span>
          </button>

          <!-- Cart Button -->
          <button type="button" onclick="openCartDrawer()" class="relative p-2.5 rounded-full bg-white border border-[#E8DFC8] text-[#251409] hover:text-[#A32B1E] hover:border-[#A32B1E] transition-colors shadow-xs" aria-label="Open Shopping Bag">
            <svg class="w-5 h-5 text-[#251409]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <span id="cart-counter-badge" class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#251409] text-white text-[10px] font-bold flex items-center justify-center shadow-xs">0</span>
          </button>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="bg-[#1C0F06] text-[#EADCC8] border-t border-[#382012] mt-24 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="space-y-3">
            <h3 class="font-serif text-2xl font-bold text-white tracking-wider">PROXIMA</h3>
            <p class="text-xs text-[#C5B39E] leading-relaxed">
              French formulation science. African understanding. High-performance botanical skincare formulated in France and built around melanin reality.
            </p>
          </div>
          <div>
            <h4 class="font-serif text-sm font-bold text-white mb-3">Lagos Showroom & Pickup</h4>
            <p class="text-xs text-[#C5B39E] leading-relaxed">
              Imo Plaza D02/19<br/>
              BBA Trade Fair Complex, Badagry Expressway<br/>
              Lagos, Nigeria
            </p>
          </div>
          <div>
            <h4 class="font-serif text-sm font-bold text-white mb-3">Direct Commercial Desk</h4>
            <p class="text-xs text-[#C5B39E] leading-relaxed">
              WhatsApp: +234 904 494 3580<br/>
              Email: proximasarlltd@gmail.com<br/>
              Daily Wholesale Pickups 08:00 – 17:30
            </p>
          </div>
          <div>
            <h4 class="font-serif text-sm font-bold text-white mb-3">Verified Safe Actives</h4>
            <p class="text-xs text-[#C5B39E] leading-relaxed">
              Strictly zero hydroquinone, zero steroids, zero mercury. All 17 formulations are verified according to European and African cosmetic health guidelines.
            </p>
          </div>
        </div>
        <div class="pt-8 border-t border-[#382012] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C6D4F] gap-4">
          <p>© 2026 Proxima SARL Ltd. All rights reserved. Trade Fair Complex, Lagos, Nigeria.</p>
          <div class="flex gap-4">
            <a href="/shop.html" class="hover:text-white transition-colors">Catalog</a>
            <a href="https://wa.me/2349044943580" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">WhatsApp Order</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function renderCartDrawer() {
  return `
    <!-- Cart Drawer Offcanvas Backdrop -->
    <div id="cart-drawer-backdrop" class="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 hidden transition-opacity" onclick="closeCartDrawer()"></div>

    <!-- Cart Drawer Panel -->
    <div id="cart-drawer" class="fixed inset-y-0 right-0 w-full max-w-md bg-[#FAF7F2] shadow-2xl z-50 transform translate-x-full transition-transform duration-300 flex flex-col border-l border-[#E8DFC8]">
      <div class="p-5 border-b border-[#E8DFC8] flex items-center justify-between bg-white">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-[#251409]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          <h2 class="font-serif text-lg font-bold text-[#251409]">Your Shopping Bag</h2>
        </div>
        <button type="button" onclick="closeCartDrawer()" class="p-2 text-[#251409]/70 hover:text-[#A32B1E] rounded-full hover:bg-[#EFE9DF] transition-colors" aria-label="Close Bag">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div id="cart-items-container" class="flex-1 overflow-y-auto p-5 space-y-4">
        <!-- Injected via JS -->
      </div>

      <div class="p-5 border-t border-[#E8DFC8] bg-white space-y-4">
        <div class="flex items-center justify-between text-sm">
          <span class="text-[#5A4D41]">Subtotal</span>
          <span id="cart-subtotal" class="font-serif text-xl font-bold text-[#251409]">₦0</span>
        </div>
        <p class="text-[11px] text-[#8C6D4F]">Orders are finalized via our official Lagos WhatsApp team for instantaneous dispatch & pickup confirmation.</p>
        <button type="button" onclick="checkoutWhatsApp()" class="w-full py-3.5 bg-[#251409] hover:bg-[#A32B1E] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md">
          <span>Checkout via WhatsApp</span>
          <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.58 1.961.905 3.013.905h.001c3.182 0 5.768-2.587 5.769-5.766.001-3.182-2.585-5.768-5.768-5.768zm3.364 8.163c-.14.394-.816.757-1.12.788-.293.031-.663.044-2.12-.56-1.579-.652-2.597-2.271-2.678-2.379-.081-.107-.648-.865-.648-1.65 0-.786.406-1.173.55-1.332.143-.16.312-.2.417-.2.104 0 .209 0 .299.005.097.005.226-.037.353.268.13.313.442 1.077.481 1.156.039.08.065.173.013.28-.052.107-.078.174-.156.267-.078.093-.165.207-.235.279-.08.08-.163.167-.07.327.093.16.415.686.892 1.111.614.548 1.132.718 1.292.798.16.08.254.067.348-.04.094-.107.402-.468.51-.628.107-.16.214-.134.361-.08.147.053.93.439 1.09.519.16.08.267.12.306.187.039.067.039.387-.101.781z"/></svg>
        </button>
      </div>
    </div>
  `;
}

function renderWishlistDrawer() {
  return `
    <!-- Wishlist Drawer Offcanvas Backdrop -->
    <div id="wishlist-drawer-backdrop" class="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 hidden transition-opacity" onclick="closeWishlistDrawer()"></div>

    <!-- Wishlist Drawer Panel -->
    <div id="wishlist-drawer" class="fixed inset-y-0 right-0 w-full max-w-md bg-[#FAF7F2] shadow-2xl z-50 transform translate-x-full transition-transform duration-300 flex flex-col border-l border-[#E8DFC8]">
      <div class="p-5 border-b border-[#E8DFC8] flex items-center justify-between bg-white">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full bg-[#FAF2E6] flex items-center justify-center">
            <svg class="w-4 h-4 text-[#A32B1E]" fill="#A32B1E" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </div>
          <div>
            <h2 class="font-serif text-lg font-bold text-[#251409]">My Saved Favorites</h2>
            <span id="wishlist-drawer-count" class="text-[11px] text-[#8C6D4F]">0 items</span>
          </div>
        </div>
        <button type="button" onclick="closeWishlistDrawer()" class="p-2 text-[#251409]/70 hover:text-[#A32B1E] rounded-full hover:bg-[#EFE9DF] transition-colors" aria-label="Close Favorites">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <div id="wishlist-items-container" class="flex-1 overflow-y-auto p-5 space-y-4">
        <!-- Injected via JS -->
      </div>

      <div class="p-5 border-t border-[#E8DFC8] bg-white space-y-3">
        <button type="button" onclick="addAllFavoritesToCart()" class="w-full py-3.5 bg-[#251409] hover:bg-[#A32B1E] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md">
          <span>Add All Favorites to Bag</span>
        </button>
      </div>
    </div>
  `;
}

function renderProductModal() {
  return `
    <!-- Product Quick View Modal Backdrop -->
    <div id="product-modal-backdrop" class="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4 transition-opacity" onclick="closeProductModal()">
      <div id="product-modal" class="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E8DFC8] shadow-2xl p-6 sm:p-8 relative" onclick="event.stopPropagation()">
        <div class="absolute top-5 right-5 flex items-center gap-2">
          <button type="button" id="modal-wishlist-toggle" onclick="toggleModalWishlist()" class="w-8 h-8 rounded-full bg-white border border-[#E8DFC8] flex items-center justify-center text-[#251409] hover:text-[#A32B1E] transition-colors shadow-xs" aria-label="Toggle favorite">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </button>
          <button type="button" onclick="closeProductModal()" class="w-8 h-8 rounded-full bg-white border border-[#E8DFC8] flex items-center justify-center text-[#251409] hover:text-[#A32B1E] transition-colors shadow-xs">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div id="modal-content" class="space-y-6">
          <!-- Injected via JS -->
        </div>
      </div>
    </div>
  `;
}

function generateShopHtml() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <title>Proxima Skincare — Complete 17-Product Catalog | Official Store</title>
    <meta name="description" content="Explore all 17 Proxima formulations across the Pink Line (Retinol + Vit C), Brown Line (Arbutin + Niacinamide), Green Line (Vitamin B3), and Specialty Lines. Direct from Lagos." />
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              proxima: {
                brown: '#603B1F',
                'brown-deep': '#251409',
                'brown-light': '#C9A87C',
                'brown-pale': '#EFE9DF',
                cream: '#FAF7F2',
                red: '#A32B1E',
                black: '#1C0F06'
              }
            },
            fontFamily: {
              serif: ['Fraunces', 'serif'],
              sans: ['Work Sans', 'sans-serif']
            }
          }
        }
      }
    </script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Work+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#FAF7F2] text-[#1C0F06] font-sans antialiased selection:bg-[#C9A87C] selection:text-[#251409]">
    
    ${renderHeader()}

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <!-- Title Area -->
      <div class="max-w-3xl">
        <span class="text-[11px] font-bold uppercase tracking-widest text-[#C9A87C]">Official Store · Lagos Flagship</span>
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251409] mt-1">
          The Peau de Lune Range
        </h1>
        <p class="text-xs sm:text-sm text-[#5A4D41] mt-2 leading-relaxed">
          Proven botanical care formulated in France for daily radiance, deep nourishment, and climatic resilience across 17 precision formulations.
        </p>
      </div>

      <!-- Guidance Banner -->
      <div class="bg-gradient-to-r from-[#251409] via-[#603B1F] to-[#251409] text-[#FAF7F2] rounded-2xl p-4 sm:p-5 border border-[#C9A87C]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-[#C9A87C]/20 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-[#C9A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
          </div>
          <div>
            <h3 class="font-serif text-sm sm:text-base font-bold text-white">Not sure which product matches your skin condition?</h3>
            <p class="text-xs text-[#EFE9DF]/80 mt-0.5">Message our Lagos skincare advisors directly on WhatsApp for tailored routine advice.</p>
          </div>
        </div>
        <a href="https://wa.me/2349044943580?text=Hello%20Proxima%20I%20need%20product%20recommendations" target="_blank" rel="noopener noreferrer" class="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors shadow-xs flex items-center gap-2">
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      <!-- Color Line Filter Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button type="button" onclick="filterCatalog('All')" class="filter-btn active text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all bg-[#251409] text-white shadow-xs" data-target="All">
          All Products (17)
        </button>
        <button type="button" onclick="filterCatalog('favorites')" id="favorites-tab-btn" class="filter-btn text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all bg-white text-[#251409] border border-[#E8DFC8] hover:border-[#251409]" data-target="favorites">
          ♥ My Favorites
        </button>
        <button type="button" onclick="filterCatalog('pink')" class="filter-btn text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all bg-white text-[#251409] border border-[#E8DFC8] hover:border-[#251409]" data-target="pink">
          Pink Line · Retinol + C (5)
        </button>
        <button type="button" onclick="filterCatalog('brown')" class="filter-btn text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all bg-white text-[#251409] border border-[#E8DFC8] hover:border-[#251409]" data-target="brown">
          Brown Line · Arbutin + Niacinamide (5)
        </button>
        <button type="button" onclick="filterCatalog('green')" class="filter-btn text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all bg-white text-[#251409] border border-[#E8DFC8] hover:border-[#251409]" data-target="green">
          Green Line · Vitamin B3 (5)
        </button>
        <button type="button" onclick="filterCatalog('specialty')" class="filter-btn text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all bg-white text-[#251409] border border-[#E8DFC8] hover:border-[#251409]" data-target="specialty">
          Specialty Line (2)
        </button>
      </div>

      <!-- 17-Product Catalog (Grouped by Color Line) -->
      ${renderCatalogSection()}

      <!-- Wholesale Pricing Section -->
      ${renderWholesaleTable()}
    </main>

    ${renderFooter()}
    ${renderCartDrawer()}
    ${renderWishlistDrawer()}
    ${renderProductModal()}

    <!-- Client-side Logic Script -->
    <script>
      const catalog = ${JSON.stringify(products)};
      let cart = [];
      let wishlist = [];
      let currentModalSku = null;

      try {
        const saved = localStorage.getItem('proxima_wishlist_v1');
        if (saved) wishlist = JSON.parse(saved);
      } catch (e) {}

      function saveWishlist() {
        try {
          localStorage.setItem('proxima_wishlist_v1', JSON.stringify(wishlist));
        } catch (e) {}
        updateWishlistUi();
      }

      function toggleWishlist(sku) {
        if (wishlist.includes(sku)) {
          wishlist = wishlist.filter(id => id !== sku);
        } else {
          wishlist.push(sku);
        }
        saveWishlist();
      }

      function updateWishlistUi() {
        document.getElementById('wishlist-counter-badge').textContent = wishlist.length;
        document.getElementById('wishlist-drawer-count').textContent = wishlist.length + ' items';

        catalog.forEach(p => {
          const btn = document.getElementById('heart-btn-' + p.sku);
          if (btn) {
            const svg = btn.querySelector('svg');
            if (wishlist.includes(p.sku)) {
              btn.classList.add('ring-2', 'ring-[#A32B1E]/30', 'scale-105');
              btn.classList.remove('text-[#251409]/60');
              btn.classList.add('text-[#A32B1E]');
              if (svg) svg.setAttribute('fill', '#A32B1E');
            } else {
              btn.classList.remove('ring-2', 'ring-[#A32B1E]/30', 'scale-105');
              btn.classList.remove('text-[#A32B1E]');
              btn.classList.add('text-[#251409]/60');
              if (svg) svg.setAttribute('fill', 'none');
            }
          }
        });

        // Update wishlist drawer contents
        const container = document.getElementById('wishlist-items-container');
        const favProducts = catalog.filter(p => wishlist.includes(p.sku));
        if (favProducts.length === 0) {
          container.innerHTML = '<div class="text-center py-12 text-sm text-[#8C6D4F]">You have no saved favorites yet. Click the heart icon on any product to save it.</div>';
        } else {
          container.innerHTML = favProducts.map(p => \`
            <div class="flex items-center gap-3 p-3 bg-white rounded-2xl border border-[#E8DFC8]">
              <img src="\${p.image}" alt="\${p.name}" class="w-14 h-14 object-contain rounded-xl bg-[#FAF7F2] p-1 border border-[#E8DFC8]/60" />
              <div class="flex-1 min-w-0">
                <h4 class="font-serif text-xs font-bold text-[#251409] truncate">\${p.name}</h4>
                <span class="text-[10px] text-[#8C6D4F]">\${p.size}</span>
                <div class="font-serif text-xs font-bold text-[#251409] mt-0.5">₦\${p.retailPriceNgn.toLocaleString()}</div>
              </div>
              <div class="flex items-center gap-2">
                <button type="button" onclick="addToBag('\${p.sku}')" class="px-2.5 py-1.5 bg-[#251409] text-white rounded-lg text-xs font-semibold">Add</button>
                <button type="button" onclick="toggleWishlist('\${p.sku}')" class="p-1.5 text-rose-700 hover:text-rose-900">✕</button>
              </div>
            </div>
          \`).join('');
        }

        // Update modal wishlist toggle if open
        if (currentModalSku) {
          const modalBtn = document.getElementById('modal-wishlist-toggle');
          if (modalBtn) {
            const svg = modalBtn.querySelector('svg');
            if (wishlist.includes(currentModalSku)) {
              modalBtn.classList.add('text-[#A32B1E]');
              if (svg) svg.setAttribute('fill', '#A32B1E');
            } else {
              modalBtn.classList.remove('text-[#A32B1E]');
              if (svg) svg.setAttribute('fill', 'none');
            }
          }
        }
      }

      function toggleModalWishlist() {
        if (!currentModalSku) return;
        toggleWishlist(currentModalSku);
      }

      function openWishlistDrawer() {
        document.getElementById('wishlist-drawer-backdrop').classList.remove('hidden');
        document.getElementById('wishlist-drawer').classList.remove('translate-x-full');
      }

      function closeWishlistDrawer() {
        document.getElementById('wishlist-drawer-backdrop').classList.add('hidden');
        document.getElementById('wishlist-drawer').classList.add('translate-x-full');
      }

      function addAllFavoritesToCart() {
        catalog.filter(p => wishlist.includes(p.sku)).forEach(p => {
          addToBag(p.sku);
        });
        closeWishlistDrawer();
      }

      function filterCatalog(line) {
        document.querySelectorAll('.filter-btn').forEach(b => {
          if (b.getAttribute('data-target') === line) {
            b.classList.remove('bg-white', 'text-[#251409]', 'border', 'border-[#E8DFC8]');
            b.classList.add('bg-[#251409]', 'text-white', 'shadow-xs');
          } else {
            b.classList.remove('bg-[#251409]', 'text-white', 'shadow-xs');
            b.classList.add('bg-white', 'text-[#251409]', 'border', 'border-[#E8DFC8]');
          }
        });

        if (line === 'favorites') {
          document.querySelectorAll('.color-line-section').forEach(sec => {
            sec.style.display = 'block';
          });
          document.querySelectorAll('.product-card').forEach(card => {
            const sku = card.getAttribute('data-sku');
            if (wishlist.includes(sku)) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
          return;
        }

        document.querySelectorAll('.product-card').forEach(card => {
          card.style.display = 'flex';
        });

        document.querySelectorAll('.color-line-section').forEach(sec => {
          if (line === 'All' || sec.getAttribute('data-line') === line) {
            sec.style.display = 'block';
          } else {
            sec.style.display = 'none';
          }
        });
      }

      function addToBag(sku) {
        const item = catalog.find(p => p.sku === sku);
        if (!item) return;
        const existing = cart.find(c => c.sku === sku);
        if (existing) {
          existing.qty += 1;
        } else {
          cart.push({ sku: item.sku, name: item.name, price: item.retailPriceNgn, image: item.image, size: item.size, qty: 1 });
        }
        updateCartUi();
        openCartDrawer();
      }

      function updateCartUi() {
        const totalCount = cart.reduce((acc, c) => acc + c.qty, 0);
        const subtotal = cart.reduce((acc, c) => acc + (c.price * c.qty), 0);
        
        document.getElementById('cart-counter-badge').textContent = totalCount;
        document.getElementById('cart-subtotal').textContent = '₦' + subtotal.toLocaleString();

        const container = document.getElementById('cart-items-container');
        if (cart.length === 0) {
          container.innerHTML = '<div class="text-center py-12 text-sm text-[#8C6D4F]">Your shopping bag is empty.</div>';
          return;
        }

        container.innerHTML = cart.map(item => \`
          <div class="flex items-center gap-3 p-3 bg-white rounded-2xl border border-[#E8DFC8]">
            <img src="\${item.image}" alt="\${item.name}" class="w-14 h-14 object-contain rounded-xl bg-[#FAF7F2] p-1 border border-[#E8DFC8]/60" />
            <div class="flex-1 min-w-0">
              <h4 class="font-serif text-xs font-bold text-[#251409] truncate">\${item.name}</h4>
              <span class="text-[10px] text-[#8C6D4F]">\${item.size}</span>
              <div class="font-serif text-xs font-bold text-[#251409] mt-0.5">₦\${(item.price * item.qty).toLocaleString()}</div>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" onclick="changeQty('\${item.sku}', -1)" class="w-6 h-6 rounded-lg bg-[#FAF7F2] border border-[#E8DFC8] flex items-center justify-center text-xs font-bold">-</button>
              <span class="text-xs font-bold">\${item.qty}</span>
              <button type="button" onclick="changeQty('\${item.sku}', 1)" class="w-6 h-6 rounded-lg bg-[#FAF7F2] border border-[#E8DFC8] flex items-center justify-center text-xs font-bold">+</button>
            </div>
          </div>
        \`).join('');
      }

      function changeQty(sku, delta) {
        const item = cart.find(c => c.sku === sku);
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) {
          cart = cart.filter(c => c.sku !== sku);
        }
        updateCartUi();
      }

      function openCartDrawer() {
        document.getElementById('cart-drawer-backdrop').classList.remove('hidden');
        document.getElementById('cart-drawer').classList.remove('translate-x-full');
      }

      function closeCartDrawer() {
        document.getElementById('cart-drawer-backdrop').classList.add('hidden');
        document.getElementById('cart-drawer').classList.add('translate-x-full');
      }

      function setModalMainImage(src) {
        document.getElementById('modal-main-image').src = src;
      }

      function openProductModal(sku) {
        currentModalSku = sku;
        const p = catalog.find(item => item.sku === sku);
        if (!p) return;
        const gallery = p.images && p.images.length > 0 ? p.images : [p.image];
        const modalContent = document.getElementById('modal-content');
        
        const galleryThumbs = gallery.length > 1 ? \`
          <div class="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
            \${gallery.map((img, i) => \`
              <button type="button" onclick="setModalMainImage('\${img}')" class="w-14 h-14 rounded-xl p-1 bg-white border border-[#E8DFC8] hover:border-[#251409] flex-shrink-0 cursor-pointer overflow-hidden">
                <img src="\${img}" class="w-full h-full object-contain" />
              </button>
            \`).join('')}
          </div>
        \` : '';

        modalContent.innerHTML = \`
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-3">
              <div class="aspect-square bg-[#FAF7F2] rounded-2xl flex items-center justify-center p-6 border border-[#E8DFC8]">
                <img id="modal-main-image" src="\${p.image}" alt="\${p.name}" class="w-full h-full object-contain" />
              </div>
              \${galleryThumbs}
            </div>
            <div class="space-y-4">
              <div>
                <span class="text-[10px] font-bold uppercase tracking-wider text-[#A32B1E]">\${p.colorLabel}</span>
                <h3 class="font-serif text-xl font-bold text-[#251409] mt-0.5">\${p.name}</h3>
                <span class="text-xs text-[#8C6D4F]">\${p.size} · \${p.category}</span>
              </div>
              <div class="font-serif text-2xl font-bold text-[#251409]">₦\${p.retailPriceNgn.toLocaleString()}</div>
              <p class="text-xs text-[#5A4D41] leading-relaxed">\${p.benefit}</p>
              <div class="space-y-1.5 pt-2 border-t border-[#E8DFC8]">
                <span class="text-[10px] font-bold uppercase tracking-wider text-[#8C6D4F]">Active Ingredients:</span>
                <div class="flex flex-wrap gap-1">
                  \${p.keyActives.map(a => \`<span class="text-[10px] font-semibold text-[#603B1F] bg-[#FAF2E6] px-2.5 py-0.5 rounded-full border border-[#E8DFC8]">\${a}</span>\`).join('')}
                </div>
              </div>
              <div class="pt-4 flex gap-2">
                <button type="button" onclick="addToBag('\${p.sku}'); closeProductModal();" class="flex-1 py-3 bg-[#251409] hover:bg-[#A32B1E] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md">
                  Add to Bag — ₦\${p.retailPriceNgn.toLocaleString()}
                </button>
              </div>
            </div>
          </div>
        \`;
        document.getElementById('product-modal-backdrop').classList.remove('hidden');
        updateWishlistUi();
      }

      function closeProductModal() {
        document.getElementById('product-modal-backdrop').classList.add('hidden');
        currentModalSku = null;
      }

      function checkoutWhatsApp() {
        if (cart.length === 0) return;
        let msg = "Hello Proxima Lagos! I would like to order from your official catalog:\\n\\n";
        cart.forEach(c => {
          msg += \`• \${c.qty}x \${c.name} (\${c.size}) — ₦\${(c.price * c.qty).toLocaleString()}\\n\`;
        });
        const subtotal = cart.reduce((acc, c) => acc + (c.price * c.qty), 0);
        msg += \`\\nTotal: ₦\${subtotal.toLocaleString()}\\n\\nPlease confirm stock availability and pickup / delivery details.\`;
        window.open('https://wa.me/2349044943580?text=' + encodeURIComponent(msg), '_blank');
      }

      // Initialize
      updateCartUi();
      updateWishlistUi();
    </script>
  </body>
</html>
`;
}

// 1. Write shop.html
const shopHtml = generateShopHtml();
fs.writeFileSync(path.join(__dirname, '../shop.html'), shopHtml, 'utf8');
console.log('Generated shop.html successfully with all 17 products & interactive wishlist!');

// 2. Pre-render markup into index.html inside <div id="root">...</div>
const indexHtmlPath = path.join(__dirname, '../index.html');
const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

const preRenderedContent = `
  <div id="root">
    ${renderHeader()}
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      <div class="max-w-3xl">
        <span class="text-[11px] font-bold uppercase tracking-widest text-[#C9A87C]">Official Store · Lagos Flagship</span>
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#251409] mt-1">
          The Peau de Lune Range
        </h1>
        <p class="text-xs sm:text-sm text-[#5A4D41] mt-2 leading-relaxed">
          Proven botanical care formulated in France for daily radiance, deep nourishment, and climatic resilience across 17 precision formulations.
        </p>
      </div>

      <!-- Color Line Filter Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button type="button" class="filter-btn text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap bg-[#251409] text-white shadow-xs">
          All Products (17)
        </button>
        <button type="button" class="filter-btn text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap bg-white text-[#251409] border border-[#E8DFC8]">
          ♥ My Favorites
        </button>
        <button type="button" class="filter-btn text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap bg-white text-[#251409] border border-[#E8DFC8]">
          Pink Line · Retinol + C (5)
        </button>
        <button type="button" class="filter-btn text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap bg-white text-[#251409] border border-[#E8DFC8]">
          Brown Line · Arbutin + Niacinamide (5)
        </button>
        <button type="button" class="filter-btn text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap bg-white text-[#251409] border border-[#E8DFC8]">
          Green Line · Vitamin B3 (5)
        </button>
        <button type="button" class="filter-btn text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap bg-white text-[#251409] border border-[#E8DFC8]">
          Specialty Line (2)
        </button>
      </div>

      ${renderCatalogSection()}
      ${renderWholesaleTable()}
    </main>
    ${renderFooter()}
    ${renderWishlistDrawer()}
  </div>
`;

let updatedIndexHtml;
if (indexHtmlContent.includes('<div id="root"></div>')) {
  updatedIndexHtml = indexHtmlContent.replace('<div id="root"></div>', preRenderedContent.trim());
} else {
  updatedIndexHtml = indexHtmlContent.replace(
    /<div id="root">[\s\S]*<\/div>(\s*<script type="module" src="\/src\/main\.tsx"><\/script>)/,
    `${preRenderedContent.trim()}$1`
  );
}
fs.writeFileSync(indexHtmlPath, updatedIndexHtml, 'utf8');
console.log('Updated index.html with pre-rendered 17-product catalog markup and wishlist successfully!');
