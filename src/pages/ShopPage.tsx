import React, { useState } from 'react';
import { Sparkles, MessageCircle, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useWishlist } from '../context/WishlistContext';
import { liveProducts } from '../data/products';
import { ProductCard } from '../components/shop/ProductCard';
import { Product } from '../types';

interface ShopPageProps {
  setCurrentTab: (tab: string) => void;
  onQuickView: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ setCurrentTab, onQuickView }) => {
  const { lang, t } = useLanguage();
  const { wishlistCount, isInWishlist } = useWishlist();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const isFrench = lang === 'fr';

  const productLines = [
    {
      id: 'pink',
      name: isFrench ? 'Ligne Rose · Rétinol + Vitamine C' : 'Pink Line · Retinol + Vitamin C',
      badge: 'Retinol + Vitamin C',
      description: isFrench
        ? 'Formule lissante et antioxydante au Rétinol à libération prolongée et Vitamine C.'
        : 'Cellular renewal and antioxidant protection formulated for radiant, firm skin in tropical heat.',
      tagColor: 'bg-rose-100 text-rose-800 border-rose-200',
    },
    {
      id: 'brown',
      name: isFrench ? 'Ligne Marron · Alpha-Arbutine + Niacinamide' : 'Brown Line · Arbutin + Niacinamide',
      badge: 'Alpha-Arbutin + Niacinamide',
      description: isFrench
        ? 'Clarification cutanée ciblée et respectueuse de la barrière : unifie le teint sans agents agressifs.'
        : 'Clarifying precision without toxic bleaching agents. Fades dark marks and unifies tone safely.',
      tagColor: 'bg-amber-100 text-amber-900 border-amber-200',
    },
    {
      id: 'green',
      name: isFrench ? 'Ligne Verte · Vitamine B3' : 'Green Line · Vitamin B3',
      badge: 'Vitamin B3',
      description: isFrench
        ? 'Hydratation botanique quotidienne et apaisement intensif aux extraits de plantes et Vitamine B3.'
        : 'Daily herbal hydration and soothing barrier reinforcement engineered for warm weather comfort.',
      tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    },
    {
      id: 'specialty',
      name: isFrench ? 'Formules Spécialité' : 'Specialty Formulations',
      badge: 'Specialty Formulations',
      description: isFrench
        ? 'Pâte de savon purifiante traditionnelle africaine et huile concentrée Snow White aux actifs purs.'
        : 'Concentrated specialty treatments: Traditional African whipped paste soap and pure active Snow White oil.',
      tagColor: 'bg-purple-100 text-purple-900 border-purple-200',
    },
  ];

  const filterOptions = [
    { id: 'All', label: isFrench ? 'Tous les produits (17)' : 'All Products (17)' },
    ...(wishlistCount > 0
      ? [{ id: 'favorites', label: isFrench ? `♥ Mes Favoris (${wishlistCount})` : `♥ My Favorites (${wishlistCount})` }]
      : []),
    { id: 'pink', label: isFrench ? 'Ligne Rose (5)' : 'Pink Line (5)' },
    { id: 'brown', label: isFrench ? 'Ligne Marron (5)' : 'Brown Line (5)' },
    { id: 'green', label: isFrench ? 'Ligne Verte (5)' : 'Green Line (5)' },
    { id: 'specialty', label: isFrench ? 'Spécialités (2)' : 'Specialty (2)' },
    { id: 'Body', label: isFrench ? 'Soins Corps' : 'Body Care' },
    { id: 'Face', label: isFrench ? 'Soins Visage' : 'Face Care' },
    { id: 'Sets', label: isFrench ? 'Coffrets Complets' : 'Complete Routine Sets' },
  ];

  const filteredProducts = liveProducts.filter(p => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'favorites') return isInWishlist(p.sku);
    if (activeFilter === 'pink') return p.colorLine === 'pink';
    if (activeFilter === 'brown') return p.colorLine === 'brown';
    if (activeFilter === 'green') return p.colorLine === 'green';
    if (activeFilter === 'specialty') return p.colorLine === 'specialty';
    if (activeFilter === 'Face') return p.category === 'Face Cream';
    if (activeFilter === 'Body') return p.category === 'Body Lotion' || p.category === 'Body Oil' || p.category === 'Shower Gel' || p.category === 'Specialty';
    if (activeFilter === 'Sets') return p.category === 'Complete Routine Set';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 sm:pt-12 sm:pb-28 space-y-8">
      {/* Page Header */}
      <div className="max-w-2xl">
        <span className="text-[11px] font-bold uppercase tracking-widest text-proxima-brown-light">
          {isFrench ? 'Boutique Officielle' : 'Official Store'}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-proxima-brown-deep mt-1">
          {t.shopSection.title}
        </h1>
        <p className="text-xs sm:text-sm text-proxima-black/75 mt-2 leading-relaxed">
          {t.shopSection.subtitle}
        </p>
      </div>

      {/* Persistent Guidance Banner Above Grid (per spec) */}
      <div className="bg-gradient-to-r from-proxima-brown-deep via-proxima-brown to-proxima-brown-deep text-proxima-cream rounded-2xl p-4 sm:p-5 border border-proxima-brown-light/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-full bg-proxima-brown-light/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-proxima-brown-light" />
          </div>
          <div>
            <h3 className="font-serif text-sm sm:text-base font-bold text-white">
              {t.shopSection.guidanceBanner}
            </h3>
            <p className="text-xs text-proxima-brown-pale/80 mt-0.5">
              {isFrench
                ? 'Prenez 60 secondes pour identifier votre rituel personnalisé ou demandez l’avis d’une spécialiste à Lagos.'
                : 'Take 60 seconds to match your skin goals or message our Lagos skincare advisors on WhatsApp.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={() => setCurrentTab('quiz')}
            className="flex-1 sm:flex-initial bg-proxima-brown-light hover:bg-white text-proxima-brown-deep font-semibold text-xs px-4 py-2.5 rounded-xl transition-colors shadow-xs"
          >
            {t.shopSection.guidanceAction}
          </button>
          <a
            href="https://wa.me/2349044943580?text=Hello%20Proxima%20I%20need%20product%20recommendations"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-700 hover:bg-emerald-600 text-white p-2.5 rounded-xl transition-colors"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-4 h-4 text-proxima-brown flex-shrink-0 mr-1" />
        {filterOptions.map(opt => (
          <button
            key={opt.id}
            onClick={() => setActiveFilter(opt.id)}
            className={`text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
              activeFilter === opt.id
                ? 'bg-proxima-brown text-white shadow-xs'
                : 'bg-white text-proxima-brown-deep border border-proxima-brown-light/30 hover:border-proxima-brown'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Product Catalog Display */}
      {activeFilter === 'All' ? (
        /* Visual Grouping by Color Line (Pink, Brown, Green, Specialty) */
        <div className="space-y-12">
          {productLines.map(line => {
            const lineProducts = liveProducts.filter(p => p.colorLine === line.id);
            if (lineProducts.length === 0) return null;

            return (
              <div key={line.id} className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E8DFC8]">
                  <div className="flex items-center gap-3">
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#251409]">
                      {line.name}
                    </h2>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-xs ${line.tagColor}`}>
                      {line.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B5E51] max-w-md leading-relaxed">
                    {line.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {lineProducts.map(product => (
                    <ProductCard
                      key={product.sku}
                      product={product}
                      onQuickView={onQuickView}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Filtered Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.sku}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      )}
    </div>
  );
};
