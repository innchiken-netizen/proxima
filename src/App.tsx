import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { CartDrawer } from './components/shop/CartDrawer';
import { WishlistDrawer } from './components/shop/WishlistDrawer';
import { ProductModal } from './components/shop/ProductModal';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { RoutinePage } from './pages/RoutinePage';
import { StoryPage } from './pages/StoryPage';
import { IngredientsPage } from './pages/IngredientsPage';
import { WholesalePage } from './pages/WholesalePage';
import { ContactPage } from './pages/ContactPage';
import { Product } from './types';

const MainApp: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const [currentTab, setCurrentTabState] = useState<string>('home');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);

  // Sync with browser path on initial load & popstate
  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname.toLowerCase();
      
      // Check language prefix if present e.g. /fr/... or /en/...
      if (path.startsWith('/fr')) {
        setLang('fr');
      } else if (path.startsWith('/en')) {
        setLang('en');
      }

      if (path.includes('shop')) {
        setCurrentTabState('shop');
      } else if (path.includes('routine')) {
        setCurrentTabState('routine');
      } else if (path.includes('story') || path.includes('about')) {
        setCurrentTabState('story');
      } else if (path.includes('ingredients')) {
        setCurrentTabState('ingredients');
      } else if (path.includes('wholesale') || path.includes('distribution')) {
        setCurrentTabState('wholesale');
      } else if (path.includes('contact')) {
        setCurrentTabState('contact');
      } else {
        setCurrentTabState('home');
      }
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    return () => window.removeEventListener('popstate', handleLocation);
  }, [setLang]);

  // Update URL on tab change without full reload
  const setCurrentTab = (tab: string) => {
    setCurrentTabState(tab);
    const prefix = lang === 'fr' ? '/fr' : '/en';
    const newPath = tab === 'home' ? `${prefix}/` : `${prefix}/${tab}`;
    try {
      window.history.pushState({}, '', newPath);
    } catch {
      // ignore
    }
  };

  const handleQuickView = (product: Product) => {
    setModalProduct(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-proxima-cream text-proxima-black selection:bg-proxima-brown-light selection:text-proxima-brown-deep">
      {/* Sticky Header Navigation */}
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Main Content Body */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <HomePage setCurrentTab={setCurrentTab} onQuickView={handleQuickView} />
        )}
        {currentTab === 'shop' && (
          <ShopPage setCurrentTab={setCurrentTab} onQuickView={handleQuickView} />
        )}
        {currentTab === 'routine' && (
          <RoutinePage onQuickView={handleQuickView} />
        )}
        {currentTab === 'story' && (
          <StoryPage setCurrentTab={setCurrentTab} />
        )}
        {currentTab === 'ingredients' && (
          <IngredientsPage onQuickView={handleQuickView} setCurrentTab={setCurrentTab} />
        )}
        {currentTab === 'wholesale' && (
          <WholesalePage />
        )}
        {currentTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Persistent Slide-Over Cart Drawer */}
      <CartDrawer />

      {/* Product Detail / Quick View Modal */}
      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
        onSelectProduct={(p) => setModalProduct(p)}
      />

      {/* Floating WhatsApp Concierge Button */}
      <FloatingWhatsApp />

      {/* Master Footer */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* Wishlist Drawer */}
      <WishlistDrawer onQuickView={handleQuickView} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <WishlistProvider>
          <MainApp />
        </WishlistProvider>
      </CartProvider>
    </LanguageProvider>
  );
};

export default App;
