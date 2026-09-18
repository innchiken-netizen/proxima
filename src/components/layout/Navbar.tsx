import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, MessageCircle, Globe, ChevronDown, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab }) => {
  const { lang, setLang, t } = useLanguage();
  const { totalCount, setIsCartOpen } = useCart();
  const { wishlistCount, setIsWishlistOpen } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [discoverDropdown, setDiscoverDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: string) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    setDiscoverDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#231710] text-[#EADCC8] py-2 px-4 text-xs tracking-wider border-b border-[#3A2318]/50 flex items-center justify-between sm:justify-center relative z-50">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium text-[11px] sm:text-xs">
            {lang === 'fr'
              ? 'Science formulatoire française x Réalité de la peau africaine · Siège au Trade Fair Complex, Lagos'
              : 'French formulation science x African understanding · Headquartered at Trade Fair Complex, Lagos'}
          </span>
        </div>

        {/* Mobile Language Toggle */}
        <div className="flex items-center gap-1 sm:hidden ml-2">
          <button
            onClick={() => setLang('en')}
            className={`px-1.5 py-0.5 text-[10px] uppercase font-bold rounded ${
              lang === 'en' ? 'bg-[#C9A87C] text-[#251409]' : 'text-[#EADCC8]/60'
            }`}
          >
            EN
          </button>
          <span className="text-[#C9A87C]/40 text-[10px]">|</span>
          <button
            onClick={() => setLang('fr')}
            className={`px-1.5 py-0.5 text-[10px] uppercase font-bold rounded ${
              lang === 'fr' ? 'bg-[#C9A87C] text-[#251409]' : 'text-[#EADCC8]/60'
            }`}
          >
            FR
          </button>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-[#E8DFC8]/60 text-[#251409]'
            : 'bg-[#FAF7F2] py-4 border-b border-[#E8DFC8]/40 text-[#251409]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2 text-[#251409] hover:text-[#A32B1E] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Left Nav (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold uppercase tracking-wider">
              <button
                onClick={() => handleNavClick('shop')}
                className={`py-1 transition-colors relative ${
                  currentTab === 'shop'
                    ? 'text-[#A32B1E]'
                    : 'text-[#251409]/80 hover:text-[#A32B1E]'
                }`}
              >
                {t.nav.shop}
                {currentTab === 'shop' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#A32B1E]" />
                )}
              </button>

              {/* Discover Dropdown */}
              <div className="relative" onMouseLeave={() => setDiscoverDropdown(false)}>
                <button
                  onMouseEnter={() => setDiscoverDropdown(true)}
                  onClick={() => setDiscoverDropdown(!discoverDropdown)}
                  className={`flex items-center gap-1 py-1 transition-colors ${
                    currentTab === 'routine' || currentTab === 'ingredients'
                      ? 'text-[#A32B1E]'
                      : 'text-[#251409]/80 hover:text-[#A32B1E]'
                  }`}
                >
                  <span>{t.nav.discover}</span>
                  <ChevronDown className="w-3 h-3 opacity-70" />
                </button>

                {discoverDropdown && (
                  <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-fadeIn">
                    <div className="bg-white border border-[#E8DFC8] rounded-2xl shadow-xl p-2.5 backdrop-blur-md">
                      <button
                        onClick={() => handleNavClick('routine')}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium text-[#251409] hover:bg-[#FAF7F2] hover:text-[#A32B1E] transition-all flex flex-col"
                      >
                        <span className="font-bold">{t.nav.findRoutine}</span>
                        <span className="text-[10px] text-[#6B5E51] mt-0.5 normal-case">
                          {lang === 'fr' ? 'Diagnostic en 3 étapes pour peau en climat chaud' : 'Personalized 3-step routine builder'}
                        </span>
                      </button>
                      <button
                        onClick={() => handleNavClick('ingredients')}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium text-[#251409] hover:bg-[#FAF7F2] hover:text-[#A32B1E] transition-all flex flex-col mt-1"
                      >
                        <span className="font-bold">{t.nav.ingredients}</span>
                        <span className="text-[10px] text-[#6B5E51] mt-0.5 normal-case">
                          {lang === 'fr' ? 'Niacinamide, Arbutine & Actifs nobles' : 'Confirmed active library & barrier facts'}
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('story')}
                className={`py-1 transition-colors relative ${
                  currentTab === 'story'
                    ? 'text-[#A32B1E]'
                    : 'text-[#251409]/80 hover:text-[#A32B1E]'
                }`}
              >
                {t.nav.about}
                {currentTab === 'story' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#A32B1E]" />
                )}
              </button>

              <button
                onClick={() => handleNavClick('wholesale')}
                className={`py-1 px-3 rounded-full text-[11px] font-bold border transition-all ${
                  currentTab === 'wholesale'
                    ? 'bg-[#251409] text-white border-[#251409]'
                    : 'bg-[#FAF2E6] text-[#603B1F] border-[#C9A87C]/50 hover:bg-[#251409] hover:text-white'
                }`}
              >
                💼 {t.nav.wholesale}
              </button>
            </nav>

            {/* Centered Brand Logo (Inspired by Skin Cafe & Ariva) */}
            <div
              className="flex-shrink-0 cursor-pointer text-center"
              onClick={() => handleNavClick('home')}
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.22em] text-[#251409] hover:text-[#A32B1E] transition-colors block">
                PROXIMA
              </span>
              <span className="text-[8px] uppercase tracking-[0.35em] text-[#8C6D4F] font-semibold block -mt-1">
                PARIS — LAGOS
              </span>
            </div>

            {/* Right Utilities */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Desktop Language Switcher */}
              <div className="hidden sm:flex items-center text-xs font-semibold bg-white px-2.5 py-1 rounded-full border border-[#E8DFC8]">
                <Globe className="w-3.5 h-3.5 text-[#8C6D4F] mr-1.5" />
                <button
                  onClick={() => setLang('en')}
                  className={`px-1.5 py-0.5 rounded transition-colors ${
                    lang === 'en'
                      ? 'bg-[#251409] text-white font-bold'
                      : 'text-[#6B5E51] hover:text-[#251409]'
                  }`}
                >
                  EN
                </button>
                <span className="text-[#E8DFC8] mx-0.5">|</span>
                <button
                  onClick={() => setLang('fr')}
                  className={`px-1.5 py-0.5 rounded transition-colors ${
                    lang === 'fr'
                      ? 'bg-[#251409] text-white font-bold'
                      : 'text-[#6B5E51] hover:text-[#251409]'
                  }`}
                >
                  FR
                </button>
              </div>

              {/* Wishlist Icon */}
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="relative p-2 text-[#251409]/80 hover:text-[#A32B1E] transition-colors"
                aria-label="Wishlist"
                title={lang === 'fr' ? 'Mes Favoris' : 'My Favorites'}
              >
                <Heart className={`w-5 h-5 transition-colors ${wishlistCount > 0 ? 'text-[#A32B1E] fill-[#A32B1E]' : ''}`} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#A32B1E] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Direct WhatsApp Pill */}
              <a
                href="https://wa.me/2349044943580"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-3 py-1.5 rounded-full transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              {/* Shopping Bag Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-[#251409] hover:text-[#A32B1E] transition-colors"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5 sm:w-5 sm:h-5" />
                {totalCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#A32B1E] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {totalCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E8DFC8] px-5 pt-4 pb-6 space-y-3 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleNavClick('shop')}
                className="text-left py-2 px-3 rounded-xl text-sm font-semibold text-[#251409] hover:bg-[#FAF7F2]"
              >
                {t.nav.shop}
              </button>
              <button
                onClick={() => handleNavClick('routine')}
                className="text-left py-2 px-3 rounded-xl text-sm font-semibold text-[#251409] hover:bg-[#FAF7F2] flex items-center justify-between"
              >
                <span>{t.nav.findRoutine}</span>
                <span className="text-[10px] bg-[#FAF2E6] text-[#A32B1E] font-bold px-2 py-0.5 rounded-full">
                  Quiz
                </span>
              </button>
              <button
                onClick={() => handleNavClick('ingredients')}
                className="text-left py-2 px-3 rounded-xl text-sm font-semibold text-[#251409] hover:bg-[#FAF7F2]"
              >
                {t.nav.ingredients}
              </button>
              <button
                onClick={() => handleNavClick('story')}
                className="text-left py-2 px-3 rounded-xl text-sm font-semibold text-[#251409] hover:bg-[#FAF7F2]"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => handleNavClick('wholesale')}
                className="text-left py-2.5 px-3 rounded-xl text-sm font-bold bg-[#FAF2E6] text-[#603B1F] border border-[#C9A87C]/40"
              >
                💼 {t.nav.wholesale}
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-left py-2 px-3 rounded-xl text-sm font-semibold text-[#251409] hover:bg-[#FAF7F2]"
              >
                {t.nav.contact}
              </button>
            </div>

            <div className="pt-3 border-t border-[#E8DFC8] flex items-center justify-between">
              <span className="text-xs text-[#6B5E51]">
                {lang === 'fr' ? 'Langue / Language' : 'Language'}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    lang === 'en' ? 'bg-[#251409] text-white' : 'bg-[#FAF7F2] text-[#251409]'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLang('fr')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    lang === 'fr' ? 'bg-[#251409] text-white' : 'bg-[#FAF7F2] text-[#251409]'
                  }`}
                >
                  Français
                </button>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/2349044943580"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-xl text-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Discuter sur WhatsApp (+2349044943580)' : 'Chat on WhatsApp (+2349044943580)'}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
