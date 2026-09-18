import React, { useState } from 'react';
import { Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ingredients } from '../data/ingredients';
import { liveProducts } from '../data/products';
import { Product } from '../types';

interface IngredientsPageProps {
  onQuickView: (product: Product) => void;
  setCurrentTab: (tab: string) => void;
}

export const IngredientsPage: React.FC<IngredientsPageProps> = ({ onQuickView, setCurrentTab }) => {
  const { lang, t } = useLanguage();
  const [selectedIngredient, setSelectedIngredient] = useState(ingredients[0].id);

  const isFrench = lang === 'fr';
  const current = ingredients.find(i => i.id === selectedIngredient) || ingredients[0];

  // Linked products
  const linkedProducts = liveProducts.filter(p => current.featuredInSkus.includes(p.sku));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-proxima-brown text-proxima-brown-light border border-proxima-brown-light/30">
          <Sparkles className="w-3.5 h-3.5" />
          {t.ingredientsPage.badge}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-proxima-brown-deep mt-2">
          {t.ingredientsPage.title}
        </h1>
        <p className="text-xs sm:text-sm text-proxima-black/75 mt-3 leading-relaxed">
          {t.ingredientsPage.subtitle}
        </p>
      </div>

      {/* Safety Commitment Banner */}
      <div className="p-6 sm:p-8 bg-proxima-brown-deep text-proxima-cream rounded-3xl border border-proxima-brown-light/30 shadow-luxury flex flex-col md:flex-row items-start md:items-center gap-5">
        <div className="w-12 h-12 rounded-2xl bg-proxima-red text-white flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-white">
            {t.ingredientsPage.noBleachNotice}
          </h3>
          <p className="text-xs sm:text-sm text-proxima-brown-pale/80 mt-1 leading-relaxed">
            {t.ingredientsPage.noBleachBody}
          </p>
        </div>
      </div>

      {/* Interactive Library Browser */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Active List Navigation */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-proxima-brown block mb-2">
            {isFrench ? 'Actifs Vérifiés' : 'Confirmed Actives'}
          </span>
          {ingredients.map(ing => (
            <button
              key={ing.id}
              onClick={() => setSelectedIngredient(ing.id)}
              className={`w-full p-4 rounded-2xl border text-left transition-all flex flex-col ${
                selectedIngredient === ing.id
                  ? 'bg-proxima-brown text-white border-proxima-brown shadow-sm'
                  : 'bg-white text-proxima-brown-deep border-proxima-brown-light/20 hover:border-proxima-brown hover:bg-proxima-cream/40'
              }`}
            >
              <span className="font-serif text-sm font-bold">
                {ing.name}
              </span>
              <span className={`text-[11px] mt-0.5 ${selectedIngredient === ing.id ? 'text-proxima-brown-light' : 'text-proxima-black/60'}`}>
                {isFrench ? ing.benefit.fr : ing.benefit.en}
              </span>
            </button>
          ))}
        </div>

        {/* Right: Detailed Active Dossier */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-proxima-brown-light/30 p-6 sm:p-10 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-proxima-brown block">
              {current.chemicalName}
            </span>
            <h2 className="font-serif text-3xl font-bold text-proxima-brown-deep mt-1">
              {current.name}
            </h2>
            <p className="text-sm font-medium text-proxima-black/80 mt-2 leading-relaxed bg-proxima-cream/50 p-4 rounded-xl border border-proxima-brown-light/20">
              {isFrench ? current.benefit.fr : current.benefit.en}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-proxima-brown">
                {t.ingredientsPage.whatItDoes}
              </h4>
              <p className="text-xs text-proxima-black/75 leading-relaxed">
                {isFrench ? current.whatItDoes.fr : current.whatItDoes.en}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-proxima-brown">
                {t.ingredientsPage.whoItsFor}
              </h4>
              <p className="text-xs text-proxima-black/75 leading-relaxed">
                {isFrench ? current.whoItsFor.fr : current.whoItsFor.en}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-proxima-brown">
                {t.ingredientsPage.howToUse}
              </h4>
              <p className="text-xs text-proxima-black/75 leading-relaxed">
                {isFrench ? current.howToUse.fr : current.howToUse.en}
              </p>
            </div>
          </div>

          {/* Linked Products containing this active */}
          {linkedProducts.length > 0 && (
            <div className="pt-6 border-t border-proxima-cream">
              <span className="text-xs font-bold uppercase tracking-wider text-proxima-brown-deep block mb-3">
                {t.ingredientsPage.presentIn} :
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {linkedProducts.map(prod => (
                  <div
                    key={prod.sku}
                    onClick={() => onQuickView(prod)}
                    className="p-3 bg-proxima-cream/30 hover:bg-proxima-cream rounded-2xl border border-proxima-brown-light/20 flex items-center gap-3 cursor-pointer transition-colors"
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-12 h-12 object-contain bg-white rounded-xl p-1"
                    />
                    <div>
                      <h5 className="text-xs font-bold text-proxima-brown-deep">
                        {isFrench ? prod.frenchName : prod.name}
                      </h5>
                      <p className="text-[11px] font-bold text-proxima-red">
                        ₦{prod.retailPriceNgn.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Routine Quiz Callout Button */}
          <div className="pt-6 border-t border-proxima-cream flex items-center justify-between">
            <span className="text-xs text-proxima-black/70">
              {isFrench ? 'Besoin d’associer ces actifs à vos besoins ?' : 'Ready to match these actives to your skin goals?'}
            </span>
            <button
              onClick={() => setCurrentTab('routine')}
              className="bg-proxima-brown hover:bg-proxima-red text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors"
            >
              <span>{t.quiz.badge}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
