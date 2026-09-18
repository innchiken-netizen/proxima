import React from 'react';
import { MapPin, Mail, Phone, MessageCircle, Instagram, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab }) => {
  const { lang, setLang, t } = useLanguage();

  const handleLink = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-proxima-black text-proxima-cream/80 border-t border-proxima-brown-light/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="cursor-pointer" onClick={() => handleLink('home')}>
              <span className="font-serif text-3xl font-bold tracking-[0.25em] text-white">
                PROXIMA
              </span>
              <p className="text-[10px] tracking-[0.3em] uppercase text-proxima-brown-light mt-0.5">
                PARIS — LAGOS
              </p>
            </div>
            <p className="text-sm leading-relaxed text-proxima-cream/70 max-w-sm">
              {t.footer.brandDesc}
            </p>
            <div className="pt-2 flex items-center space-x-3 text-proxima-brown-light">
              <a
                href="https://instagram.com/proximasarl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-proxima-brown-deep flex items-center justify-center border border-proxima-brown-light/30 hover:border-proxima-brown-light hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/2349044943580"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-proxima-brown-deep flex items-center justify-center border border-proxima-brown-light/30 hover:border-proxima-brown-light hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <span className="text-xs text-proxima-cream/50">@proximasarl</span>
            </div>
          </div>

          {/* Col 2: Shop Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide">
              {t.nav.shop}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLink('shop')}
                  className="hover:text-proxima-brown-light transition-colors"
                >
                  {t.nav.shopAll}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('shop')}
                  className="hover:text-proxima-brown-light transition-colors"
                >
                  {t.nav.body}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('shop')}
                  className="hover:text-proxima-brown-light transition-colors"
                >
                  {t.nav.face}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('routine')}
                  className="hover:text-proxima-brown-light transition-colors text-proxima-brown-light font-medium"
                >
                  ✦ {t.nav.findRoutine}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Education */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide">
              {lang === 'fr' ? 'La Marque' : 'The Brand'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLink('story')}
                  className="hover:text-proxima-brown-light transition-colors"
                >
                  {t.nav.ourStory}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('ingredients')}
                  className="hover:text-proxima-brown-light transition-colors"
                >
                  {t.nav.ingredients}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('wholesale')}
                  className="hover:text-proxima-brown-light transition-colors font-medium text-amber-300"
                >
                  💼 {t.nav.wholesale}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-proxima-brown-light transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Business Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide">
              {lang === 'fr' ? 'Siège & Contact' : 'Lagos Office'}
            </h4>
            <div className="space-y-2.5 text-xs text-proxima-cream/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-proxima-brown-light flex-shrink-0 mt-0.5" />
                <span>Imo Plaza D02/19, BBA Trade Fair Complex, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-proxima-brown-light flex-shrink-0" />
                <a
                  href="mailto:proximasarlltd@gmail.com"
                  className="hover:text-proxima-brown-light transition-colors truncate"
                >
                  proximasarlltd@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-proxima-brown-light flex-shrink-0" />
                <a
                  href="https://wa.me/2349044943580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  +234 904 494 3580 (WhatsApp)
                </a>
              </div>
            </div>

            {/* Language Switcher in Footer */}
            <div className="pt-2 flex items-center gap-2 text-xs">
              <Globe className="w-3.5 h-3.5 text-proxima-brown-light" />
              <button
                onClick={() => setLang('en')}
                className={`transition-colors ${lang === 'en' ? 'text-white font-bold underline' : 'hover:text-white'}`}
              >
                English
              </button>
              <span className="text-proxima-brown-light/40">·</span>
              <button
                onClick={() => setLang('fr')}
                className={`transition-colors ${lang === 'fr' ? 'text-white font-bold underline' : 'hover:text-white'}`}
              >
                Français
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Regulatory Notice */}
        <div className="border-t border-proxima-brown-light/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-proxima-cream/50 gap-4">
          <p>© {new Date().getFullYear()} {t.footer.rights}</p>
          <p className="text-center md:text-right max-w-xl text-[11px] text-proxima-brown-pale/60">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
