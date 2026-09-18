import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, MessageCircle, ChevronDown, Check, Package } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { liveProducts } from '../data/products';
import { ProductCard } from '../components/shop/ProductCard';
import { Product } from '../types';

interface HomePageProps {
  setCurrentTab: (tab: string) => void;
  onQuickView: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentTab, onQuickView }) => {
  const { lang, t } = useLanguage();
  const isFrench = lang === 'fr';

  const [activeCategory, setActiveCategory] = useState<'All' | 'Body' | 'Face' | 'Best Sellers'>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const featuredOilProduct = liveProducts.find(p => p.sku === 'PDL-HUILE') || liveProducts[0];

  const filteredCollection = liveProducts.filter(p => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Body') return p.category === 'Body';
    if (activeCategory === 'Face') return p.category === 'Face';
    if (activeCategory === 'Best Sellers') return p.isBestSeller;
    return true;
  });

  const faqs = isFrench
    ? [
        {
          q: 'Comment les formules Proxima sont-elles adaptées à la chaleur et à l’humidité ?',
          a: 'Nos soins sont élaborés en laboratoire en France avec des émulsions ultra-légères et non comédogènes. Elles pénètrent rapidement sans laisser de film gras ni occlusif, même sous la forte humidité et la chaleur de Lagos et d’Afrique de l’Ouest.',
        },
        {
          q: 'Vos produits contiennent-ils des agents décapants ou éclaircissants agressifs ?',
          a: 'Non, absolument pas. Nous bannissons formellement l’hydroquinone, les corticoïdes, le mercure et tout agent éclaircissant toxique. Nous utilisons exclusivement des actifs nobles reconnus (Niacinamide, Alpha Arbutine, Rétinol, Vitamine C) pour sublimer la clarté naturelle sans détruire la barrière cutanée.',
        },
        {
          q: 'Où peut-on voir ou retirer les produits à Lagos ?',
          a: 'Notre siège et showroom officiel sont situés à Imo Plaza D02/19, BBA Trade Fair Complex, Lagos, Nigeria. Vous pouvez vous y approvisionner directement en détail comme en gros.',
        },
        {
          q: 'Comment commander des cartons au tarif grossiste ?',
          a: 'Vous pouvez consulter notre simulateur de prix au carton sur la page Grossistes, ou contacter directement notre équipe commerciale par WhatsApp au +234 904 494 3580.',
        },
      ]
    : [
        {
          q: 'How are Proxima formulas engineered for heat and humidity?',
          a: 'Our products are formulated in French cosmetic laboratories with lightweight, non-comedogenic bio-matrices. They absorb rapidly into melanin-rich skin without turning sticky or greasy during warm tropical days.',
        },
        {
          q: 'Do any Proxima products contain bleaching agents, hydroquinone, or steroids?',
          a: 'Strictly no. Proxima adheres uncompromisingly to European cosmetic safety standards. We reject toxic bleaching chemicals. We describe and formulate our skincare strictly with verified, skin-safe actives (Niacinamide, Alpha Arbutin, Retinol, Vitamin C) that protect barrier health.',
        },
        {
          q: 'Where can I inspect or collect products in Lagos, Nigeria?',
          a: 'Our flagship showroom and distribution center is located at Imo Plaza D02/19, BBA Trade Fair Complex, Lagos, Nigeria. Both retail purchases and wholesale pickups are welcomed daily.',
        },
        {
          q: 'How can I order wholesale cartons for my salon or cosmetics store?',
          a: 'Visit our Wholesale & Distribution page to access our interactive Case Pricing Calculator, or contact our Lagos commercial desk directly on WhatsApp at +234 904 494 3580.',
        },
      ];

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. HERO SECTION (Inspired by Ariva & Skin Cafe) */}
      <section className="pt-6 sm:pt-10 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF6F0] rounded-[32px] sm:rounded-[40px] border border-[#E8DFC8]/70 p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6 z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#251409] border border-[#E8DFC8] text-xs font-semibold shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A87C]" />
                  <span>{isFrench ? 'Formulé en France · Ancré à Lagos' : 'French Formulation Science · African Skin'}</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#251409] leading-[1.12] tracking-tight">
                  {isFrench ? (
                    <>
                      L'Éclat Commence Ici avec <span className="text-[#A32B1E] italic">Proxima</span>.
                    </>
                  ) : (
                    <>
                      Glow Starts Here with <span className="text-[#A32B1E] italic">Proxima</span> Skin Care!
                    </>
                  )}
                </h1>

                <p className="text-sm sm:text-base text-[#5A4D41] font-normal leading-relaxed max-w-xl">
                  {t.hero.subheadline}
                </p>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={() => setCurrentTab('shop')}
                    className="bg-[#251409] hover:bg-[#A32B1E] text-white px-7 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
                  >
                    <span>{isFrench ? 'Commander Maintenant' : 'Shop Now'}</span>
                    <ArrowRight className="w-4 h-4 text-[#EADCC8]" />
                  </button>

                  <button
                    onClick={() => setCurrentTab('routine')}
                    className="bg-white hover:bg-[#FAF7F2] text-[#251409] border border-[#D5C6B3] px-6 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs flex items-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#C9A87C]" />
                    <span>{t.hero.quizCta}</span>
                  </button>
                </div>

                {/* Credibility Avatars Pill (Inspired by Ariva) */}
                <div className="pt-4 flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="/images/lifestyle-glow.jpg" alt="Client avatar" />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="/images/lifestyle-routine.jpg" alt="Client avatar" />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="/images/lifestyle-wellness.jpg" alt="Client avatar" />
                  </div>
                  <div className="text-xs text-[#5A4D41]">
                    <span className="font-bold text-[#251409] block">
                      {isFrench ? 'Distribution directe au Trade Fair Complex' : 'Trade Fair Complex Flagship, Lagos'}
                    </span>
                    <span className="text-[11px] text-[#8C6D4F]">
                      {isFrench ? 'Vente au détail & Gros pour toute l’Afrique de l’Ouest' : 'Retail & Direct Wholesale for West Africa'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Model Photography with Floating Frosted Product Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFC8] bg-white aspect-[4/5]">
                  <img
                    src="/images/hero-model.jpg"
                    alt="Proxima Skincare African Radiant Beauty"
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Gradient Overlay for card contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Floating Frosted Glass Product Card (Inspired by Skin Cafe) */}
                  <div className="absolute bottom-5 inset-x-5 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-luxury flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] p-1 border border-[#E8DFC8]/60 flex items-center justify-center flex-shrink-0">
                        <img
                          src={featuredOilProduct.image}
                          alt={featuredOilProduct.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-[#A32B1E] font-bold block">
                          {isFrench ? 'Soin Vedette' : 'Featured Active'}
                        </span>
                        <h4 className="font-serif text-xs font-bold text-[#251409] truncate max-w-[150px]">
                          {isFrench ? featuredOilProduct.frenchName : featuredOilProduct.name}
                        </h4>
                        <p className="text-[11px] font-bold text-[#251409]">
                          ₦{featuredOilProduct.retailPriceNgn.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onQuickView(featuredOilProduct)}
                      className="bg-[#251409] hover:bg-[#A32B1E] text-white text-[10px] font-bold px-3.5 py-2 rounded-full transition-colors flex-shrink-0"
                    >
                      {isFrench ? 'VOIR →' : 'SHOP →'}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. 4-CARD BENTO GRID ROW (Directly inspired by Ariva & Nurturing Body) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Bento Card 1: Personalized Skincare */}
          <div
            onClick={() => setCurrentTab('routine')}
            className="group bg-white rounded-3xl p-6 border border-[#E8DFC8]/80 hover:border-[#C9A87C] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#A32B1E] block mb-1">
                  01 · {isFrench ? 'Diagnostic' : 'Routine'}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#251409]">
                  {isFrench ? 'Soin Sur-Mesure' : 'Personalized Skincare'}
                </h3>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#251409] group-hover:bg-[#251409] group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-[#6B5E51] mt-3 leading-relaxed">
              {isFrench
                ? 'Rituels ciblés pour peau mélanée sous forte chaleur et climat humide.'
                : 'Tailored routines engineered for melanin skin in heat & humidity.'}
            </p>
            <div className="mt-4 pt-3 border-t border-[#F2ECE4] flex items-center gap-2">
              <span className="text-xs font-bold text-[#251409] group-hover:text-[#A32B1E]">
                {isFrench ? 'Démarrer le quiz' : 'Take 60s quiz'} →
              </span>
            </div>
          </div>

          {/* Bento Card 2: Holistic Wellness */}
          <div
            onClick={() => setCurrentTab('story')}
            className="group relative rounded-3xl overflow-hidden border border-[#E8DFC8]/80 hover:border-[#C9A87C] hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[220px] flex flex-col justify-between p-6 text-white"
          >
            <img
              src="/images/lifestyle-glow.jpg"
              alt="Holistic Skincare Wellness"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
            <div className="relative z-10 flex items-start justify-between">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#EADCC8]">
                02 · {isFrench ? 'Philosophie' : 'Philosophy'}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#251409] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="font-serif text-lg font-bold text-white">
                {isFrench ? 'Compréhension Africaine' : 'African Understanding'}
              </h3>
              <p className="text-xs text-white/80 mt-1">
                {isFrench ? 'Le respect absolu de la barrière cutanée.' : 'French science meets African realities.'}
              </p>
            </div>
          </div>

          {/* Bento Card 3: Daily Rituals (Warm Accent Card) */}
          <div className="bg-[#FAF2E6] rounded-3xl p-6 border border-[#E0D1BA] flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#8C6D4F] block mb-1">
                03 · {isFrench ? 'Rituels' : 'Daily Habits'}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#251409]">
                {isFrench ? 'Rituels Quotidiens' : 'Daily Rituals'}
              </h3>
              <p className="text-xs text-[#6B5E51] mt-2 leading-relaxed">
                {isFrench
                  ? 'Intégrez les soins Peau de Lune dans vos gestes du matin et du soir.'
                  : 'Incorporate botanical skincare into mindful, restorative daily moments.'}
              </p>
            </div>
            <div className="mt-4">
              <button
                onClick={() => setCurrentTab('shop')}
                className="bg-[#251409] hover:bg-[#A32B1E] text-white text-[11px] font-bold px-4 py-2 rounded-full transition-colors"
              >
                {isFrench ? 'Explorer les Soins' : 'Explore Rituals'}
              </button>
            </div>
          </div>

          {/* Bento Card 4: Expert Guidance (WhatsApp / Wholesale) */}
          <div
            onClick={() => setCurrentTab('wholesale')}
            className="group relative rounded-3xl overflow-hidden border border-[#E8DFC8]/80 hover:border-[#C9A87C] hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[220px] flex flex-col justify-between p-6 text-white"
          >
            <img
              src="/images/lifestyle-routine.jpg"
              alt="Wholesale & Guidance"
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#251409]/90 via-[#251409]/40 to-transparent" />
            <div className="relative z-10 flex items-start justify-between">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C9A87C]">
                04 · B2B
              </span>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#251409] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="font-serif text-lg font-bold text-white">
                {isFrench ? 'Grossistes & Boutiques' : 'Wholesale Distribution'}
              </h3>
              <p className="text-xs text-[#EADCC8]/90 mt-1">
                {isFrench ? 'Tarifs au carton direct fabricant à Lagos.' : 'Direct factory case pricing in Lagos.'}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OUR COLLECTION (Inspired by Skin Cafe) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#A32B1E] block">
            {isFrench ? 'LA COLLECTION' : 'OUR COLLECTION'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#251409] mt-1">
            {t.shopSection.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5E51] mt-2">
            {t.shopSection.subtitle}
          </p>

          {/* Category Pill Filters */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {[
              { id: 'All', label: isFrench ? 'Tous' : 'All Products' },
              { id: 'Body', label: isFrench ? 'Corps' : 'Body Care' },
              { id: 'Face', label: isFrench ? 'Visage' : 'Face Care' },
              { id: 'Best Sellers', label: isFrench ? 'Meilleures Ventes' : 'Best Sellers' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all ${
                  activeCategory === tab.id
                    ? 'bg-[#251409] text-white shadow-xs'
                    : 'bg-white text-[#5A4D41] border border-[#E8DFC8] hover:border-[#251409]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid with embedded circular "VIEW MORE" card (from Skin Cafe reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCollection.map(product => (
            <ProductCard
              key={product.sku}
              product={product}
              onQuickView={onQuickView}
            />
          ))}

          {/* Circular "VIEW ALL" Card (Skin Cafe Style) */}
          <div
            onClick={() => setCurrentTab('shop')}
            className="bg-[#F4EDE2] rounded-3xl border border-[#E0D4C3] flex flex-col items-center justify-center p-8 text-center cursor-pointer hover:bg-[#EFE5D6] hover:shadow-md transition-all group aspect-square sm:aspect-auto"
          >
            <div className="w-24 h-24 rounded-full border border-[#251409]/30 flex flex-col items-center justify-center group-hover:scale-105 group-hover:border-[#251409] transition-all bg-white/60">
              <span className="text-[11px] font-bold text-[#251409] uppercase tracking-wider">
                {isFrench ? 'Voir Tout' : 'View All'}
              </span>
              <ArrowRight className="w-4 h-4 text-[#A32B1E] mt-1 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="font-serif text-sm font-bold text-[#251409] mt-4">
              {isFrench ? 'Toute la Gamme Peau de Lune' : 'Explore Complete Collection'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. "INGREDIENTS THAT MAKE A DIFFERENCE" (Directly inspired by Ariva) */}
      <section className="bg-white py-16 sm:py-24 border-y border-[#E8DFC8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#A32B1E] block">
              {isFrench ? 'TRANSPARENCE TOTALE' : 'RADICAL TRANSPARENCY'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#251409] mt-1">
              {isFrench ? 'Des Actifs Qui Font la Différence' : 'Ingredients That Make a Difference'}
            </h2>
            <p className="text-xs sm:text-sm text-[#6B5E51] mt-2">
              {isFrench
                ? 'Formulés à des concentrations sûres et actives. Zéro produit décapant ou toxique.'
                : 'Formulated at verified concentrations. Clinically respected actives engineered for melanin resilience.'}
            </p>
          </div>

          {/* Central Showcase with Surrounding Radiating Active Pills */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 2 Actives */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-[#FAF6F0] rounded-2xl p-5 border border-[#E8DFC8] hover:border-[#C9A87C] transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A32B1E]">
                  Vitamin B3
                </span>
                <h4 className="font-serif text-base font-bold text-[#251409] mt-0.5">
                  Niacinamide
                </h4>
                <p className="text-xs text-[#6B5E51] mt-1 leading-relaxed">
                  {isFrench
                    ? 'Renforce la barrière cutanée, apaise les rougeurs et régule le sébum en climat tropical.'
                    : 'Strengthens the skin barrier, calms redness, and controls excess sebum in tropical humidity.'}
                </p>
              </div>

              <div className="bg-[#FAF6F0] rounded-2xl p-5 border border-[#E8DFC8] hover:border-[#C9A87C] transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A32B1E]">
                  Botanical Glucoside
                </span>
                <h4 className="font-serif text-base font-bold text-[#251409] mt-0.5">
                  Alpha Arbutin
                </h4>
                <p className="text-xs text-[#6B5E51] mt-1 leading-relaxed">
                  {isFrench
                    ? 'Atténue les taches brunes et solaires en douceur sans détruire la mélanine naturelle.'
                    : 'Gently clarifies dark marks and sunspots without altering natural, healthy melanin undertones.'}
                </p>
              </div>
            </div>

            {/* Center Column: Hero Product Visual Container */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative w-64 h-80 rounded-3xl bg-gradient-to-b from-[#FAF6F0] to-[#EFE7DA] p-6 border border-[#E8DFC8] shadow-lg flex items-center justify-center">
                <img
                  src="/images/product-glow-oil.jpg"
                  alt="Proxima Active Glowing Oil"
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-4 bg-[#251409] text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  Huile Éclat Actifs Purs
                </span>
              </div>
              <button
                onClick={() => setCurrentTab('ingredients')}
                className="mt-6 text-xs font-bold text-[#251409] hover:text-[#A32B1E] flex items-center gap-1 transition-colors"
              >
                <span>{isFrench ? 'Consulter la bibliothèque complète' : 'View Complete Ingredient Library'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Right Column: 2 Actives */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-[#FAF6F0] rounded-2xl p-5 border border-[#E8DFC8] hover:border-[#C9A87C] transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A32B1E]">
                  Vitamin A
                </span>
                <h4 className="font-serif text-base font-bold text-[#251409] mt-0.5">
                  Retinol
                </h4>
                <p className="text-xs text-[#6B5E51] mt-1 leading-relaxed">
                  {isFrench
                    ? 'Accélère le renouvellement cellulaire pour lisser les textures irrégulières et maintenir la fermeté.'
                    : 'Accelerates cellular renewal to smooth rough texture and maintain youthful skin elasticity.'}
                </p>
              </div>

              <div className="bg-[#FAF6F0] rounded-2xl p-5 border border-[#E8DFC8] hover:border-[#C9A87C] transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A32B1E]">
                  Antioxidant
                </span>
                <h4 className="font-serif text-base font-bold text-[#251409] mt-0.5">
                  Vitamin C
                </h4>
                <p className="text-xs text-[#6B5E51] mt-1 leading-relaxed">
                  {isFrench
                    ? 'Protège la peau contre les radicaux libres, les UV et la pollution urbaine pour un éclat sain.'
                    : 'Shields skin against free radicals, intense UV, and urban pollution for a luminous morning radiance.'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SPLIT EDITORIAL: "CUSTOMER-APPROVED FORMULAS" (Inspired by Ariva & Skin Cafe) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-[32px] sm:rounded-[40px] border border-[#E8DFC8] p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Model Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E8DFC8] aspect-[4/5] bg-white">
              <img
                src="/images/lifestyle-wellness.jpg"
                alt="African Skincare Model Wellness"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Copy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#A32B1E] block">
              {isFrench ? 'POURQUOI CHOISIR PROXIMA' : 'WHY CHOOSE PROXIMA'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#251409] leading-tight">
              {isFrench ? 'La science formulatoire française. La compréhension africaine.' : 'French Formulation Science. African Understanding.'}
            </h2>
            <p className="text-sm text-[#5A4D41] leading-relaxed">
              "{t.positioning.body}"
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs text-[#251409] font-medium">
                  {isFrench ? 'Formulé selon les normes cosmétiques strictes des laboratoires français' : 'Engineered to rigorous French cosmetic laboratory safety standards'}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs text-[#251409] font-medium">
                  {isFrench ? 'Conçu pour la peau mélanée soumise à la chaleur, la sueur et l’humidité' : 'Tailored specifically for melanin skin exposed to heat, sun, and tropical humidity'}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs text-[#251409] font-medium">
                  {isFrench ? 'Sans hydroquinone, sans corticoïdes, sans promesses décapantes irréalistes' : 'Zero hydroquinone, zero steroids, zero destructive day-count bleaching claims'}
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => setCurrentTab('shop')}
                className="bg-[#251409] hover:bg-[#A32B1E] text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                {t.hero.shopCta}
              </button>
              <button
                onClick={() => setCurrentTab('story')}
                className="bg-white hover:bg-[#FAF7F2] text-[#251409] border border-[#D5C6B3] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                {t.positioning.cta}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. B2B WHOLESALE & DISTRIBUTION HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#251409] text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-14 border border-[#3A2318] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-[#C9A87C]/20 text-[#EADCC8] text-xs font-semibold px-3 py-1 rounded-full border border-[#C9A87C]/30">
                <Package className="w-3.5 h-3.5" />
                <span>{isFrench ? 'Espace Grossistes & Boutiques' : 'Wholesale Distribution'}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                {t.wholesale.headline}
              </h2>
              <p className="text-xs sm:text-sm text-[#EADCC8]/80 max-w-xl leading-relaxed">
                {isFrench
                  ? 'Rejoignez les revendeurs de référence. Prix directs au carton depuis notre hub au BBA Trade Fair Complex à Lagos avec marges confortables.'
                  : 'Join leading cosmetics merchants across West Africa. Direct manufacturer carton pricing from our Trade Fair Complex Lagos hub with high margins.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => setCurrentTab('wholesale')}
                className="bg-[#C9A87C] hover:bg-white text-[#251409] font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider transition-colors shadow-md text-center"
              >
                {isFrench ? 'Calculer mes marges au carton' : 'Calculate Case Profit Margins'}
              </button>
              <a
                href="https://wa.me/2349044943580?text=Hello%20Proxima%20Wholesale%20Team"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-full text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isFrench ? 'Contacter l’équipe commerciale' : 'Talk on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. "YOUR QUESTIONS ANSWERED" FAQ ACCORDION (Inspired by Ariva) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#A32B1E] block">
            FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#251409] mt-1">
            {isFrench ? 'Vos Questions, Nos Réponses' : 'Your Questions Answered'}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5E51] mt-2">
            {isFrench
              ? 'Toutes les précisions sur nos formulations, la sécurité cutanée et les commandes.'
              : 'Everything you need to know about our formulas, safety commitments, and Lagos distribution.'}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E8DFC8] overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-[#251409] hover:text-[#A32B1E] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#8C6D4F] flex-shrink-0 transition-transform duration-300 ${
                    openFaq === idx ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs text-[#5A4D41] leading-relaxed border-t border-[#FAF6F0] animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
