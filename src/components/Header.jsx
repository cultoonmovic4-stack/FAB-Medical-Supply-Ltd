import React, { useState, useEffect, useRef } from 'react';
import Container from './Container';

/**
 * Minimalist medical/medtech Header component for FAB Medical Supplies Ltd.
 * 
 * Design specifications:
 * - Clean white background (#FFFFFF) with subtle bottom border (#D9E0E7) and very subtle shadow
 * - Left section: Existing FAB logo asset, "FAB MEDICAL SUPPLIES LTD." in brand blue (#21409A),
 *   "Service That Exceeds" in muted dark gray (#667085), vertically aligned and compact
 * - Navigation: Home, About Us, Products, Services, Who We Serve, Contact (visually centered)
 * - Modern typography with semi-bold weight (#202A35)
 * - Active page: blue text (#21409A) with a thin #ED1C24 underline
 * - Right section: small circular search utility button with very light blue/gray background and blue search icon
 * - Clean responsive hamburger menu on tablet/mobile maintaining the premium visual hierarchy
 */
export default function Header({ activeView = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchInputRef = useRef(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'who-we-serve', label: 'Who We Serve' },
    { id: 'contact', label: 'Contact' },
  ];

  // Auto-focus search input when search popover is opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (viewId, categoryId = 'all') => {
    if (onNavigate) {
      onNavigate(viewId, categoryId);
    }
    setMobileMenuOpen(false);
    setSearchOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleNavClick('products');
  };

  return (
    <header className="bg-white border-b border-[#D9E0E7] shadow-[0_1px_3px_0_rgba(0,0,0,0.03)] sticky top-0 z-40">
      <Container>
        <div className="h-20 flex items-center justify-between lg:grid lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-12 xl:gap-16">
          {/* Left section: Compact, vertically aligned FAB branding */}
          <div className="flex items-center justify-start flex-shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center space-x-3 text-left focus:outline-none focus:ring-2 focus:ring-[#21409A] focus:ring-offset-2 rounded-lg p-1 transition-opacity hover:opacity-95"
              aria-label="FAB Medical Supplies Ltd. Home"
            >
              <img
                src="/favicon.svg"
                alt="FAB Logo"
                className="w-10 h-10 rounded-lg flex-shrink-0"
                width="40"
                height="40"
              />
              <div className="flex flex-col justify-center">
                <span className="text-[15px] sm:text-base font-bold tracking-tight text-[#21409A] leading-tight">
                  FAB MEDICAL SUPPLIES LTD.
                </span>
                <span className="text-xs text-[#667085] font-normal tracking-normal mt-0.5 leading-tight">
                  Service That Exceeds
                </span>
              </div>
            </button>
          </div>

          {/* Navigation: Centered visually within header with generous separation from logo */}
          <nav
            className="hidden lg:flex items-center justify-center space-x-7 xl:space-x-8"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative inline-flex items-center min-h-[44px] px-1.5 text-sm font-semibold transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#21409A] focus:ring-offset-2 rounded ${
                    isActive
                      ? 'text-[#21409A]'
                      : 'text-[#202A35] hover:text-[#21409A]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-1.5 right-1.5 h-[2px] bg-[#ED1C24] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right section: Subtle divider + Circular search utility button + Mobile toggle */}
          <div className="flex items-center justify-end space-x-2 sm:space-x-3">
            {/* Desktop subtle vertical divider */}
            <div
              className="hidden lg:block h-5 w-[1px] bg-[#D9E0E7] mr-1"
              aria-hidden="true"
            />

            {/* Small circular search utility button */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F4F6FA] hover:bg-[#E8EDF5] text-[#21409A] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#21409A] focus:ring-offset-2"
              aria-label="Search equipment and products"
              aria-expanded={searchOpen}
              title="Search equipment and products"
            >
              <svg
                className="w-4 h-4 text-[#21409A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
                />
              </svg>
            </button>

            {/* Mobile hamburger menu toggle button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-[#202A35] hover:text-[#21409A] hover:bg-[#F4F6FA] focus:outline-none focus:ring-2 focus:ring-[#21409A] focus:ring-offset-2 flex items-center justify-center transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Search utility drop-down popover */}
      {searchOpen && (
        <div className="border-t border-[#D9E0E7] bg-white py-3 px-4 shadow-sm animate-in fade-in duration-150">
          <Container>
            <form onSubmit={handleSearchSubmit} className="max-w-xl mx-auto flex items-center space-x-2">
              <div className="relative flex-1">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products or equipment (e.g. Ultrasound, ICU)..."
                  className="w-full pl-9 pr-4 py-2 text-sm bg-[#F4F6FA] border border-[#D9E0E7] rounded-lg text-[#202A35] placeholder-[#667085] focus:outline-none focus:border-[#21409A] focus:ring-1 focus:ring-[#21409A] transition-colors"
                />
                <svg
                  className="w-4 h-4 text-[#21409A] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
                  />
                </svg>
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="w-9 h-9 rounded-full text-[#667085] hover:text-[#202A35] hover:bg-[#F4F6FA] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#21409A]"
                aria-label="Close search"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </form>
          </Container>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-[#D9E0E7] bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg"
        >
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`min-h-[44px] text-left px-3.5 py-2.5 rounded-lg text-base font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#21409A] ${
                    isActive
                      ? 'bg-[#F4F6FA] text-[#21409A] border-l-4 border-[#ED1C24]'
                      : 'text-[#202A35] hover:bg-[#F4F6FA] hover:text-[#21409A]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
