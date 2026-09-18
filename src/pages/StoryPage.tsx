import React from 'react';
import { ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface StoryPageProps {
  setCurrentTab: (tab: string) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ setCurrentTab }) => {
  const { lang, t } = useLanguage();
  const isFrench = lang === 'fr';

  return (
    <div className="space-y-16 py-8 sm:py-16">
      {/* Editorial Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-proxima-brown text-proxima-brown-light border border-proxima-brown-light/30">
          {t.story.badge}
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-proxima-brown-deep leading-tight">
          {t.story.headline}
        </h1>
        <p className="text-base sm:text-xl text-proxima-black/80 font-normal max-w-2xl mx-auto leading-relaxed">
          {t.story.intro}
        </p>

        {/* The Central Brand Gap Callout */}
        <div className="mt-8 p-8 sm:p-10 bg-proxima-brown-deep text-proxima-cream rounded-3xl border border-proxima-brown-light/30 shadow-luxury-lg text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-proxima-brown-light/10 rounded-full blur-3xl" />
          <span className="text-[10px] uppercase tracking-widest text-proxima-brown-light font-bold block mb-3">
            {isFrench ? 'Le Constat Fondateur' : 'The Foundational Truth'}
          </span>
          <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-snug">
            "{t.story.gapStatement}"
          </p>
          <p className="mt-4 text-xs sm:text-sm text-proxima-brown-pale/80 max-w-2xl leading-relaxed">
            {isFrench
              ? 'Cette phrase résume notre existence. Nous ne sommes pas des cosmétiques européens importés sans adaptation, ni des mélanges artisanaux sans contrôle de laboratoire.'
              : 'That sentence is our entire brand story. We are not foreign skincare sold in Africa without context, nor are we unverified concoctions lacking pharmaceutical discipline.'}
          </p>
        </div>
      </section>

      {/* Split Editorial Story Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-proxima-red uppercase tracking-wider">
              {isFrench ? 'Vérité & Physiologie' : 'Dermal Reality'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-proxima-brown-deep">
              {t.story.section1Title}
            </h2>
            <p className="text-xs sm:text-sm text-proxima-black/80 leading-relaxed">
              {t.story.section1Body}
            </p>
            <div className="pt-2 space-y-2 text-xs text-proxima-brown-deep font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>{isFrench ? 'Zero hydroquinone, zero corticoïdes, zero décapage' : 'Zero hydroquinone, zero steroids, zero bleaching'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>{isFrench ? 'Textures non comédogènes adaptées à la sueur et l’humidité' : 'Non-comedogenic textures formulated for sweat and heat'}</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-proxima-brown-light/30 shadow-luxury bg-proxima-cream/50 p-2">
            <img
              src="/images/lifestyle-glow.jpg"
              alt="Skin texture & glow close-up"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* French Laboratory Science Pillar */}
      <section className="bg-white py-14 border-y border-proxima-brown-light/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 md:order-1 p-8 rounded-3xl bg-proxima-cream/40 border border-proxima-brown-light/20 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-proxima-brown-deep text-proxima-brown-light flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-proxima-brown-deep">
                {t.story.section2Title}
              </h3>
              <p className="text-xs sm:text-sm text-proxima-black/80 leading-relaxed">
                {t.story.section2Body}
              </p>
            </div>

            <div className="order-1 md:order-2 space-y-4">
              <span className="text-xs font-bold text-proxima-brown uppercase tracking-wider">
                {isFrench ? 'Excellence Formulatoire' : 'Laboratory Rigor'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-proxima-brown-deep">
                {isFrench ? 'La science au service de la mélanine' : 'Science Engineered for Melanin'}
              </h2>
              <p className="text-xs sm:text-sm text-proxima-black/75 leading-relaxed">
                {isFrench
                  ? 'Nos formulations stabilisent les vitamines actives (B3, C, A) et l’Arbutine avec des véhicules d’absorption doux, assurant une tolérance maximale même sur peaux sensibles.'
                  : 'Our formulas stabilize vital actives (Vitamin B3, C, A) and Alpha Arbutin using gentle delivery systems that ensure maximum bioavailability without irritation.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Fair Complex Lagos Flagship */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-proxima-cream border border-proxima-brown-light/30 shadow-luxury space-y-4">
          <div className="w-12 h-12 rounded-full bg-proxima-red text-white flex items-center justify-center mx-auto">
            <MapPin className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-proxima-brown-deep">
            {t.story.section3Title}
          </h2>
          <p className="text-xs sm:text-sm text-proxima-black/80 max-w-xl mx-auto leading-relaxed">
            {t.story.section3Body}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setCurrentTab('shop')}
              className="bg-proxima-brown hover:bg-proxima-red text-white font-semibold px-6 py-3 rounded-xl text-xs transition-colors shadow-sm"
            >
              {isFrench ? 'Explorer la gamme Peau de Lune' : 'Explore the Peau de Lune range'}
            </button>
            <button
              onClick={() => setCurrentTab('wholesale')}
              className="bg-white hover:bg-proxima-cream text-proxima-brown-deep border border-proxima-brown-light/40 font-semibold px-6 py-3 rounded-xl text-xs transition-colors"
            >
              💼 {isFrench ? 'Devenir revendeur' : 'Become a wholesale partner'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
