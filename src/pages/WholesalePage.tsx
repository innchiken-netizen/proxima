import React, { useState } from 'react';
import { Package, TrendingUp, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { WholesaleCalculator } from '../components/wholesale/WholesaleCalculator';

export const WholesalePage: React.FC = () => {
  const { lang, t } = useLanguage();
  const isFrench = lang === 'fr';

  // Form states
  const [formData, setFormData] = useState({
    businessName: '',
    phone: '',
    location: '',
    volume: '2-5 cases (Sample trial)',
    message: '',
  });

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = isFrench
      ? `Bonjour l'équipe Proxima,\n\nJe postule pour devenir revendeur Proxima :\n- Commerce / Nom : ${formData.businessName}\n- Contact : ${formData.phone}\n- Ville / Pays : ${formData.location}\n- Volume estimé : ${formData.volume}\n- Note : ${formData.message}`
      : `Hello Proxima Trade Team,\n\nI am applying for a wholesale/distribution partnership:\n- Business Name: ${formData.businessName}\n- Contact: ${formData.phone}\n- Location: ${formData.location}\n- Estimated Volume: ${formData.volume}\n- Note: ${formData.message}`;

    window.open(`https://wa.me/2349044943580?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16">
      {/* Hero */}
      <div className="max-w-3xl space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/20 text-amber-900 border border-amber-400/40">
          <Package className="w-3.5 h-3.5" />
          {t.wholesale.badge}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-proxima-brown-deep leading-tight">
          {t.wholesale.headline}
        </h1>
        <p className="text-sm sm:text-base text-proxima-black/80 leading-relaxed">
          {t.wholesale.subtitle}
        </p>

        <div className="pt-2 flex flex-wrap gap-3">
          <a
            href="https://wa.me/2349044943580?text=Hello%20Proxima%20I%20am%20interested%20in%20becoming%20a%20distributor"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl text-xs flex items-center gap-2 transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.wholesale.applyCta}</span>
          </a>
        </div>
      </div>

      {/* Two Tracks: Wholesale vs Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Track 1: Wholesale */}
        <div className="bg-white rounded-3xl p-8 border border-proxima-brown-light/30 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-proxima-cream flex items-center justify-center text-proxima-brown">
            <Package className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-proxima-brown-deep">
            {t.wholesale.trackWholesaleTitle}
          </h3>
          <p className="text-xs sm:text-sm text-proxima-black/75 leading-relaxed">
            {t.wholesale.trackWholesaleFor}
          </p>
          <div className="p-4 bg-proxima-cream/50 rounded-2xl text-xs space-y-2 border border-proxima-brown-light/20">
            <p className="font-bold text-proxima-brown-deep">
              {t.wholesale.trackWholesalePricing}
            </p>
            <ul className="space-y-1.5 text-proxima-black/70">
              <li>• {isFrench ? 'Minimum de commande accessible (dès 1 carton)' : 'Low barrier entry (from just 1 carton)'}</li>
              <li>• {isFrench ? 'Bénéfice net garanti jusqu’à 30% par unité' : 'High margin markup up to 30% per unit'}</li>
              <li>• {isFrench ? 'Retrait direct au Trade Fair Complex à Lagos' : 'Direct pickup at Trade Fair Complex Lagos'}</li>
            </ul>
          </div>
        </div>

        {/* Track 2: Regional Distribution */}
        <div className="bg-proxima-brown-deep text-proxima-cream rounded-3xl p-8 border border-proxima-brown-light/30 shadow-luxury space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-proxima-brown text-proxima-brown-light flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            {t.wholesale.trackDistributorTitle}
          </h3>
          <p className="text-xs sm:text-sm text-proxima-brown-pale/80 leading-relaxed">
            {t.wholesale.trackDistributorFor}
          </p>
          <div className="p-4 bg-proxima-brown/60 rounded-2xl text-xs space-y-2 border border-proxima-brown-light/20">
            <p className="font-bold text-proxima-brown-light">
              {t.wholesale.trackDistributorPricing}
            </p>
            <ul className="space-y-1.5 text-proxima-brown-pale/70">
              <li>• {isFrench ? 'Territoire protégé ou exclusivité par zone' : 'Territory protection & market exclusivity'}</li>
              <li>• {isFrench ? 'Remises volumiques sur conteneurs & palettes' : 'Tiered container & pallet volume discounts'}</li>
              <li>• {isFrench ? 'Supports publicitaires TikTok & Instagram fournis' : 'Social-media ready video kits & marketing assets'}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Case Calculator Component */}
      <WholesaleCalculator />

      {/* Sequential 4-Step Process (01, 02, 03, 04 per spec) */}
      <div className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-widest text-proxima-brown-light">
            {isFrench ? 'Processus d’adhésion' : 'Onboarding Pipeline'}
          </span>
          <h2 className="font-serif text-3xl font-bold text-proxima-brown-deep mt-1">
            {t.wholesale.howItWorksTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              step: '01',
              title: isFrench ? 'Candidature' : 'Apply',
              desc: isFrench ? 'Présentez-nous votre boutique ou société sur WhatsApp' : 'Tell us about your business or salon via WhatsApp',
            },
            {
              step: '02',
              title: isFrench ? 'Validation' : 'Get Approved',
              desc: isFrench ? 'Notre équipe commerciale vérifie vos coordonnées et marché' : 'Our Lagos trade team confirms your market and territory',
            },
            {
              step: '03',
              title: isFrench ? 'Grille Tarifaire' : 'Receive Pricing',
              desc: isFrench ? 'Accédez aux barèmes au carton et conditions de fret' : 'Get instant case price sheets and logistical options',
            },
            {
              step: '04',
              title: isFrench ? 'Lancement' : 'Start Selling',
              desc: isFrench ? 'Recevez vos cartons scellés et vos visuels publicitaires' : 'Stock your shelves and launch with provided media kits',
            },
          ].map(s => (
            <div
              key={s.step}
              className="bg-white p-6 rounded-2xl border border-proxima-brown-light/20 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-bold text-proxima-brown-light block mb-2">
                  {s.step}
                </span>
                <h4 className="font-serif text-base font-bold text-proxima-brown-deep">
                  {s.title}
                </h4>
                <p className="text-xs text-proxima-black/70 mt-1 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direct WhatsApp Wholesale Quick Form */}
      <div className="max-w-2xl mx-auto bg-proxima-cream/80 p-6 sm:p-10 rounded-3xl border border-proxima-brown-light/30 shadow-luxury">
        <h3 className="font-serif text-2xl font-bold text-proxima-brown-deep text-center mb-1">
          {t.wholesale.formTitle}
        </h3>
        <p className="text-xs text-center text-proxima-black/60 mb-6">
          {isFrench ? 'Votre demande est directement acheminée sur WhatsApp sans intermédiaire.' : 'Routes directly to our Lagos wholesale desk on WhatsApp.'}
        </p>

        <form onSubmit={handleSubmitWhatsApp} className="space-y-4 text-xs">
          <div>
            <label className="font-semibold text-proxima-brown-deep block mb-1">
              {t.wholesale.nameLabel} *
            </label>
            <input
              type="text"
              required
              value={formData.businessName}
              onChange={e => setFormData({ ...formData, businessName: e.target.value })}
              placeholder="e.g. Sandra Beauty Store"
              className="w-full p-3 rounded-xl border border-proxima-brown-light/30 bg-white focus:outline-none focus:border-proxima-brown"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="font-semibold text-proxima-brown-deep block mb-1">
                {t.wholesale.phoneLabel} *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+234..."
                className="w-full p-3 rounded-xl border border-proxima-brown-light/30 bg-white focus:outline-none focus:border-proxima-brown"
              />
            </div>
            <div>
              <label className="font-semibold text-proxima-brown-deep block mb-1">
                {t.wholesale.cityLabel} *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={e => setFormData({ ...formData, location: e.target.value })}
                placeholder="Lagos, Abuja, Accra, Abidjan..."
                className="w-full p-3 rounded-xl border border-proxima-brown-light/30 bg-white focus:outline-none focus:border-proxima-brown"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold text-proxima-brown-deep block mb-1">
              {t.wholesale.volumeLabel}
            </label>
            <select
              value={formData.volume}
              onChange={e => setFormData({ ...formData, volume: e.target.value })}
              className="w-full p-3 rounded-xl border border-proxima-brown-light/30 bg-white focus:outline-none focus:border-proxima-brown"
            >
              <option value="1-5 cases">1 – 5 Cartons (Essai de lancement)</option>
              <option value="6-20 cases">6 – 20 Cartons (Magasin régulier)</option>
              <option value="20-50 cases">20 – 50 Cartons (Grossiste régional)</option>
              <option value="50+ cases">50+ Cartons (Distributeur exclusif de zone)</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-3.5 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors shadow-md mt-2"
          >
            <Send className="w-4 h-4" />
            <span>{t.wholesale.submitWholesale}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
