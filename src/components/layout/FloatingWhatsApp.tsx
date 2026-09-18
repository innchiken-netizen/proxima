import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Package, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export const FloatingWhatsApp: React.FC<{ isModalOpen?: boolean }> = ({ isModalOpen = false }) => {
  const { lang } = useLanguage();
  const { isCartOpen } = useCart();
  const { isWishlistOpen } = useWishlist();
  const [isOpen, setIsOpen] = useState(false);

  // Hide button whenever any modal or drawer is active to avoid overlapping content
  if (isCartOpen || isWishlistOpen || isModalOpen) {
    return null;
  }

  const getChatUrl = (customText: string) => {
    return `https://wa.me/2349044943580?text=${encodeURIComponent(customText)}`;
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end">
      {/* Quick Option Menu */}
      {isOpen && (
        <div className="mb-3 bg-proxima-brown-deep border border-proxima-brown-light/30 rounded-2xl shadow-luxury-lg p-4 w-72 text-proxima-cream animate-slideUp backdrop-blur-md">
          <div className="flex items-center justify-between pb-3 border-b border-proxima-brown-light/20">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-serif text-sm font-semibold text-white">
                Proxima Concierge
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-proxima-cream/60 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-proxima-cream/80 my-2.5 leading-relaxed">
            {lang === 'fr'
              ? 'Bonjour ! Notre équipe à Lagos est à votre écoute pour vous guider :'
              : 'Hello! Our Lagos skincare team is ready to assist you:'}
          </p>

          <div className="space-y-2 text-xs">
            <a
              href={getChatUrl(
                lang === 'fr'
                  ? "Bonjour Proxima, j'aimerais recevoir un conseil personnalisé pour ma peau."
                  : 'Hello Proxima, I would like personal advice on choosing products for my skin.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-proxima-brown hover:bg-proxima-brown-light/20 hover:text-proxima-brown-light transition-all text-left"
            >
              <Sparkles className="w-4 h-4 text-proxima-brown-light flex-shrink-0" />
              <span>{lang === 'fr' ? 'Conseil & Choix de Routine' : 'Skincare Routine Advice'}</span>
            </a>

            <a
              href={getChatUrl(
                lang === 'fr'
                  ? 'Bonjour Proxima, je souhaite obtenir les tarifs au carton pour grossistes.'
                  : 'Hello Proxima, I am interested in wholesale case pricing and distributor terms.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-proxima-brown hover:bg-proxima-brown-light/20 hover:text-proxima-brown-light transition-all text-left"
            >
              <Package className="w-4 h-4 text-amber-300 flex-shrink-0" />
              <span>{lang === 'fr' ? 'Tarifs Grossiste / Cartons' : 'Wholesale / Case Pricing'}</span>
            </a>

            <a
              href={getChatUrl(
                lang === 'fr'
                  ? "Bonjour, j'aimerais suivre une commande ou poser une question."
                  : 'Hello, I have a general question regarding your products.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-proxima-brown hover:bg-proxima-brown-light/20 hover:text-proxima-brown-light transition-all text-left"
            >
              <HelpCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{lang === 'fr' ? 'Question Générale' : 'General Skincare Question'}</span>
            </a>
          </div>

          <div className="mt-3 pt-2 text-[10px] text-center text-proxima-brown-pale/60 border-t border-proxima-brown-light/10">
            Lagos Trade Fair Office · +234 904 494 3580
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-1.5 bg-proxima-brown-deep/90 text-proxima-cream border border-proxima-brown-light/30 px-3 py-1.5 rounded-full text-xs font-medium shadow-luxury hover:bg-proxima-brown transition-all"
          >
            <span>{lang === 'fr' ? 'Besoin d’aide ?' : 'Need advice?'}</span>
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-luxury-lg hover:scale-105 transition-all focus:outline-none relative group"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-proxima-red rounded-full border-2 border-white" />
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
