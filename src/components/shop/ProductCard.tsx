import React from 'react';
import { ShoppingBag, Eye, Heart, Sparkles } from 'lucide-react';
import { Product } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { lang, t } = useLanguage();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isFavorite = isInWishlist(product.sku);

  const isFrench = lang === 'fr';
  const displayName = isFrench ? product.frenchName : product.name;
  const displayBenefit = isFrench ? product.benefitStatement.fr : product.benefitStatement.en;

  const colorLineBadge = () => {
    switch (product.colorLine) {
      case 'pink':
        return {
          bg: 'bg-rose-100 text-rose-800 border-rose-200',
          label: isFrench ? 'Ligne Rose · Rétinol + Vit C' : 'Pink Line · Retinol + Vit C',
        };
      case 'brown':
        return {
          bg: 'bg-amber-100 text-amber-900 border-amber-200',
          label: isFrench ? 'Ligne Marron · Arbutine + Niacinamide' : 'Brown Line · Arbutin + Niacinamide',
        };
      case 'green':
        return {
          bg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
          label: isFrench ? 'Ligne Verte · Vitamine B3' : 'Green Line · Vitamin B3',
        };
      case 'specialty':
        return {
          bg: 'bg-purple-100 text-purple-900 border-purple-200',
          label: isFrench ? 'Formule Spécialité' : 'Specialty Line',
        };
      default:
        return null;
    }
  };

  const lineInfo = colorLineBadge();

  return (
    <div className="product-card group relative bg-[#F7F3EC] rounded-3xl overflow-hidden border border-[#E8DFC8]/70 hover:border-[#C9A87C] transition-all duration-300 flex flex-col justify-between hover:shadow-lg">
      
      {/* Media Box */}
      <div
        className="relative aspect-[3/4] bg-[#FAF7F2] flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        {/* Wishlist Heart Icon (Inspired by Skin Cafe & Ariva) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.sku);
          }}
          className={`wishlist-heart-btn absolute top-3.5 left-3.5 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center transition-all shadow-sm cursor-pointer hover:bg-white ${
            isFavorite
              ? 'text-[#A32B1E] ring-2 ring-[#A32B1E]/20 scale-105'
              : 'text-[#251409]/70 hover:text-[#A32B1E]'
          }`}
          aria-label={isFavorite ? (isFrench ? 'Retirer des favoris' : 'Remove from favorites') : (isFrench ? 'Ajouter aux favoris' : 'Add to favorites')}
          title={isFavorite ? (isFrench ? 'Retirer des favoris' : 'Remove from favorites') : (isFrench ? 'Ajouter aux favoris' : 'Add to favorites')}
        >
          <Heart className={`w-4 h-4 transition-transform ${isFavorite ? 'fill-[#A32B1E] text-[#A32B1E]' : ''}`} />
        </button>

        {/* Badges */}
        <div className="absolute top-3.5 right-3.5 z-10 flex flex-col gap-1 items-end">
          {lineInfo && (
            <span className={`text-[8px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border shadow-xs backdrop-blur-xs bg-white/95 ${lineInfo.bg}`}>
              {lineInfo.label}
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-[#251409]/95 text-[#EADCC8] text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-xs backdrop-blur-xs">
              {isFrench ? 'Best Seller' : 'Best Seller'}
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-[#A32B1E]/95 text-white text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-xs backdrop-blur-xs">
              {isFrench ? 'Nouveau' : 'New'}
            </span>
          )}
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={displayName}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Studio Image Flag Notice */}
        {product.imageFlag && (
          <div className="absolute bottom-2 inset-x-2 bg-[#251409]/90 backdrop-blur-xs text-[#EADCC8] text-[9px] font-medium px-2 py-1 rounded-lg text-center shadow-xs z-10">
            <span className="opacity-90">📷 {product.imageFlag}</span>
          </div>
        )}

        {/* Hover Quick View Pill */}
        <div className="absolute bottom-3 inset-x-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2 z-20">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 py-2 bg-white/95 text-[#251409] text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-md hover:bg-[#251409] hover:text-white transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#C9A87C]" />
            <span>{t.shopSection.quickView}</span>
          </button>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 flex flex-col flex-grow justify-between bg-white rounded-b-3xl">
        <div>
          {/* Key Actives Tags */}
          <div className="product-actives-tags flex flex-wrap gap-1 mb-2 items-center">
            {product.keyActives.map((active, idx) => (
              <span
                key={idx}
                className="product-active-tag text-[9px] font-semibold text-[#603B1F] bg-[#FAF2E6] px-2 py-0.5 rounded-full flex items-center gap-1 border border-[#E8DFC8]/60"
              >
                <Sparkles className="w-2.5 h-2.5 text-[#C9A87C]" />
                {active}
              </span>
            ))}
            <span className="text-[10px] text-[#8C6D4F] font-medium ml-auto">
              {product.size}
            </span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-base font-bold text-[#251409] hover:text-[#A32B1E] transition-colors cursor-pointer line-clamp-1"
          >
            {displayName}
          </h3>

          {/* Benefit */}
          <p className="text-xs text-[#6B5E51] mt-1 line-clamp-2 leading-relaxed">
            {displayBenefit}
          </p>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-4 mt-4 border-t border-[#F2ECE4] flex items-center justify-between gap-2">
          <div>
            <span className="product-price font-serif text-lg font-bold text-[#251409]">
              ₦{product.retailPriceNgn.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onQuickView(product)}
              className="details-btn px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-xs font-semibold text-[#251409] bg-[#EFE9DF] hover:bg-[#E2D8C7] transition-colors flex items-center gap-1 cursor-pointer"
              aria-label={`Details for ${displayName}`}
            >
              <Eye className="w-3.5 h-3.5 text-[#8C6D4F]" />
              <span className="hidden xs:inline">{isFrench ? 'Détails' : 'Details'}</span>
            </button>

            <button
              type="button"
              onClick={() => addToCart(product, 1)}
              className="add-to-bag-btn bg-[#251409] hover:bg-[#A32B1E] text-white px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs active:scale-95 cursor-pointer"
              aria-label={`Add ${displayName} to bag`}
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#EADCC8]" />
              <span>{t.shopSection.addToBag}</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
