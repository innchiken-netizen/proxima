import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, MessageCircle, CheckCircle2, Sparkles, ShieldCheck, Plus, Minus, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { liveProducts } from '../../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectProduct: (p: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onSelectProduct }) => {
  const { lang, t } = useLanguage();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    product?.variants?.[0]
  );

  useEffect(() => {
    setActiveImgIndex(0);
    setQuantity(1);
    setSelectedVariant(product?.variants?.[0]);
  }, [product?.sku]);

  if (!product) return null;

  const isFrench = lang === 'fr';
  const displayName = isFrench ? product.frenchName : product.name;
  const displayBenefit = isFrench ? product.benefitStatement.fr : product.benefitStatement.en;
  const whyLoveList = isFrench ? product.whyYoullLoveIt.fr : product.whyYoullLoveIt.en;
  const whatsInsideList = isFrench ? product.whatsInside.fr : product.whatsInside.en;

  // Cross sell items (other live products)
  const crossSells = liveProducts.filter(p => p.sku !== product.sku).slice(0, 2);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant);
    onClose();
  };

  const getDirectWhatsAppUrl = () => {
    const message = isFrench
      ? `Bonjour Proxima, je souhaite commander directement : ${quantity}x ${displayName} (${product.size}) ${
          selectedVariant ? `[${selectedVariant}]` : ''
        } au prix de ₦${(product.retailPriceNgn * quantity).toLocaleString()}. Pouvez-vous me guider ?`
      : `Hello Proxima team, I would like to purchase directly: ${quantity}x ${displayName} (${product.size}) ${
          selectedVariant ? `[${selectedVariant}]` : ''
        } for ₦${(product.retailPriceNgn * quantity).toLocaleString()}. Please advise on payment and delivery.`;
    return `https://wa.me/2349044943580?text=${encodeURIComponent(message)}`;
  };

  const isFavorite = isInWishlist(product.sku);
  const gallery = product.images && product.images.length > 0 ? product.images : [product.image];

  const prevImage = () => {
    setActiveImgIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveImgIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-proxima-black/70 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-proxima-brown-light/30 text-proxima-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Close & WhatsApp Help Strip */}
        <div className="sticky top-0 z-20 bg-proxima-brown-deep text-proxima-cream px-4 py-2.5 flex items-center justify-between border-b border-proxima-brown-light/20">
          <a
            href="https://wa.me/2349044943580"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-emerald-300 hover:text-emerald-200"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span className="font-medium truncate">{t.productDetail.needHelp}</span>
          </a>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => toggleWishlist(product.sku)}
              className="p-1 rounded-full text-proxima-cream/80 hover:text-white hover:bg-proxima-brown transition-colors cursor-pointer"
              aria-label="Toggle favorite"
              title={isFavorite ? (isFrench ? 'Retirer des favoris' : 'Remove from favorites') : (isFrench ? 'Ajouter aux favoris' : 'Add to favorites')}
            >
              <Heart className={`w-5 h-5 transition-transform ${isFavorite ? 'fill-[#A32B1E] text-[#A32B1E]' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-proxima-cream/80 hover:text-white hover:bg-proxima-brown transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Product Visual Gallery */}
          <div className="flex flex-col">
            {/* Main Image Box */}
            <div className="relative aspect-[3/4] bg-[#FAF7F2] rounded-2xl flex items-center justify-center border border-proxima-brown-light/20 shadow-inner overflow-hidden">
              <img
                src={gallery[activeImgIndex]}
                alt={`${displayName} - View ${activeImgIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <span className="absolute top-4 right-4 bg-white/90 text-proxima-brown-deep text-xs font-semibold px-2.5 py-1 rounded-md border border-proxima-brown-light/30 shadow-xs">
                {product.size}
              </span>

              {/* Navigation arrows if multiple images */}
              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#251409] hover:bg-white transition-all shadow-xs cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#251409] hover:bg-white transition-all shadow-xs cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Selector Row */}
            {gallery.length > 1 && (
              <div className="mt-3 flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
                {gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImgIndex(idx)}
                    className={`w-14 h-14 rounded-xl p-1 bg-white border-2 transition-all flex-shrink-0 cursor-pointer overflow-hidden flex items-center justify-center ${
                      activeImgIndex === idx
                        ? 'border-[#A32B1E] shadow-sm scale-105'
                        : 'border-[#E8DFC8]/70 opacity-70 hover:opacity-100 hover:border-[#251409]'
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Why Proxima Trust Pillars (per spec template) */}
            <div className="mt-6 bg-proxima-cream/60 border border-proxima-brown-light/20 rounded-2xl p-4 space-y-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-proxima-brown block">
                {t.productDetail.whyProxima}
              </span>
              <div className="flex items-start gap-2 text-xs text-proxima-brown-deep">
                <ShieldCheck className="w-4 h-4 text-proxima-brown flex-shrink-0 mt-0.5" />
                <span>{t.productDetail.p1}</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-proxima-brown-deep">
                <ShieldCheck className="w-4 h-4 text-proxima-brown flex-shrink-0 mt-0.5" />
                <span>{t.productDetail.p2}</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-proxima-brown-deep">
                <ShieldCheck className="w-4 h-4 text-proxima-brown flex-shrink-0 mt-0.5" />
                <span>{t.productDetail.p3}</span>
              </div>
            </div>
          </div>

          {/* Right: Product Narrative & Actions */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-proxima-brown-light">
                  {product.category}
                </span>
                <span className="text-proxima-brown-light/40">·</span>
                <span className="text-[11px] font-medium text-proxima-black/60">
                  SKU: {product.sku}
                </span>
              </div>

              {/* Title & Specific Benefit Statement */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-proxima-brown-deep leading-tight">
                {displayName}
              </h2>
              <p className="mt-2 text-sm text-proxima-black/80 font-medium leading-relaxed">
                {displayBenefit}
              </p>

              {/* Retail Price Display in ₦ Naira */}
              <div className="mt-4 pb-4 border-b border-proxima-brown-light/20 flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-proxima-red">
                  ₦{product.retailPriceNgn.toLocaleString()}
                </span>
                <span className="text-xs text-proxima-black/60">
                  {t.shopSection.perUnit}
                </span>
              </div>

              {/* Variants Selector if available */}
              {product.variants && product.variants.length > 0 && (
                <div className="mt-4">
                  <label className="text-xs font-semibold text-proxima-brown-deep block mb-1.5">
                    {isFrench ? 'Sélectionnez votre formule :' : 'Select your formula / variant:'}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedVariant(v)}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-medium transition-all ${
                          selectedVariant === v
                            ? 'bg-proxima-brown text-white border-proxima-brown shadow-xs'
                            : 'bg-white text-proxima-black border-proxima-brown-light/30 hover:border-proxima-brown'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Why You'll Love It (3-4 concrete benefits) */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-proxima-brown mb-2.5">
                  {t.productDetail.whyYoullLoveIt}
                </h4>
                <ul className="space-y-2 text-xs text-proxima-black/80">
                  {whyLoveList.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-proxima-brown flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Inside (Confirmed Actives Only) */}
              {whatsInsideList.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-proxima-brown mb-2.5">
                    {t.productDetail.whatsInside}
                  </h4>
                  <div className="space-y-2">
                    {whatsInsideList.map((item, idx) => (
                      <div key={idx} className="bg-proxima-cream/50 rounded-xl p-3 border border-proxima-brown-light/20 text-xs">
                        <span className="font-semibold text-proxima-brown-deep flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-proxima-brown" />
                          {item.active}
                        </span>
                        <p className="text-proxima-black/75 mt-0.5 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* How to use */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-proxima-brown mb-1.5">
                  {t.productDetail.howToUse}
                </h4>
                <p className="text-xs text-proxima-black/75 leading-relaxed">
                  {t.productDetail.howToUseDesc}
                </p>
              </div>
            </div>

            {/* Purchase Row */}
            <div className="pt-6 border-t border-proxima-brown-light/20 space-y-3">
              <div className="flex items-center gap-4">
                {/* Quantity Control */}
                <div className="flex items-center border border-proxima-brown-light/30 rounded-xl bg-proxima-cream/40 px-2 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 text-proxima-brown hover:text-proxima-black"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-sm font-bold text-proxima-brown-deep">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 text-proxima-brown hover:text-proxima-black"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Bag CTA */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-proxima-brown hover:bg-proxima-red text-white py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t.productDetail.addToCart} — ₦{(product.retailPriceNgn * quantity).toLocaleString()}</span>
                </button>

                {/* Wishlist Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product.sku)}
                  className={`p-3 rounded-xl border transition-all flex items-center justify-center cursor-pointer ${
                    isFavorite
                      ? 'bg-[#A32B1E]/10 border-[#A32B1E] text-[#A32B1E]'
                      : 'bg-[#FAF7F2] border-[#E8DFC8] text-[#251409]/70 hover:border-[#A32B1E] hover:text-[#A32B1E]'
                  }`}
                  title={isFavorite ? (isFrench ? 'Retirer des favoris' : 'Remove from favorites') : (isFrench ? 'Ajouter aux favoris' : 'Add to favorites')}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 transition-transform ${isFavorite ? 'fill-[#A32B1E] text-[#A32B1E]' : ''}`} />
                </button>
              </div>

              {/* Direct Instant WhatsApp Buy Button */}
              <a
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.productDetail.buyViaWhatsApp}</span>
              </a>
            </div>

            {/* Complete Your Routine (Cross-Sells) */}
            {crossSells.length > 0 && (
              <div className="mt-6 pt-4 border-t border-proxima-cream">
                <span className="text-[11px] font-bold uppercase tracking-wider text-proxima-brown block mb-2">
                  {isFrench ? 'Complétez votre rituel' : 'Complete your routine'}
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {crossSells.map((cs) => (
                    <div
                      key={cs.sku}
                      onClick={() => onSelectProduct(cs)}
                      className="p-2.5 rounded-xl border border-proxima-brown-light/20 bg-proxima-cream/30 hover:bg-proxima-cream flex items-center gap-2.5 cursor-pointer transition-colors"
                    >
                      <img src={cs.image} alt={cs.name} className="w-10 h-10 object-contain rounded-md bg-white p-1" />
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-proxima-brown-deep truncate">
                          {isFrench ? cs.frenchName : cs.name}
                        </p>
                        <p className="text-[10px] font-semibold text-proxima-red">
                          ₦{cs.retailPriceNgn.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
