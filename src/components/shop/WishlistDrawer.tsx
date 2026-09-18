import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';
import { liveProducts } from '../../data/products';
import { Product } from '../../types';

interface WishlistDrawerProps {
  onQuickView?: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({ onQuickView }) => {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { lang, t } = useLanguage();

  const isFrench = lang === 'fr';

  if (!isWishlistOpen) return null;

  const favoriteProducts = liveProducts.filter(p => wishlist.includes(p.sku));

  const handleAddAllToCart = () => {
    favoriteProducts.forEach(p => {
      addToCart(p, 1);
    });
    setIsWishlistOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-[#FAF7F2] border-l border-[#E8DFC8] shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="p-5 border-b border-[#E8DFC8] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FAF2E6] flex items-center justify-center">
                <Heart className="w-4 h-4 text-[#A32B1E] fill-[#A32B1E]" />
              </div>
              <div>
                <h2 className="font-serif text-lg font-bold text-[#251409]">
                  {isFrench ? 'Mes Favoris' : 'My Favorites'}
                </h2>
                <span className="text-[11px] text-[#8C6D4F]">
                  {favoriteProducts.length} {isFrench ? 'article(s) sauvegardé(s)' : 'saved item(s)'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 text-[#251409]/60 hover:text-[#A32B1E] rounded-full hover:bg-[#FAF7F2] transition-colors"
              aria-label="Close Favorites"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {favoriteProducts.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white border border-[#E8DFC8] flex items-center justify-center mx-auto text-[#8C6D4F]">
                  <Heart className="w-8 h-8 opacity-40" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#251409]">
                  {isFrench ? 'Votre liste d’envies est vide' : 'Your wishlist is empty'}
                </h3>
                <p className="text-xs text-[#6B5E51] max-w-xs mx-auto leading-relaxed">
                  {isFrench
                    ? 'Cliquez sur l’icône cœur sur n’importe quel produit pour le retrouver ici à tout moment.'
                    : 'Click the heart icon on any product card to save it here for easy access.'}
                </p>
              </div>
            ) : (
              favoriteProducts.map(product => {
                const displayName = isFrench ? product.frenchName : product.name;
                return (
                  <div
                    key={product.sku}
                    className="p-3.5 bg-white rounded-2xl border border-[#E8DFC8]/80 hover:border-[#C9A87C] transition-all flex items-center gap-3.5 shadow-xs"
                  >
                    <div
                      className="w-16 h-16 rounded-xl bg-[#FAF7F2] p-1 border border-[#E8DFC8]/60 flex-shrink-0 cursor-pointer overflow-hidden flex items-center justify-center"
                      onClick={() => {
                        setIsWishlistOpen(false);
                        onQuickView?.(product);
                      }}
                    >
                      <img
                        src={product.image}
                        alt={displayName}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4
                        className="font-serif text-xs font-bold text-[#251409] truncate cursor-pointer hover:text-[#A32B1E]"
                        onClick={() => {
                          setIsWishlistOpen(false);
                          onQuickView?.(product);
                        }}
                      >
                        {displayName}
                      </h4>
                      <span className="text-[10px] text-[#8C6D4F] block">
                        {product.size}
                      </span>
                      <div className="font-serif text-xs font-bold text-[#251409] mt-1">
                        ₦{product.retailPriceNgn.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        onClick={() => {
                          addToCart(product, 1);
                        }}
                        className="p-2 rounded-xl bg-[#251409] hover:bg-[#A32B1E] text-white transition-colors"
                        title={t.shopSection.addToBag}
                        aria-label={`Add ${displayName} to bag`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#EADCC8]" />
                      </button>

                      <button
                        onClick={() => toggleWishlist(product.sku)}
                        className="p-2 rounded-xl text-[#251409]/40 hover:text-[#A32B1E] hover:bg-rose-50 transition-colors"
                        title="Remove"
                        aria-label="Remove from favorites"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Drawer Footer */}
          {favoriteProducts.length > 0 && (
            <div className="p-5 border-t border-[#E8DFC8] bg-white space-y-3">
              <button
                onClick={handleAddAllToCart}
                className="w-full py-3.5 bg-[#251409] hover:bg-[#A32B1E] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <ShoppingBag className="w-4 h-4 text-[#EADCC8]" />
                <span>{isFrench ? 'Tout Ajouter au Panier' : 'Add All to Shopping Bag'}</span>
              </button>

              <div className="flex items-center justify-between text-xs pt-1">
                <button
                  onClick={clearWishlist}
                  className="text-[11px] text-[#8C6D4F] hover:text-[#A32B1E] transition-colors"
                >
                  {isFrench ? 'Vider la liste' : 'Clear all favorites'}
                </button>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="text-[11px] font-semibold text-[#251409] flex items-center gap-1 hover:text-[#A32B1E]"
                >
                  <span>{isFrench ? 'Continuer mes achats' : 'Continue Shopping'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
