import React, { createContext, useContext, useState, useEffect } from 'react';

interface WishlistContextType {
  wishlist: string[];
  toggleWishlist: (sku: string) => void;
  isInWishlist: (sku: string) => boolean;
  wishlistCount: number;
  clearWishlist: () => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  toastMessage: string | null;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const STORAGE_KEY = 'proxima_wishlist_v1';

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  const toggleWishlist = (sku: string) => {
    setWishlist(prev => {
      const exists = prev.includes(sku);
      if (exists) {
        showToast('Removed from your favorites');
        return prev.filter(id => id !== sku);
      } else {
        showToast('Added to your favorites');
        return [...prev, sku];
      }
    });
  };

  const isInWishlist = (sku: string) => {
    return wishlist.includes(sku);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        wishlistCount: wishlist.length,
        clearWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
        toastMessage,
      }}
    >
      {children}
      {/* Global Toast for Wishlist actions */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#251409] text-[#EADCC8] text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xl border border-[#C9A87C]/50 flex items-center gap-2 animate-fadeIn pointer-events-none">
          <span className="text-[#A32B1E]">♥</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
