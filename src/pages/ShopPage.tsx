import React, { useState } from 'react';
import { Sparkles, MessageCircle, Filter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { liveProducts } from '../data/products';
import { ProductCard } from '../components/shop/ProductCard';
import { Product } from '../types';

interface ShopPageProps {
  setCurrentTab: (tab: string) => void;
  onQuickView: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ setCurrentTab, onQuickView }) => {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'All' | 'Face' | 'Body' | 'Sets & Routines' | 'Best Sellers' | 'New Arrivals'>('All');

  const isFrench = lang === 'fr';

  const filterOptions = [
    { id: 'All', label: isFrench ? 'Tous les produits' : 'All Products' },
    { id: 'Body', label: isFrench ? 'Soins Corps' : 'Body Care' },
    { id: 'Face', label: isFrench ? 'Soins Visage' : 'Face Care' },
    { id: 'Best Sellers', label: isFrench ? 'Meilleures Ventes' : 'Best Sellers' },
    { id: 'New Arrivals', label: isFrench ? 'Nouveautés' : 'New Arrivals' },
    { id: 'Sets & Routines', label: isFrench ? 'Coffrets & Rituels' : 'Sets & Routines' },
  ];

  const filteredProducts = liveProducts.filter(p => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Face') return p.category === 'Face';
    if (activeFilter === 'Body') return p.category === 'Body';
    if (activeFilter === 'Best Sellers') return p.isBestSeller === true;
    if (activeFilter === 'New Arrivals') return p.isNewArrival === true;
    if (activeFilter === 'Sets & Routines') return p.category === 'Sets & Routines';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
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
            onClick={() => setCurrentTab('routine')}
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
            onClick={() => setActiveFilter(opt.id as any)}
            className={`text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              activeFilter === opt.id
                ? 'bg-proxima-brown text-white shadow-xs'
                : 'bg-white text-proxima-brown-deep border border-proxima-brown-light/30 hover:border-proxima-brown'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.sku}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      ) : (
        /* Empty Filter State (e.g. Sets & Routines bundle) */
        <div className="bg-white rounded-3xl p-12 text-center border border-proxima-brown-light/20 max-w-lg mx-auto space-y-4">
          <Sparkles className="w-10 h-10 text-proxima-brown-light mx-auto" />
          <h3 className="font-serif text-lg font-bold text-proxima-brown-deep">
            {isFrench ? 'Coffrets personnalisés' : 'Custom Sets & Routines'}
          </h3>
          <p className="text-xs text-proxima-black/70 leading-relaxed">
            {isFrench
              ? 'Créez votre propre coffret en composant vos soins dans le diagnostic de peau.'
              : 'Assemble your tailored 4-step routine bundle directly via our routine quiz.'}
          </p>
          <button
            onClick={() => setCurrentTab('routine')}
            className="bg-proxima-brown hover:bg-proxima-red text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            {t.quiz.badge} →
          </button>
        </div>
      )}
    </div>
  );
};
