import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Header, Footer, BackToTop } from './components';
import { Home, About, Services, WhoWeServe, Contact, Products } from './pages';

const VALID_VIEWS = ['home', 'about', 'services', 'who-we-serve', 'contact', 'products'];

const getInitialView = () => {
  // 1. Check URL hash (e.g. #about)
  const hash = window.location.hash.replace(/^#\/?/, '').split('?')[0].trim();
  if (VALID_VIEWS.includes(hash)) return hash;

  // 2. Check URL pathname (e.g. /about)
  const path = window.location.pathname.replace(/^\//, '').split('/')[0].trim();
  if (VALID_VIEWS.includes(path)) return path;

  // 3. Check sessionStorage fallback
  try {
    const saved = sessionStorage.getItem('fab_active_view');
    if (VALID_VIEWS.includes(saved)) return saved;
  } catch (e) {
    // Ignore storage access errors
  }

  return 'home';
};

export default function App() {
  const [activeView, setActiveView] = useState(getInitialView);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Synchronize browser history / URL hash and storage
  const handleNavigate = (viewId, categoryId = 'all') => {
    setActiveView(viewId);
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
    try {
      sessionStorage.setItem('fab_active_view', viewId);
    } catch (e) {
      // Ignore storage access errors
    }
    window.location.hash = viewId === 'home' ? '' : viewId;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Listen to browser Back / Forward navigation
  useEffect(() => {
    const handleUrlChange = () => {
      const view = getInitialView();
      setActiveView(view);
    };

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  // Initialize AOS with strong, responsive animation curves
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      once: false,
      offset: 80,
      delay: 50,
      mirror: true,
    });
  }, []);

  // Re-calculate and trigger AOS on view navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 120);
    return () => clearTimeout(timer);
  }, [activeView]);

  const renderCurrentPage = () => {
    switch (activeView) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'who-we-serve':
        return <WhoWeServe onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      case 'products':
        return (
          <Products
            initialCategory={selectedCategory}
            onNavigate={handleNavigate}
          />
        );
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-dark antialiased">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-brand-blue focus:text-white focus:font-semibold focus:text-sm focus:rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue shadow-lg"
      >
        Skip to main content
      </a>

      {/* Shared Site Header */}
      <Header activeView={activeView} onNavigate={handleNavigate} />

      {/* Main Landmark Area */}
      <main id="main-content" tabIndex="-1" className="flex-grow focus:outline-none">
        {renderCurrentPage()}
      </main>

      {/* Shared Site Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Back To Top Button on Every Page */}
      <BackToTop />
    </div>
  );
}
