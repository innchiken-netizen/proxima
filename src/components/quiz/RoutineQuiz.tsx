import React, { useState } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, Check, ShoppingBag, MessageCircle, RotateCcw } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { liveProducts } from '../../data/products';
import { Product } from '../../types';

interface RoutineQuizProps {
  onProductClick?: (product: Product) => void;
}

export const RoutineQuiz: React.FC<RoutineQuizProps> = ({ onProductClick }) => {
  const { lang, t } = useLanguage();
  const { addToCart, setIsCartOpen } = useCart();

  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    concern: '',
    skinType: '',
    routineHabit: '',
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const isFrench = lang === 'fr';

  const step1Options = isFrench
    ? [
        { id: 'hydration', label: 'Hydratation intense & confort' },
        { id: 'uneven', label: 'Harmoniser le teint & atténuer les taches' },
        { id: 'dullness', label: 'Éclat lumineux & anti-terne' },
        { id: 'bodycare', label: 'Soin global du corps & fermeté' },
        { id: 'texture', label: 'Lisser le grain de peau & les pores' },
        { id: 'maintenance', label: 'Maintien quotidien d’une peau saine' },
      ]
    : [
        { id: 'hydration', label: 'Deep hydration & barrier comfort' },
        { id: 'uneven', label: 'Even-looking tone & clarifying marks' },
        { id: 'dullness', label: 'Radiant glow & anti-dullness' },
        { id: 'bodycare', label: 'Comprehensive luxury body care' },
        { id: 'texture', label: 'Refining texture & smoothing roughness' },
        { id: 'maintenance', label: 'Daily healthy skin maintenance' },
      ];

  const step2Options = isFrench
    ? [
        { id: 'dry', label: 'Sèche (tiraillements, voile terne)' },
        { id: 'oily', label: 'Grasse (brillances fréquentes en journée)' },
        { id: 'combination', label: 'Mixte (zone médiane brillante, joues normales)' },
        { id: 'normal', label: 'Normale (équilibrée et confortable)' },
        { id: 'notsure', label: 'Je ne suis pas sûre' },
      ]
    : [
        { id: 'dry', label: 'Dry (feels tight or shows ashiness)' },
        { id: 'oily', label: 'Oily (excess shine midday in humidity)' },
        { id: 'combination', label: 'Combination (oily T-zone, normal cheeks)' },
        { id: 'normal', label: 'Normal (balanced and comfortable)' },
        { id: 'notsure', label: 'Not completely sure' },
      ];

  const step3Options = isFrench
    ? [
        { id: 'minimalist', label: 'Minimaliste (1 produit rapide sous la douche)' },
        { id: 'basic', label: 'Essentiel (Nettoyage + Hydratation quotidienne)' },
        { id: 'advanced', label: 'Rituel complet (Nettoyage, Actif ciblé, Hydratation, Huile)' },
      ]
    : [
        { id: 'minimalist', label: 'Minimalist (1 quick step after shower)' },
        { id: 'basic', label: 'Basic essential (Cleanse + Daily moisturizer)' },
        { id: 'advanced', label: 'Complete ritual (Cleanse, Target active, Lotion, Glow oil)' },
      ];

  const handleSelectOption = (field: 'concern' | 'skinType' | 'routineHabit', value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setAnswers({ concern: '', skinType: '', routineHabit: '' });
    setCurrentStep(1);
    setIsCompleted(false);
  };

  // Determine Recommended Products based on selections
  const cleanseProduct = liveProducts.find(p => p.sku === 'PDL-GEL')!;
  const treatProduct =
    answers.concern === 'uneven' || answers.concern === 'dullness'
      ? liveProducts.find(p => p.sku === 'PDL-SNOWOIL') || liveProducts.find(p => p.sku === 'PDL-HUILE')!
      : liveProducts.find(p => p.sku === 'PDL-HUILE')!;
  const moisturizeProduct =
    answers.concern === 'texture' || answers.concern === 'maintenance'
      ? liveProducts.find(p => p.sku === 'PDL-CREAM') || liveProducts.find(p => p.sku === 'PDL-LAIT')!
      : liveProducts.find(p => p.sku === 'PDL-LAIT')!;

  const recommendedRoutine = [
    {
      stepNumber: '01',
      stepTitle: t.quiz.step01,
      desc: t.quiz.cleanseDesc,
      product: cleanseProduct,
    },
    {
      stepNumber: '02',
      stepTitle: t.quiz.step02,
      desc: t.quiz.treatDesc,
      product: treatProduct,
    },
    {
      stepNumber: '03',
      stepTitle: t.quiz.step03,
      desc: t.quiz.moisturizeDesc,
      product: moisturizeProduct,
    },
    {
      stepNumber: '04',
      stepTitle: t.quiz.step04,
      desc: t.quiz.protectDesc,
      product: null,
      tip: isFrench
        ? 'Appliquez un écran solaire visage/corps SPF 50 à large spectre pour préserver l’éclat de votre mélanine sans traces blanches.'
        : 'Layer daily broad-spectrum SPF 50 sunscreen to preserve your clarified glow and shield against tropical UV rays.',
    },
  ];

  const routineTotalNgn = recommendedRoutine
    .filter(r => r.product !== null)
    .reduce((sum, r) => sum + (r.product ? r.product.retailPriceNgn : 0), 0);

  const handleAddAllToCart = () => {
    recommendedRoutine.forEach(r => {
      if (r.product) {
        addToCart(r.product, 1);
      }
    });
    setIsCartOpen(true);
  };

  const getWhatsAppRoutineUrl = () => {
    const message = isFrench
      ? `Bonjour Proxima, j'ai complété le diagnostic 'Trouver Ma Routine' :\n- Objectif : ${answers.concern}\n- Type de peau : ${answers.skinType}\n- Rituel : ${answers.routineHabit}\n\nMon rituel conseillé :\n1. ${cleanseProduct.frenchName}\n2. ${treatProduct.frenchName}\n3. ${moisturizeProduct.frenchName}\n\nPouvez-vous me confirmer ces choix et le coût total de ₦${routineTotalNgn.toLocaleString()} ?`
      : `Hello Proxima skincare team, I just completed the 'Find Your Routine' quiz on your website:\n- Focus: ${answers.concern}\n- Skin type: ${answers.skinType}\n- Habit: ${answers.routineHabit}\n\nRecommended bundle:\n1. ${cleanseProduct.name}\n2. ${treatProduct.name}\n3. ${moisturizeProduct.name}\n\nTotal: ₦${routineTotalNgn.toLocaleString()}. Can you confirm this routine for me?`;

    return `https://wa.me/2349044943580?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-proxima-brown-light/30 shadow-luxury overflow-hidden">
      {/* Top Banner */}
      <div className="bg-proxima-brown-deep text-proxima-cream p-6 sm:p-8 text-center relative">
        <span className="inline-flex items-center gap-1.5 bg-proxima-brown-light/20 text-proxima-brown-light text-xs font-semibold px-3 py-1 rounded-full border border-proxima-brown-light/30 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          {t.quiz.badge}
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
          {isCompleted ? t.quiz.resultsTitle : t.quiz.title}
        </h2>
        <p className="text-xs sm:text-sm text-proxima-brown-pale/80 mt-2 max-w-xl mx-auto leading-relaxed">
          {isCompleted ? t.quiz.resultsSubtitle : t.quiz.subtitle}
        </p>

        {/* 3-Step Progress Indicator */}
        {!isCompleted && (
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6">
            {[1, 2, 3].map(step => (
              <div
                key={step}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentStep >= step ? 'w-12 bg-proxima-brown-light' : 'w-6 bg-proxima-brown-light/20'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Quiz Body */}
      <div className="p-6 sm:p-10">
        {!isCompleted ? (
          <div className="space-y-6">
            {/* Step 1: Primary Concern */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-xl font-bold text-proxima-brown-deep">
                    {t.quiz.step1Title}
                  </h3>
                  <p className="text-xs text-proxima-black/60 mt-1">
                    {t.quiz.step1Subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {step1Options.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption('concern', opt.id)}
                      className={`p-4 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                        answers.concern === opt.id
                          ? 'bg-proxima-brown text-white border-proxima-brown shadow-sm'
                          : 'bg-proxima-cream/30 text-proxima-brown-deep border-proxima-brown-light/20 hover:border-proxima-brown hover:bg-proxima-cream/60'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {answers.concern === opt.id && <Check className="w-4 h-4 text-proxima-brown-light" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Skin Type */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-xl font-bold text-proxima-brown-deep">
                    {t.quiz.step2Title}
                  </h3>
                  <p className="text-xs text-proxima-black/60 mt-1">
                    {t.quiz.step2Subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {step2Options.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption('skinType', opt.id)}
                      className={`p-4 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                        answers.skinType === opt.id
                          ? 'bg-proxima-brown text-white border-proxima-brown shadow-sm'
                          : 'bg-proxima-cream/30 text-proxima-brown-deep border-proxima-brown-light/20 hover:border-proxima-brown hover:bg-proxima-cream/60'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {answers.skinType === opt.id && <Check className="w-4 h-4 text-proxima-brown-light" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Current Routine Habit */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-xl font-bold text-proxima-brown-deep">
                    {t.quiz.step3Title}
                  </h3>
                  <p className="text-xs text-proxima-black/60 mt-1">
                    {t.quiz.step3Subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  {step3Options.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption('routineHabit', opt.id)}
                      className={`p-4 rounded-2xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${
                        answers.routineHabit === opt.id
                          ? 'bg-proxima-brown text-white border-proxima-brown shadow-sm'
                          : 'bg-proxima-cream/30 text-proxima-brown-deep border-proxima-brown-light/20 hover:border-proxima-brown hover:bg-proxima-cream/60'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {answers.routineHabit === opt.id && <Check className="w-4 h-4 text-proxima-brown-light" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Controls */}
            <div className="pt-6 border-t border-proxima-brown-light/20 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1.5 text-xs font-semibold text-proxima-brown hover:text-proxima-black px-3 py-2 rounded-lg"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t.quiz.back}</span>
                </button>
              ) : (
                <div />
              )}

              <button
                onClick={handleNext}
                disabled={
                  (currentStep === 1 && !answers.concern) ||
                  (currentStep === 2 && !answers.skinType) ||
                  (currentStep === 3 && !answers.routineHabit)
                }
                className="bg-proxima-brown hover:bg-proxima-red disabled:opacity-40 disabled:hover:bg-proxima-brown text-white text-xs font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-sm"
              >
                <span>{currentStep === 3 ? t.quiz.seeRoutine : t.quiz.next}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Results View: 4 Sequential Steps (01 Cleanse, 02 Treat, 03 Moisturize, 04 Protect) */
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendedRoutine.map(item => (
                <div
                  key={item.stepNumber}
                  className="bg-proxima-cream/40 rounded-2xl p-5 border border-proxima-brown-light/20 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-sm font-bold text-proxima-brown-deep">
                        {item.stepTitle}
                      </span>
                      <span className="text-[10px] font-bold text-proxima-brown-light bg-proxima-brown-deep px-2 py-0.5 rounded-full">
                        {item.stepNumber}
                      </span>
                    </div>
                    <p className="text-xs text-proxima-black/70 mb-4 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {item.product ? (
                    <div
                      onClick={() => onProductClick && onProductClick(item.product!)}
                      className="mt-2 bg-white rounded-xl p-3 border border-proxima-brown-light/20 flex items-center gap-3 cursor-pointer hover:shadow-sm transition-all"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-12 h-12 object-contain rounded-lg bg-proxima-cream/30 p-1"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-proxima-brown-deep truncate">
                          {isFrench ? item.product.frenchName : item.product.name}
                        </h4>
                        <p className="text-[10px] text-proxima-black/60">{item.product.size}</p>
                        <p className="text-xs font-bold text-proxima-red mt-0.5">
                          ₦{item.product.retailPriceNgn.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-2 bg-amber-50 rounded-xl p-3 border border-amber-200/60 text-[11px] text-amber-900 leading-relaxed">
                      <span className="font-semibold block mb-0.5">☀️ {isFrench ? 'Étape Essentielle' : 'Crucial Step'}</span>
                      {item.tip}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Complete Routine Bundle Pricing & Actions */}
            <div className="p-6 bg-proxima-brown-deep text-proxima-cream rounded-2xl border border-proxima-brown-light/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-proxima-brown-pale/80 block">
                  {isFrench ? 'Prix du rituel complet (3 soins clés) :' : 'Complete Routine Bundle Price (3 key essentials):'}
                </span>
                <span className="font-serif text-3xl font-bold text-proxima-brown-light">
                  ₦{routineTotalNgn.toLocaleString()}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleAddAllToCart}
                  className="w-full sm:w-auto bg-proxima-red hover:bg-proxima-red-hi text-white text-xs font-semibold px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t.quiz.shopAllRoutine}</span>
                </button>

                <a
                  href={getWhatsAppRoutineUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.quiz.sendRoutineWhatsApp}</span>
                </a>
              </div>
            </div>

            {/* Retake */}
            <div className="text-center pt-2">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-proxima-brown hover:underline font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.quiz.retake}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
