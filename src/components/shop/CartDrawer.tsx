import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, MessageCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, subtotalNgn, getWhatsAppOrderUrl } = useCart();
  const { lang, t } = useLanguage();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-proxima-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl border-l border-proxima-brown-light/20 flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 sm:p-6 bg-proxima-brown-deep text-proxima-cream border-b border-proxima-brown-light/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-proxima-brown-light" />
              <h2 className="font-serif text-lg font-bold tracking-wide">
                {t.cart.title}
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-proxima-cream/80 hover:text-white hover:bg-proxima-brown transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-proxima-black/60">
                <div className="w-16 h-16 rounded-full bg-proxima-cream flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-proxima-brown-light" />
                </div>
                <h3 className="font-serif text-lg font-bold text-proxima-brown-deep mb-1">
                  {t.cart.empty}
                </h3>
                <p className="text-xs max-w-xs leading-relaxed mb-6">
                  {t.cart.emptyDesc}
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="bg-proxima-brown hover:bg-proxima-red text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  {t.cart.startShopping}
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const displayName = lang === 'fr' ? item.product.frenchName : item.product.name;
                const itemTotal = item.product.retailPriceNgn * item.quantity;

                return (
                  <div
                    key={item.product.sku}
                    className="p-3.5 bg-proxima-cream/40 rounded-2xl border border-proxima-brown-light/20 flex gap-3.5 items-center"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-xl bg-white p-1 flex-shrink-0 flex items-center justify-center border border-proxima-brown-light/10">
                      <img
                        src={item.product.image}
                        alt={displayName}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-xs font-bold text-proxima-brown-deep truncate">
                        {displayName}
                      </h4>
                      <p className="text-[11px] text-proxima-black/60">
                        {item.product.size} {item.selectedVariant && `· ${item.selectedVariant}`}
                      </p>
                      <p className="text-xs font-bold text-proxima-red mt-0.5">
                        ₦{itemTotal.toLocaleString()}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-proxima-brown-light/30 rounded-lg bg-white px-1 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.product.sku, -1)}
                            className="p-1 text-proxima-brown hover:text-proxima-black"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-proxima-brown-deep">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.sku, 1)}
                            className="p-1 text-proxima-brown hover:text-proxima-black"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.sku)}
                          className="text-proxima-black/40 hover:text-proxima-red p-1 transition-colors ml-auto"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout CTA */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 bg-proxima-cream/70 border-t border-proxima-brown-light/20 space-y-3.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-proxima-brown-deep">{t.cart.subtotal}</span>
                <span className="font-serif text-2xl font-bold text-proxima-red">
                  ₦{subtotalNgn.toLocaleString()}
                </span>
              </div>

              <p className="text-[11px] text-proxima-black/60 leading-tight">
                {t.cart.note}
              </p>

              {/* Checkout via WhatsApp Button */}
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.cart.checkoutWhatsApp}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-xs text-proxima-brown hover:underline font-medium"
                >
                  {t.cart.continueShopping}
                </button>
                <button
                  onClick={clearCart}
                  className="text-[11px] text-proxima-black/40 hover:text-proxima-red"
                >
                  {t.cart.clear}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
