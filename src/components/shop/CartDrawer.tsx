import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, MessageCircle, User, MapPin, Phone } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useLanguage } from '../../context/LanguageContext';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, subtotalNgn, getWhatsAppOrderUrl } = useCart();
  const { lang, t } = useLanguage();
  const isFrench = lang === 'fr';

  const [customerName, setCustomerName] = useState(() => {
    try {
      return localStorage.getItem('proxima_customer_name') || '';
    } catch {
      return '';
    }
  });

  const [customerAddress, setCustomerAddress] = useState(() => {
    try {
      return localStorage.getItem('proxima_customer_address') || '';
    } catch {
      return '';
    }
  });

  const [customerPhone, setCustomerPhone] = useState(() => {
    try {
      return localStorage.getItem('proxima_customer_phone') || '';
    } catch {
      return '';
    }
  });

  const [showValidation, setShowValidation] = useState(false);

  useEffect(() => {
    try {
      if (customerName) localStorage.setItem('proxima_customer_name', customerName);
      if (customerAddress) localStorage.setItem('proxima_customer_address', customerAddress);
      if (customerPhone) localStorage.setItem('proxima_customer_phone', customerPhone);
    } catch {
      // ignore
    }
  }, [customerName, customerAddress, customerPhone]);

  const handleCheckoutWhatsApp = () => {
    if (!customerName.trim() || !customerAddress.trim()) {
      setShowValidation(true);
    }
    const url = getWhatsAppOrderUrl({
      name: customerName.trim(),
      address: customerAddress.trim(),
      phone: customerPhone.trim(),
    });
    window.open(url, '_blank');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-proxima-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-white shadow-2xl border-l border-proxima-brown-light/20 flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-4 sm:p-6 bg-proxima-brown-deep text-proxima-cream border-b border-proxima-brown-light/20 flex items-center justify-between">
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
            <div className="p-4 sm:p-6 bg-proxima-cream/70 border-t border-proxima-brown-light/20 space-y-3.5">
              <div className="flex items-center justify-between text-sm gap-2">
                <span className="font-medium text-proxima-brown-deep">{t.cart.subtotal}</span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-proxima-red whitespace-nowrap">
                  ₦{subtotalNgn.toLocaleString()}
                </span>
              </div>

              {/* Formulaire Coordonnées Client */}
              <div className="bg-white rounded-2xl p-3 sm:p-4 border border-proxima-brown-light/30 shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-proxima-brown-deep">
                    <User className="w-3.5 h-3.5 text-proxima-brown" />
                    <span>{isFrench ? 'Coordonnées de livraison' : 'Delivery Details'}</span>
                  </div>
                  <span className="text-[10px] text-proxima-black/50 font-medium">
                    {isFrench ? 'Pour votre commande' : 'For your order'}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => {
                        setCustomerName(e.target.value);
                        if (showValidation) setShowValidation(false);
                      }}
                      placeholder={isFrench ? 'Nom et Prénom *' : 'Full Name *'}
                      className={`w-full text-xs p-2.5 pl-8 rounded-xl border bg-[#FAF7F2]/60 focus:bg-white focus:outline-none transition-colors ${
                        showValidation && !customerName.trim()
                          ? 'border-red-400 bg-red-50/50'
                          : 'border-proxima-brown-light/30 focus:border-proxima-brown'
                      }`}
                    />
                    <User className="w-3.5 h-3.5 text-proxima-brown/50 absolute left-2.5 top-3 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      value={customerAddress}
                      onChange={(e) => {
                        setCustomerAddress(e.target.value);
                        if (showValidation) setShowValidation(false);
                      }}
                      placeholder={isFrench ? 'Adresse & Ville (ex: Victoria Island, Lagos) *' : 'Address & City (e.g. Victoria Island, Lagos) *'}
                      className={`w-full text-xs p-2.5 pl-8 rounded-xl border bg-[#FAF7F2]/60 focus:bg-white focus:outline-none transition-colors ${
                        showValidation && !customerAddress.trim()
                          ? 'border-red-400 bg-red-50/50'
                          : 'border-proxima-brown-light/30 focus:border-proxima-brown'
                      }`}
                    />
                    <MapPin className="w-3.5 h-3.5 text-proxima-brown/50 absolute left-2.5 top-3 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder={isFrench ? 'Téléphone / WhatsApp (optionnel)' : 'Phone / WhatsApp (optional)'}
                      className="w-full text-xs p-2.5 pl-8 rounded-xl border border-proxima-brown-light/30 bg-[#FAF7F2]/60 focus:bg-white focus:outline-none focus:border-proxima-brown transition-colors"
                    />
                    <Phone className="w-3.5 h-3.5 text-proxima-brown/50 absolute left-2.5 top-3 pointer-events-none" />
                  </div>
                </div>

                {showValidation && (!customerName.trim() || !customerAddress.trim()) && (
                  <p className="text-[10px] text-red-600 font-medium">
                    {isFrench
                      ? '⚠️ Veuillez renseigner votre nom et adresse pour la livraison.'
                      : '⚠️ Please enter your name and delivery address.'}
                  </p>
                )}
              </div>

              <p className="text-[11px] text-proxima-black/60 leading-tight">
                {t.cart.note}
              </p>

              {/* Checkout via WhatsApp Button */}
              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{t.cart.checkoutWhatsApp}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </button>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-xs text-proxima-brown hover:underline font-medium cursor-pointer"
                >
                  {t.cart.continueShopping}
                </button>
                <button
                  onClick={clearCart}
                  className="text-[11px] text-proxima-black/40 hover:text-proxima-red cursor-pointer"
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
