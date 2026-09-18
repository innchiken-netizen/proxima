import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';
import { useLanguage } from './LanguageContext';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedVariant?: string) => void;
  removeFromCart: (sku: string) => void;
  updateQuantity: (sku: string, delta: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotalNgn: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  getWhatsAppOrderUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang } = useLanguage();
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('proxima_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('proxima_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (product: Product, quantity: number = 1, selectedVariant?: string) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.product.sku === product.sku);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (selectedVariant) {
          updated[existingIndex].selectedVariant = selectedVariant;
        }
        return updated;
      }
      return [...prev, { product, quantity, selectedVariant: selectedVariant || product.variants?.[0] }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (sku: string) => {
    setCart(prev => prev.filter(item => item.product.sku !== sku));
  };

  const updateQuantity = (sku: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(item => {
          if (item.product.sku === sku) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotalNgn = cart.reduce((acc, item) => acc + item.product.retailPriceNgn * item.quantity, 0);

  const getWhatsAppOrderUrl = () => {
    const phoneNumber = '2349044943580';
    if (cart.length === 0) {
      return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        lang === 'fr' 
          ? "Bonjour Proxima, j'aimerais me renseigner sur vos soins Peau de Lune." 
          : "Hello Proxima team, I would like to inquire about your Peau de Lune skincare range."
      )}`;
    }

    const itemsSummary = cart
      .map(
        item =>
          `• ${item.quantity}x ${lang === 'fr' ? item.product.frenchName : item.product.name} (${item.product.size}) ${
            item.selectedVariant ? `[${item.selectedVariant}]` : ''
          } — ₦${(item.product.retailPriceNgn * item.quantity).toLocaleString()}`
      )
      .join('\n');

    const message =
      lang === 'fr'
        ? `Bonjour l'équipe Proxima,\n\nJe souhaite passer la commande suivante depuis votre boutique en ligne :\n\n${itemsSummary}\n\n*Total : ₦${subtotalNgn.toLocaleString()}*\n\nNom :\nAdresse de livraison :\nVille / État :\n\nMerci de me confirmer la disponibilité et les modalités de paiement.`
        : `Hello Proxima Team,\n\nI would like to place an order from your website:\n\n${itemsSummary}\n\n*Total: ₦${subtotalNgn.toLocaleString()}*\n\nName:\nDelivery Address:\nCity / State:\n\nPlease confirm product availability and payment details.`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotalNgn,
        isCartOpen,
        setIsCartOpen,
        getWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
