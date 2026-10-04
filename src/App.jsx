import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import { Header, Footer, BackToTop } from './components';
import { Home, Products } from './pages';
import { useSEO } from './hooks/useSEO';

const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const WhoWeServe = lazy(() => import('./pages/WhoWeServe'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Dynamically update document title, canonical, Open Graph & Twitter metadata per route
  useSEO();

  // Legacy Hash Compatibility: Gracefully transition #about -> /about, #products -> /products, etc.
  useEffect(() => {
    const rawHash = window.location.hash.replace(/^#\/?/, '').split('?')[0].trim();
    const hashRouteMap = {
      home: '/',
      about: '/about',
      products: '/products',
      services: '/services',
      'who-we-serve': '/who-we-serve',
      contact: '/contact',
    };
    if (rawHash && hashRouteMap[rawHash]) {
      navigate(hashRouteMap[rawHash], { replace: true });
    }
  }, [navigate]);

  // Static Hosting / SPA redirect handler (fallback if 404.html redirected)
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('fab_spa_redirect');
    if (redirectPath) {
      sessionStorage.removeItem('fab_spa_redirect');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  // Synchronize navigation for component handlers that trigger programmatic view changes
  const handleNavigate = (viewId, categoryId = 'all') => {
    if (viewId === 'products' && categoryId && categoryId !== 'all') {
      navigate(`/products/${categoryId}`);
      return;
    }
    const pathMap = {
      home: '/',
      about: '/about',
      products: '/products',
      services: '/services',
      'who-we-serve': '/who-we-serve',
      contact: '/contact',
    };
    const targetPath = pathMap[viewId] || (viewId.startsWith('/') ? viewId : `/${viewId}`);
    navigate(targetPath);
  };

  // Scroll to top and refresh AOS on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 120);
    return () => clearTimeout(timer);
  }, [location.pathname]);

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
      <Header activePath={location.pathname} onNavigate={handleNavigate} />

      {/* Main Landmark Area */}
      <main id="main-content" tabIndex="-1" className="flex-grow focus:outline-none">
        <Suspense
          fallback={
            <div className="min-h-[40vh] flex items-center justify-center bg-white" aria-busy="true">
              <span className="sr-only">Loading content...</span>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home onNavigate={handleNavigate} />} />
            <Route path="/about" element={<About onNavigate={handleNavigate} />} />
            <Route path="/products" element={<Products onNavigate={handleNavigate} />} />
            <Route path="/products/:categoryId" element={<Products onNavigate={handleNavigate} />} />
            <Route path="/services" element={<Services onNavigate={handleNavigate} />} />
            <Route path="/who-we-serve" element={<WhoWeServe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {/* Shared Site Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Back To Top Button on Every Page */}
      <BackToTop />
    </div>
  );
}
