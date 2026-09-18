import React from 'react';
import { ShoppingBag, Eye, Heart, Sparkles } from 'lucide-react';
import { Product } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { lang, t } = useLanguage();
  const { addToCart } = useCart();

  const isFrench = lang === 'fr';
  const displayName = isFrench ? product.frenchName : product.name;
  const displayBenefit = isFrench ? product.benefitStatement.fr : product.benefitStatement.en;

  return (
    <div className="group relative bg-[#F7F3EC] rounded-3xl overflow-hidden border border-[#E8DFC8]/70 hover:border-[#C9A87C] transition-all duration-300 flex flex-col justify-between hover:shadow-lg">
      
      {/* Media Box */}
      <div
        className="relative aspect-square bg-[#EFE9DF]/80 flex items-center justify-center p-6 overflow-hidden cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        {/* Wishlist Heart Icon (Inspired by Skin Cafe & Ariva) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#251409]/60 hover:text-[#A32B1E] hover:bg-white transition-all shadow-xs"
          aria-label="Save to wishlist"
        >
          <Heart className="w-4 h-4" />
        </button>

        {/* Badges */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-1 items-end">
          {product.isBestSeller && (
            <span className="bg-[#251409] text-[#EADCC8] text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-xs">
              {isFrench ? 'Best Seller' : 'Best Seller'}
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-[#A32B1E] text-white text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full shadow-xs">
              {isFrench ? 'Nouveau' : 'New'}
            </span>
          )}
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={displayName}
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Hover Quick View Pill */}
        <div className="absolute bottom-3 inset-x-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
          <button
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
          {/* Key Actives Pill */}
          {product.keyActives.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {product.keyActives.slice(0, 1).map((active, idx) => (
                <span
                  key={idx}
                  className="text-[9px] font-semibold text-[#603B1F] bg-[#FAF2E6] px-2 py-0.5 rounded-full flex items-center gap-1"
                >
                  <Sparkles className="w-2.5 h-2.5 text-[#C9A87C]" />
                  {active}
                </span>
              ))}
              <span className="text-[10px] text-[#8C6D4F] font-medium ml-auto">
                {product.size}
              </span>
            </div>
          )}

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

        {/* Price & Add to Bag */}
        <div className="pt-4 mt-4 border-t border-[#F2ECE4] flex items-center justify-between">
          <div>
            <span className="font-serif text-lg font-bold text-[#251409]">
              ₦{product.retailPriceNgn.toLocaleString()}
            </span>
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="bg-[#251409] hover:bg-[#A32B1E] text-white p-2 sm:px-3.5 sm:py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs active:scale-95"
            aria-label={`Add ${displayName} to bag`}
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#EADCC8]" />
            <span className="hidden sm:inline">{t.shopSection.addToBag}</span>
          </button>
        </div>
      </div>

    </div>
  );
};
